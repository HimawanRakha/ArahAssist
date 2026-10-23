/* Beranda: blue header band + search card (KAI Access style), service shortcuts (Traveloka style), flat lists. */
import React from 'react';
import { C, card, Icon, SectionTitle, RouteBadge } from './ui';

const label = { fontSize: 13, fontWeight: 600, color: C.muted };
const value = { fontSize: 16, fontWeight: 800, color: C.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' };
const rowBtn = { display: 'flex', alignItems: 'center', gap: 14, width: '100%', minHeight: 64, padding: '10px 0', border: 0, background: 'none', textAlign: 'left', cursor: 'pointer', color: C.ink };

function Field({ icon, iconColor, lbl, val, valColor, onClick }) {
  return (
    <button onClick={onClick} style={rowBtn}>
      <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: C.linen, color: iconColor, display: 'grid', placeItems: 'center' }}>
        <Icon name={icon} size={19} stroke={2.2} />
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0, paddingRight: 56 }}>
        <span style={label}>{lbl}</span>
        <span style={{ ...value, color: valColor || C.ink }}>{val}</span>
      </span>
    </button>
  );
}

function Shortcut({ icon, text, onClick, accent }) {
  return (
    <button onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '4px 0', border: 0, background: 'none', cursor: 'pointer', color: C.ink, minWidth: 0 }}>
      <span style={{ width: 48, height: 48, borderRadius: 14, background: accent ? C.scarletTint : C.skyTint, color: accent ? C.scarlet : C.sky, display: 'grid', placeItems: 'center' }}>
        <Icon name={icon} size={22} stroke={2} />
      </span>
      <span style={{ fontSize: 13, fontWeight: 700, textAlign: 'center', lineHeight: 1.25 }}>{text}</span>
    </button>
  );
}

