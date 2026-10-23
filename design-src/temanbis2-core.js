import { ROUTES_RAW, PHOTOS } from './temanbis2-routes.js';
import { USER, WALK1, WALK1_M, WALK2 } from './temanbis-data.js';

export { USER, PHOTOS };
export const V = 5.6, DWELL = 18, WALK_V = 1.2, HEADWAY = 600;
export const FARE = { umum: 5000, pelajar: 2500 };

export const META = {
  R1: { color: '#F2711C', ink: '#C2490C', name: { id: 'Purabaya – Rajawali', en: 'Purabaya – Rajawali' } },
  R2: { color: '#2F80ED', ink: '#1C5FC4', name: { id: 'ITS – Siola', en: 'ITS – Siola' } },
  R3: { color: '#12A37A', ink: '#0B7A5A', name: { id: 'Kenjeran Park – Tugu Pahlawan', en: 'Kenjeran Park – Tugu Pahlawan' } },
  R4: { color: '#8B5CF6', ink: '#6D3FE0', name: { id: 'UNESA – Joyoboyo', en: 'UNESA – Joyoboyo' } },
  R5: { color: '#E0457B', ink: '#B8285C', name: { id: 'Putaran Kota Lama', en: 'Old Town Loop' } },
};
const ROAD = { purabaya: 'Bungurasih', menanggal: 'Jl. Ahmad Yani', margorejo: 'Jl. Ahmad Yani', uinsa: 'Jl. Ahmad Yani', royal: 'Jl. Ahmad Yani', joyoboyo: 'Jl. Wonokromo', kbs: 'Jl. Raya Darmo', bungkul: 'Jl. Raya Darmo', darmo: 'Jl. Raya Darmo', urip: 'Jl. Urip Sumoharjo', basra: 'Jl. Basuki Rahmat', siola: 'Jl. Tunjungan', pahlawan: 'Jl. Pahlawan', rajawali: 'Jl. Rajawali', its: 'Bundaran ITS', galaxy: 'Jl. Kertajaya Indah', kertajaya: 'Jl. Kertajaya', gubeng: 'Jl. Raya Gubeng', monkasel: 'Jl. Pemuda', grahadi: 'Jl. Gubernur Suryo', kenpark: 'Jl. Sukolilo', bulak: 'Jl. Kenjeran', kenjeran: 'Jl. Kenjeran', kaza: 'Jl. Kapas Krampung', tambaksari: 'Jl. Tambaksari', chenghoo: 'Jl. Kusuma Bangsa', unesa: 'Jl. Citraraya Unesa', lontar: 'Jl. Mayjen Jonosewojo', hrm: 'Jl. HR Muhammad', ciputra: 'Jl. Mayjen Sungkono', adityawarman: 'Jl. Adityawarman', sampoerna: 'Jl. Taman Sampoerna', ampel: 'Jl. KH Mas Mansyur', kyakya: 'Jl. Kembang Jepun' };

