'use client';
/* Ported from the ArahAssist design prototype (DC logic) to a React client component. */
import React from 'react';
import * as CORE from '@/lib/core';
import AppView from './AppView';

// Per-device persistence so balance, stamps, saved trips and history survive a reload.
const STORE = 'arahassist:v1';
const KEEP = ['lang', 'balance', 'stamps', 'alertsOn', 'saved', 'favStops', 'txs', 'trips'];
function loadSaved() { try { const x = JSON.parse(localStorage.getItem(STORE) || 'null'); return x && typeof x === 'object' ? Object.fromEntries(KEEP.filter(k => k in x).map(k => [k, x[k]])) : {}; } catch (e) { return {}; } }
function persist(S) { try { localStorage.setItem(STORE, JSON.stringify(Object.fromEntries(KEEP.map(k => [k, S[k]])))); } catch (e) {} }

// Tool-use loop against /api/chat. Tools run here because they need the live bus simulation.
async function askClaude(system, hist, tools) {
  const defs = tools.map(({ run, ...d }) => d), messages = [...hist];
  let text = '';
  for (let i = 0; i < 4; i++) {
    const r = await fetch('/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ system, messages, tools: defs }) });
    if (!r.ok) throw new Error('AI ' + r.status);
    const out = await r.json();
    const t = (out.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n').trim(); if (t) text = t;
    const uses = (out.content || []).filter(b => b.type === 'tool_use');
    if (out.stop_reason !== 'tool_use' || !uses.length) return text;
    messages.push({ role: 'assistant', content: out.content });
    const results = await Promise.all(uses.map(async u => { const tl = tools.find(x => x.name === u.name); let c; try { c = tl ? await tl.run(u.input || {}) : 'Tool tidak dikenal.'; } catch (e) { c = 'Error: ' + e.message; } return { type: 'tool_result', tool_use_id: u.id, content: String(c) }; }));
    messages.push({ role: 'user', content: results });
  }
  return text;
}

const PAGE = { home: 1, pick: 1, wisata: 1, place: 1, package: 1, history: 1, account: 1 };
const ROOT = { home: 'home', route: 'routes', wisata: 'wisata', history: 'history', account: 'account' };
const TAB_OF = { home: 'home', pick: 'home', results: 'home', detail: 'home', journey: 'home', routes: 'route', routeDetail: 'route', track: 'route', wisata: 'wisata', place: 'wisata', package: 'wisata', history: 'history', account: 'account' };
const EMPTY = { type: 'FeatureCollection', features: [] };
const RASTER = { version: 8, sources: { c: { type: 'raster', tileSize: 256, tiles: ['https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', 'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'] } }, layers: [{ id: 'c', type: 'raster', source: 'c' }] };
const lineF = (c, p) => ({ type: 'Feature', properties: p || {}, geometry: { type: 'LineString', coordinates: c } });
const BUS_SVG = s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="3" rx="3"/><path d="M4 11h16"/><path d="M8 15h.01"/><path d="M16 15h.01"/><path d="M6 19v2"/><path d="M18 19v2"/></svg>`;
const PIN_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
const CROWD = [{ bg: '#E3F4E8', fg: '#146C36' }, { bg: '#FFF0D4', fg: '#7A4A00' }, { bg: '#FDE7E4', fg: '#A61B12' }];
const NONE = '0px solid transparent';
const FEATURED = ['sampoerna', 'kyakya', 'monkasel', 'jsuroboyo', 'chenghoo', 'majapahit'];
const POPULAR = ['tp', 'sampoerna', 'tugu', 'kbs', 'kampusits', 'stgubeng', 'jsuroboyo', 'kyakya'];
const bgUrl = u => u ? `url("${u}")` : 'none';
const WALKTXT = {
  uinsa: { id: { c: 'Halte ada di seberang kampus, sisi barat Jl. Ahmad Yani, arah ke Kota.', s: ['Keluar lewat gerbang depan kampus ke Jl. Ahmad Yani.', 'Naik jembatan penyeberangan (JPO) di depan kampus untuk ke seberang jalan.', 'Turun dari JPO. Halte UINSA ada di sebelah kanan, di depan deretan toko.'] }, en: { c: 'The stop is across the road from campus, on the west side of Jl. Ahmad Yani, heading into the city.', s: ['Leave through the main campus gate onto Jl. Ahmad Yani.', 'Take the pedestrian bridge in front of campus to cross the road.', 'Come down the bridge. UINSA stop is on your right, in front of the shops.'] } },
  tp: { id: { c: 'Tunjungan Plaza ada di sisi kiri jalan. Tidak perlu menyeberang.', s: ['Turun dari bus, lalu jalan ke utara di trotoar Jl. Basuki Rahmat.', 'Ikuti garis titik-titik di peta, sekitar 500 m lurus.', 'Pintu masuk Tunjungan Plaza ada di kiri jalan.'] }, en: { c: 'Tunjungan Plaza is on the left side of the road. No need to cross.', s: ['Get off and walk north along the Jl. Basuki Rahmat sidewalk.', 'Follow the dotted line on the map, about 500 m straight.', 'The Tunjungan Plaza entrance is on your left.'] } },
};
const T2 = (id, en) => ({ id, en });
const R0 = { node: false, busIcon: false, size: '12px', radius: '50%', fill: '#fff', border: NONE, lt: NONE, lb: NONE, seg: NONE, isBus: false, rid: '', ink: '', title: '', fs: '16px', fw: '600', color: '#1B2333', sub: '', right: '', tag: '', tagBg: '#F5F0E8', hasBell: false, bellBg: '#F5F0E8', bellFill: 'none', toggleBell: null, onClick: null, cursor: 'default', minH: '48px', badges: [], hasChev: false };
const row = o => { const r = { ...R0, ...o }; r.notBus = !r.isBus; r.hasSub = !!r.sub; r.hasRight = !!r.right; r.hasTag = !!r.tag; r.hasBadges = r.badges.length > 0; return r; };
const linkRows = rows => { for (let i = 0; i < rows.length; i++) { rows[i].lt = i ? rows[i - 1].seg : NONE; rows[i].lb = i < rows.length - 1 ? rows[i].seg : NONE; } return rows; };

export default class ArahAssistApp extends React.Component {
  state = {
    w: 1200, h: 800, sheetH: 300, ready: false, lang: 'id', tab: 'home', screen: 'home', tick: 0,
    from: 'me', to: null, depart: 0, pax: { umum: 1, pelajar: 0 }, pickField: 'to', q: '',
    opts: [], optIdx: 0, trip: null, leg: 0, phase: null, done: false, jBus: null, newStamp: null, tripSaved: false,
    trackId: null, remindStop: null, routeId: 'R1', routeDir: 1, placeId: null, pkgId: null, wisCat: 'all', histTab: 'trips',
    balance: 47500, ticket: null, stamps: ['tugu', 'bungkul', 'kbs'], alertsOn: true, saved: [{ from: 'me', to: 'p:tp' }], favStops: ['uinsa', 'siola'],
    txs: [
      { amt: -5000, title: T2('Tiket R1', 'Ticket R1'), date: T2('Kam, 22 Okt', 'Thu, 22 Oct') },
      { amt: 50000, title: T2('Isi saldo · QRIS', 'Top up · QRIS'), date: T2('Rab, 21 Okt', 'Wed, 21 Oct') },
      { amt: -5000, title: T2('Tiket R2', 'Ticket R2'), date: T2('Sel, 20 Okt', 'Tue, 20 Oct') },
      { amt: -5000, title: T2('Tiket R1 + R5', 'Ticket R1 + R5'), date: T2('Min, 18 Okt', 'Sun, 18 Oct') },
    ],
    trips: [
      { from: 'p:kampusuinsa', to: 'p:tp', routes: ['R1'], fare: 5000, dur: 38, date: T2('Kam, 22 Okt', 'Thu, 22 Oct') },
      { from: 's:siola', to: 'p:kampusits', routes: ['R2'], fare: 5000, dur: 31, date: T2('Sel, 20 Okt', 'Tue, 20 Oct') },
      { from: 'p:kampusuinsa', to: 'p:sampoerna', routes: ['R1', 'R5'], fare: 5000, dur: 52, date: T2('Min, 18 Okt', 'Sun, 18 Oct') },
    ],
    modal: null, payMethod: 'onsite', review: null, geo: [], geoLoading: false, reportCat: null, reportText: '', topAmt: 50000, topMethod: 'QRIS',
    chatOpen: false, chatInput: '', typing: false, msgs: [], planText: '', toast: null,
  };
  rootRef = React.createRef(); mapRef = React.createRef(); sheetRef = React.createRef(); searchRef = React.createRef(); msgRef = React.createRef(); qrRef = React.createRef();
  simT = 0; _geoN = 0; _geoK = 0; geoMap = {}; savedCache = {}; holdAt = null; stack = []; brg = 0; followOff = false; povUntil = 0; zoomAt = 0; alerted = false; remAlerted = false; nearCache = {}; pkgCache = {}; hl = {}; labelMks = [];

  componentDidMount() {
    this.ro = new ResizeObserver(() => this.measure());
    if (this.rootRef.current) this.ro.observe(this.rootRef.current);
    this.observeSheet(); this.measure(); this.boot();
  }
  componentWillUnmount() { this._unmounted = true; cancelAnimationFrame(this.raf); clearInterval(this.iv); this.ro && this.ro.disconnect(); this.map && this.map.remove(); clearTimeout(this._toastT); }
  measure() { const r = this.rootRef.current, s = this.sheetRef.current; if (!r) return; const w = r.clientWidth, h = r.clientHeight, sh = s ? s.offsetHeight : 300; const S = this.state; if (w !== S.w || h !== S.h || Math.abs(sh - S.sheetH) > 1) this.setState({ w, h, sheetH: sh }); }
  observeSheet() { const s = this.sheetRef.current; if (s && s !== this._obs) { if (this._obs) this.ro.unobserve(this._obs); this._obs = s; this.ro.observe(s); } }
  snap() { const S = this.state; return [S.screen, S.leg, S.phase, S.done, S.optIdx, S.routeId, S.routeDir, S.placeId, S.pkgId, S.w >= 1100, S.jBus, S.trackId, S.opts && S.opts.length, S.trip && S.trip.key, S.ready].join('|'); }
  componentDidUpdate(pp) {
    this.observeSheet();
    const S = this.state, k = this.snap();
    if (S.ready && KEEP.some(x => S[x] !== this._kept?.[x])) { this._kept = S; persist(S); }
    if (k !== this._snap) { this._snap = k; requestAnimationFrame(() => requestAnimationFrame(() => this.applyMap())); }
    const ck = S.msgs.length + ':' + S.typing + ':' + S.chatOpen; if (ck !== this._ck) { this._ck = ck; setTimeout(() => { const m = this.msgRef.current; if (m) m.scrollTop = m.scrollHeight; }, 40); }
    if (S.screen === 'pick') { if (this._pf !== S.pickField) { this._pf = S.pickField; setTimeout(() => this.searchRef.current && this.searchRef.current.focus(), 80); } } else this._pf = null;
    if (S.modal === 'qr') this.drawQR(); else this._qr = null;
    if (pp.startLang !== this.props.startLang && this.props.startLang) this.setState({ lang: this.props.startLang === 'English' ? 'en' : 'id' });
  }

  async boot() {
    this.C = CORE;
    const C = this.C; this.net = C.buildNet(); this.buses = C.makeBuses(this.net);
    const d = new Date(); this.t0 = d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
    this.setState({ ready: true, lang: this.props.startLang === 'English' ? 'en' : 'id', msgs: [{ bot: true, hello: true }], ...loadSaved() });
    try { window.maplibregl = (await import('maplibre-gl')).default; } catch (e) { console.warn('maplibre', e); }
    if (this._unmounted) return;
    if (window.maplibregl) this.initMap();
    this.last = performance.now(); this.lastUI = 0;
    const loop = now => { this.tick(now); this.raf = requestAnimationFrame(loop); };
    this.raf = requestAnimationFrame(loop);
    // rAF stops in background tabs; keep the simulation (and the get-off alert) running anyway.
    this.iv = setInterval(() => { const now = performance.now(); if (now - this.last > 600) this.tick(now); }, 1000);
    const demo = this.props.demoStart; if (demo && demo !== 'Beranda') setTimeout(() => this.runDemo(demo), 500);
  }
  runDemo(d) {
    this.doSearch('me', 'p:tp');
    if (d !== 'Naik bus') return;
    setTimeout(() => {
      const S = this.state; if (!S.opts.length) return;
      this.setState({ ticket: this.newTicket(5000) }, () => this.begin(0, () => {
        const legs = this.state.trip.legs, li = legs.findIndex(l => l.type === 'bus');
        this.setState({ leg: li, phase: 'pick' }, () => { const u = this.upcomingFor(legs[li])[0]; if (u) this.setState({ jBus: u.b.id, phase: 'track' }, () => { this.holdAt = legs[li].board; this.board(); }); });
      }));
    }, 50);
  }
  nowSec() { return (this.t0 || 0) + this.simT; }
  isPov() { const S = this.state; return S.screen === 'track' ? !!S.trackId : (S.screen === 'journey' && !!S.trip && !S.done && (S.phase === 'track' || S.phase === 'ride') && !!S.jBus); }
  povBusId() { const S = this.state; return S.screen === 'track' ? S.trackId : S.jBus; }
  bus(id) { return this.buses && this.buses.find(b => b.id === id); }

  tick(now) {
    // Cap at 1s (not 0.1s) so the simulation keeps pace on throttled or slow devices.
    const dt = Math.min(1, (now - this.last) / 1000); this.last = now;
    const C = this.C, net = this.net, S = this.state, pov = this.isPov();
    const sdt = dt * (pov ? (Number(this.props.simSpeed) || 12) : 2);
    this.simT += sdt;
    for (const b of this.buses) { if (b.id === S.jBus && this.holdAt && b.atStop === this.holdAt) b.hold = true; C.step(net, b, sdt, this.simT); }
    if (this.map && this.busMk) {
      for (const b of this.buses) this.busMk[b.id].setLngLat(C.pointAt(net.routes[b.route], b.d));
      if (pov && !this.followOff && now > this.povUntil && now - this.zoomAt > 900) {
        const b = this.bus(this.povBusId());
        if (b) { const r = net.routes[b.route], tb = C.bearingAt(r, b.d, b.dir); const diff = ((tb - this.brg + 540) % 360) - 180; this.brg += diff * Math.min(1, dt * 1.6); this.map.jumpTo({ center: C.pointAt(r, b.d), bearing: this.brg, padding: this.povPad() }); }
      }
    }
    this.checkAlerts();
    if (now - this.lastUI > 250) { this.lastUI = now; this.styleMarkers(); this.setState(s => ({ tick: s.tick + 1 })); }
  }
  checkAlerts() {
    const S = this.state, C = this.C, net = this.net, t = C.I18N[S.lang];
    if (S.trip && !S.done && S.phase === 'ride' && !this.alerted) {
      const lg = S.trip.legs[S.leg], b = this.bus(S.jBus);
      if (b && lg && lg.type === 'bus' && !(b.atStop === lg.board && C.dwelling(b))) { const n = C.away(net, b, lg.alight); if (n != null && n <= 1) { this.alerted = true; if (S.alertsOn) this.notify(t.prepare, `${t.nextStop}: ${net.stops[lg.alight].name}`); } }
    }
    if (S.screen === 'track' && S.remindStop && !this.remAlerted) {
      const b = this.bus(S.trackId);
      if (b) { const n = C.away(net, b, S.remindStop); if (n != null && n <= 1) { this.remAlerted = true; this.toast(`${t.toastNear} ${net.stops[S.remindStop].short}`); if (S.alertsOn) this.notify(t.toastNear, net.stops[S.remindStop].name); } }
    }
  }
  notify(title, body) { try { navigator.vibrate && navigator.vibrate([200, 100, 200]); if ('Notification' in window && Notification.permission === 'granted') new Notification(title, { body }); } catch (e) {} }

  initMap() {
    const C = this.C, net = this.net, gl = window.maplibregl;
    const map = this.map = new gl.Map({ container: this.mapRef.current, style: 'https://tiles.openfreemap.org/styles/positron', center: [112.752, -7.282], zoom: 12.2, attributionControl: false, maxPitch: 70 });
    map.dragRotate.disable(); map.touchZoomRotate.disableRotation();
    map.on('error', e => { const m = e && e.error && (e.error.message || e.error.name || ''); if (/abort/i.test(m)) return; console.warn('map', m); });
    map.on('style.load', () => this.addLayers());
    setTimeout(() => { if (!this.mapReady) { console.warn('Vector tiles slow, raster fallback'); map.setStyle(RASTER); } }, 9000);
    map.on('dragstart', () => { if (this.isPov()) { this.followOff = true; this.forceUpdate(); } });
    map.on('wheel', () => { this.zoomAt = performance.now(); });
    map.on('touchstart', e => { if (e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 1) this.zoomAt = performance.now() + 600; });
    const u = document.createElement('div');
    u.style.cssText = 'position:relative;width:18px;height:18px';
    u.innerHTML = '<div style="position:absolute;inset:0;border-radius:50%;background:#1664B0;animation:tbPulse 2.2s ease-out infinite"></div><div style="position:absolute;inset:0;border-radius:50%;background:#1664B0;box-shadow:0 0 0 3px #fff,0 2px 6px rgba(0,0,0,.3)"></div>';
    this.userEl = u; this.userMk = new gl.Marker({ element: u }).setLngLat(C.USER).addTo(map);
    this.busMk = {}; this.busEl = {};
    for (const b of this.buses) {
      const el = document.createElement('div'); el.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer';
      const tile = document.createElement('div'), lab = document.createElement('div');
      lab.style.cssText = "display:none;background:#1664B0;color:#fff;font:800 12px/1 var(--font-jakarta),sans-serif;padding:5px 8px;border-radius:999px;white-space:nowrap;box-shadow:0 0 0 2px #fff";
      lab.textContent = b.id; el.append(tile, lab); el.title = `${b.route} · ${b.id}`;
      el.addEventListener('click', ev => { ev.stopPropagation(); this.onBusClick(b.id); });
      this.busEl[b.id] = { el, tile, lab };
      this.busMk[b.id] = new gl.Marker({ element: el, anchor: 'top', offset: [0, -13] }).setLngLat(C.pointAt(net.routes[b.route], b.d)).addTo(map);
    }
    this.wisMk = {};
    for (const p of C.PLACES.filter(p => p.wis)) {
      const el = document.createElement('div');
      el.style.cssText = `position:relative;width:34px;height:34px;border-radius:50%;background-color:${C.CAT_TINT[p.cat]};background-size:cover;background-position:center;box-shadow:0 0 0 3px #fff,0 4px 10px rgba(21,23,28,.25);cursor:pointer;display:none`;
      el.dataset.bg = p.photo ? `url("${p.photo}")` : ''; el.title = p.name;
      const num = document.createElement('div');
      num.style.cssText = "position:absolute;top:-7px;right:-7px;min-width:22px;height:22px;border-radius:11px;background:#1664B0;color:#fff;font:800 12px/22px var(--font-jakarta),sans-serif;text-align:center;display:none;box-shadow:0 0 0 2px #fff";
      el.append(num);
      el.addEventListener('click', ev => { ev.stopPropagation(); this.openPlace(p.id); });
      this.wisMk[p.id] = { el, num, m: new gl.Marker({ element: el }).setLngLat(p.ll).addTo(map) };
    }
  }
  addLayers() {
    const map = this.map, C = this.C, net = this.net;
    if (map.getSource('routes')) return;
    const round = { 'line-cap': 'round', 'line-join': 'round' };
    if (map.getSource('openmaptiles')) {
      try { map.addLayer({ id: 'b3d', type: 'fill-extrusion', source: 'openmaptiles', 'source-layer': 'building', minzoom: 14, layout: { visibility: 'none' }, paint: { 'fill-extrusion-color': '#E3E2DC', 'fill-extrusion-height': ['coalesce', ['get', 'render_height'], 8], 'fill-extrusion-base': ['coalesce', ['get', 'render_min_height'], 0], 'fill-extrusion-opacity': 0.85 } }); } catch (e) {}
    }
    map.addSource('routes', { type: 'geojson', data: { type: 'FeatureCollection', features: Object.values(net.routes).map(r => lineF(r.line, { id: r.id, color: r.color })) } });
    map.addSource('legs', { type: 'geojson', data: EMPTY });
    map.addSource('walk', { type: 'geojson', data: EMPTY });
    map.addSource('stops', { type: 'geojson', data: { type: 'FeatureCollection', features: Object.values(net.stops).map(s => ({ type: 'Feature', properties: { id: s.id, x: s.routes.length > 1 ? 1 : 0 }, geometry: { type: 'Point', coordinates: s.ll } })) } });
    map.addLayer({ id: 'routes-case', type: 'line', source: 'routes', layout: round, paint: { 'line-color': '#fff', 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 4, 16, 11] } });
    map.addLayer({ id: 'routes', type: 'line', source: 'routes', layout: round, paint: { 'line-color': ['get', 'color'], 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 2, 16, 6] } });
    map.addLayer({ id: 'legs-case', type: 'line', source: 'legs', layout: round, paint: { 'line-color': '#fff', 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 6, 16, 14] } });
    map.addLayer({ id: 'legs', type: 'line', source: 'legs', layout: round, paint: { 'line-color': ['get', 'color'], 'line-width': ['interpolate', ['linear'], ['zoom'], 11, 3.5, 16, 8] } });
    map.addLayer({ id: 'walk', type: 'line', source: 'walk', layout: round, paint: { 'line-color': '#1B2333', 'line-width': ['interpolate', ['linear'], ['zoom'], 12, 3, 17, 6], 'line-dasharray': [0.1, 1.9] } });
    map.addLayer({ id: 'stops', type: 'circle', source: 'stops', paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 11, ['case', ['==', ['get', 'x'], 1], 3.5, 2.2], 15, ['case', ['==', ['get', 'x'], 1], 7, 5], 17, 7.5], 'circle-color': '#fff', 'circle-stroke-color': '#1B2333', 'circle-stroke-width': ['interpolate', ['linear'], ['zoom'], 11, 1.2, 15, 2.4] } });
    map.addSource('legstops', { type: 'geojson', data: EMPTY });
    map.addLayer({ id: 'legstops', type: 'circle', source: 'legstops', paint: { 'circle-radius': ['interpolate', ['linear'], ['zoom'], 11, ['case', ['==', ['get', 'end'], 1], 5, 3], 16, ['case', ['==', ['get', 'end'], 1], 9, 6]], 'circle-color': '#fff', 'circle-stroke-color': ['get', 'color'], 'circle-stroke-width': ['case', ['==', ['get', 'end'], 1], 4, 2.5] } });
    this.mapReady = true; this.hl = {};
    this.applyMap();
  }
  styleMarkers() {
    if (!this.busEl) return;
    const S = this.state, sc = S.screen, C = this.C, pov = this.isPov(), pid = this.povBusId();
    const optF = (sc === 'results' || sc === 'detail') ? S.opts[S.optIdx] : (sc === 'journey' && S.trip && !S.done) ? S.trip : null;
    const keys = optF ? new Set(optF.legs.filter(l => l.type === 'bus').map(l => l.route + (this.net.routes[l.route].loop ? 1 : l.dir))) : null;
    for (const b of this.buses) {
      let mode = 'n'; const bk = b.route + (this.net.routes[b.route].loop ? 1 : b.dir);
      if (pov && b.id === pid) mode = 't';
      else if (sc === 'routeDetail') mode = b.route === S.routeId ? 'n' : 'h';
      else if (keys) mode = keys.has(bk) ? (pov ? 'd' : 'n') : 'h';
      else if (pov) mode = 'd';
      else if (sc === 'wisata' || sc === 'place' || sc === 'package') mode = 'd';
      if (this.hl[b.id] === mode) continue; this.hl[b.id] = mode;
      const { el, tile, lab } = this.busEl[b.id], col = C.META[b.route].color, tr = mode === 't', sz = tr ? 40 : 26;
      el.style.display = mode === 'h' ? 'none' : 'flex'; el.style.opacity = mode === 'd' ? '0.35' : '1';
      tile.style.cssText = `width:${sz}px;height:${sz}px;border-radius:${tr ? 12 : 8}px;background:${tr ? '#1664B0' : col};color:#fff;display:grid;place-items:center;box-shadow:0 0 0 ${tr ? 3 : 2}px #fff,0 4px 12px rgba(21,23,28,.25)`;
      tile.innerHTML = BUS_SVG(tr ? 20 : 14); lab.style.display = tr ? 'block' : 'none';
      this.busMk[b.id].setOffset([0, -sz / 2]); this.busMk[b.id].getElement().style.zIndex = tr ? '5' : '1';
    }
  }
  pad() {
    const S = this.state, wide = S.w >= 1100, tabs = !wide && S.screen === 'routes' ? 64 : 0;
    const p = wide ? { top: 80, bottom: 110, left: 48, right: 80 } : { top: 70, bottom: S.sheetH + tabs + 24, left: 32, right: 32 };
    const H = S.h, W = wide ? S.w - 496 : S.w;
    if (p.top + p.bottom > H - 60) { const k = (H - 60) / (p.top + p.bottom); p.top *= k; p.bottom *= k; }
    if (p.left + p.right > W - 60) { const k = (W - 60) / (p.left + p.right); p.left *= k; p.right *= k; }
    return p;
  }
  povPad() { const S = this.state; if (S.w >= 1100) return { top: Math.round(S.h * 0.34), bottom: 100, left: 40, right: 40 }; const top = Math.min(150, S.h * 0.25); return { top, bottom: Math.max(0, Math.min(S.sheetH + 10, S.h - top - 80)), left: 20, right: 20 }; }
  fitTo(coords, maxZoom) {
    if (!coords || !coords.length) return;
    let a = [180, 90, -180, -90]; for (const c of coords) a = [Math.min(a[0], c[0]), Math.min(a[1], c[1]), Math.max(a[2], c[0]), Math.max(a[3], c[1])];
    const go = () => this.map.fitBounds([[a[0], a[1]], [a[2], a[3]]], { padding: this.pad(), maxZoom: maxZoom || 16, duration: 900 });
    clearTimeout(this._fitT);
    if (this.map.getPitch() > 1 || this.povPadSet) { this.povPadSet = false; this.map.easeTo({ pitch: 0, bearing: 0, padding: { top: 0, bottom: 0, left: 0, right: 0 }, duration: 350 }); this._fitT = setTimeout(go, 380); } else go();
  }
  enterPov() {
    const C = this.C, b = this.bus(this.povBusId()); if (!b || !this.map) return;
    const r = this.net.routes[b.route]; this.brg = C.bearingAt(r, b.d, b.dir); this.followOff = false;
    this.povUntil = performance.now() + 1050; this.povPadSet = true; clearTimeout(this._fitT);
    this.map.easeTo({ center: C.pointAt(r, b.d), zoom: Math.max(16.2, Math.min(17.2, this.map.getZoom())), pitch: 60, bearing: this.brg, padding: this.povPad(), duration: 1000 });
  }
  userPos() {
    const S = this.state, C = this.C, net = this.net;
    if (S.screen !== 'journey' || !S.trip) return C.USER;
    if (S.done) return this.placeOf(S.trip.to).ll;
    const lg = S.trip.legs[S.leg];
    if (lg.type === 'bus') return net.stops[lg.board].ll;
    if (lg.last) return net.stops[lg.from].ll;
    return S.leg === 0 ? this.placeOf(S.trip.from).ll : C.USER;
  }
  applyMap() {
    if (!this.mapReady || !this.C) return;
    const S = this.state, map = this.map, C = this.C, net = this.net, sc = S.screen, gl = window.maplibregl, pov = this.isPov();
    const opt = sc === 'journey' ? S.trip : (sc === 'results' || sc === 'detail') ? S.opts[S.optIdx] : null;
    const focus = !!opt;
    map.setLayoutProperty('stops', 'visibility', focus ? 'none' : 'visible');
    map.getSource('legstops').setData({ type: 'FeatureCollection', features: opt ? opt.legs.filter(l => l.type === 'bus').flatMap(l => l.stops.map((id, i) => ({ type: 'Feature', properties: { color: C.META[l.route].color, end: (i === 0 || i === l.stops.length - 1) ? 1 : 0 }, geometry: { type: 'Point', coordinates: net.stops[id].ll } }))) : [] });
    const op = sc === 'routeDetail' ? ['case', ['==', ['get', 'id'], S.routeId], 1, 0.12] : focus ? 0 : pov ? 0.2 : (sc === 'wisata' || sc === 'place' || sc === 'package') ? 0.4 : 0.85;
    map.setPaintProperty('routes', 'line-opacity', op);
    map.setPaintProperty('routes-case', 'line-opacity', op);
    const busF = [], walkF = [];
    if (opt) opt.legs.forEach(l => (l.type === 'bus' ? busF.push(lineF(l.coords, { color: C.META[l.route].color })) : walkF.push(lineF(l.coords))));
    map.getSource('legs').setData({ type: 'FeatureCollection', features: busF });
    map.getSource('walk').setData({ type: 'FeatureCollection', features: walkF });
    this.labelMks.forEach(m => m.remove()); this.labelMks = [];
    const label = (ll, text) => { const el = document.createElement('div'); el.style.cssText = "background:#fff;color:#1B2333;font:700 13px/1 var(--font-jakarta),sans-serif;padding:7px 10px;border-radius:999px;white-space:nowrap;box-shadow:0 2px 8px rgba(21,23,28,.18);pointer-events:none"; el.textContent = text; this.labelMks.push(new gl.Marker({ element: el, anchor: 'left', offset: [12, 0] }).setLngLat(ll).addTo(map)); };
    if (opt && !pov) {
      const seen = {};
      opt.legs.forEach(l => { if (l.type !== 'bus') return; [l.board, l.alight].forEach(id => { if (!seen[id]) { seen[id] = 1; label(net.stops[id].ll, net.stops[id].short); } }); });
      const B = this.placeOf(sc === 'journey' ? S.trip.to : S.to);
      if (B && B.kind !== 'stop') { const el = document.createElement('div'); el.style.cssText = 'display:flex;flex-direction:column;align-items:center;pointer-events:none'; el.innerHTML = `<div style="display:flex;align-items:center;gap:6px;background:#D21624;color:#fff;font:700 13px/1 var(--font-jakarta),sans-serif;padding:8px 11px;border-radius:999px;white-space:nowrap;box-shadow:0 4px 12px rgba(21,23,28,.25)">${PIN_SVG}${B.name}</div><div style="width:2px;height:10px;background:#D21624"></div><div style="width:10px;height:10px;border-radius:50%;background:#D21624;box-shadow:0 0 0 3px #fff"></div>`; this.labelMks.push(new gl.Marker({ element: el, anchor: 'bottom', offset: [0, 5] }).setLngLat(B.ll).addTo(map)); }
    }
    if (pov && opt) { const lg = S.trip.legs[S.leg]; if (lg && lg.type === 'bus') { label(net.stops[lg.board].ll, net.stops[lg.board].short); label(net.stops[lg.alight].ll, net.stops[lg.alight].short); } }
    const pk = sc === 'package' ? C.PACKAGES.find(k => k.id === S.pkgId) : null;
    for (const id in this.wisMk) {
      const w = this.wisMk[id], idx = pk ? pk.places.indexOf(id) : -1;
      const show = sc === 'wisata' || (sc === 'place' && S.placeId === id) || idx >= 0;
      w.el.style.display = show ? 'block' : 'none';
      if (show && !w.el.style.backgroundImage && w.el.dataset.bg) w.el.style.backgroundImage = w.el.dataset.bg;
      const big = sc === 'place'; w.el.style.width = w.el.style.height = big ? '52px' : '34px';
      w.num.style.display = idx >= 0 ? 'block' : 'none'; w.num.textContent = idx + 1;
    }
    this.userMk.setLngLat(this.userPos()); this.userEl.style.display = (pov && S.phase === 'ride' && sc === 'journey') ? 'none' : 'block';
    this.hl = {}; this.styleMarkers();
    if (map.getLayer('b3d')) map.setLayoutProperty('b3d', 'visibility', pov ? 'visible' : 'none');
    if (pov) return this.enterPov();
    const city = () => this.fitTo([[112.6735, -7.3010], [112.7985, -7.2460], [112.7246, -7.3502], [112.7365, -7.2300]], 13);
    switch (sc) {
      case 'routeDetail': this.fitTo(net.routes[S.routeId].line, 15); break;
      case 'results': case 'detail': opt ? this.fitTo(opt.legs.flatMap(l => l.coords), 15.5) : city(); break;
      case 'journey': {
        if (!S.trip) { city(); break; }
        if (S.done) { this.fitTo([this.placeOf(S.trip.to).ll], 16); break; }
        const lg = S.trip.legs[S.leg];
        if (lg.type === 'walk') this.fitTo(lg.coords, 17);
        else { const pts = [net.stops[lg.board].ll]; this.upcomingFor(lg).slice(0, 2).forEach(x => pts.push(C.pointAt(net.routes[x.b.route], x.b.d))); this.fitTo(pts, 15.5); }
        break;
      }
      case 'wisata': this.fitTo(C.PLACES.filter(p => p.wis).map(p => p.ll), 14); break;
      case 'place': { const n = this.nearOf(S.placeId); this.fitTo([C.PLACE[S.placeId].ll, n.s.ll], 16); break; }
      case 'package': this.fitTo(pk.places.map(id => C.PLACE[id].ll), 15); break;
      default: city();
    }
  }

  placeOf(key) {
    const C = this.C, net = this.net; if (!key || !C) return null;
    if (key === 'me') return { kind: 'me', ll: C.USER, key, name: C.I18N[this.state.lang].myLoc };
    const [k, id] = key.split(':');
    if (k === 'g') { const g = this.geoMap[id]; return g ? { kind: 'place', ll: g.ll, name: g.name, key } : null; }
    if (k === 's') { const s = net.stops[id]; return s ? { kind: 'stop', sid: id, ll: s.ll, name: s.name, key } : null; }
    const p = C.PLACE[id]; return p ? { kind: 'place', pid: id, ll: p.ll, name: p.name, key } : null;
  }
  keyName(key, t) { if (!key) return ''; if (key === 'me') return t.myLoc; const p = this.placeOf(key); return p ? p.name : ''; }
  keyShort(key, t) { if (!key) return ''; if (key === 'me') return t.myLoc; const [k, id] = key.split(':'); if (k === 'g') return (this.geoMap[id] || {}).name || ''; return k === 's' ? this.net.stops[id].short : ((this.C.PLACE[id] || {}).name || ''); }
  nearOf(pid) { if (!this.nearCache[pid]) this.nearCache[pid] = this.C.nearStops(this.net, { kind: 'place', ll: this.C.PLACE[pid].ll })[0]; return this.nearCache[pid]; }
  upcomingFor(lg) { return this.C.upcoming(this.net, this.buses, lg.route, lg.dir, lg.board); }
  fare() { const p = this.state.pax; return p.umum * 5000 + p.pelajar * 2500; }
  ticketOk() { const tk = this.state.ticket; return !!tk && tk.until > this.nowSec(); }
  newTicket(f) { return { until: this.nowSec() + 7200, code: 'SB-' + Math.random().toString(36).slice(2, 8).toUpperCase(), fare: f }; }
  clockRange(base, sec) { const C = this.C, lang = this.state.lang, [lo, hi] = C.range(sec), c5 = s => Math.ceil(s / 300) * 300; return `${C.clock(c5(base + lo * 60), lang)}–${C.clock(c5(base + Math.max(hi, lo + 5) * 60), lang)}`; }
  awayTxt(x, t) { if (!x) return ''; if (x.n === 0 || x.eta === 0) return t.atStopNow; if (x.eta < 90) return t.arriving; return `${x.n} ${t.stopsWord} ${t.away}`; }
  rb(rid) { return { rid, ink: this.C.META[rid].ink }; }
  headTxt(rid, dir, t, lang) { const h = this.C.headsign(this.net, rid, dir); return h ? `${t.toward} ${h}` : this.C.META[rid].name[lang]; }
  chipsOf(o, t, lang) { return o.legs.map((l, i) => l.type === 'walk' ? { isWalk: true, isBus: false, txt: this.C.fmtM(l.m, lang), sep: i > 0 } : { isWalk: false, isBus: true, rid: l.route, ink: this.C.META[l.route].ink, txt: `${l.n} ${t.stopsWord}`, sep: i > 0 }); }
  busVM(x, t, lang) { const b = x.b, c = CROWD[b.crowd]; return { rid: b.route, ink: this.C.META[b.route].ink, code: b.id, plate: b.plate, head: this.headTxt(b.route, b.dir, t, lang), away: this.awayTxt(x, t), eta: x.eta === 0 ? '' : this.C.rangeTxt(x.eta, lang), crowd: t['c' + b.crowd], cBg: c.bg, cFg: c.fg, lowFloor: b.lowFloor, open: () => this.openTrack(b.id) }; }
  placeVM(id, t, lang) { const C = this.C, p = C.PLACE[id], n = this.nearOf(id), s = this.net.stops[n.s.id]; return { id, dot: C.META[s.routes[0]].color, name: p.name, cat: t[p.cat], bg: bgUrl(p.photo), tint: C.CAT_TINT[p.cat], near: `${t.near} ${s.short} · ${C.fmtM(n.m, lang)}`, routes: s.routes.map(r => this.rb(r)), stamped: this.state.stamps.includes(id), open: () => this.openPlace(id) }; }
  pkgVM(k, t, lang) { const C = this.C, first = C.PLACE[k.places[0]]; const rs = [...new Set(k.places.flatMap(id => this.net.stops[this.nearOf(id).s.id].routes))]; return { title: k.title[lang], dur: `${k.dur[lang]} · ${k.places.length} ${t.placesN}`, bg: bgUrl(first.photo), tint: C.CAT_TINT[k.cat], routes: rs.map(r => this.rb(r)), open: () => this.openPkg(k.id) }; }
  toast(text) { clearTimeout(this._toastT); this.setState({ toast: text }); this._toastT = setTimeout(() => this.setState({ toast: null }), 2600); }
  pushStack() { const S = this.state; this.stack.push({ screen: S.screen, tab: S.tab, placeId: S.placeId, pkgId: S.pkgId, routeId: S.routeId, routeDir: S.routeDir, trackId: S.trackId }); }
  nav(screen, patch) { const S = this.state; this.pushStack(); this.setState({ screen, tab: TAB_OF[screen], chatOpen: S.w >= 1100 ? S.chatOpen : false, ...(patch || {}) }); }
  back() {
    const prev = this.stack.pop(), S = this.state;
    if (!prev) return this.goTab(TAB_OF[S.screen] || 'home');
    this.setState({ screen: prev.screen, tab: prev.tab, placeId: prev.placeId, pkgId: prev.pkgId, routeId: prev.routeId, routeDir: prev.routeDir, trackId: prev.trackId, remindStop: prev.screen === 'track' ? S.remindStop : null });
  }
  goTab(tab) { const S = this.state; this.stack = []; this.setState({ tab, screen: ROOT[tab], trackId: null, remindStop: null, chatOpen: S.w >= 1100 ? S.chatOpen : false }); }
  resumeTrip() { this.stack = []; this.setState({ screen: 'journey', tab: 'home' }); }
  openPick(field) { clearTimeout(this._geoT); this.nav('pick', { pickField: field, q: '', geo: [], geoLoading: false }); }
  geoSearch(q) {
    clearTimeout(this._geoT); const qq = String(q || '').trim();
    if (qq.length < 3) { this._geoN++; this.setState({ geo: [], geoLoading: false }); return; }
    this.setState({ geoLoading: true });
    this._geoT = setTimeout(async () => {
      const id = ++this._geoN; let out = [];
      try {
        const j = await (await fetch('https://photon.komoot.io/api/?limit=8&lat=-7.27&lon=112.74&bbox=112.55,-7.42,112.86,-7.16&q=' + encodeURIComponent(qq))).json();
        out = (j.features || []).map(f => { const p = f.properties || {}; const nm = p.name || [p.street, p.housenumber].filter(Boolean).join(' '); return { name: nm, sub: [p.name ? p.street : null, p.district || p.locality, p.city || p.county].filter(Boolean).join(', '), ll: f.geometry.coordinates }; });
      } catch (e) {
        try { const j = await (await fetch('https://nominatim.openstreetmap.org/search?format=jsonv2&limit=8&bounded=1&viewbox=112.55,-7.16,112.86,-7.42&accept-language=id&q=' + encodeURIComponent(qq))).json(); out = j.map(r => { const parts = r.display_name.split(','); return { name: r.name || parts[0], sub: parts.slice(1, 4).join(',').trim(), ll: [+r.lon, +r.lat] }; }); } catch (e2) { console.warn('geocode', e2.message); }
      }
      if (id !== this._geoN) return;
      const seen = new Set(); out = out.filter(g => g.name && !seen.has(g.name + '|' + g.sub) && seen.add(g.name + '|' + g.sub));
      out.forEach(g => { const k = 'g' + (++this._geoK); this.geoMap[k] = g; g.key = 'g:' + k; });
      this.setState({ geo: out, geoLoading: false });
    }, 350);
  }
  openReview() { const R = this.state.review; if (!R) return; this.stack = [{ screen: 'home', tab: 'home' }]; this.setState({ from: R.from, to: R.to, opts: [R.opt], optIdx: 0, screen: 'detail', tab: 'home' }); }
  keySub(key, t) { if (key === 'me') return t.myAddrShort; const [k, id] = key.split(':'); if (k === 's') return this.net.stops[id].road; if (k === 'g') return (this.geoMap[id] || {}).sub || ''; const p = this.C.PLACE[id]; return p ? (t[p.cat] || '') : ''; }
  savedMins(x) { const k = x.from + '>' + x.to, c = this.savedCache[k]; if (c && this.simT - c.t < 120) return c.m; const A = this.placeOf(x.from), B = this.placeOf(x.to); const o = A && B ? this.C.plan(this.net, this.buses, A, B, 0)[0] : null; const m = o ? Math.round(o.total / 60) : null; this.savedCache[k] = { t: this.simT, m }; return m; }
  choosePick(key) { const S = this.state, f = S.pickField, patch = { [f]: key }; if (f === 'from' && key === S.to) patch.to = null; if (f === 'to' && key === S.from) patch.from = 'me'; this.setState(patch, () => this.back()); }
  swap() { const S = this.state; if (!S.to) return; this.setState({ from: S.to, to: S.from }); }
  doSearch(from, to) {
    const S = this.state; from = from || S.from; to = to || S.to;
    if (!to) return this.openPick('to');
    const opts = this.C.plan(this.net, this.buses, this.placeOf(from), this.placeOf(to), S.depart * 60);
    if (S.screen !== 'results') this.pushStack();
    this.setState({ from, to, opts, optIdx: 0, screen: 'results', tab: 'home', chatOpen: S.w >= 1100 ? S.chatOpen : false });
  }
  startTrip() {
    const S = this.state, t = this.C.I18N[S.lang];
    if (S.depart > 0) { this.toast(t.toastRemind); return this.goTab('home'); }
    if (this.ticketOk()) return this.begin(S.optIdx);
    this.setState({ modal: 'pay' });
  }
  pay() {
    const S = this.state, t = this.C.I18N[S.lang], f = this.fare();
    if (S.payMethod === 'onsite') { this.setState({ modal: null }); this.toast(t.toastOnsite); return this.begin(S.optIdx); }
    if (S.balance < f) { this.toast(t.insufficient); return this.setState({ modal: 'topup' }); }
    const o = S.opts[S.optIdx], rids = o.legs.filter(l => l.type === 'bus').map(l => l.route).join(' + ');
    this.setState(s => ({ balance: s.balance - f, ticket: this.newTicket(f), txs: [{ amt: -f, title: T2(`Tiket ${rids}`, `Ticket ${rids}`), today: true }, ...s.txs], modal: null }), () => { this.toast(t.toastPaid); this.begin(S.optIdx); });
  }
  begin(i, done) {
    const S = this.state, o = S.opts[i]; if (!o) return;
    if (S.jBus) { const ob = this.bus(S.jBus); if (ob) ob.hold = false; }
    this.stack = []; this.alerted = false; this.holdAt = null;
    this.setState({ review: null, trip: { ...o, key: Math.random().toString(36).slice(2), from: S.from, to: S.to }, leg: 0, phase: o.legs[0].type === 'walk' ? 'walk' : 'pick', done: false, jBus: null, newStamp: null, tripSaved: false, screen: 'journey', tab: 'home' }, () => done ? done() : this.autoPick());
  }
  nextLeg() {
    const S = this.state; if (!S.trip) return;
    const n = S.leg + 1, lg = S.trip.legs[n];
    if (!lg) return this.finishJourney();
    this.setState({ leg: n, phase: lg.type === 'walk' ? 'walk' : 'pick', jBus: null }, () => this.autoPick());
  }
  // Flow shortcut: on reaching a bus leg, follow the next bus right away; "Ganti bus" still opens the list.
  autoPick() { const S = this.state, lg = S.trip && S.trip.legs[S.leg]; if (S.phase !== 'pick' || !lg || lg.type !== 'bus') return; const u = this.upcomingFor(lg)[0]; if (u) this.trackBus(u.b.id); }
  trackBus(id) { const S = this.state, lg = S.trip.legs[S.leg]; this.holdAt = lg.board; this.setState({ jBus: id, phase: 'track' }); }
  changeBus() { const b = this.bus(this.state.jBus); if (b) b.hold = false; this.holdAt = null; this.setState({ jBus: null, phase: 'pick' }); }
  board() {
    const S = this.state, lg = S.trip && S.trip.legs[S.leg], b = this.bus(S.jBus); if (!b || !lg) return;
    const r = this.net.routes[b.route], st = this.C.stopAt(r, lg.board);
    if (b.atStop !== lg.board) { b.d = st.at; if (!r.loop) b.dir = lg.dir; }
    b.atStop = lg.board; b.dwell = 3; b.hold = false; this.holdAt = lg.alight; this.alerted = false;
    try { if (S.alertsOn && 'Notification' in window && Notification.permission === 'default') Notification.requestPermission().catch(() => {}); } catch (e) {}
    this.setState({ phase: 'ride' });
  }
  alight() { const b = this.bus(this.state.jBus); if (b) b.hold = false; this.holdAt = null; this.nextLeg(); }
  finishJourney() {
    const S = this.state, C = this.C, B = this.placeOf(S.trip.to);
    const pid = B && B.pid && C.PLACE[B.pid] && C.PLACE[B.pid].wis ? B.pid : null, ns = pid && !S.stamps.includes(pid) ? pid : null;
    const rec = { today: true, from: S.trip.from, to: S.trip.to, routes: S.trip.legs.filter(l => l.type === 'bus').map(l => l.route), fare: (S.ticket && S.ticket.fare) || 5000, dur: Math.round(S.trip.total / 60) };
    this.holdAt = null;
    this.setState(s => ({ done: true, jBus: null, newStamp: ns, stamps: ns ? [...s.stamps, ns] : s.stamps, trips: [rec, ...s.trips] }));
  }
  finishTrip() { this.setState({ trip: null, done: false, phase: null, jBus: null }); this.goTab('home'); }
  cancelTrip() { const b = this.bus(this.state.jBus); if (b) b.hold = false; this.holdAt = null; this.setState({ trip: null, done: false, phase: null, jBus: null }); this.goTab('home'); }
  saveTrip() { const S = this.state, t = this.C.I18N[S.lang]; if (S.tripSaved) return; const exists = S.saved.some(x => x.from === S.trip.from && x.to === S.trip.to); this.setState({ tripSaved: true, saved: exists ? S.saved : [...S.saved, { from: S.trip.from, to: S.trip.to }] }); this.toast(t.toastSaved); }
  onBusClick(id) { const S = this.state; if (S.screen === 'journey' && S.trip && S.phase === 'pick') { const lg = S.trip.legs[S.leg], b = this.bus(id); if (b && b.route === lg.route && this.upcomingFor(lg).some(x => x.b.id === id)) return this.trackBus(id); } if (S.screen === 'journey' && S.trip && !S.done) return; this.openTrack(id); }
  openTrack(id) { const S = this.state; if (S.trip && !S.done && S.jBus === id) return this.resumeTrip(); this.remAlerted = false; if (S.screen === 'track') this.setState({ trackId: id, remindStop: null }); else this.nav('track', { trackId: id, remindStop: null }); }
  toggleRemind(sid) { const S = this.state, t = this.C.I18N[S.lang], on = S.remindStop === sid; this.remAlerted = false; this.setState({ remindStop: on ? null : sid }); if (!on) this.toast(`${t.toastReminder} ${this.net.stops[sid].short}`); }
  followBus() { this.followOff = false; this.enterPov(); this.forceUpdate(); }
  openPlace(id) { if (this.state.screen === 'place') this.setState({ placeId: id }); else this.nav('place', { placeId: id }); }
  openPkg(id) { this.nav('package', { pkgId: id }); }
  goPlace(id) { this.doSearch('me', 'p:' + id); }
  doTopup() { const S = this.state, t = this.C.I18N[S.lang]; this.setState(s => ({ balance: s.balance + s.topAmt, modal: s.opts.length && s.screen === 'detail' ? 'pay' : null, txs: [{ amt: s.topAmt, title: T2(`Isi saldo · ${s.topMethod}`, `Top up · ${s.topMethod}`), today: true }, ...s.txs] })); this.toast(`${t.toastTopup} ${this.C.rupiah(S.topAmt, S.lang)}`); }
  sendReport() { const t = this.C.I18N[this.state.lang]; this.setState({ modal: null, reportCat: null, reportText: '' }); this.toast(t.reportSent); }
  drawQR() {
    const c = this.qrRef.current, tk = this.state.ticket; if (!c || !tk) return;
    if (this._qr === tk.code && c.dataset.drawn === tk.code) return;
    const N = 29, s = 8, ctx = c.getContext('2d'); c.width = c.height = N * s;
    ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
    let seed = [...tk.code].reduce((a, ch) => (a * 31 + ch.charCodeAt(0)) >>> 0, 7);
    const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
    const inF = (x, y) => (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    ctx.fillStyle = '#1B2333';
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!inF(x, y) && rnd() < 0.48) ctx.fillRect(x * s, y * s, s, s);
    const finder = (x, y) => { ctx.fillStyle = '#1B2333'; ctx.fillRect(x * s, y * s, 7 * s, 7 * s); ctx.fillStyle = '#fff'; ctx.fillRect((x + 1) * s, (y + 1) * s, 5 * s, 5 * s); ctx.fillStyle = '#1B2333'; ctx.fillRect((x + 2) * s, (y + 2) * s, 3 * s, 3 * s); };
    finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
    c.dataset.drawn = tk.code; this._qr = tk.code;
  }

  resolveKey(str) {
    const C = this.C, net = this.net, s = String(str || '').toLowerCase().trim(); if (!s) return null;
    if (C.PLACE[s]) return 'p:' + s; if (net.stops[s]) return 's:' + s;
    const p = C.PLACES.find(p => p.name.toLowerCase() === s) || C.PLACES.find(p => p.name.toLowerCase().includes(s) || s.includes(p.name.toLowerCase())); if (p) return 'p:' + p.id;
    const st = Object.values(net.stops).find(x => x.name.toLowerCase().includes(s) || s.includes(x.short.toLowerCase())); return st ? 's:' + st.id : null;
  }
  resolvePlace(str) { const k = this.resolveKey(str); if (!k || !k.startsWith('p:')) return null; const id = k.slice(2); return this.C.PLACE[id].wis ? id : null; }
  describe(o, lang) {
    const C = this.C, net = this.net, en = lang === 'en';
    return o.legs.map(l => l.type === 'walk' ? (en ? `walk ${C.fmtM(l.m, lang)}` : `jalan ${C.fmtM(l.m, lang)}`) : (en ? `take ${l.route} ${C.headsign(net, l.route, l.dir) ? 'to ' + C.headsign(net, l.route, l.dir) : '(loop)'} from ${net.stops[l.board].name}, ${l.n} stops to ${net.stops[l.alight].name}` : `naik ${l.route} ${C.headsign(net, l.route, l.dir) ? 'arah ' + C.headsign(net, l.route, l.dir) : '(putaran)'} dari ${net.stops[l.board].name}, ${l.n} halte sampai ${net.stops[l.alight].name}`)).join(', ');
  }
  sysPrompt() {
    const C = this.C, net = this.net, lang = this.state.lang;
    if (this._sys && this._sys[0] === lang) return this._sys[1];
    const routes = Object.values(net.routes).map(r => `${r.id} ${C.META[r.id].name.id}${r.loop ? ' (putaran satu arah)' : ' (dua arah)'}: ${r.stops.map(s => net.stops[s.id].short).join(', ')}`).join('\n');
    const wis = C.PLACES.filter(p => p.wis).map(p => { const n = this.nearOf(p.id), s = net.stops[n.s.id]; return `${p.id} | ${p.name} | ${p.cat} | halte ${s.short} (${s.routes.join('/')}), jalan ${C.fmtM(n.m, 'id')} | ${p.hours.id} | ${p.price ? C.rupiah(p.price, 'id') : 'gratis'}`; }).join('\n');
    const pk = C.PACKAGES.map(k => `${k.title.id}: ${k.places.join(' > ')}`).join('\n');
    const ev = C.EVENTS.map(e => `${e.title.id} (${e.day} ${e.mon.id}, ${e.time.id}) di ${C.PLACE[e.place].name}`).join('\n');
    const txt = `Kamu ArahAssist, asisten AI di aplikasi pendamping Suroboyo Bus (Surabaya). Ini prototipe hackathon, data bus adalah simulasi.
Jawab dalam ${lang === 'en' ? 'bahasa Inggris' : 'bahasa Indonesia'}, ramah, ringkas (maks 70 kata), teks biasa tanpa markdown, tanpa emoji.
Fakta: tarif Rp5.000 umum, Rp2.500 pelajar/mahasiswa. Tiket berlaku 2 jam termasuk transit. Bayar dengan ArahAssist Pay, QRIS, atau kartu uang elektronik di pintu depan; tidak bisa tunai. Semua rute beroperasi 05.00–22.00 setiap hari. Dilarang makan, minum, merokok di bus.
Lokasi pengguna: dekat Kampus UINSA (Halte UINSA, R1). Waktu sekarang: ${C.clock(this.nowSec(), 'id')}.
Rute dan halte (urut):
${routes}
Titik transit: Siola (R1–R2), Tugu Pahlawan (R1–R3–R5), Joyoboyo (R1–R4), Rajawali (R1–R5).
Tempat wisata (id | nama | kategori | halte terdekat | jam | tiket):
${wis}
Paket wisata:
${pk}
Event:
${ev}
Jika pengguna bertanya cara ke suatu tempat, panggil tool cari_rute. Jika pengguna minta rencana/itinerary, panggil tool buat_itinerary dengan 3–5 id tempat urut yang efisien berdasarkan rute bus, lalu beri ringkasan singkat. Jangan mengarang rute atau halte di luar daftar.`;
    this._sys = [lang, txt]; return txt;
  }
  async ask(text, prior) {
    const S = this.state, C = this.C, lang = S.lang, t = C.I18N[lang];
    let action = null, itin = null;
    const tools = [
      { name: 'cari_rute', description: 'Cari rute Suroboyo Bus. Pakai saat pengguna bertanya cara ke suatu tempat.', input_schema: { type: 'object', properties: { tujuan: { type: 'string', description: 'id tempat dari daftar, atau nama halte/tempat' }, asal: { type: 'string', description: 'opsional; kosongkan untuk lokasi pengguna' } }, required: ['tujuan'] },
        run: async inp => { const to = this.resolveKey(inp.tujuan), from = inp.asal ? (this.resolveKey(inp.asal) || 'me') : 'me'; if (!to) return 'Tempat tidak ditemukan di data.'; const opts = C.plan(this.net, this.buses, this.placeOf(from), this.placeOf(to), 0); action = { from, to }; if (!opts.length) return 'Tidak ada rute bus yang cocok.'; return opts.slice(0, 2).map((o, i) => `Opsi ${i + 1}: ${this.describe(o, 'id')}. Total ${C.rangeTxt(o.total, 'id')}.`).join('\n') + '\nTombol "Lihat rute" sudah tampil untuk pengguna.'; } },
      { name: 'buat_itinerary', description: 'Tampilkan kartu itinerary wisata ke pengguna.', input_schema: { type: 'object', properties: { judul: { type: 'string' }, tempat: { type: 'array', items: { type: 'string' }, description: '3–5 id tempat wisata, berurutan' }, catatan: { type: 'string', description: 'tips singkat satu kalimat' } }, required: ['judul', 'tempat'] },
        run: async inp => { const ids = [...new Set((inp.tempat || []).map(x => this.resolvePlace(x)).filter(Boolean))].slice(0, 6); if (!ids.length) return 'id tempat tidak valid, pakai id dari daftar.'; itin = { title: inp.judul || 'Itinerary', ids, note: inp.catatan || '' }; return 'Kartu itinerary sudah tampil. Balas dengan ringkasan 1–2 kalimat, jangan ulangi daftarnya.'; } },
    ];
    const msgs = [];
    prior.forEach(m => { if (m.hello || !m.text) return; const role = m.me ? 'user' : 'assistant'; if (msgs.length && msgs[msgs.length - 1].role === role) msgs[msgs.length - 1].content += '\n' + m.text; else msgs.push({ role, content: m.text }); });
    let hist = msgs.slice(-8); while (hist.length && hist[0].role !== 'user') hist.shift();
    if (hist.length && hist[hist.length - 1].role === 'user') hist[hist.length - 1].content += '\n' + text; else hist.push({ role: 'user', content: text });
    try {
      const txt = await askClaude(this.sysPrompt(), hist, tools);
      if (!txt && !itin && !action) throw new Error('empty');
      return { text: txt || (lang === 'en' ? 'Here you go.' : 'Ini dia.'), action, itin, src: t.aiSrc };
    } catch (e) { console.warn('AI fallback:', e && e.message); return this.fallback(text); }
  }
  fallback(text) {
    const C = this.C, lang = this.state.lang, t = C.I18N[lang], q = ' ' + text.toLowerCase() + ' ';
    if (/(itinerary|itinerari|rencana|plan|jalan-jalan|seharian|setengah hari|half-day|day trip|tour)/.test(q)) {
      const pk = /(kuliner|makan|food|eat)/.test(q) ? 'kuliner' : /(religi|masjid|ibadah|faith|mosque|temple)/.test(q) ? 'religi' : /(pantai|kenjeran|laut|beach|sunset|senja)/.test(q) ? 'pesisir' : /(kota|mall|belanja|downtown|shop)/.test(q) ? 'kota' : 'heritage';
      const P = C.PACKAGES.find(p => p.id === pk);
      return { text: lang === 'en' ? `Here’s a plan: ${P.title.en}. ${P.tip.en}` : `Ini rencananya: ${P.title.id}. ${P.tip.id}`, itin: { title: P.title[lang], ids: P.places, note: '' }, src: t.faqSrc };
    }
    const place = C.PLACES.find(p => q.includes(p.name.toLowerCase())) || (q.includes('kenjeran') ? C.PLACE.kenjeran : null) || (q.includes('sampoerna') ? C.PLACE.sampoerna : null);
    if (place) { const to = 'p:' + place.id, o = C.plan(this.net, this.buses, this.placeOf('me'), this.placeOf(to), 0)[0]; return { text: o ? (lang === 'en' ? `Fastest: ${this.describe(o, 'en')}. About ${C.rangeTxt(o.total, 'en')}.` : `Paling cepat: ${this.describe(o, 'id')}. Sekitar ${C.rangeTxt(o.total, 'id')}.`) : t.noRoute, action: { from: 'me', to }, src: t.faqSrc }; }
    let best = null, bs = 0; for (const f of C.FAQ) { const s = f.k.filter(k => q.includes(k)).length; if (s > bs) { bs = s; best = f; } }
    if (best) return { text: best.a[lang], src: t.faqSrc };
    return { text: lang === 'en' ? 'Sorry, I can only help with fares, payment, hours, routes and sightseeing by Suroboyo Bus.' : 'Maaf, saya hanya bisa bantu soal tarif, cara bayar, jam, rute, dan wisata naik Suroboyo Bus.', src: t.faqSrc };
  }
  async send(text) {
    text = String(text || '').trim(); if (!text || this.state.typing || !this.C) return;
    const prior = this.state.msgs;
    this.setState({ msgs: [...prior, { me: true, text }], chatInput: '', typing: true, chatOpen: true });
    const ans = await this.ask(text, prior);
    this.setState(s => ({ typing: false, msgs: [...s.msgs, { bot: true, ...ans }] }));
  }
  renderVals() {
    const S = this.state, C = this.C, net = this.net, ready = !!(C && net && this.buses);
    const lang = S.lang, t = ready ? C.I18N[lang] : {};
    const wide = S.w >= 1100, narrow = !wide, sc = S.screen, page = !!PAGE[sc], pov = ready && this.isPov();
    const showTabs = narrow && ((page && sc !== 'pick') || sc === 'routes'), tabsH = showTabs ? 64 : 0;
    const fcShow = !!({ home: 1, wisata: 1, history: 1, account: 1 })[sc] && !!((S.trip && !S.done) || S.review);
    const phaseMax = S.done ? '82%' : ({ walk: '60%', pick: '66%', track: '52%', ride: '54%' }[S.phase] || '62%');
    const sheetMax = ({ results: '58%', detail: '76%', journey: phaseMax, routes: '56%', routeDetail: '64%', track: '52%' })[sc] || '70%';
    const mapW = S.w - 496, chatW = Math.max(320, Math.min(680, mapW - 48)), chatLeft = 496 + Math.max(24, (mapW - chatW) / 2);
    const L = wide
      ? { mapL: '496px', pL: '76px', pR: 'auto', pT: '0px', pB: '0px', pW: '420px', pMaxH: 'none', pRad: '0px', pShadow: 'none', handle: false, tcT: '16px', tcL: '512px', tcR: 'auto', tcW: Math.max(280, Math.min(440, mapW - 140)) + 'px', chT: 'auto', chB: '92px', chL: chatLeft + 'px', chR: 'auto', chW: chatW + 'px', chMaxH: Math.max(300, S.h - 130) + 'px', chRad: '16px', chBg: '#FFFFFF', chBlur: 'none', chBorder: '1px solid #E4DBCD', barL: chatLeft + 'px', barW: chatW + 'px', fabB: '0px', followL: '512px', followB: '100px', fcL: '92px', fcR: 'auto', fcW: '388px', fcB: '16px' }
      : { mapL: '0px', pL: '0px', pR: '0px', pT: page ? '0px' : 'auto', pB: tabsH + 'px', pW: 'auto', pMaxH: page ? 'none' : sheetMax, pRad: page ? '0px' : '16px 16px 0 0', pShadow: page ? 'none' : '0 -6px 30px rgba(21,23,28,.14)', handle: !page, tcT: '12px', tcL: '12px', tcR: '12px', tcW: 'auto', chT: '44px', chB: '0px', chL: '0px', chR: '0px', chW: 'auto', chMaxH: 'none', chRad: '16px 16px 0 0', chBg: '#FFFFFF', chBlur: 'none', chBorder: '0px solid transparent', barL: '0px', barW: '0px', fabB: (page ? tabsH + 12 + (fcShow ? 84 : 0) + (sc === 'place' || sc === 'package' ? 86 : 0) : S.sheetH + tabsH + 12) + 'px', followL: '12px', followB: (S.sheetH + 12) + 'px', fcL: '12px', fcR: '12px', fcW: 'auto', fcB: (tabsH + 12) + 'px' };
    L.pBg = page ? '#EFE8DE' : '#FFFFFF';
    const tabSt = {}; ['home', 'route', 'wisata', 'history', 'account'].forEach(k => { const on = S.tab === k; tabSt[k] = { bg: 'transparent', fg: on ? '#1664B0' : '#7A8090', fw: on ? '800' : '600', go: () => this.goTab(k) }; });
    const is = {}; Object.keys(TAB_OF).forEach(k => { is[k] = sc === k; });
    const v = {
      rootRef: this.rootRef, mapRef: this.mapRef, sheetRef: this.sheetRef, searchRef: this.searchRef, msgRef: this.msgRef, qrRef: this.qrRef,
      t, wide, narrow, L, is, tabSt, showTabs, top: { show: false }, steps: { bars: [] }, rows: [],
      showFab: narrow && !S.chatOpen && !S.modal && sc !== 'pick' && sc !== 'home', showRecenter: !page, fc: { show: false }, showFollow: pov && this.followOff,
      chatOpen: S.chatOpen, chatBackdrop: S.chatOpen && narrow, typing: S.typing, chatInput: S.chatInput, toastShow: !!S.toast, toastText: S.toast || '',
      langLbl: lang === 'id' ? 'EN' : 'ID', q: S.q, planText: S.planText, reportText: S.reportText,
      savedTrips: [], liveBuses: [], events: [], picks: [], opts: [], routeList: [], cats: [], pkgs: [], wisList: [], tripsList: [], txList: [], msgs: [], quick: [],
      toggleLang: () => this.setState(s => ({ lang: s.lang === 'id' ? 'en' : 'id' })), setId: () => this.setState({ lang: 'id' }), setEn: () => this.setState({ lang: 'en' }),
      back: () => this.back(), pickFrom: () => this.openPick('from'), pickTo: () => this.openPick('to'), swap: () => this.swap(), search: () => this.doSearch(),
      onQ: e => { this.setState({ q: e.target.value }); this.geoSearch(e.target.value); }, clearQ: () => { clearTimeout(this._geoT); this._geoN++; this.setState({ q: '', geo: [], geoLoading: false }); }, resumeTrip: () => this.resumeTrip(),
      openWhen: () => this.setState({ modal: 'when' }), openPax: () => this.setState({ modal: 'pax' }), openTopup: () => this.setState({ modal: 'topup' }), openQR: () => this.setState({ modal: 'qr' }), openReport: () => this.setState({ modal: 'report', reportCat: null, reportText: '' }), closeModal: () => this.setState({ modal: null }),
      startTrip: () => this.startTrip(), pay: () => this.pay(), nextLeg: () => this.nextLeg(), board: () => this.board(), alight: () => this.alight(), changeBus: () => this.changeBus(), cancelTrip: () => this.cancelTrip(), finishTrip: () => this.finishTrip(), saveTrip: () => this.saveTrip(), followBus: () => this.followBus(),
      doTopup: () => this.doTopup(), sendReport: () => this.sendReport(), onReportText: e => this.setState({ reportText: e.target.value }),
      toggleAlerts: () => this.setState(s => ({ alertsOn: !s.alertsOn })),
      openChat: () => this.setState({ chatOpen: true }), closeChat: () => this.setState({ chatOpen: false }), clearChat: () => this.setState({ msgs: [{ bot: true, hello: true }] }),
      onChatInput: e => this.setState({ chatInput: e.target.value }), onChatKey: e => { if (e.key === 'Enter') this.send(this.state.chatInput); }, sendChat: () => this.send(this.state.chatInput),
      onPlanText: e => this.setState({ planText: e.target.value }), onPlanKey: e => { if (e.key === 'Enter') v.sendPlan(); },
      sendPlan: () => { const x = this.state.planText.trim(); if (!x) return; this.setState({ planText: '' }); this.send((lang === 'en' ? 'Make me an itinerary: ' : 'Buatkan itinerary: ') + x); },
      zoomIn: () => this.map && this.map.zoomIn(), zoomOut: () => this.map && this.map.zoomOut(), recenter: () => { this.followOff = false; this.applyMap(); },
    };
    if (!ready) return v;
    const now = this.nowSec(), base = now + S.depart * 60, fareTotal = this.fare(), rb = r => this.rb(r);
    const fareRows = [{ lbl: `${S.pax.umum} × ${t.paxShortU}`, amt: C.rupiah(S.pax.umum * 5000, lang) }]; if (S.pax.pelajar) fareRows.push({ lbl: `${S.pax.pelajar} × ${t.paxShortP}`, amt: C.rupiah(S.pax.pelajar * 2500, lang) });
    v.fromLbl = this.keyName(S.from, t); v.toLbl = S.to ? this.keyName(S.to, t) : t.pickDest; v.toColor = S.to ? '#1B2333' : '#6B7079';
    v.departLbl = S.depart === 0 ? t.now : `${C.clock(base, lang)}`;
    v.paxLbl = `${S.pax.umum} ${t.paxShortU}` + (S.pax.pelajar ? ` · ${S.pax.pelajar} ${t.paxShortP}` : '');
    v.balanceTxt = C.rupiah(S.balance, lang);
    v.hasTicket = this.ticketOk(); v.noTicket = !v.hasTicket;
    v.ticketLbl = v.hasTicket ? `${t.ticketActive} · ${t.validUntil} ${C.clock(S.ticket.until, lang)}` : t.noTicket;
    v.tkBg = v.hasTicket ? '#1E9E5A' : 'rgba(255,255,255,.12)'; v.tkFg = '#fff';
    v.showSteps = sc === 'journey' && !!S.trip && !S.done;

    if (sc === 'home') {
      const hr = Math.floor(((now % 86400) + 86400) % 86400 / 3600);
      v.greet = (lang === 'en' ? (hr < 12 ? 'Good morning' : hr < 18 ? 'Good afternoon' : 'Good evening') : (hr < 11 ? 'Selamat pagi' : hr < 15 ? 'Selamat siang' : hr < 18 ? 'Selamat sore' : 'Selamat malam')) + ', Rina';
      v.savedTrips = S.saved.map(x => { const m = this.savedMins(x); return { from: this.keyName(x.from, t), fromSub: this.keySub(x.from, t), to: this.keyName(x.to, t), toSub: this.keySub(x.to, t), mins: m == null ? '–' : String(m), go: () => this.doSearch(x.from, x.to) }; }); v.hasSaved = v.savedTrips.length > 0;
      v.liveBuses = [...C.upcoming(net, this.buses, 'R1', 1, 'uinsa'), ...C.upcoming(net, this.buses, 'R1', -1, 'uinsa')].sort((a, b) => a.eta - b.eta).slice(0, 3).map(x => this.busVM(x, t, lang));
      v.events = C.EVENTS.map(e => ({ bg: bgUrl(C.PLACE[e.place].photo), day: e.day, mon: e.mon[lang], title: e.title[lang], time: e.time[lang], place: C.PLACE[e.place].name, open: () => this.openPlace(e.place) }));
      v.picks = FEATURED.map(id => this.placeVM(id, t, lang));
      v.tripActive = !!(S.trip && !S.done); if (v.tripActive) v.tripLbl = `${this.keyShort(S.trip.to, t)} · ${t.stepOf} ${S.leg + 1} ${t.ofWord} ${S.trip.legs.length}`;
    }
    if (sc === 'pick') {
      const q = S.q.trim().toLowerCase();
      v.pickTitle = S.pickField === 'from' ? t.pickFrom : t.pickTo; v.showMe = S.pickField === 'from' && !q; v.noQ = !q; v.hasQ = !!q;
      const pl = q ? C.PLACES.filter(p => (p.name + ' ' + (t[p.cat] || '')).toLowerCase().includes(q)) : POPULAR.map(id => C.PLACE[id]);
      v.pickPlacesLbl = q ? t.secPlaces : t.popular;
      v.pickPlaces = pl.slice(0, 8).map(p => ({ name: p.name, sub: t[p.cat] || '', bg: bgUrl(p.photo), tint: C.CAT_TINT[p.cat], pick: () => this.choosePick('p:' + p.id) }));
      const sl = q ? Object.values(net.stops).filter(s => (s.name + ' ' + s.road).toLowerCase().includes(q)) : [];
      v.pickStops = sl.slice(0, 6).map(s => ({ name: s.name, sub: s.road, dot: C.META[s.routes[0]].color, rids: s.routes.join(' · '), pick: () => this.choosePick('s:' + s.id) }));
      v.pickGeo = q ? S.geo.map(g => ({ name: g.name, sub: g.sub, pick: () => this.choosePick(g.key) })) : [];
      v.hasPickPlaces = v.pickPlaces.length > 0; v.hasPickStops = v.pickStops.length > 0; v.hasGeo = v.pickGeo.length > 0; v.geoLoading = !!q && S.geoLoading;
      v.noPickRes = !!q && !S.geoLoading && !v.hasPickPlaces && !v.hasPickStops && !v.hasGeo;
      v.chooseMe = () => this.choosePick('me');
    }
    if (sc === 'results') {
      v.resFrom = this.keyShort(S.from, t); v.resTo = this.keyName(S.to, t); v.resMeta = `${v.departLbl} · ${v.paxLbl}`;
      const tagK = { fast: 'tagFast', walk: 'tagWalk', direct: 'tagDirect' };
      v.opts = S.opts.map((o, i) => { const fb = o.legs.find(l => l.type === 'bus'), pre = o.legs[0].type === 'walk' ? o.legs[0].sec : 0;
        return { range: C.rangeTxt(o.total, lang), arrive: `${t.arrive} ${this.clockRange(base, o.total)}`, tags: o.tags.map(k => ({ lbl: t[tagK[k]], bg: k === 'fast' ? '#D6E5F4' : '#E6F4EA' })), xfer: o.transfers ? t.transfer1 : t.direct, chips: this.chipsOf(o, t, lang), first: fb ? `${t.nextBusAt} ${C.rangeTxt(pre + fb.wait, lang)} · ${net.stops[fb.board].name}` : '', fare: C.rupiah(fareTotal, lang), open: () => this.nav('detail', { optIdx: i, review: { from: S.from, to: S.to, opt: o } }) }; });
      v.noOpts = S.opts.length === 0;
      if (v.noOpts) { const a = C.nearStops(net, this.placeOf(S.from))[0], b = C.nearStops(net, this.placeOf(S.to))[0]; v.noOptsTxt = a && b && a.s.id === b.s.id ? t.sameStop : t.noRoute; }
    }
    if (sc === 'detail' && S.opts[S.optIdx]) {
      const o = S.opts[S.optIdx];
      v.dt = { dest: this.keyName(S.to, t), dur: C.rangeTxt(o.total, lang), arr: this.clockRange(base, o.total), fare: C.rupiah(fareTotal, lang), fareRows, cta: S.depart > 0 ? t.remindMe : t.start };
      v.rows = this.tripRows(o, S.from, S.to, base, t, lang);
    }
    if (sc === 'journey' && S.trip) this.journeyVals(v, t, lang, now);
    if (sc === 'track' && S.trackId) this.trackVals(v, t, lang);
    if (sc === 'routes') v.routeList = Object.values(net.routes).map(r => ({ rid: r.id, ink: r.ink, name: C.META[r.id].name[lang], meta: `${r.stops.length} ${t.stopsWord} · ${this.buses.filter(b => b.route === r.id).length} ${t.busesActive}`, open: () => this.nav('routeDetail', { routeId: r.id, routeDir: 1 }) }));
    if (sc === 'routeDetail') this.routeVals(v, t, lang);
    v.rowsScreen = is.detail || is.routeDetail || pov;
    if (sc === 'wisata') {
      v.cats = ['all', ...C.CATS].map(c => { const on = S.wisCat === c; return { lbl: t[c], bg: on ? '#1664B0' : '#fff', fg: on ? '#fff' : '#1B2333', bd: on ? '#1664B0' : '#DDD3C3', pick: () => this.setState({ wisCat: c }) }; });
      v.pkgs = C.PACKAGES.filter(k => S.wisCat === 'all' || k.cat === S.wisCat || k.places.some(id => C.PLACE[id].cat === S.wisCat)).map(k => this.pkgVM(k, t, lang)); v.hasPkgs = v.pkgs.length > 0;
      v.wisList = C.PLACES.filter(p => p.wis && (S.wisCat === 'all' || p.cat === S.wisCat)).map(p => this.placeVM(p.id, t, lang));
    }
    if (sc === 'place' && S.placeId) {
      const p = C.PLACE[S.placeId], n = this.nearOf(p.id), s = net.stops[n.s.id], st = S.stamps.includes(p.id);
      v.pl = { name: p.name, cat: t[p.cat], desc: p.desc ? p.desc[lang] : '', hours: p.hours ? p.hours[lang] : '–', price: p.price ? `${p.from ? t.fromPrice + ' ' : ''}${C.rupiah(p.price, lang)}` : t.free, bg: bgUrl(p.photo), tint: C.CAT_TINT[p.cat], hasPhoto: !!p.photo, stop: s.name, stopSub: `${C.fmtM(n.m, lang)} ${t.walkFrom}`, routes: s.routes.map(rb), stampTxt: st ? t.stampGot : t.stampHint, stampBg: st ? '#D6E5F4' : '#EAF1F9', go: () => this.goPlace(p.id) };
    }
    if (sc === 'package' && S.pkgId) {
      const k = C.PACKAGES.find(x => x.id === S.pkgId);
      if (!this.pkgCache[k.id]) this.pkgCache[k.id] = k.places.slice(0, -1).map((id, i) => C.plan(net, this.buses, this.placeOf('p:' + id), this.placeOf('p:' + k.places[i + 1]), 300)[0] || null);
      const legs = this.pkgCache[k.id], first = C.PLACE[k.places[0]];
      v.pg = { title: k.title[lang], dur: `${k.dur[lang]} · ${k.places.length} ${t.placesN}`, desc: k.desc[lang], tip: k.tip[lang], bg: bgUrl(first.photo), tint: C.CAT_TINT[k.cat], startLbl: `${t.startPkg} ${first.name}`, start: () => this.goPlace(k.places[0]),
        items: k.places.map((id, i) => { const p = C.PLACE[id], o = legs[i]; return { n: i + 1, name: p.name, cat: t[p.cat], bg: bgUrl(p.photo), tint: C.CAT_TINT[p.cat], open: () => this.openPlace(id), hasLeg: !!o, chips: o ? this.chipsOf(o, t, lang) : [], legTime: o ? C.rangeTxt(o.total, lang) : '', line: i < k.places.length - 1 ? '2px dashed #C7BAA5' : NONE }; }) };
    }
    if (sc === 'history') {
      const seg = on => ({ bg: on ? '#fff' : 'transparent', sh: on ? '0 1px 3px rgba(21,23,28,.12)' : 'none' });
      v.hs = { trips: { ...seg(S.histTab === 'trips'), set: () => this.setState({ histTab: 'trips' }) }, tx: { ...seg(S.histTab === 'tx'), set: () => this.setState({ histTab: 'tx' }) } };
      v.histTrips = S.histTab === 'trips'; v.histTx = !v.histTrips;
      v.tripsList = S.trips.map(x => ({ date: x.today ? t.today : x.date[lang], title: `${this.keyShort(x.from, t)} → ${this.keyShort(x.to, t)}`, routes: x.routes.map(rb), meta: `${x.dur} ${t.min} · ${C.rupiah(x.fare, lang)}`, repeat: () => this.doSearch(x.from, x.to) }));
      v.txList = S.txs.map(x => ({ title: x.title[lang], date: x.today ? t.today : x.date[lang], amt: (x.amt > 0 ? '+' : '') + C.rupiah(x.amt, lang), color: x.amt > 0 ? '#15803D' : '#1B2333', isTop: x.amt > 0, isPay: x.amt <= 0, iconBg: x.amt > 0 ? '#E3F4E8' : '#F5F0E8' }));
    }
    if (sc === 'account') {
      const wis = C.PLACES.filter(p => p.wis), n = 20 + S.trips.length;
      v.acc = { trips: String(n), stamps: `${S.stamps.length}/${wis.length}`, co2: `${(n * 0.9).toFixed(1).replace('.', lang === 'en' ? '.' : ',')} kg`, passSub: `${S.stamps.length} ${t.of} ${wis.length} ${t.stamps}`,
        stampList: wis.map((p, i) => { const got = S.stamps.includes(p.id); return { name: p.name, bg: got ? bgUrl(p.photo) : 'none', tint: got ? C.CAT_TINT[p.cat] : '#F5F0E8', border: got ? '3px solid #1664B0' : '2px dashed #CFCFC9', color: got ? '#1B2333' : '#5D6577', rot: got ? `rotate(${(i % 3 - 1) * 6}deg)` : 'none', open: () => this.openPlace(p.id) }; }),
        favs: S.favStops.map(id => ({ name: net.stops[id].name, sub: net.stops[id].road, routes: net.stops[id].routes.map(rb), open: () => this.nav('routeDetail', { routeId: net.stops[id].routes[0], routeDir: 1 }) })) };
      v.lg = { id: lang === 'id' ? '#fff' : 'transparent', en: lang === 'en' ? '#fff' : 'transparent' };
      v.sw = { bg: S.alertsOn ? '#1664B0' : '#D6CBB9', x: S.alertsOn ? '23px' : '3px' };
    }
    if (fcShow) {
      if (S.trip && !S.done) v.fc = { show: true, label: t.tripOngoing, title: `${this.keyShort(S.trip.from, t)} → ${this.keyShort(S.trip.to, t)}`, sub: `${t.stepOf} ${S.leg + 1} ${t.ofWord} ${S.trip.legs.length}`, cta: t.resume, open: () => this.resumeTrip(), canClose: false };
      else { const R = S.review, o = R.opt; v.fc = { show: true, label: t.reviewLbl, title: `${this.keyShort(R.from, t)} → ${this.keyShort(R.to, t)}`, sub: `${C.rangeTxt(o.total, lang)} · ${o.legs.filter(l => l.type === 'bus').map(l => l.route).join(' + ')}`, cta: t.reviewCta, open: () => this.openReview(), canClose: true, close: () => this.setState({ review: null }) }; }
    }
    v.modalOpen = !!S.modal;
    if (S.modal) {
      v.mb = wide ? { l: '50%', r: 'auto', t: '50%', b: 'auto', w: '420px', tf: 'translate(-50%,-50%)', rad: '16px' } : { l: '0px', r: '0px', t: 'auto', b: '0px', w: 'auto', tf: 'none', rad: '16px 16px 0 0' };
      const md = { title: { when: t.whenTitle, pax: t.paxTitle, pay: t.payTitle, qr: t.qrTitle, topup: t.topupTitle, report: t.reportTitle }[S.modal] };
      md[S.modal] = true;
      if (S.modal === 'when') md.whenOpts = [0, 15, 30, 60].map(m => ({ lbl: m === 0 ? t.now : t['in' + m], sub: C.clock(now + m * 60, lang), bd: S.depart === m ? '#1664B0' : '#E4DBCD', pick: () => this.setState({ depart: m }) }));
      if (S.modal === 'pax') { const set = (k, d) => () => this.setState(s => { const p = { ...s.pax, [k]: Math.max(0, Math.min(6, s.pax[k] + d)) }; return p.umum + p.pelajar < 1 ? null : { pax: p }; }); md.paxRows = [{ lbl: t.paxUmum, sub: C.rupiah(5000, lang), n: S.pax.umum, inc: set('umum', 1), dec: set('umum', -1) }, { lbl: t.paxPelajar, sub: `${C.rupiah(2500, lang)} · ${t.paxPelajarSub}`, n: S.pax.pelajar, inc: set('pelajar', 1), dec: set('pelajar', -1) }]; }
      if (S.modal === 'pay') { const o = S.opts[S.optIdx]; md.payRoutes = o ? o.legs.filter(l => l.type === 'bus').map(l => rb(l.route)) : []; md.payTrip = `${this.keyShort(S.from, t)} → ${this.keyShort(S.to, t)}`; md.fareRows = fareRows; md.total = C.rupiah(fareTotal, lang); const pm = S.payMethod; md.isWallet = pm === 'wallet'; md.payBtn = md.isWallet ? `${t.pay} ${md.total}` : t.startNow; md.payOpts = [{ id: 'onsite', lbl: t.payOnsite, sub: t.payOnsiteSub, isQR: true, isWallet: false }, { id: 'wallet', lbl: t.payWallet, sub: `${t.balance}: ${C.rupiah(S.balance, lang)}`, isQR: false, isWallet: true }].map(p => ({ ...p, bd: pm === p.id ? '#1664B0' : '#E4DBCD', radio: pm === p.id ? '7px solid #1664B0' : '2px solid #C7BAA5', pick: () => this.setState({ payMethod: p.id }) })); }
      if (S.modal === 'qr') { if (S.ticket) md.code = S.ticket.code; const live = !!(S.trip && !S.done); md.noTkTitle = live ? t.onsiteTitle : t.noTicket; md.noTkSub = live ? t.onsiteSub : t.noTicketSub; }
      if (S.modal === 'topup') { md.amts = [20000, 50000, 100000, 200000].map(a => ({ lbl: C.rupiah(a, lang), bd: S.topAmt === a ? '#1664B0' : '#E4DBCD', pick: () => this.setState({ topAmt: a }) })); md.methods = ['QRIS', 'BCA VA', 'GoPay', 'OVO'].map(m => { const on = S.topMethod === m; return { lbl: m, bg: on ? '#1664B0' : '#fff', fg: on ? '#fff' : '#1B2333', bd: on ? '#1664B0' : '#DDD3C3', pick: () => this.setState({ topMethod: m }) }; }); md.topBtn = `${t.topup} ${C.rupiah(S.topAmt, lang)}`; }
      if (S.modal === 'report') { const b = this.bus(this.povBusId()); md.repBus = b ? `${b.route} · ${b.id} · ${b.plate}` : ''; md.repCats = ['rAC', 'rFull', 'rDriver', 'rClean', 'rLost', 'rOther'].map(k => { const on = S.reportCat === k; return { lbl: t[k], bg: on ? '#1664B0' : '#fff', fg: on ? '#fff' : '#1B2333', bd: on ? '#1664B0' : '#DDD3C3', pick: () => this.setState({ reportCat: k }) }; }); }
      v.md = md;
    } else { v.md = {}; v.mb = {}; }
    v.msgs = S.msgs.map(m => {
      if (m.hello) return { bot: true, me: false, text: t.chatHello, hasSrc: false, hasAction: false, hasItin: false, itin: { items: [] } };
      const it = m.itin && m.itin.ids.length ? { title: m.itin.title, note: m.itin.note, hasNote: !!m.itin.note, startLbl: `${t.startPkg} ${C.PLACE[m.itin.ids[0]].name}`, start: () => this.goPlace(m.itin.ids[0]), items: m.itin.ids.map((id, i) => { const p = C.PLACE[id], ns = net.stops[this.nearOf(id).s.id]; return { n: i + 1, name: p.name, sub: `${t[p.cat]} · ${ns.short} (${ns.routes.join('/')})`, bg: bgUrl(p.photo), tint: C.CAT_TINT[p.cat], open: () => this.openPlace(id) }; }) } : { items: [] };
      return { bot: !!m.bot, me: !!m.me, text: m.text, hasSrc: !!m.src, src: m.src || '', hasAction: !!m.action, actionLbl: m.action ? `${t.viewRoute}: ${this.keyShort(m.action.from, t)} → ${this.keyShort(m.action.to, t)}` : '', doAction: m.action ? () => this.doSearch(m.action.from, m.action.to) : null, hasItin: !!(m.itin && m.itin.ids.length), itin: it };
    });
    v.quick = ['q1', 'q2', 'q3', 'q4'].map(k => ({ text: t[k], ask: () => this.send(t[k]) }));
    return v;
  }
  tripRows(o, from, to, base, t, lang) {
    const C = this.C, net = this.net, nodes = [], segs = []; let tc = base;
    nodes.push({ title: this.keyName(from, t), kind: 'start', right: C.clock(tc, lang) });
    o.legs.forEach((l, i) => {
      if (l.type === 'walk') {
        segs.push({ walk: true, title: `${t.walking} ${C.fmtM(l.m, lang)} · ${Math.max(1, Math.round(l.sec / 60))} ${t.min}` }); tc += l.sec;
        nodes.push(l.last ? { title: this.keyName(to, t), kind: 'end', right: this.clockRange(base, o.total) } : { title: net.stops[l.to].name, kind: 'stop' });
      } else {
        const prev = nodes[nodes.length - 1], xfer = i > 0 && o.legs[i - 1].type === 'bus';
        prev.sub = (xfer ? t.transfer1 + ' · ' : '') + `${t.ride} ${l.route} ${this.headTxt(l.route, l.dir, t, lang)}`;
        tc += l.wait; if (!prev.right) prev.right = C.clock(tc, lang);
        segs.push({ bus: true, rid: l.route, ink: C.META[l.route].ink, color: C.META[l.route].color, title: `${l.n} ${t.stopsWord} · ${C.rangeTxt(l.sec, lang)}` }); tc += l.sec;
        const last = i === o.legs.length - 1;
        nodes.push({ title: net.stops[l.alight].name, kind: last ? 'end' : 'stop', sub: !last && o.legs[i + 1].type === 'walk' ? t.getOffWord : '', right: last ? this.clockRange(base, o.total) : '' });
      }
    });
    const segSt = s => s.walk ? '3px dotted #9A9EA5' : `4px solid ${s.color}`, rows = [];
    nodes.forEach((n, i) => {
      rows.push(row({ node: true, size: n.kind === 'end' ? '16px' : '14px', radius: n.kind === 'end' ? '4px' : '50%', fill: n.kind === 'start' ? '#1664B0' : n.kind === 'end' ? '#1B2333' : '#fff', border: n.kind === 'stop' ? '3px solid #1B2333' : NONE, title: n.title, fw: '800', sub: n.sub || '', right: n.right || '', minH: '56px', seg: segs[i] ? segSt(segs[i]) : NONE }));
      if (segs[i]) { const s = segs[i]; rows.push(row({ isBus: !!s.bus, rid: s.rid || '', ink: s.ink || '', title: s.title, fs: '15px', color: '#5D6577', minH: s.bus ? '60px' : '46px', seg: segSt(s) })); }
    });
    return linkRows(rows);
  }
  busIdVM(b, t, lang) { const c = CROWD[b.crowd]; return { rid: b.route, ink: this.C.META[b.route].ink, code: b.id, sub: `${b.plate} · ${this.headTxt(b.route, b.dir, t, lang)}`, crowd: t['c' + b.crowd], cBg: c.bg, cFg: c.fg, lowFloor: b.lowFloor }; }
  journeyVals(v, t, lang, now) {
    const S = this.state, C = this.C, net = this.net, tr = S.trip, n = tr.legs.length, lg = tr.legs[S.leg];
    v.steps = { lbl: `${t.stepOf} ${Math.min(S.leg + 1, n)} ${t.ofWord} ${n} · ${this.keyShort(tr.to, t)}`, bars: tr.legs.map((_, i) => ({ bg: i <= S.leg ? '#1664B0' : '#E4DBCD' })) };
    if (S.done) {
      const B = this.placeOf(tr.to), stp = S.newStamp ? C.PLACE[S.newStamp] : null;
      v.isDone = true;
      v.dn = { title: `${t.arrivedAt} ${B ? B.name : ''}`, dur: `${Math.round(tr.total / 60)} ${t.min}`, fare: C.rupiah((S.ticket && S.ticket.fare) || 5000, lang), walk: C.fmtM(tr.walkM, lang), stops: `${tr.legs.filter(l => l.type === 'bus').reduce((a, l) => a + l.n, 0)} ${t.stopsWord}`, hasStamp: !!stp, stampName: stp ? stp.name : '', stampBg: stp ? bgUrl(stp.photo) : 'none', saveLbl: S.tripSaved ? t.savedTrip : t.saveTrip, starFill: S.tripSaved ? '#F5B800' : 'none', starStroke: S.tripSaved ? '#F5B800' : '#1B2333' };
      return;
    }
    if (S.phase === 'walk') {
      v.isWalk = true;
      const target = lg.last ? this.keyName(tr.to, t) : net.stops[lg.to].name;
      const sp = (!lg.last && tr.from === 'me' && lg.to === 'uinsa') ? WALKTXT.uinsa : (lg.last && lg.from === 'basra' && tr.to === 'p:tp') ? WALKTXT.tp : null;
      const road = lg.last ? '' : net.stops[lg.to].road, en = lang === 'en';
      const g = sp ? sp[lang] : { c: en ? 'Only cross at zebra crossings or footbridges.' : 'Menyeberang hanya di zebra cross atau JPO.', s: lg.last ? (en ? ['Get off and follow the dotted line on the map.', `Walk about ${C.fmtM(lg.m, lang)}.`, `${target} is at the end of the line.`] : ['Turun dari bus, lalu ikuti garis titik-titik di peta.', `Jalan sekitar ${C.fmtM(lg.m, lang)}.`, `${target} ada di ujung garis.`]) : (en ? [`Head to ${road}.`, 'Follow the dotted line on the map.', `${target} is at the end of the line.`] : [`Jalan menuju ${road}.`, 'Ikuti garis titik-titik di peta.', `${target} ada di ujung garis.`]) };
      v.wk = { title: `${t.walkTo} ${target}`, mins: `${t.walkMins} ${Math.max(1, Math.round(lg.sec / 60))} ${t.minutes} · ${C.fmtM(lg.m, lang)}`, callout: g.c, steps: g.s.map((x, i, a) => ({ n: i + 1, text: x, line: i < a.length - 1 ? '#E4DBCD' : 'transparent' })), cta: lg.last ? t.imArrived : t.imAtStop, hasBus: !lg.last, bus: '' };
      if (!lg.last) { const nb = tr.legs[S.leg + 1], u = nb && nb.type === 'bus' ? this.upcomingFor(nb)[0] : null; v.wk.bus = u ? `${nb.route} ${this.headTxt(nb.route, nb.dir, t, lang)}: ${this.awayTxt(u, t)} · ${C.rangeTxt(u.eta, lang)}` : t.noBus; }
      return;
    }
    if (S.phase === 'pick') {
      v.isPickBus = true;
      const st = net.stops[lg.board];
      v.pk = { rid: lg.route, ink: C.META[lg.route].ink, title: this.headTxt(lg.route, lg.dir, t, lang), sub: `${t.boardAt} ${st.name}`, isX: S.leg > 0 && tr.legs[S.leg - 1].type === 'bus', xTitle: `${t.transferAt} ${st.name}`, buses: this.upcomingFor(lg).slice(0, 3).map(x => ({ ...this.busVM(x, t, lang), track: () => this.trackBus(x.b.id) })) };
      v.pk.noBus = v.pk.buses.length === 0;
      return;
    }
    const b = this.bus(S.jBus); if (!b) return;
    const r = net.routes[b.route], col = C.META[b.route].color, here = C.dwelling(b) ? b.atStop : null;
    v.bi = this.busIdVM(b, t, lang);
    if (S.phase === 'track') {
      v.isJTrack = true; v.showBusId = true;
      const nx = C.busNext(net, b), awayB = C.away(net, b, lg.board), etaB = C.eta(net, b, lg.board);
      let ids = []; if (here) ids.push(here);
      if (here !== lg.board) { const bi = nx.findIndex(s => s.id === lg.board); ids = bi >= 0 ? [...ids, ...nx.slice(0, bi + 1).map(s => s.id)] : [lg.board]; }
      ids = [...ids, ...lg.stops.slice(1)];
      const rows = [];
      if (!here) rows.push(row({ busIcon: true, title: `${b.id} · ${t.yourBus}`, color: '#5D6577', fw: '700', seg: `4px solid ${col}` }));
      const bIdx = ids.indexOf(lg.board);
      ids.forEach((id, i) => { const isB = id === lg.board, isA = id === lg.alight, isH = id === here && i === 0, e = isH ? 0 : C.eta(net, b, id);
        rows.push(row({ node: !isH, busIcon: isH, size: isB || isA ? '18px' : '12px', fill: isA ? '#1B2333' : '#fff', border: isB ? '4px solid #1664B0' : isA ? '4px solid #1664B0' : '2px solid #C7BAA5', title: net.stops[id].name, fw: isB || isA ? '800' : '600', tag: isB ? t.yourStop : isA ? t.getOffWord : isH ? t.stopping : '', tagBg: isB ? '#D6E5F4' : isA ? '#FBDEE0' : '#F5F0E8', right: (!isB && !isH && i < bIdx && e != null) ? C.rangeTxt(e, lang) : '', seg: `4px solid ${col}` })); });
      v.rows = linkRows(rows);
      v.bi.myStop = net.stops[lg.board].short; v.bi.myAway = awayB === 0 ? t.atStopNow : `${this.awayTxt({ n: awayB, eta: etaB }, t)} · ${C.rangeTxt(etaB || 0, lang)}`;
      v.top = awayB === 0 ? { show: true, bg: '#D21624', fg: '#fff', sub: 'rgba(255,255,255,.92)', label: t.yourBus, title: `${b.id} ${t.isAt} ${net.stops[lg.board].short}`, big: '', small: '', hasBar: false }
        : { show: true, bg: '#1664B0', fg: '#fff', sub: 'rgba(255,255,255,.82)', label: `${b.id} · ${here ? t.stoppedAt : t.nextStop}`, title: here ? net.stops[here].short : (nx[0] ? net.stops[nx[0].id].short : ''), big: String(awayB == null ? '–' : awayB), small: t.toYourStop, hasBar: false };
      return;
    }
    v.isRide = true;
    const A = lg.alight, boardAt = C.stopAt(r, lg.board).at, aAt = C.stopAt(r, A).at, pBus = C.along(r, boardAt, b.d, lg.dir) || 0;
    const items = lg.stops.map(id => { const pS = C.along(r, boardAt, C.stopAt(r, id).at, lg.dir) || 0; const isH = b.atStop === id && Math.abs(pS - pBus) < 1 && (C.dwelling(b) || id === A); return { id, st: isH ? 'here' : pS < pBus - 0.5 ? 'passed' : 'future' }; });
    const rows = []; let busAt = -1, firstF = true;
    items.forEach(it => {
      if (it.st === 'future' && busAt < 0) { busAt = rows.length; rows.push(row({ busIcon: true, title: `${b.id} · ${t.yourBus}`, color: '#5D6577', fw: '700' })); }
      if (it.st === 'here') busAt = rows.length;
      const fin = it.id === A, nxt = it.st === 'future' && firstF; if (nxt) firstF = false;
      const e = it.st === 'future' ? C.eta(net, b, it.id) : null;
      rows.push(row({ node: it.st !== 'here', busIcon: it.st === 'here', size: fin ? '18px' : nxt ? '16px' : '12px', fill: it.st === 'passed' ? '#1B2333' : fin ? '#1B2333' : '#fff', border: it.st === 'passed' ? NONE : fin ? '4px solid #1664B0' : nxt ? '3px solid #1B2333' : '2px solid #C7BAA5', title: net.stops[it.id].name, fw: fin || nxt || it.st === 'here' ? '800' : '500', color: it.st === 'passed' ? '#5D6577' : '#1B2333', tag: fin ? t.getOff : it.st === 'here' ? t.stopping : '', tagBg: fin ? '#FBDEE0' : '#F5F0E8', right: e != null && !fin ? C.rangeTxt(e, lang) : '' }));
    });
    rows.forEach((x, i) => { x.seg = i < busAt ? '4px solid #1B2333' : `4px solid ${col}`; });
    v.rows = linkRows(rows);
    const arrived = b.atStop === A && (C.dwelling(b) || Math.abs(b.d - aAt) < 1), left = C.away(net, b, A), etaA = C.eta(net, b, A) || 0;
    const dwellMid = here && here !== A && here !== lg.board ? here : null, nfut = items.find(x => x.st === 'future');
    v.rd = { title: `${t.alightAt} ${net.stops[A].name}`, busLine: `${b.route} · ${b.id}`, arrive: arrived ? t.now : this.clockRange(now, etaA), left: arrived ? '0 ' + t.stopsWord : `${left == null ? 0 : left} ${t.stopsWord}`, dist: C.fmtM(Math.max(0, C.along(r, b.d, aAt, lg.dir) || 0), lang), btnBg: arrived ? '#D21624' : '#fff', btnFg: arrived ? '#fff' : '#1B2333', btnBorder: arrived ? '0px solid transparent' : '1.5px solid #D6CBB9' };
    const alertOn = !arrived && left != null && left <= 1 && pBus > 1;
    v.top = arrived ? { show: true, bg: '#D21624', fg: '#fff', sub: 'rgba(255,255,255,.92)', label: t.getOffNow, title: net.stops[A].short, big: '', small: '', hasBar: false }
      : alertOn ? { show: true, bg: '#D21624', fg: '#fff', sub: 'rgba(255,255,255,.92)', label: t.prepare, title: net.stops[A].short, big: '1', small: t.stopsToGo, hasBar: false }
      : { show: true, bg: '#1664B0', fg: '#fff', sub: 'rgba(255,255,255,.82)', label: dwellMid ? t.stoppedAt : t.nextStop, title: dwellMid ? net.stops[dwellMid].short : (nfut ? net.stops[nfut.id].short : ''), big: String(left == null ? '' : left), small: t.stopsToGo, hasBar: true, pct: Math.max(0, Math.min(100, pBus / Math.max(1, C.along(r, boardAt, aAt, lg.dir) || 1) * 100)) + '%' };
  }
  trackVals(v, t, lang) {
    const S = this.state, C = this.C, net = this.net, b = this.bus(S.trackId); if (!b) return;
    const col = C.META[b.route].color, here = C.dwelling(b) ? b.atStop : null, nx = C.busNext(net, b).slice(0, 10);
    v.isTrackS = true; v.showBusId = true; v.bi = this.busIdVM(b, t, lang);
    const rows = [];
    rows.push(here ? row({ busIcon: true, title: net.stops[here].name, fw: '800', tag: t.stopping, seg: `4px solid ${col}` }) : row({ busIcon: true, title: `${b.id}`, color: '#5D6577', fw: '700', seg: `4px solid ${col}` }));
    nx.forEach((s, i) => { const on = S.remindStop === s.id, e = C.eta(net, b, s.id);
      rows.push(row({ node: true, size: i === 0 ? '16px' : '12px', fill: '#fff', border: i === 0 ? '3px solid #1B2333' : '2px solid #C7BAA5', title: net.stops[s.id].name, fw: i === 0 ? '800' : '600', right: e != null ? C.rangeTxt(e, lang) : '', hasBell: true, bellBg: on ? '#D6E5F4' : '#F5F0E8', bellFill: on ? '#1664B0' : 'none', toggleBell: () => this.toggleRemind(s.id), seg: `4px solid ${col}`, minH: '52px' })); });
    v.rows = linkRows(rows);
    const n0 = nx[0], rem = S.remindStop, near = rem ? C.away(net, b, rem) : null;
    v.top = rem && near != null && near <= 1 ? { show: true, bg: '#D21624', fg: '#fff', sub: 'rgba(255,255,255,.92)', label: t.toastNear, title: net.stops[rem].short, big: '', small: '', hasBar: false }
      : { show: true, bg: '#1664B0', fg: '#fff', sub: 'rgba(255,255,255,.82)', label: `${b.id} · ${here ? t.stoppedAt : t.nextStop}`, title: here ? net.stops[here].short : (n0 ? net.stops[n0.id].short : ''), big: n0 && !here ? C.rangeTxt(C.eta(net, b, n0.id) || 0, lang) : '', small: '', hasBar: false };
  }
  routeVals(v, t, lang) {
    const S = this.state, C = this.C, net = this.net, r = net.routes[S.routeId], col = r.color, dir = r.loop ? 1 : S.routeDir;
    const ord = (r.loop || dir > 0) ? r.stops : [...r.stops].reverse();
    const bs = this.buses.filter(b => b.route === r.id && (r.loop || b.dir === dir));
    v.rdx = { rid: r.id, ink: r.ink, name: C.META[r.id].name[lang], isLoop: r.loop, hasDirs: !r.loop, dirs: r.loop ? [] : [1, -1].map(d => ({ lbl: `${t.toward} ${C.headsign(net, r.id, d)}`, bg: S.routeDir === d ? '#fff' : 'transparent', sh: S.routeDir === d ? '0 1px 3px rgba(21,23,28,.12)' : 'none', set: () => this.setState({ routeDir: d }) })) };
    const rows = [];
    ord.forEach((s, i) => {
      bs.filter(b => { const n0 = C.busNext(net, b)[0]; return n0 && n0.id === s.id; }).forEach(b => { const e = C.eta(net, b, s.id); rows.push(row({ busIcon: true, title: b.id, fw: '800', sub: `${t['c' + b.crowd]} · ${C.rangeTxt(e || 0, lang)} → ${net.stops[s.id].short}`, onClick: () => this.openTrack(b.id), cursor: 'pointer', hasChev: true, seg: `4px solid ${col}`, minH: '56px' })); });
      const st = net.stops[s.id], others = st.routes.filter(x => x !== r.id);
      rows.push(row({ node: true, size: i === 0 || i === ord.length - 1 ? '16px' : '12px', fill: '#fff', border: `3px solid ${col}`, title: st.name, fw: i === 0 || i === ord.length - 1 ? '800' : '600', sub: st.road, badges: others.map(x => this.rb(x)), seg: `4px solid ${col}` }));
    });
    v.rows = linkRows(rows);
  }
  render() { return <AppView v={this.renderVals()} />; }
}