export default function HomeScreen({ v }) {
  const t = v.t || {};
  return (
    <div style={{ flex: '1 1 auto', minHeight: 0, overflowY: 'auto', background: C.linen }}>
      <header style={{ background: C.sky, color: '#fff', padding: '16px 20px 84px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 32, height: 32, borderRadius: 9, background: C.linen, color: C.sky, display: 'grid', placeItems: 'center' }}>
              <Icon name="bus" size={18} stroke={2.4} />
            </span>
            <span style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em' }}>
              Arah<span style={{ color: C.linen, opacity: 0.85 }}>Assist</span>
            </span>
          </span>
          <button onClick={v.toggleLang} aria-label={t.language} style={{ height: 34, padding: '0 12px', borderRadius: 999, border: '1.5px solid rgba(255,255,255,.5)', background: 'transparent', color: '#fff', display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
            <Icon name="globe" size={15} />
            {v.langLbl}
          </button>
        </div>
        <p style={{ margin: '22px 0 2px', fontSize: 15, fontWeight: 600, opacity: 0.9 }}>{v.greet}</p>
        <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{t.homeTitle}</h1>
        <p style={{ margin: '10px 0 0', display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, opacity: 0.9, minWidth: 0 }}>
          <Icon name="pin" size={15} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.myAddr}</span>
        </p>
      </header>

      <div style={{ padding: '0 16px 140px', marginTop: -64, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* Search card */}
        <section style={{ ...card, border: 0, boxShadow: '0 2px 10px rgba(27,35,51,.08)', padding: '8px 16px 16px' }}>
          <div style={{ position: 'relative' }}>
            <Field icon="bus" iconColor={C.sky} lbl={t.from} val={v.fromLbl} onClick={v.pickFrom} />
            <div style={{ height: 1, background: C.line, marginLeft: 50 }} />
            <Field icon="pin" iconColor={C.scarlet} lbl={t.to} val={v.toLbl} valColor={v.toColor} onClick={v.pickTo} />
            <button onClick={v.swap} aria-label={t.swap} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: `1.5px solid ${C.line}`, background: '#fff', color: C.sky, display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
              <Icon name="swap" size={19} stroke={2.2} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', borderTop: `1px solid ${C.line}`, marginTop: 4 }}>
            <button onClick={v.openWhen} style={{ ...rowBtn, minHeight: 58, gap: 10 }}>
              <Icon name="clock" size={18} style={{ color: C.muted, flexShrink: 0 }} />
              <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={label}>{t.depart}</span>
                <span style={{ ...value, fontSize: 15 }}>{v.departLbl}</span>
              </span>
            </button>
            <span style={{ background: C.line, margin: '12px 0' }} />
            <button onClick={v.openPax} style={{ ...rowBtn, minHeight: 58, gap: 10, paddingLeft: 14 }}>
              <Icon name="user" size={18} style={{ color: C.muted, flexShrink: 0 }} />
              <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                <span style={label}>{t.pax}</span>
                <span style={{ ...value, fontSize: 15 }}>{v.paxLbl}</span>
              </span>
            </button>
          </div>
          <button onClick={v.search} style={{ width: '100%', height: 52, marginTop: 8, border: 0, borderRadius: 12, background: C.scarlet, color: '#fff', fontSize: 16, fontWeight: 800, cursor: 'pointer' }}>
            {t.search}
          </button>
        </section>

        {/* Shortcuts */}
        <section style={{ ...card, padding: '16px 8px 12px', display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0,1fr))', gap: 4 }}>
          <Shortcut icon="route" text={t.tRoute} onClick={v.tabSt?.route?.go} />
          <Shortcut icon="map" text={t.tWisata} onClick={v.tabSt?.wisata?.go} />
          <Shortcut icon="ticket" text={t.ticketQR} onClick={v.openQR} />
          <Shortcut icon="chat" text={t.askAI} onClick={v.openChat} accent />
        </section>

        {/* Wallet strip */}
        <section style={{ ...card, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 12, background: C.skyTint, color: C.sky, display: 'grid', placeItems: 'center' }}>
            <Icon name="wallet" size={20} />
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: C.muted }}>{t.balance}</span>
            <span style={{ fontSize: 17, fontWeight: 800 }}>{v.balanceTxt}</span>
          </span>
          <button onClick={v.openTopup} style={{ height: 36, padding: '0 14px', borderRadius: 999, border: `1.5px solid ${C.sky}`, background: '#fff', color: C.sky, fontSize: 14, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
            <Icon name="plus" size={15} stroke={2.6} />
            {t.topup}
          </button>
        </section>
        {v.hasTicket ? (
          <button onClick={v.openQR} style={{ ...card, marginTop: -14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', color: C.ink, textAlign: 'left', borderColor: '#BFE3CC', background: '#F1FAF4' }}>
            <Icon name="qr" size={20} style={{ color: '#146C36' }} />
            <span style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>{v.ticketLbl}</span>
            <Icon name="chevron" size={18} style={{ color: C.muted }} />
          </button>
        ) : null}

        {/* Saved trips */}
        {v.hasSaved ? (
          <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <SectionTitle>{t.savedTrips}</SectionTitle>
            <div style={{ ...card, padding: '0 14px' }}>
              {(v.savedTrips || []).map((s, i) => (
                <button key={i} onClick={s.go} style={{ ...rowBtn, borderTop: i ? `1px solid ${C.line}` : 0, gap: 12 }}>
                  <span style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 10, background: C.linen, color: C.ink, display: 'grid', placeItems: 'center' }}>
                    <Icon name="star" size={17} />
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                    <span style={{ ...value, fontSize: 15 }}>{s.to}</span>
                    <span style={{ fontSize: 13, color: C.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.from} {s.from}</span>
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: C.sky, whiteSpace: 'nowrap' }}>± {s.mins} {t.min}</span>
                  <Icon name="chevron" size={18} style={{ color: C.muted, flexShrink: 0 }} />
                </button>
              ))}
            </div>
          </section>
        ) : null}

        {/* Live buses */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '0 2px' }}>
            <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800 }}>{t.liveNear}</h2>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 800, color: C.scarlet }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.scarlet }} />
              {t.live}
            </span>
          </div>
          <div style={{ ...card, padding: '4px 14px' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.muted, padding: '10px 0 6px' }}>Halte UINSA · Jl. Ahmad Yani</div>
            {(v.liveBuses || []).map((x, i) => (
              <button key={i} onClick={x.open} style={{ ...rowBtn, minHeight: 60, borderTop: `1px solid ${C.line}`, gap: 12 }}>
                <RouteBadge rid={x.rid} ink={x.ink} />
                <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                  <span style={{ ...value, fontSize: 15 }}>{x.head}</span>
                  <span style={{ fontSize: 13, color: C.muted }}>
                    {x.code} · <span style={{ color: x.cFg, fontWeight: 700 }}>{x.crowd}</span>
                  </span>
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: 15, fontWeight: 800, whiteSpace: 'nowrap' }}>{x.away}</span>
                  <span style={{ fontSize: 13, color: C.muted, whiteSpace: 'nowrap' }}>{x.eta}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Events: promo-style cards, photo on top and text below */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SectionTitle>{t.events}</SectionTitle>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', margin: '0 -16px', padding: '0 16px 2px', scrollbarWidth: 'none' }}>
            {(v.events || []).map((e, i) => (
              <button key={i} onClick={e.open} style={{ ...card, flexShrink: 0, width: 248, padding: 0, overflow: 'hidden', cursor: 'pointer', textAlign: 'left', color: C.ink }}>
                <span style={{ display: 'block', height: 124, backgroundColor: C.linenDeep, backgroundImage: e.bg, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <span style={{ display: 'flex', gap: 12, padding: 12, alignItems: 'flex-start' }}>
                  <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 44, padding: '4px 0', borderRadius: 10, background: C.scarletTint, color: C.scarlet, lineHeight: 1.1 }}>
                    <span style={{ fontSize: 18, fontWeight: 800 }}>{e.day}</span>
                    <span style={{ fontSize: 11, fontWeight: 800, textTransform: 'uppercase' }}>{e.mon}</span>
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.3 }}>{e.title}</span>
                    <span style={{ fontSize: 13, color: C.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.time} · {e.place}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured places */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SectionTitle action={t.seeAll} onAction={v.tabSt?.wisata?.go}>{t.picks}</SectionTitle>
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', margin: '0 -16px', padding: '0 16px 2px', scrollbarWidth: 'none' }}>
            {(v.picks || []).map((p, i) => (
              <button key={i} onClick={p.open} style={{ ...card, flexShrink: 0, width: 168, padding: 0, overflow: 'hidden', cursor: 'pointer', textAlign: 'left', color: C.ink }}>
                <span style={{ display: 'block', height: 120, backgroundColor: p.tint, backgroundImage: p.bg, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <span style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '10px 12px 12px' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.sky }}>{p.cat}</span>
                  <span style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
                  <span style={{ fontSize: 12, color: C.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.near}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <p style={{ margin: 0, fontSize: 12, color: C.muted, textAlign: 'center' }}>
          {t.proto} · {t.photoCredit}
        </p>
      </div>
    </div>
  );
}