export const CATS = ['heritage', 'food', 'religi', 'nature', 'shop'];
export const CAT_TINT = { heritage: '#EADCC8', food: '#F5D8C3', religi: '#D6E6D8', nature: '#D3E4EE', shop: '#E5DCF0', campus: '#ECECE7', transit: '#ECECE7' };
const T = (id, en) => ({ id, en });
export const PLACES = [
  { id: 'tugu', cat: 'heritage', wis: 1, ll: [112.7378, -7.2458], name: 'Tugu Pahlawan', price: 5000, hours: T('Sel–Min · 08.00–15.30', 'Tue–Sun · 8:00–15:30'), desc: T('Monumen setinggi 41 m untuk mengenang Pertempuran 10 November 1945. Di bawahnya ada Museum 10 Nopember dengan diorama dan rekaman pidato Bung Tomo.', 'A 41 m monument to the Battle of Surabaya on 10 November 1945. The underground museum holds dioramas and recordings of Bung Tomo’s speech.') },
  { id: 'sampoerna', cat: 'heritage', wis: 1, ll: [112.7343, -7.2310], name: 'House of Sampoerna', price: 0, hours: T('Setiap hari · 09.00–18.00', 'Daily · 9:00–18:00'), desc: T('Bangunan kolonial tahun 1862 yang kini jadi museum kretek. Dari lantai atas kamu bisa melihat pekerja melinting rokok dengan tangan.', 'An 1862 colonial building turned clove-cigarette museum. From the upper floor you can watch workers hand-roll kretek.') },
  { id: 'jmerah', cat: 'heritage', wis: 1, ll: [112.7377, -7.2370], name: 'Jembatan Merah', price: 0, hours: T('24 jam', 'Open 24 hours'), desc: T('Jembatan saksi pertempuran 1945, dikelilingi gedung-gedung era kolonial di kawasan Kota Lama.', 'The bridge that witnessed the 1945 battles, surrounded by colonial-era buildings of the Old Town.') },
  { id: 'ampel', cat: 'religi', wis: 1, ll: [112.7427, -7.2302], name: 'Masjid Sunan Ampel', price: 0, hours: T('24 jam', 'Open 24 hours'), desc: T('Masjid abad ke-15 yang didirikan Sunan Ampel. Lorong di sekitarnya penuh pedagang kurma, parfum, dan kuliner Arab.', 'A 15th-century mosque founded by Sunan Ampel. The surrounding alleys are full of dates, perfume and Arab-Indonesian food.') },
  { id: 'kyakya', cat: 'food', wis: 1, ll: [112.7410, -7.2390], name: 'Kya-Kya Kembang Jepun', price: 15000, from: 1, hours: T('Jum–Min · 17.00–23.00', 'Fri–Sun · 17:00–23:00'), desc: T('Pecinan lama Surabaya. Malam hari, jalan ini berubah jadi pusat jajanan dengan lampion dan musik.', 'Surabaya’s old Chinatown. At night the street turns into a lantern-lit food market.') },
  { id: 'chenghoo', cat: 'religi', wis: 1, ll: [112.7466, -7.2513], name: 'Masjid Cheng Hoo', price: 0, hours: T('Setiap hari · 04.00–21.00', 'Daily · 4:00–21:00'), desc: T('Masjid berarsitektur ala kelenteng untuk menghormati Laksamana Cheng Ho, penjelajah Muslim dari Tiongkok.', 'A mosque in Chinese temple style, honouring Admiral Zheng He, the Muslim explorer from China.') },
  { id: 'monkasel', cat: 'heritage', wis: 1, ll: [112.7504, -7.2655], name: 'Monumen Kapal Selam', price: 15000, hours: T('Setiap hari · 08.00–21.00', 'Daily · 8:00–21:00'), desc: T('Kapal selam KRI Pasopati 410 buatan Uni Soviet yang kini bisa kamu masuki dari ujung ke ujung.', 'The Soviet-built submarine KRI Pasopati 410, now a museum you can walk through end to end.') },
  { id: 'majapahit', cat: 'heritage', wis: 1, ll: [112.7389, -7.2603], name: 'Hotel Majapahit', price: 0, hours: T('Lobi terbuka umum', 'Lobby open to visitors'), desc: T('Dulu Hotel Oranje. Di menaranya, arek-arek Suroboyo merobek bendera Belanda menjadi Merah Putih pada 19 September 1945.', 'Formerly Hotel Oranje. On its tower, locals tore the Dutch flag into the Indonesian red-and-white on 19 September 1945.') },
  { id: 'siola', cat: 'heritage', wis: 1, ll: [112.7376, -7.2569], name: 'Museum Surabaya (Siola)', price: 0, hours: T('Sel–Min · 09.00–21.00', 'Tue–Sun · 9:00–21:00'), desc: T('Gedung toserba era kolonial yang kini menyimpan koleksi sejarah kota, dari becak tua sampai seragam pemadam kebakaran.', 'A colonial department store turned city museum, from vintage becaks to old fire brigade uniforms.') },
  { id: 'tp', cat: 'shop', wis: 1, ll: [112.7389, -7.2626], name: 'Tunjungan Plaza', price: 0, hours: T('Setiap hari · 10.00–22.00', 'Daily · 10:00–22:00'), desc: T('Mal terbesar di pusat kota: enam gedung yang saling terhubung, dari butik sampai food court.', 'The biggest mall downtown: six connected buildings, from boutiques to food courts.') },
  { id: 'kbs', cat: 'nature', wis: 1, ll: [112.7366, -7.2963], name: 'Kebun Binatang Surabaya', price: 15000, hours: T('Setiap hari · 08.00–16.00', 'Daily · 8:00–16:00'), desc: T('Dibuka sejak 1916, salah satu kebun binatang tertua di Indonesia. Patung Sura dan Baya di depannya adalah ikon kota.', 'Open since 1916, one of Indonesia’s oldest zoos. The Sura and Baya statue at its gate is the city’s icon.') },
  { id: 'bungkul', cat: 'nature', wis: 1, ll: [112.7395, -7.2913], name: 'Taman Bungkul', price: 0, hours: T('24 jam', 'Open 24 hours'), desc: T('Taman kota favorit warga, paling ramai saat Car Free Day Minggu pagi. Ada jogging track, skatepark, dan jajanan.', 'The locals’ favourite park, busiest during Sunday Car Free Day. Jogging track, skatepark and street snacks.') },
  { id: 'alakbar', cat: 'religi', wis: 1, ll: [112.7150, -7.3366], name: 'Masjid Nasional Al-Akbar', price: 0, hours: T('Setiap hari · menara 08.00–16.00', 'Daily · tower 8:00–16:00'), desc: T('Salah satu masjid terbesar di Indonesia. Naik lift ke menara setinggi 99 m untuk melihat Surabaya dari atas.', 'One of Indonesia’s largest mosques. Take the lift up its 99 m tower for a view over the city.') },
  { id: 'jsuroboyo', cat: 'nature', wis: 1, ll: [112.7862, -7.2345], name: 'Jembatan Suroboyo', price: 0, hours: T('Air mancur: Sab–Min malam', 'Fountain show: Sat–Sun nights'), desc: T('Jembatan 800 m di tepi Pantai Kenjeran dengan air mancur menari dan lampu warna-warni di akhir pekan.', 'An 800 m seaside bridge at Kenjeran with a dancing fountain and colourful lights on weekends.') },
  { id: 'kenjeran', cat: 'nature', wis: 1, ll: [112.7960, -7.2430], name: 'Pantai Kenjeran', price: 0, hours: T('24 jam', 'Open 24 hours'), desc: T('Pantai nelayan di utara kota. Datang sore untuk melihat perahu pulang dan mencicipi kerupuk ikan.', 'A fishing beach in the north. Come late afternoon to watch boats return and try fish crackers.') },
  { id: 'sanggar', cat: 'religi', wis: 1, ll: [112.8020, -7.2480], name: 'Klenteng Sanggar Agung', price: 10000, hours: T('Setiap hari · 07.00–22.00', 'Daily · 7:00–22:00'), desc: T('Kelenteng di tepi laut dengan patung Dewi Kwan Im setinggi 20 m menghadap Selat Madura.', 'A seaside temple with a 20 m statue of Guan Yin facing the Madura Strait.') },
  { id: 'bulak', cat: 'food', wis: 1, ll: [112.7850, -7.2368], name: 'Sentra Ikan Bulak', price: 10000, from: 1, hours: T('Setiap hari · 08.00–21.00', 'Daily · 8:00–21:00'), desc: T('Pusat oleh-oleh hasil laut khas Kenjeran: kerupuk, ikan asap, dan terasi.', 'Kenjeran’s seafood souvenir market: crackers, smoked fish and shrimp paste.') },
  { id: 'rawon', cat: 'food', wis: 1, ll: [112.7368, -7.2622], name: 'Rawon Setan', price: 35000, from: 1, hours: T('Setiap hari · 10.00–02.00', 'Daily · 10:00–2:00'), desc: T('Rawon legendaris berkuah hitam pekat dengan daging empuk. Dulu terkenal karena buka tengah malam.', 'Legendary black beef soup with tender meat, famous for its late-night hours.') },
  { id: 'balaipemuda', cat: 'heritage', wis: 1, ll: [112.7449, -7.2643], name: 'Alun-alun & Balai Pemuda', price: 0, hours: T('Setiap hari · 08.00–22.00', 'Daily · 8:00–22:00'), desc: T('Gedung tahun 1907 bekas tempat dansa elite Belanda, kini ruang publik dengan alun-alun bawah tanah.', 'A 1907 former Dutch social club, now a public space with an underground plaza.') },
  { id: 'galaxy', cat: 'shop', wis: 1, ll: [112.7811, -7.2752], name: 'Galaxy Mall', price: 0, hours: T('Setiap hari · 10.00–22.00', 'Daily · 10:00–22:00'), desc: T('Mal besar di Surabaya Timur, dekat kampus-kampus.', 'A large mall in East Surabaya, close to the campuses.') },
  { id: 'kampusuinsa', cat: 'campus', ll: [112.7340, -7.3205], name: 'Kampus UINSA' },
  { id: 'kampusits', cat: 'campus', ll: [112.7949, -7.2819], name: 'Kampus ITS' },
  { id: 'kampusunesa', cat: 'campus', ll: [112.6740, -7.3020], name: 'Kampus UNESA Lidah' },
  { id: 'stgubeng', cat: 'transit', ll: [112.7522, -7.2652], name: 'Stasiun Gubeng' },
  { id: 'tpurabaya', cat: 'transit', ll: [112.7246, -7.3502], name: 'Terminal Purabaya' },
  { id: 'royalplaza', cat: 'shop', ll: [112.7350, -7.3091], name: 'Royal Plaza' },
  { id: 'ciputraworld', cat: 'shop', ll: [112.7190, -7.2925], name: 'Ciputra World' },
];
PLACES.forEach(p => { p.photo = PHOTOS[p.id] || null; });
export const PLACE = Object.fromEntries(PLACES.map(p => [p.id, p]));

export const PACKAGES = [
  { id: 'heritage', cat: 'heritage', places: ['tugu', 'jmerah', 'sampoerna', 'ampel', 'kyakya'], title: T('Jejak Kota Lama', 'Old Town Trail'), dur: T('4–5 jam', '4–5 hrs'), desc: T('Dari monumen perjuangan ke pecinan lama. Hampir semuanya di jalur R5 yang memutari Kota Lama.', 'From the heroes’ monument to old Chinatown, almost all on the R5 loop around the Old Town.'), tip: T('Mulai pagi, tutup dengan jajan malam di Kya-Kya.', 'Start in the morning, finish with street food at Kya-Kya.') },
  { id: 'religi', cat: 'religi', places: ['alakbar', 'chenghoo', 'ampel', 'sanggar'], title: T('Ziarah Lintas Iman', 'Interfaith Journey'), dur: T('Seharian', 'Full day'), desc: T('Empat rumah ibadah dengan arsitektur dan cerita berbeda, dari selatan sampai pesisir utara.', 'Four houses of worship with different architecture and stories, from the south to the northern coast.'), tip: T('Bawa pakaian sopan dan kain penutup.', 'Dress modestly and bring a scarf or sarong.') },
  { id: 'kuliner', cat: 'food', places: ['rawon', 'kyakya', 'bulak'], title: T('Rasa Suroboyo', 'Taste of Surabaya'), dur: T('3–4 jam', '3–4 hrs'), desc: T('Rawon hitam, jajanan pecinan, lalu oleh-oleh hasil laut di Kenjeran.', 'Black beef soup, Chinatown snacks, then seafood souvenirs in Kenjeran.'), tip: T('Paling seru Jumat–Minggu sore.', 'Best on Friday–Sunday evenings.') },
  { id: 'kota', cat: 'heritage', places: ['bungkul', 'monkasel', 'majapahit', 'siola', 'balaipemuda'], title: T('Sehari di Pusat Kota', 'Downtown Day'), dur: T('5–6 jam', '5–6 hrs'), desc: T('Taman, kapal selam, hotel bersejarah, dan museum kota. Semua di sepanjang R1 dan R2.', 'A park, a submarine, a historic hotel and the city museum, all along R1 and R2.'), tip: T('Museum Surabaya tutup hari Senin.', 'The city museum is closed on Mondays.') },
  { id: 'pesisir', cat: 'nature', places: ['bulak', 'jsuroboyo', 'kenjeran', 'sanggar'], title: T('Senja di Kenjeran', 'Kenjeran Sunset'), dur: T('3 jam', '3 hrs'), desc: T('Pesisir utara Surabaya: pasar ikan, jembatan berlampu, pantai nelayan, dan kelenteng tepi laut.', 'Surabaya’s northern coast: fish market, lit-up bridge, fishing beach and seaside temple.'), tip: T('Datang pukul 16.00 agar dapat senja.', 'Arrive around 4 pm to catch the sunset.') },
];
export const EVENTS = [
  { id: 'e1', place: 'kyakya', day: '24', mon: T('Okt', 'Oct'), title: T('Pasar Malam Kya-Kya', 'Kya-Kya Night Market'), time: T('Sab · 17.00–23.00', 'Sat · 5–11 pm') },
  { id: 'e2', place: 'bungkul', day: '25', mon: T('Okt', 'Oct'), title: T('Car Free Day Raya Darmo', 'Raya Darmo Car Free Day'), time: T('Min · 06.00–09.00', 'Sun · 6–9 am') },
  { id: 'e3', place: 'jsuroboyo', day: '31', mon: T('Okt', 'Oct'), title: T('Festival Lampion Kenjeran', 'Kenjeran Lantern Festival'), time: T('Sab · 18.30', 'Sat · 6:30 pm') },
  { id: 'e4', place: 'tugu', day: '08', mon: T('Nov', 'Nov'), title: T('Parade Juang 10 November', 'Heroes’ Day Parade'), time: T('Min · 07.00', 'Sun · 7 am') },
];

const rad = Math.PI / 180;
export const hav = (a, b) => { const x = (b[0] - a[0]) * rad * Math.cos((a[1] + b[1]) / 2 * rad), y = (b[1] - a[1]) * rad; return Math.sqrt(x * x + y * y) * 6371000; };

export function buildNet() {
  const routes = {}, stops = {};
  for (const id of ['R1', 'R2', 'R3', 'R4', 'R5']) {
    const r = ROUTES_RAW[id], line = r.line, cum = [0];
    for (let i = 1; i < line.length; i++) cum.push(cum[i - 1] + hav(line[i - 1], line[i]));
    const total = cum[cum.length - 1];
    routes[id] = { id, ...META[id], loop: !!r.loop, line, cum, total, stops: r.stops.map(s => ({ id: s.id, at: Math.min(s.at, total) })) };
    for (const s of r.stops) {
      if (!stops[s.id]) stops[s.id] = { id: s.id, name: s.name, short: s.name.replace(/^Halte |^Terminal /, ''), ll: s.ll, road: ROAD[s.id] || '', routes: [] };
      stops[s.id].routes.push(id);
    }
  }
  return { routes, stops };
}
export function pointAt(r, d) {
  const { line, cum, total } = r; d = Math.max(0, Math.min(d, total));
  let lo = 0, hi = cum.length - 1; while (hi - lo > 1) { const m = (lo + hi) >> 1; if (cum[m] <= d) lo = m; else hi = m; }
  const t = (d - cum[lo]) / ((cum[hi] - cum[lo]) || 1);
  return [line[lo][0] + (line[hi][0] - line[lo][0]) * t, line[lo][1] + (line[hi][1] - line[lo][1]) * t];
}
export function bearingAt(r, d, dir) {
  let d2 = d + (r.loop ? 1 : dir) * 90; if (r.loop && d2 > r.total) d2 -= r.total;
  const a = pointAt(r, d), b = pointAt(r, d2);
  return Math.atan2((b[0] - a[0]) * Math.cos(a[1] * rad), b[1] - a[1]) / rad;
}
function slice(r, d0, d1) { const out = [pointAt(r, d0)]; for (let i = 0; i < r.line.length; i++) if (r.cum[i] > d0 && r.cum[i] < d1) out.push(r.line[i]); out.push(pointAt(r, d1)); return out; }
export function sliceDir(r, a0, a1, dir) {
  if (r.loop) return a1 >= a0 ? slice(r, a0, a1) : [...slice(r, a0, r.total), ...slice(r, 0, a1)];
  return dir > 0 ? slice(r, a0, a1) : slice(r, a1, a0).reverse();
}
export function along(r, from, to, dir) {
  if (r.loop) { let d = to - from; if (d < -0.5) d += r.total; return Math.max(0, d); }
  const d = dir > 0 ? to - from : from - to; return d < -0.5 ? null : Math.max(0, d);
}
export const stopAt = (r, sid) => r.stops.find(s => s.id === sid);
export function headsign(net, rid, dir) { const r = net.routes[rid]; if (r.loop) return null; return net.stops[(dir > 0 ? r.stops[r.stops.length - 1] : r.stops[0]).id].short; }

export function makeBuses(net) {
  const out = []; let n = 1;
  const per = { R1: 4, R2: 3, R3: 3, R4: 3, R5: 3 }, off = { R1: [0.55, 0.3], R2: [0.4, 0.75], R3: [0.3, 0.7], R4: [0.45, 0.2], R5: [0.25] };
  for (const r of Object.values(net.routes)) {
    (r.loop ? [1] : [1, -1]).forEach((dir, di) => {
      for (let i = 0; i < per[r.id]; i++) {
        out.push({ id: 'SB-' + String(n).padStart(2, '0'), plate: 'L ' + (7010 + ((n * 389) % 1900)) + ' ' + ['UB', 'UC', 'UD', 'UF'][n % 4], route: r.id, dir, d: ((i + off[r.id][di]) / per[r.id]) * r.total, dwell: 0, atStop: null, hold: false, crowd: (n * 7) % 3, seed: n * 1.37, lowFloor: n % 4 !== 0 });
        n++;
      }
    });
  }
  return out;
}
export function busNext(net, b) {
  const r = net.routes[b.route];
  if (r.loop) return [...r.stops.filter(s => s.at > b.d + 0.5), ...r.stops.filter(s => s.at <= b.d + 0.5)];
  return b.dir > 0 ? r.stops.filter(s => s.at > b.d + 0.5) : r.stops.filter(s => s.at < b.d - 0.5).reverse();
}
export const dwelling = b => !!b.atStop && (b.dwell > 0 || b.hold);
export function eta(net, b, sid) {
  if (b.atStop === sid && dwelling(b)) return 0;
  const r = net.routes[b.route], s = stopAt(r, sid); if (!s) return null;
  const idx = busNext(net, b).findIndex(x => x.id === sid); if (idx < 0) return null;
  const dist = along(r, b.d, s.at, b.dir); if (dist == null) return null;
  return dist / V + idx * DWELL + Math.max(0, b.dwell || 0);
}
export function away(net, b, sid) { if (b.atStop === sid && dwelling(b)) return 0; const i = busNext(net, b).findIndex(x => x.id === sid); return i < 0 ? null : i + 1; }
export function upcoming(net, buses, rid, dir, sid) {
  const loop = net.routes[rid].loop;
  return buses.filter(b => b.route === rid && (loop || b.dir === dir)).map(b => ({ b, eta: eta(net, b, sid), n: away(net, b, sid) })).filter(x => x.eta != null).sort((a, b) => a.eta - b.eta);
}
export function step(net, b, dt, simT) {
  const r = net.routes[b.route];
  if (b.hold) return;
  if (b.dwell > 0) { b.dwell -= dt; return; }
  const v = V * (0.7 + 0.6 * (0.5 + 0.5 * Math.sin(simT / 41 + b.seed * 2)));
  const nd = b.d + (r.loop ? 1 : b.dir) * v * dt;
  if (r.loop && nd >= r.total) { b.d = 0; b.atStop = r.stops[0].id; b.dwell = 45; return; }
  if (!r.loop && (nd >= r.total || nd <= 0)) { const end = nd >= r.total; b.d = end ? r.total : 0; b.atStop = (end ? r.stops[r.stops.length - 1] : r.stops[0]).id; b.dir = -b.dir; b.dwell = 90; return; }
  const s = (r.loop || b.dir > 0) ? r.stops.find(x => x.at > b.d + 0.5 && x.at <= nd) : [...r.stops].reverse().find(x => x.at < b.d - 0.5 && x.at >= nd);
  if (s) { b.d = s.at; b.atStop = s.id; b.dwell = DWELL; if (((b.seed * 100 + s.at) | 0) % 5 === 0) b.crowd = (b.crowd + 1) % 3; } else { b.d = nd; b.atStop = null; }
}

function seq(r, dir, bId, aId) {
  const st = r.stops, n = st.length, bi = st.findIndex(s => s.id === bId), ai = st.findIndex(s => s.id === aId);
  if (bi < 0 || ai < 0 || bi === ai) return null;
  if (r.loop) { const out = []; for (let k = bi; ; k = (k + 1) % n) { out.push(st[k]); if (k === ai) break; } return out; }
  if (dir > 0) return ai > bi ? st.slice(bi, ai + 1) : null;
  return ai < bi ? st.slice(ai, bi + 1).reverse() : null;
}
export function nearStops(net, P) {
  if (P.kind === 'stop') return [{ s: net.stops[P.sid], m: 0 }];
  const all = Object.values(net.stops).map(s => ({ s, m: (P.kind === 'me' && s.id === 'uinsa') ? WALK1_M : Math.round(hav(P.ll, s.ll) * 1.25) })).sort((a, b) => a.m - b.m);
  const near = all.filter(x => x.m <= 1700).slice(0, 4);
  return near.length ? near : all.slice(0, 1);
}
export function plan(net, buses, A, B, offset) {
  const As = nearStops(net, A), Bs = nearStops(net, B), out = {};
  const waitFor = (rid, dir, sid, t) => { if (offset > 0) return 300; const u = upcoming(net, buses, rid, dir, sid).find(x => x.eta >= t - 20); return u ? Math.max(0, u.eta - t) : HEADWAY / 2 + 120; };
  const build = (spec, x, y) => {
    const legs = []; let t = 0, walkM = 0;
    if (x.m > 0) { legs.push({ type: 'walk', m: x.m, sec: x.m / WALK_V, to: x.s.id, coords: (A.kind === 'me' && x.s.id === 'uinsa') ? WALK1 : [A.ll, x.s.ll] }); t += x.m / WALK_V; walkM += x.m; }
    spec.forEach(L => {
      const a0 = L.sq[0].at, a1 = L.sq[L.sq.length - 1].at, rideM = along(L.r, a0, a1, L.dir) || 0;
      const w = waitFor(L.r.id, L.dir, L.sq[0].id, t); t += w;
      const sec = rideM / V + Math.max(0, L.sq.length - 2) * DWELL; t += sec;
      legs.push({ type: 'bus', route: L.r.id, dir: L.dir, board: L.sq[0].id, alight: L.sq[L.sq.length - 1].id, n: L.sq.length - 1, rideM, wait: w, sec, stops: L.sq.map(s => s.id), coords: sliceDir(L.r, a0, a1, L.dir) });
    });
    if (y.m > 0) { const tp = B.kind === 'place' && B.pid === 'tp' && y.s.id === 'basra'; legs.push({ type: 'walk', m: y.m, sec: y.m / WALK_V, from: y.s.id, last: true, coords: tp ? [...WALK2, B.ll] : [y.s.ll, B.ll] }); t += y.m / WALK_V; walkM += y.m; }
    const key = spec.map(L => L.r.id + L.dir).join('-') + ':' + x.s.id + ':' + y.s.id;
    return { key, legs, total: t, walkM, transfers: spec.length - 1, score: t + (spec.length - 1) * 240 + walkM * 0.4 };
  };
  const add = o => { const k = o.key.split(':')[0]; if (!out[k] || out[k].score > o.score) out[k] = o; };
  for (const r of Object.values(net.routes)) for (const dir of (r.loop ? [1] : [1, -1])) for (const x of As) {
    if (!stopAt(r, x.s.id)) continue;
    for (const y of Bs) { const sq = seq(r, dir, x.s.id, y.s.id); if (sq) add(build([{ r, dir, sq }], x, y)); }
    for (const t of r.stops) {
      const T = net.stops[t.id]; if (T.routes.length < 2 || t.id === x.s.id) continue;
      const sq1 = seq(r, dir, x.s.id, t.id); if (!sq1) continue;
      for (const r2id of T.routes) { if (r2id === r.id) continue; const r2 = net.routes[r2id];
        for (const dir2 of (r2.loop ? [1] : [1, -1])) for (const y of Bs) { if (Bs.some(z => z.s.id === t.id && z.m <= y.m)) continue; const sq2 = seq(r2, dir2, t.id, y.s.id); if (sq2) add(build([{ r, dir, sq: sq1 }, { r: r2, dir: dir2, sq: sq2 }], x, y)); } }
    }
  }
  let list = Object.values(out).sort((a, b) => a.score - b.score);
  if (!list.length) return [];
  const best = list[0].total; list = list.filter(o => o.total <= best * 1.9 + 300).slice(0, 4);
  const minWalk = Math.min(...list.map(o => o.walkM));
  list.forEach((o, i) => { o.tags = []; if (i === 0) o.tags.push('fast'); else if (o.walkM === minWalk && o.walkM < list[0].walkM) o.tags.push('walk'); if (i > 0 && o.transfers === 0 && list[0].transfers > 0) o.tags.push('direct'); });
  return list;
}

export function range(sec) { const m = sec / 60; if (m < 2) return [0, 2]; const f = m >= 20 ? [0.9, 1.15] : [0.85, 1.3]; let lo = Math.max(1, Math.floor(m * f[0])), hi = Math.ceil(m * f[1]); if (m >= 8) { lo = Math.floor(lo / 5) * 5; hi = Math.ceil(hi / 5) * 5; } if (hi - lo < 2) hi = lo + 2; return [lo, hi]; }
export const rangeTxt = (sec, lang) => { const [lo, hi] = range(sec); return lo === 0 ? (lang === 'en' ? `under ${hi} min` : `kurang dari ${hi} mnt`) : `${lo}–${hi} ${lang === 'en' ? 'min' : 'mnt'}`; };
export const fmtM = (m, lang) => m < 1000 ? `${Math.max(10, Math.round(m / 10) * 10)} m` : `${(m / 1000).toFixed(1).replace('.', lang === 'en' ? '.' : ',')} km`;
export const clock = (sec, lang) => { const t = ((Math.round(sec / 60)) % 1440 + 1440) % 1440; return `${String(Math.floor(t / 60)).padStart(2, '0')}${lang === 'en' ? ':' : '.'}${String(t % 60).padStart(2, '0')}`; };
export const rupiah = (n, lang) => (n < 0 ? '−' : '') + 'Rp' + Math.abs(n).toLocaleString(lang === 'en' ? 'en-US' : 'id-ID');

export const FAQ = [
  { k: ['bayar', 'qris', 'e-money', 'emoney', 'kartu', 'tunai', 'cash', 'pay', 'card', 'payment'], a: T('Bisa pakai TemanBis Pay, QRIS dari e-wallet atau m-banking, atau tap kartu uang elektronik (e-money, Flazz, Brizzi, TapCash) di pintu depan. Belum bisa tunai.', 'Use TemanBis Pay, any QRIS e-wallet, or tap an e-money card (e-money, Flazz, Brizzi, TapCash) at the front door. Cash is not accepted.') },
  { k: ['tarif', 'harga', 'biaya', 'berapa', 'ongkos', 'pelajar', 'mahasiswa', 'fare', 'price', 'cost', 'student'], a: T('Rp5.000 sekali jalan, pelajar dan mahasiswa Rp2.500. Tiket berlaku 2 jam, jadi transit ke rute lain dalam waktu itu gratis.', 'Rp5,000 per trip, Rp2,500 for students. Tickets are valid for 2 hours, so transfers within that time are free.') },
  { k: ['jam', 'buka', 'operasional', 'malam', 'pagi', 'hours', 'open', 'time', 'night'], a: T('Semua rute jalan setiap hari pukul 05.00–22.00, termasuk hari libur. Bus lebih sering di jam sibuk pagi dan sore.', 'All routes run daily from 5:00 to 22:00, holidays included. Buses come more often during morning and evening peaks.') },
  { k: ['bawa', 'barang', 'koper', 'sepeda', 'makan', 'minum', 'rokok', 'luggage', 'bike', 'eat', 'bag'], a: T('Tas dan koper boleh selama tidak menghalangi jalan. Sepeda lipat boleh kalau dilipat. Dilarang makan, minum, dan merokok di dalam bus.', 'Bags and suitcases are fine if they don’t block the aisle. Folding bikes must be folded. No eating, drinking or smoking on board.') },
];

const I = {
  id: {
    appSub: 'Pendamping Suroboyo Bus', back: 'Kembali', close: 'Tutup', live: 'Live',
    tHome: 'Beranda', tRoute: 'Rute', tWisata: 'Wisata', tHistory: 'Riwayat', tAccount: 'Akun',
    homeTitle: 'Mau ke mana hari ini?', from: 'Dari', to: 'Ke', swap: 'Tukar asal dan tujuan', pickDest: 'Pilih tujuan', depart: 'Berangkat', pax: 'Penumpang', search: 'Cari rute',
    balance: 'Saldo TemanBis Pay', topup: 'Isi saldo', ticketQR: 'Tiket QR', ticketActive: 'Tiket aktif', noTicket: 'Belum ada tiket aktif', validUntil: 'berlaku sampai',
    askTitle: 'Tanya TemanBis', askHint: 'Tarif, rute, wisata, atau buatkan itinerary', savedTrips: 'Rute tersimpan', liveNear: 'Bus menuju halte terdekatmu', events: 'Event kota', picks: 'Wisata pilihan', seeAll: 'Lihat semua',
    pickFrom: 'Berangkat dari mana?', pickTo: 'Mau ke mana?', searchPh: 'Cari halte, tempat, atau wisata', myLoc: 'Lokasi saya', myLocSub: 'Jl. Ahmad Yani 117 · dekat Kampus UINSA', secPlaces: 'Tempat & wisata', secStops: 'Halte', noRes: 'Tidak ketemu. Coba nama halte atau tempat lain.',
    options: 'Pilihan rute', tagFast: 'Tercepat', tagWalk: 'Paling sedikit jalan', tagDirect: 'Tanpa transit', direct: 'Langsung', transfer1: '1x transit', arrive: 'Tiba', walkWord: 'jalan kaki', stopsWord: 'halte', nextBusAt: 'Bus pertama', noRoute: 'Belum ada rute bus untuk perjalanan ini. Coba tujuan di dekat halte.', sameStop: 'Asal dan tujuan terlalu dekat. Jalan kaki saja.',
    tripDetail: 'Detail perjalanan', walkTo: 'Jalan ke', boardAt: 'Naik di', toward: 'arah', alightAt: 'Turun di', transferAt: 'Transit di', fare: 'Tarif', fareNote: 'Berlaku 2 jam, transit gratis', start: 'Mulai perjalanan', remindMe: 'Ingatkan saya', total: 'Total',
    payTitle: 'Bayar tiket', payWith: 'Dari saldo TemanBis Pay', pay: 'Bayar', insufficient: 'Saldo tidak cukup. Isi saldo dulu, ya.',
    imAtStop: 'Saya sudah di halte', chooseBus: 'Pilih bus yang mau kamu naiki', chooseBusSub: 'Kami lacak bus ini sampai kamu turun.', track: 'Lacak', yourStop: 'Halte kamu', boarded: 'Saya sudah naik', showQR: 'Tunjukkan QR', changeBus: 'Ganti bus', willNotify: 'Kami kabari satu halte sebelumnya.', remaining: 'Sisa', distance: 'Jarak', getOff: 'Turun di sini', stopping: 'Berhenti', yourBus: 'Bus kamu', imOff: 'Saya sudah turun', imArrived: 'Saya sudah sampai', transferNote: 'Turun lalu tunggu di halte yang sama. Tiketmu masih berlaku, tidak perlu bayar lagi.',
    doneSub: 'Perjalanan selesai. Mudah, kan?', travelTime: 'Waktu tempuh', walking: 'Jalan kaki', onBus: 'Naik bus', newStamp: 'Stempel baru', stampSub: 'Tersimpan di Paspor Wisata', finish: 'Selesai', saveTrip: 'Simpan rute', savedTrip: 'Rute tersimpan',
    nextStop: 'Halte berikutnya', stoppedAt: 'Sedang berhenti di', stopsToGo: 'halte lagi turun', toYourStop: 'halte lagi ke halte kamu', prepare: 'Siap-siap turun', getOffNow: 'Turun di sini', followBus: 'Ikuti bus', atStop: 'Tiba',
    c0: 'Longgar', c1: 'Sedang', c2: 'Padat', lowFloor: 'Ramah kursi roda', report: 'Lapor', reportTitle: 'Lapor masalah di bus', reportPh: 'Ceritakan singkat (opsional)', send: 'Kirim', reportSent: 'Laporan terkirim. Terima kasih!',
    rAC: 'AC tidak dingin', rFull: 'Terlalu penuh', rDriver: 'Cara mengemudi', rClean: 'Kebersihan', rLost: 'Barang tertinggal', rOther: 'Lainnya', remindHint: 'Tekan lonceng untuk diingatkan sebelum halte tujuan.',
    routesTitle: 'Rute Suroboyo Bus', routesSub: '5 koridor · data simulasi', busesActive: 'bus aktif', loopNote: 'Satu arah memutar',
    wisTitle: 'Jelajah Surabaya', wisSub: 'Semua tempat bisa dicapai naik Suroboyo Bus.', aiPlan: 'Rencanakan hari dengan AI', aiPlanPh: 'mis. sejarah setengah hari, mulai jam 9', aiPlanBtn: 'Buat',
    all: 'Semua', heritage: 'Sejarah', food: 'Kuliner', religi: 'Religi', nature: 'Alam & taman', shop: 'Belanja', campus: 'Kampus', transit: 'Terminal & stasiun',
    packages: 'Paket rute wisata', places: 'Destinasi', near: 'Dekat', goHere: 'Rute ke sini', hours: 'Jam buka', price: 'Tiket masuk', free: 'Gratis', fromPrice: 'mulai', stampGot: 'Stempel sudah kamu kumpulkan', stampHint: 'Tiba di sini naik bus untuk dapat stempel', startPkg: 'Mulai dari', placesN: 'tempat', photoCredit: 'Foto: Wikimedia Commons', tip: 'Tips', walkFrom: 'jalan dari halte',
    histTitle: 'Riwayat', trips: 'Perjalanan', tx: 'Transaksi', repeat: 'Ulangi',
    passport: 'Paspor Wisata', of: 'dari', stamps: 'stempel', stTrips: 'Perjalanan', stCO2: 'CO₂ dihemat', settings: 'Pengaturan', language: 'Bahasa', alerts: 'Pengingat turun', alertsSub: 'Getar dan notifikasi satu halte sebelumnya', favStops: 'Halte favorit', proto: 'Prototipe · semua data bus adalah simulasi',
    whenTitle: 'Waktu berangkat', now: 'Sekarang', in15: '15 menit lagi', in30: '30 menit lagi', in60: '1 jam lagi', done: 'Selesai', paxTitle: 'Penumpang', paxUmum: 'Umum', paxPelajar: 'Pelajar / mahasiswa', paxPelajarSub: 'bawa kartu pelajar',
    qrTitle: 'Tiket Suroboyo Bus', qrHint: 'Tempelkan QR ke pemindai di pintu depan bus.', topupTitle: 'Isi saldo', method: 'Metode', amount: 'Nominal',
    chatSub: 'AI · tarif, rute, wisata, itinerary', chatPh: 'Tanya apa saja soal Suroboyo Bus…', thinking: 'Sedang berpikir…', viewRoute: 'Lihat rute', clear: 'Hapus percakapan',
    chatHello: 'Halo! Saya TemanBis. Tanyakan tarif, cara bayar, rute, atau minta saya buatkan itinerary wisata naik Suroboyo Bus.',
    q1: 'Bayarnya pakai apa?', q2: 'Itinerary sejarah setengah hari', q3: 'Ke Kenjeran naik apa?', q4: 'Jam operasional?',
    toastRemind: 'Kami ingatkan 10 menit sebelum berangkat.', toastTopup: 'Saldo berhasil ditambah', toastPaid: 'Tiket dibeli. Selamat jalan!', toastSaved: 'Rute disimpan', toastReminder: 'Pengingat dipasang di', toastNear: 'Bus hampir sampai di',
    stepOf: 'Langkah', ofWord: 'dari', min: 'mnt', walkMins: 'Sekitar', minutes: 'menit', cancelTrip: 'Batalkan perjalanan', mapPov: 'Mode 3D',
    noTicketSub: 'Tiket dibeli otomatis saat kamu mulai perjalanan.', tripOngoing: 'Perjalanan berlangsung', paxShortU: 'Umum', paxShortP: 'Pelajar', ride: 'Naik', getOffWord: 'Turun', atStopNow: 'Di halte', arriving: 'Segera tiba', away: 'lagi', arrivedAt: 'Sampai di', today: 'Hari ini', duration: 'Durasi', resume: 'Lanjutkan', noBus: 'Belum ada bus menuju halte ini. Coba sebentar lagi.', faqSrc: 'Dari FAQ TemanBis', aiSrc: 'Dijawab AI · cek ulang info penting', nearestStops: 'Halte terdekat', popular: 'Populer', profileSub: 'Mahasiswi UINSA · Surabaya', zoomIn: 'Perbesar', zoomOut: 'Perkecil', recenter: 'Pusatkan peta', isAt: 'sudah di', myLocLbl: 'Lokasi kamu sekarang', myAddr: 'Jl. Ahmad Yani No. 117, Jemur Wonosari, Wonocolo', myAddrShort: 'Jl. Ahmad Yani 117', payHow: 'Cara bayar', payOnsite: 'Bayar di bus', payOnsiteSub: 'Scan QRIS atau tap kartu di pintu depan', payWallet: 'TemanBis Pay', startNow: 'Mulai perjalanan', reviewLbl: 'Rute pilihanmu', reviewCta: 'Tinjau', searchHint: 'Ketik nama tempat, alamat, atau halte. Semua lokasi di Surabaya bisa dicari.', searching: 'Mencari lokasi…', otherLoc: 'Lokasi lain di Surabaya', onsiteTitle: 'Bayar saat naik', onsiteSub: 'Scan QRIS di pintu depan bus atau tap kartu uang elektronik. Tarif Rp5.000, berlaku 2 jam termasuk transit.', askAI: 'Tanya AI', toastOnsite: 'Siapkan QRIS atau kartu saat naik bus.', clearSearch: 'Hapus pencarian', dismiss: 'Tutup',
  },
  en: {
    appSub: 'Your Suroboyo Bus companion', back: 'Back', close: 'Close', live: 'Live',
    tHome: 'Home', tRoute: 'Routes', tWisata: 'Explore', tHistory: 'History', tAccount: 'Account',
    homeTitle: 'Where to today?', from: 'From', to: 'To', swap: 'Swap origin and destination', pickDest: 'Choose destination', depart: 'Depart', pax: 'Passengers', search: 'Find routes',
    balance: 'TemanBis Pay balance', topup: 'Top up', ticketQR: 'QR ticket', ticketActive: 'Active ticket', noTicket: 'No active ticket', validUntil: 'valid until',
    askTitle: 'Ask TemanBis', askHint: 'Fares, routes, sights, or plan my day', savedTrips: 'Saved trips', liveNear: 'Buses heading to your nearest stop', events: 'City events', picks: 'Featured sights', seeAll: 'See all',
    pickFrom: 'Where from?', pickTo: 'Where to?', searchPh: 'Search stops, places or sights', myLoc: 'My location', myLocSub: 'Jl. Ahmad Yani 117 · near UINSA campus', secPlaces: 'Places & sights', secStops: 'Stops', noRes: 'Nothing found. Try another stop or place name.',
    options: 'Route options', tagFast: 'Fastest', tagWalk: 'Least walking', tagDirect: 'No transfer', direct: 'Direct', transfer1: '1 transfer', arrive: 'Arrive', walkWord: 'walk', stopsWord: 'stops', nextBusAt: 'First bus', noRoute: 'No bus route for this trip yet. Try a destination near a stop.', sameStop: 'Too close to take the bus. Just walk.',
    tripDetail: 'Trip details', walkTo: 'Walk to', boardAt: 'Board at', toward: 'to', alightAt: 'Get off at', transferAt: 'Transfer at', fare: 'Fare', fareNote: 'Valid 2 hours, free transfers', start: 'Start trip', remindMe: 'Remind me', total: 'Total',
    payTitle: 'Pay for ticket', payWith: 'From TemanBis Pay balance', pay: 'Pay', insufficient: 'Not enough balance. Please top up first.',
    imAtStop: 'I’m at the stop', chooseBus: 'Choose the bus you’ll take', chooseBusSub: 'We’ll track this bus until you get off.', track: 'Track', yourStop: 'Your stop', boarded: 'I’m on board', showQR: 'Show QR', changeBus: 'Change bus', willNotify: 'We’ll alert you one stop before.', remaining: 'Left', distance: 'Distance', getOff: 'Get off here', stopping: 'Stopping', yourBus: 'Your bus', imOff: 'I got off', imArrived: 'I’ve arrived', transferNote: 'Get off and wait at the same stop. Your ticket is still valid, no need to pay again.',
    doneSub: 'Trip complete. Easy, right?', travelTime: 'Travel time', walking: 'Walking', onBus: 'On the bus', newStamp: 'New stamp', stampSub: 'Saved to your Travel Passport', finish: 'Done', saveTrip: 'Save trip', savedTrip: 'Trip saved',
    nextStop: 'Next stop', stoppedAt: 'Stopped at', stopsToGo: 'stops to go', toYourStop: 'stops to your stop', prepare: 'Get ready to get off', getOffNow: 'Get off here', followBus: 'Follow bus', atStop: 'Here',
    c0: 'Roomy', c1: 'Moderate', c2: 'Crowded', lowFloor: 'Wheelchair friendly', report: 'Report', reportTitle: 'Report a problem', reportPh: 'Tell us briefly (optional)', send: 'Send', reportSent: 'Report sent. Thank you!',
    rAC: 'AC not cold', rFull: 'Too crowded', rDriver: 'Driving', rClean: 'Cleanliness', rLost: 'Lost item', rOther: 'Other', remindHint: 'Tap the bell to get an alert before your stop.',
    routesTitle: 'Suroboyo Bus routes', routesSub: '5 corridors · simulated data', busesActive: 'buses running', loopNote: 'One-way loop',
    wisTitle: 'Explore Surabaya', wisSub: 'Every place here is reachable by Suroboyo Bus.', aiPlan: 'Plan your day with AI', aiPlanPh: 'e.g. half-day history, starting at 9', aiPlanBtn: 'Plan',
    all: 'All', heritage: 'History', food: 'Food', religi: 'Faith', nature: 'Parks & coast', shop: 'Shopping', campus: 'Campus', transit: 'Stations',
    packages: 'Tour routes', places: 'Places', near: 'Near', goHere: 'Get directions', hours: 'Opening hours', price: 'Entry', free: 'Free', fromPrice: 'from', stampGot: 'Stamp collected', stampHint: 'Arrive here by bus to earn a stamp', startPkg: 'Start at', placesN: 'places', photoCredit: 'Photo: Wikimedia Commons', tip: 'Tip', walkFrom: 'walk from stop',
    histTitle: 'History', trips: 'Trips', tx: 'Transactions', repeat: 'Repeat',
    passport: 'Travel Passport', of: 'of', stamps: 'stamps', stTrips: 'Trips', stCO2: 'CO₂ saved', settings: 'Settings', language: 'Language', alerts: 'Get-off alerts', alertsSub: 'Vibrate and notify one stop before', favStops: 'Favourite stops', proto: 'Prototype · all bus data is simulated',
    whenTitle: 'Departure time', now: 'Now', in15: 'In 15 min', in30: 'In 30 min', in60: 'In 1 hour', done: 'Done', paxTitle: 'Passengers', paxUmum: 'Adult', paxPelajar: 'Student', paxPelajarSub: 'bring your student card',
    qrTitle: 'Suroboyo Bus ticket', qrHint: 'Hold the QR to the reader at the front door.', topupTitle: 'Top up', method: 'Method', amount: 'Amount',
    chatSub: 'AI · fares, routes, sights, itineraries', chatPh: 'Ask anything about Suroboyo Bus…', thinking: 'Thinking…', viewRoute: 'View route', clear: 'Clear chat',
    chatHello: 'Hi! I’m TemanBis. Ask me about fares, payment, routes, or let me plan a sightseeing day by Suroboyo Bus.',
    q1: 'How do I pay?', q2: 'Half-day history itinerary', q3: 'How to get to Kenjeran?', q4: 'Operating hours?',
    toastRemind: 'We’ll remind you 10 minutes before departure.', toastTopup: 'Balance topped up', toastPaid: 'Ticket bought. Have a good trip!', toastSaved: 'Trip saved', toastReminder: 'Alert set for', toastNear: 'Bus almost at',
    stepOf: 'Step', ofWord: 'of', min: 'min', walkMins: 'About', minutes: 'minutes', cancelTrip: 'Cancel trip', mapPov: '3D view',
    noTicketSub: 'A ticket is bought when you start a trip.', tripOngoing: 'Trip in progress', paxShortU: 'Adult', paxShortP: 'Student', ride: 'Take', getOffWord: 'Get off', atStopNow: 'At the stop', arriving: 'Arriving', away: 'away', arrivedAt: 'Arrived at', today: 'Today', duration: 'Duration', resume: 'Resume', noBus: 'No bus heading here right now. Try again shortly.', faqSrc: 'From TemanBis FAQ', aiSrc: 'AI answer · double-check key info', nearestStops: 'Nearest stops', popular: 'Popular', profileSub: 'UINSA student · Surabaya', zoomIn: 'Zoom in', zoomOut: 'Zoom out', recenter: 'Recenter map', isAt: 'is at', myLocLbl: 'Your current location', myAddr: 'Jl. Ahmad Yani No. 117, Jemur Wonosari, Wonocolo', myAddrShort: 'Jl. Ahmad Yani 117', payHow: 'How to pay', payOnsite: 'Pay on the bus', payOnsiteSub: 'Scan QRIS or tap a card at the front door', payWallet: 'TemanBis Pay', startNow: 'Start trip', reviewLbl: 'Your chosen route', reviewCta: 'Review', searchHint: 'Type a place, address or stop. Any location in Surabaya can be searched.', searching: 'Searching…', otherLoc: 'Other places in Surabaya', onsiteTitle: 'Pay when boarding', onsiteSub: 'Scan QRIS at the front door or tap an e-money card. Rp5,000, valid 2 hours including transfers.', askAI: 'Ask AI', toastOnsite: 'Have your QRIS or card ready when boarding.', clearSearch: 'Clear search', dismiss: 'Dismiss',
  },
};
export const I18N = I;
