/* Generated from the ArahAssist design template, then hand-edited. */
import React from "react";
import HomeScreen from "./HomeScreen";

export default function AppView({ v }) {
  return (
    <>
      <div
        ref={v?.rootRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "560px",
          overflow: "hidden",
          background: "#EFE8DE",
          fontFamily: "var(--font-jakarta), ui-sans-serif, system-ui, sans-serif",
          color: "#1B2333",
          fontSize: "16px",
          lineHeight: "1.45",
        }}
      >
        <div ref={v?.mapRef} style={{ position: "absolute", top: "0px", bottom: "0px", right: "0px", left: v?.L?.mapL }} />

        {v?.wide ? (
          <>
            <nav
              style={{
                position: "absolute",
                zIndex: "8",
                left: "0px",
                top: "0px",
                bottom: "0px",
                width: "76px",
                background: "#fff",
                borderRight: "1px solid #E4DBCD",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                padding: "16px 0",
              }}
            >
              <span
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: "#1664B0",
                  display: "grid",
                  placeItems: "center",
                  color: "#fff",
                  marginBottom: "14px",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="3" rx="3" />
                  <path d="M4 11h16" />
                  <path d="M8 15h.01" />
                  <path d="M16 15h.01" />
                  <path d="M6 19v2" />
                  <path d="M18 19v2" />
                </svg>
              </span>
              <button
                onClick={v?.tabSt?.home?.go}
                style={{
                  width: "64px",
                  minHeight: "60px",
                  border: "0",
                  borderRadius: "16px",
                  background: v?.tabSt?.home?.bg,
                  color: v?.tabSt?.home?.fg,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10.5 12 3l9 7.5" />
                  <path d="M5 9v11h14V9" />
                </svg>
                {v?.t?.tHome}
              </button>
              <button
                onClick={v?.tabSt?.route?.go}
                style={{
                  width: "64px",
                  minHeight: "60px",
                  border: "0",
                  borderRadius: "16px",
                  background: v?.tabSt?.route?.bg,
                  color: v?.tabSt?.route?.fg,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="19" r="3" />
                  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                  <circle cx="18" cy="5" r="3" />
                </svg>
                {v?.t?.tRoute}
              </button>
              <button
                onClick={v?.tabSt?.wisata?.go}
                style={{
                  width: "64px",
                  minHeight: "60px",
                  border: "0",
                  borderRadius: "16px",
                  background: v?.tabSt?.wisata?.bg,
                  color: v?.tabSt?.wisata?.fg,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9.5" />
                  <path d="m15.8 8.2-2.3 5.3-5.3 2.3 2.3-5.3z" />
                </svg>
                {v?.t?.tWisata}
              </button>
              <button
                onClick={v?.tabSt?.history?.go}
                style={{
                  width: "64px",
                  minHeight: "60px",
                  border: "0",
                  borderRadius: "16px",
                  background: v?.tabSt?.history?.bg,
                  color: v?.tabSt?.history?.fg,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M12 7v5l4 2" />
                </svg>
                {v?.t?.tHistory}
              </button>
              <button
                onClick={v?.tabSt?.account?.go}
                style={{
                  width: "64px",
                  minHeight: "60px",
                  border: "0",
                  borderRadius: "16px",
                  background: v?.tabSt?.account?.bg,
                  color: v?.tabSt?.account?.fg,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
                {v?.t?.tAccount}
              </button>
            </nav>
            <div
              style={{
                position: "absolute",
                zIndex: "4",
                top: "16px",
                right: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "#fff",
                  borderRadius: "14px",
                  boxShadow: "0 1px 3px rgba(27,35,51,.08)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={v?.zoomIn}
                  aria-label={v?.t?.zoomIn}
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "0",
                    background: "#fff",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    color: "#1B2333",
                  }}
                  className="hv1"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
                <div style={{ height: "1px", background: "#ECE4D8" }} />
                <button
                  onClick={v?.zoomOut}
                  aria-label={v?.t?.zoomOut}
                  style={{
                    width: "44px",
                    height: "44px",
                    border: "0",
                    background: "#fff",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    color: "#1B2333",
                  }}
                  className="hv1"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14" />
                  </svg>
                </button>
              </div>
              <button
                onClick={v?.recenter}
                aria-label={v?.t?.recenter}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: "#fff",
                  border: "0",
                  boxShadow: "0 1px 3px rgba(27,35,51,.08)",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  color: "#1B2333",
                }}
                className="hv1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M2 12h3" />
                  <path d="M19 12h3" />
                  <path d="M12 2v3" />
                  <path d="M12 19v3" />
                  <circle cx="12" cy="12" r="7" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </button>
              <span style={{ fontSize: "12px", color: "#5D6577", background: "rgba(255,255,255,.85)", padding: "3px 8px", borderRadius: "6px" }}>
                ©{" "}
                <a href="https://www.openstreetmap.org/copyright" target="_blank" style={{ color: "#5D6577" }}>
                  OpenStreetMap
                </a>
              </span>
            </div>
          </>
        ) : null}

        {v?.top?.show ? (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: "7",
                top: v?.L?.tcT,
                left: v?.L?.tcL,
                right: v?.L?.tcR,
                width: v?.L?.tcW,
                borderRadius: "16px",
                padding: "16px 18px",
                background: v?.top?.bg,
                color: v?.top?.fg,
                boxShadow: "0 10px 30px rgba(21,23,28,.28)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px 16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", minWidth: "0", flex: "1 1 160px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: v?.top?.sub }}>{v?.top?.label}</span>
                  <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.15" }}>{v?.top?.title}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right", flexShrink: "0" }}>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                      letterSpacing: "-0.02em",
                      lineHeight: "1.15",
                      fontVariantNumeric: "tabular-nums",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v?.top?.big}
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: v?.top?.sub }}>{v?.top?.small}</span>
                </div>
              </div>
              {v?.top?.hasBar ? (
                <>
                  <div style={{ height: "4px", borderRadius: "2px", background: "rgba(255,255,255,.28)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: v?.top?.pct, background: "#fff", borderRadius: "2px" }} />
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}

        {v?.showFollow ? (
          <>
            <button
              onClick={v?.followBus}
              style={{
                position: "absolute",
                zIndex: "7",
                left: v?.L?.followL,
                bottom: v?.L?.followB,
                height: "44px",
                padding: "0 16px 0 12px",
                borderRadius: "999px",
                border: "0",
                background: "#1664B0",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(21,23,28,.25)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11l19-9-9 19-2-8-8-2z" />
              </svg>
              {v?.t?.followBus}
            </button>
          </>
        ) : null}

        {v?.showFab ? (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: "11",
                right: "12px",
                bottom: v?.L?.fabB,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "flex-end",
              }}
            >
              {v?.showRecenter ? (
                <>
                  <button
                    onClick={v?.recenter}
                    aria-label={v?.t?.recenter}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#fff",
                      border: "0",
                      boxShadow: "0 1px 3px rgba(27,35,51,.08)",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                      color: "#1B2333",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M2 12h3" />
                      <path d="M19 12h3" />
                      <path d="M12 2v3" />
                      <path d="M12 19v3" />
                      <circle cx="12" cy="12" r="7" />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  </button>
                </>
              ) : null}
              <button
                onClick={v?.openChat}
                style={{
                  height: "52px",
                  padding: "0 18px 0 14px",
                  borderRadius: "999px",
                  border: "0",
                  background: "#1664B0",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px",
                  fontWeight: "800",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(27,35,51,.16)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /><path d="M8.5 11h.01" /><path d="M12 11h.01" /><path d="M15.5 11h.01" /></svg>
                {v?.t?.askAI}
              </button>
            </div>
          </>
        ) : null}

        <div
          ref={v?.sheetRef}
          style={{
            position: "absolute",
            zIndex: "6",
            left: v?.L?.pL,
            right: v?.L?.pR,
            top: v?.L?.pT,
            bottom: v?.L?.pB,
            width: v?.L?.pW,
            maxHeight: v?.L?.pMaxH,
            borderRadius: v?.L?.pRad,
            background: v?.L?.pBg,
            boxShadow: v?.L?.pShadow,
            borderRight: "1px solid #E4DBCD",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {v?.L?.handle ? (
            <>
              <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 2px", flexShrink: "0" }}>
                <div style={{ width: "40px", height: "4px", borderRadius: "2px", background: "#D6CBB9" }} />
              </div>
            </>
          ) : null}
          {v?.showSteps ? (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px 0", flexShrink: "0" }}>
                <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "8px", minWidth: "0" }}>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {v?.steps?.lbl}
                  </span>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {(v?.steps?.bars ?? []).map((b, $index) => (
                      <React.Fragment key={$index}>
                        <div style={{ flex: "1", height: "4px", borderRadius: "2px", background: b?.bg }} />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <button
                  onClick={v?.cancelTrip}
                  aria-label={v?.t?.cancelTrip}
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: "0",
                    borderRadius: "14px",
                    background: "#F5F0E8",
                    border: "0",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    color: "#1B2333",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </>
          ) : null}

          {v?.is?.home ? <HomeScreen v={v} /> : null}

          {v?.is?.pick ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto", background: "#fff" }}>
                <div
                  style={{
                    padding: "14px 20px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flexShrink: "0",
                    borderBottom: "1px solid #EAE2D5",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button
                      onClick={v?.back}
                      aria-label={v?.t?.back}
                      style={{
                        width: "44px",
                        height: "44px",
                        flexShrink: "0",
                        borderRadius: "14px",
                        background: "#F5F0E8",
                        border: "0",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        color: "#1B2333",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5" />
                        <path d="m12 19-7-7 7-7" />
                      </svg>
                    </button>
                    <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>{v?.pickTitle}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      height: "52px",
                      padding: "0 8px 0 14px",
                      borderRadius: "16px",
                      border: "1.5px solid #1664B0",
                      boxShadow: "0 0 0 4px rgba(22,100,176,.12)",
                      color: "#1664B0",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <circle cx="11" cy="11" r="7.5" />
                      <path d="m20.5 20.5-4.2-4.2" />
                    </svg>
                    <input
                      ref={v?.searchRef}
                      value={v?.q}
                      onChange={v?.onQ}
                      placeholder={v?.t?.searchPh}
                      style={{
                        flex: "1",
                        minWidth: "0",
                        height: "40px",
                        border: "0",
                        outline: "none",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#1B2333",
                        background: "transparent",
                      }}
                    />
                    {v?.hasQ ? (
                      <>
                        <button
                          onClick={v?.clearQ}
                          aria-label={v?.t?.clearSearch}
                          style={{
                            width: "36px",
                            height: "36px",
                            flexShrink: "0",
                            borderRadius: "10px",
                            border: "0",
                            background: "#F5F0E8",
                            display: "grid",
                            placeItems: "center",
                            cursor: "pointer",
                            color: "#1B2333",
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
                <div style={{ overflowY: "auto", minHeight: "0", flex: "1 1 auto", padding: "6px 20px 24px", display: "flex", flexDirection: "column" }}>
                  {v?.showMe ? (
                    <>
                      <button
                        onClick={v?.chooseMe}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "44px minmax(0,1fr)",
                          gap: "12px",
                          alignItems: "center",
                          padding: "10px 0",
                          border: "0",
                          background: "none",
                          textAlign: "left",
                          cursor: "pointer",
                          color: "#1B2333",
                          width: "100%",
                        }}
                      >
                        <span style={{ width: "44px", height: "44px", borderRadius: "13px", background: "#EAF1F9", display: "grid", placeItems: "center" }}>
                          <span
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              background: "#1664B0",
                              boxShadow: "0 0 0 3px #fff, 0 0 0 6px rgba(22,100,176,.2)",
                            }}
                          />
                        </span>
                        <span style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: "800" }}>{v?.t?.myLoc}</span>
                          <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.t?.myLocSub}</span>
                        </span>
                      </button>
                    </>
                  ) : null}
                  {v?.noQ ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                          padding: "16px 0",
                          borderTop: "1px solid #EAE2D5",
                          color: "#5D6577",
                          fontSize: "15px",
                          lineHeight: "1.5",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: "0", marginTop: "1px" }}
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{v?.t?.searchHint}</span>
                      </div>
                    </>
                  ) : null}
                  {v?.hasPickPlaces ? (
                    <>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577", padding: "12px 0 4px" }}>{v?.pickPlacesLbl}</span>
                      {(v?.pickPlaces ?? []).map((p, $index) => (
                        <React.Fragment key={$index}>
                          <button
                            onClick={p?.pick}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "48px minmax(0,1fr)",
                              gap: "12px",
                              alignItems: "center",
                              padding: "9px 0",
                              border: "0",
                              borderTop: "1px solid #EAE2D5",
                              background: "none",
                              textAlign: "left",
                              cursor: "pointer",
                              color: "#1B2333",
                              width: "100%",
                            }}
                          >
                            <span
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "14px",
                                backgroundColor: p?.tint,
                                backgroundImage: p?.bg,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            />
                            <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                              <span style={{ fontWeight: "700" }}>{p?.name}</span>
                              <span style={{ fontSize: "15px", color: "#5D6577" }}>{p?.sub}</span>
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </>
                  ) : null}
                  {v?.hasPickStops ? (
                    <>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577", padding: "16px 0 4px" }}>{v?.t?.secStops}</span>
                      {(v?.pickStops ?? []).map((s, $index) => (
                        <React.Fragment key={$index}>
                          <button
                            onClick={s?.pick}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "48px minmax(0,1fr) auto",
                              gap: "12px",
                              alignItems: "center",
                              padding: "9px 0",
                              border: "0",
                              borderTop: "1px solid #EAE2D5",
                              background: "none",
                              textAlign: "left",
                              cursor: "pointer",
                              color: "#1B2333",
                              width: "100%",
                            }}
                          >
                            <span style={{ width: "48px", height: "48px", borderRadius: "14px", background: "#F5F0E8", display: "grid", placeItems: "center" }}>
                              <span
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  borderRadius: "50%",
                                  background: "#fff",
                                  border: `4px solid ${s?.dot ?? ""}`,
                                  boxShadow: "0 0 0 3px #fff",
                                }}
                              />
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                              <span style={{ fontWeight: "700" }}>{s?.name}</span>
                              <span style={{ fontSize: "15px", color: "#5D6577" }}>{s?.sub}</span>
                            </span>
                            <span style={{ fontSize: "14px", fontWeight: "800", color: "#5D6577", whiteSpace: "nowrap" }}>{s?.rids}</span>
                          </button>
                        </React.Fragment>
                      ))}
                    </>
                  ) : null}
                  {v?.hasGeo ? (
                    <>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577", padding: "16px 0 4px" }}>{v?.t?.otherLoc}</span>
                      {(v?.pickGeo ?? []).map((g, $index) => (
                        <React.Fragment key={$index}>
                          <button
                            onClick={g?.pick}
                            style={{
                              display: "grid",
                              gridTemplateColumns: "48px minmax(0,1fr)",
                              gap: "12px",
                              alignItems: "center",
                              padding: "9px 0",
                              border: "0",
                              borderTop: "1px solid #EAE2D5",
                              background: "none",
                              textAlign: "left",
                              cursor: "pointer",
                              color: "#1B2333",
                              width: "100%",
                            }}
                          >
                            <span
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "14px",
                                background: "#EAF1F9",
                                color: "#1664B0",
                                display: "grid",
                                placeItems: "center",
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                              </svg>
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                              <span style={{ fontWeight: "700" }}>{g?.name}</span>
                              <span style={{ fontSize: "15px", color: "#5D6577" }}>{g?.sub}</span>
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </>
                  ) : null}
                  {v?.geoLoading ? (
                    <>
                      <span style={{ padding: "16px 0", color: "#5D6577", fontSize: "15px" }}>{v?.t?.searching}</span>
                    </>
                  ) : null}
                  {v?.noPickRes ? (
                    <>
                      <span style={{ padding: "20px 0", color: "#5D6577" }}>{v?.t?.noRes}</span>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}

          {v?.is?.results ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div
                  style={{
                    overflowY: "auto",
                    minHeight: "0",
                    flex: "1 1 auto",
                    padding: "12px 20px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <button
                      onClick={v?.back}
                      aria-label={v?.t?.back}
                      style={{
                        width: "44px",
                        height: "44px",
                        flexShrink: "0",
                        borderRadius: "14px",
                        background: "#F5F0E8",
                        border: "0",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        color: "#1B2333",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5" />
                        <path d="m12 19-7-7 7-7" />
                      </svg>
                    </button>
                    <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                      <span
                        style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                      >
                        {v?.resFrom} →{" "}
                      </span>
                      <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.2" }}>{v?.resTo}</span>
                    </div>
                  </div>
                  <span style={{ fontSize: "15px", color: "#5D6577" }}>
                    {v?.t?.options} · {v?.resMeta}
                  </span>
                  {(v?.opts ?? []).map((o, $index) => (
                    <React.Fragment key={$index}>
                      <button
                        onClick={o?.open}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "16px",
                          borderRadius: "16px",
                          border: "1.5px solid #E4DBCD",
                          background: "#fff",
                          cursor: "pointer",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          color: "#1B2333",
                        }}
                        className="hv5"
                      >
                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "10px", width: "100%" }}>
                          <span style={{ display: "flex", flexDirection: "column", gap: "6px", flex: "1", minWidth: "0" }}>
                            <span
                              style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.025em", lineHeight: "1.1", fontVariantNumeric: "tabular-nums" }}
                            >
                              {o?.range}
                            </span>
                            <span style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                              {(o?.tags ?? []).map((tg, $index) => (
                                <React.Fragment key={$index}>
                                  <span style={{ fontSize: "13px", fontWeight: "800", padding: "3px 9px", borderRadius: "999px", background: tg?.bg }}>
                                    {tg?.lbl}
                                  </span>
                                </React.Fragment>
                              ))}
                              <span style={{ fontSize: "13px", fontWeight: "700", padding: "3px 9px", borderRadius: "999px", background: "#F5F0E8" }}>
                                {o?.xfer}
                              </span>
                            </span>
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
                            <span style={{ fontSize: "15px", fontWeight: "700", whiteSpace: "nowrap" }}>{o?.arrive}</span>
                            <span style={{ fontSize: "15px", color: "#5D6577" }}>{o?.fare}</span>
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" }}>
                          {(o?.chips ?? []).map((c, $index) => (
                            <React.Fragment key={$index}>
                              {c?.sep ? (
                                <>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#8A92A3"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </>
                              ) : null}
                              {c?.isWalk ? (
                                <>
                                  <span
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "6px",
                                      height: "28px",
                                      padding: "0 8px",
                                      borderRadius: "9px",
                                      background: "#F5F0E8",
                                      fontSize: "14px",
                                      fontWeight: "700",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <circle cx="13" cy="4" r="2" />
                                      <path d="m9 20 3-6 3 3v4" />
                                      <path d="M6 12l2-4 4 1 3 3 3 1" />
                                    </svg>
                                    {c?.txt}
                                  </span>
                                </>
                              ) : null}
                              {c?.isBus ? (
                                <>
                                  <span
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      gap: "8px",
                                      height: "28px",
                                      padding: "0 10px 0 4px",
                                      borderRadius: "9px",
                                      background: "#F5F0E8",
                                      fontSize: "14px",
                                      fontWeight: "700",
                                      whiteSpace: "nowrap",
                                    }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-grid",
                                        placeItems: "center",
                                        minWidth: "30px",
                                        height: "24px",
                                        padding: "0 6px",
                                        borderRadius: "6px",
                                        background: c?.ink,
                                        color: "#fff",
                                        fontSize: "13px",
                                        fontWeight: "800",
                                      }}
                                    >
                                      {c?.rid}
                                    </span>
                                    {c?.txt}
                                  </span>
                                </>
                              ) : null}
                            </React.Fragment>
                          ))}
                        </div>
                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "#5D6577" }}>
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              flexShrink: "0",
                              borderRadius: "50%",
                              background: "#1E9E5A",
                              boxShadow: "0 0 0 3px rgba(30,158,90,.18)",
                            }}
                          />
                          {o?.first}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                  {v?.noOpts ? (
                    <>
                      <div style={{ padding: "18px", borderRadius: "14px", background: "#EFE8DE", color: "#1B2333" }}>{v?.noOptsTxt}</div>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}

          {v?.rowsScreen ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div
                  style={{
                    overflowY: "auto",
                    minHeight: "0",
                    flex: "1 1 auto",
                    padding: "12px 20px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {v?.is?.detail ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button
                          onClick={v?.back}
                          aria-label={v?.t?.back}
                          style={{
                            width: "44px",
                            height: "44px",
                            flexShrink: "0",
                            borderRadius: "14px",
                            background: "#F5F0E8",
                            border: "0",
                            display: "grid",
                            placeItems: "center",
                            cursor: "pointer",
                            color: "#1B2333",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                          </svg>
                        </button>
                        <div style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                          <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{v?.t?.tripDetail}</span>
                          <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.2" }}>{v?.dt?.dest}</span>
                        </div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", border: "1px solid #E6DED1", borderRadius: "14px" }}>
                        <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.duration}</span>
                          <span style={{ fontSize: "15px", fontWeight: "800", whiteSpace: "nowrap" }}>{v?.dt?.dur}</span>
                        </div>
                        <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.arrive}</span>
                          <span style={{ fontSize: "15px", fontWeight: "800", whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>{v?.dt?.arr}</span>
                        </div>
                        <div style={{ padding: "12px 10px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.fare}</span>
                          <span style={{ fontSize: "15px", fontWeight: "800", whiteSpace: "nowrap" }}>{v?.dt?.fare}</span>
                        </div>
                      </div>
                    </>
                  ) : null}

                  {v?.is?.routeDetail ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <button
                          onClick={v?.back}
                          aria-label={v?.t?.back}
                          style={{
                            width: "44px",
                            height: "44px",
                            flexShrink: "0",
                            borderRadius: "14px",
                            background: "#F5F0E8",
                            border: "0",
                            display: "grid",
                            placeItems: "center",
                            cursor: "pointer",
                            color: "#1B2333",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                          </svg>
                        </button>
                        <span
                          style={{
                            display: "inline-grid",
                            placeItems: "center",
                            minWidth: "44px",
                            height: "34px",
                            padding: "0 10px",
                            borderRadius: "10px",
                            background: v?.rdx?.ink,
                            color: "#fff",
                            fontSize: "17px",
                            fontWeight: "800",
                          }}
                        >
                          {v?.rdx?.rid}
                        </span>
                        <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.2", minWidth: "0" }}>{v?.rdx?.name}</span>
                      </div>
                      {v?.rdx?.isLoop ? (
                        <>
                          <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.t?.loopNote}</span>
                        </>
                      ) : null}
                      {v?.rdx?.hasDirs ? (
                        <>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                              gap: "4px",
                              padding: "4px",
                              borderRadius: "14px",
                              background: "#F5F0E8",
                            }}
                          >
                            {(v?.rdx?.dirs ?? []).map((d, $index) => (
                              <React.Fragment key={$index}>
                                <button
                                  onClick={d?.set}
                                  style={{
                                    height: "40px",
                                    border: "0",
                                    borderRadius: "11px",
                                    background: d?.bg,
                                    boxShadow: d?.sh,
                                    fontSize: "15px",
                                    fontWeight: "700",
                                    color: "#1B2333",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    padding: "0 8px",
                                  }}
                                >
                                  {d?.lbl}
                                </button>
                              </React.Fragment>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </>
                  ) : null}

                  {v?.showBusId ? (
                    <>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                        {v?.isTrackS ? (
                          <>
                            <button
                              onClick={v?.back}
                              aria-label={v?.t?.back}
                              style={{
                                width: "44px",
                                height: "44px",
                                flexShrink: "0",
                                borderRadius: "14px",
                                background: "#F5F0E8",
                                border: "0",
                                display: "grid",
                                placeItems: "center",
                                cursor: "pointer",
                                color: "#1B2333",
                              }}
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M19 12H5" />
                                <path d="m12 19-7-7 7-7" />
                              </svg>
                            </button>
                          </>
                        ) : null}
                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                            <span
                              style={{
                                display: "inline-grid",
                                placeItems: "center",
                                minWidth: "38px",
                                height: "28px",
                                padding: "0 8px",
                                borderRadius: "8px",
                                background: v?.bi?.ink,
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: "800",
                              }}
                            >
                              {v?.bi?.rid}
                            </span>
                            <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em", whiteSpace: "nowrap" }}>{v?.bi?.code}</span>
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: "800",
                                padding: "4px 10px",
                                borderRadius: "999px",
                                background: v?.bi?.cBg,
                                color: v?.bi?.cFg,
                                whiteSpace: "nowrap",
                              }}
                            >
                              {v?.bi?.crowd}
                            </span>
                          </div>
                          <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.bi?.sub}</span>
                        </div>
                        <button
                          onClick={v?.openReport}
                          style={{
                            height: "44px",
                            padding: "0 14px",
                            borderRadius: "14px",
                            border: "1px solid #E3DACB",
                            background: "#fff",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontWeight: "700",
                            fontSize: "15px",
                            cursor: "pointer",
                            color: "#1B2333",
                            flexShrink: "0",
                          }}
                          className="hv5"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 22V4c2-1.5 4-2 6.5-1S15 5 17.5 4 20 3 20 3v11s-1 1.5-3.5 1.5S12.5 13 10 13s-6 1.5-6 1.5" />
                          </svg>
                          {v?.t?.report}
                        </button>
                      </div>
                      {v?.bi?.lowFloor ? (
                        <>
                          <span
                            style={{
                              alignSelf: "flex-start",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              fontSize: "14px",
                              fontWeight: "700",
                              padding: "6px 10px",
                              borderRadius: "999px",
                              background: "#EAF1F9",
                              color: "#0E4A87",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="15" cy="4" r="1.6" />
                              <path d="M9 7h5l-1 6h5l2 6" />
                              <path d="M11 10a5 5 0 1 0 5.6 7" />
                            </svg>
                            {v?.t?.lowFloor}
                          </span>
                        </>
                      ) : null}
                      {v?.isJTrack ? (
                        <>
                          <div
                            style={{ display: "flex", alignItems: "center", gap: "10px", background: "#EAF1F9", borderRadius: "14px", padding: "12px 14px" }}
                          >
                            <span
                              style={{
                                width: "12px",
                                height: "12px",
                                flexShrink: "0",
                                borderRadius: "50%",
                                background: "#1664B0",
                                boxShadow: "0 0 0 3px rgba(22,100,176,.2)",
                              }}
                            />
                            <span style={{ fontSize: "15px" }}>
                              {v?.t?.yourStop}: <b>{v?.bi?.myStop}</b> · {v?.bi?.myAway}
                            </span>
                          </div>
                        </>
                      ) : null}
                      {v?.isTrackS ? (
                        <>
                          <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.t?.remindHint}</span>
                        </>
                      ) : null}
                    </>
                  ) : null}

                  {v?.isRide ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.025em", lineHeight: "1.2" }}>{v?.rd?.title}</span>
                        <span style={{ fontSize: "15px", color: "#5D6577" }}>
                          {v?.rd?.busLine} · {v?.t?.willNotify}
                        </span>
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)",
                          border: "1px solid #E6DED1",
                          borderRadius: "14px",
                        }}
                      >
                        <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.arrive}</span>
                          <span style={{ fontSize: "16px", fontWeight: "800", whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>{v?.rd?.arrive}</span>
                        </div>
                        <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.remaining}</span>
                          <span style={{ fontSize: "16px", fontWeight: "800", whiteSpace: "nowrap" }}>{v?.rd?.left}</span>
                        </div>
                        <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                          <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.distance}</span>
                          <span style={{ fontSize: "16px", fontWeight: "800", whiteSpace: "nowrap" }}>{v?.rd?.dist}</span>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(v?.rows ?? []).map((r, $index) => (
                      <React.Fragment key={$index}>
                        <div
                          onClick={r?.onClick}
                          style={{ display: "grid", gridTemplateColumns: "32px minmax(0,1fr) auto", columnGap: "12px", minHeight: r?.minH, cursor: r?.cursor }}
                        >
                          <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", left: "14px", top: "0px", height: "50%", borderLeft: r?.lt }} />
                            <div style={{ position: "absolute", left: "14px", top: "50%", bottom: "0px", borderLeft: r?.lb }} />
                            {r?.node ? (
                              <>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: r?.size,
                                    height: r?.size,
                                    borderRadius: r?.radius,
                                    background: r?.fill,
                                    border: r?.border,
                                    boxShadow: "0 0 0 3px #fff",
                                  }}
                                />
                              </>
                            ) : null}
                            {r?.busIcon ? (
                              <>
                                <div
                                  style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "9px",
                                    background: "#1664B0",
                                    display: "grid",
                                    placeItems: "center",
                                    boxShadow: "0 0 0 3px #fff",
                                    color: "#fff",
                                  }}
                                >
                                  <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <rect width="16" height="16" x="4" y="3" rx="3" />
                                    <path d="M4 11h16" />
                                    <path d="M6 19v2" />
                                    <path d="M18 19v2" />
                                  </svg>
                                </div>
                              </>
                            ) : null}
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "8px 0", minWidth: "0" }}>
                            {r?.isBus ? (
                              <>
                                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                  <span
                                    style={{
                                      display: "inline-grid",
                                      placeItems: "center",
                                      minWidth: "30px",
                                      height: "24px",
                                      padding: "0 6px",
                                      borderRadius: "6px",
                                      background: r?.ink,
                                      color: "#fff",
                                      fontSize: "13px",
                                      fontWeight: "800",
                                    }}
                                  >
                                    {r?.rid}
                                  </span>
                                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#5D6577" }}>{r?.title}</span>
                                </span>
                              </>
                            ) : null}
                            {r?.notBus ? (
                              <>
                                <span style={{ fontSize: r?.fs, fontWeight: r?.fw, color: r?.color, lineHeight: "1.35" }}>{r?.title}</span>
                              </>
                            ) : null}
                            {r?.hasSub ? (
                              <>
                                <span style={{ fontSize: "14px", color: "#5D6577", lineHeight: "1.4" }}>{r?.sub}</span>
                              </>
                            ) : null}
                            {r?.hasBadges ? (
                              <>
                                <span style={{ display: "flex", gap: "4px", paddingTop: "4px" }}>
                                  {(r?.badges ?? []).map((rb, $index) => (
                                    <React.Fragment key={$index}>
                                      <span
                                        style={{
                                          display: "inline-grid",
                                          placeItems: "center",
                                          minWidth: "28px",
                                          height: "20px",
                                          padding: "0 5px",
                                          borderRadius: "5px",
                                          background: rb?.ink,
                                          color: "#fff",
                                          fontSize: "12px",
                                          fontWeight: "800",
                                        }}
                                      >
                                        {rb?.rid}
                                      </span>
                                    </React.Fragment>
                                  ))}
                                </span>
                              </>
                            ) : null}
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            {r?.hasRight ? (
                              <>
                                <span style={{ fontSize: "15px", fontWeight: "700", whiteSpace: "nowrap", color: "#1B2333" }}>{r?.right}</span>
                              </>
                            ) : null}
                            {r?.hasTag ? (
                              <>
                                <span
                                  style={{
                                    fontSize: "13px",
                                    fontWeight: "800",
                                    padding: "4px 10px",
                                    borderRadius: "999px",
                                    background: r?.tagBg,
                                    color: "#1B2333",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {r?.tag}
                                </span>
                              </>
                            ) : null}
                            {r?.hasBell ? (
                              <>
                                <button
                                  onClick={r?.toggleBell}
                                  aria-label={v?.t?.remindHint}
                                  style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "12px",
                                    border: "0",
                                    background: r?.bellBg,
                                    display: "grid",
                                    placeItems: "center",
                                    cursor: "pointer",
                                    color: "#1B2333",
                                  }}
                                >
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill={r?.bellFill}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                                  </svg>
                                </button>
                              </>
                            ) : null}
                            {r?.hasChev ? (
                              <>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#8A92A3"
                                  strokeWidth="2.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </>
                            ) : null}
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>

                  {v?.is?.detail ? (
                    <>
                      <div style={{ borderRadius: "14px", background: "#EFE8DE", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {(v?.dt?.fareRows ?? []).map((f, $index) => (
                          <React.Fragment key={$index}>
                            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "15px" }}>
                              <span>{f?.lbl}</span>
                              <span style={{ fontWeight: "700" }}>{f?.amt}</span>
                            </div>
                          </React.Fragment>
                        ))}
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", paddingTop: "8px", borderTop: "1px solid #E4DBCD" }}>
                          <span style={{ fontWeight: "800" }}>{v?.t?.total}</span>
                          <span style={{ fontWeight: "800" }}>{v?.dt?.fare}</span>
                        </div>
                        <span style={{ fontSize: "14px", color: "#5D6577" }}>{v?.t?.fareNote}</span>
                      </div>
                    </>
                  ) : null}
                </div>

                {v?.is?.detail ? (
                  <>
                    <div style={{ padding: "12px 20px 18px", borderTop: "1px solid #EAE2D5", flexShrink: "0" }}>
                      <button
                        onClick={v?.startTrip}
                        style={{
                          height: "56px",
                          width: "100%",
                          border: "0",
                          borderRadius: "16px",
                          background: "#D21624",
                          color: "#fff",
                          fontSize: "17px",
                          fontWeight: "800",
                          cursor: "pointer",
                        }}
                        className="hv6"
                      >
                        {v?.dt?.cta}
                      </button>
                    </div>
                  </>
                ) : null}
                {v?.isJTrack ? (
                  <>
                    <div
                      style={{
                        padding: "12px 20px 18px",
                        borderTop: "1px solid #EAE2D5",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "8px" }}>
                        <button
                          onClick={v?.openQR}
                          style={{
                            height: "56px",
                            padding: "0 16px",
                            border: "1.5px solid #D6CBB9",
                            borderRadius: "16px",
                            background: "#fff",
                            color: "#1B2333",
                            fontSize: "16px",
                            fontWeight: "700",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                          className="hv5"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                            <path d="M14 14h3v3h-3z" />
                            <path d="M17 20h4v-3" />
                          </svg>
                          QR
                        </button>
                        <button
                          onClick={v?.board}
                          style={{
                            height: "56px",
                            border: "0",
                            borderRadius: "16px",
                            background: "#D21624",
                            color: "#fff",
                            fontSize: "17px",
                            fontWeight: "800",
                            cursor: "pointer",
                          }}
                          className="hv6"
                        >
                          {v?.t?.boarded}
                        </button>
                      </div>
                      <button
                        onClick={v?.changeBus}
                        style={{
                          height: "40px",
                          border: "0",
                          background: "none",
                          color: "#1B2333",
                          fontSize: "15px",
                          fontWeight: "700",
                          cursor: "pointer",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                        }}
                      >
                        {v?.t?.changeBus}
                      </button>
                    </div>
                  </>
                ) : null}
                {v?.isRide ? (
                  <>
                    <div style={{ padding: "12px 20px 18px", borderTop: "1px solid #EAE2D5", flexShrink: "0" }}>
                      <button
                        onClick={v?.alight}
                        style={{
                          height: "56px",
                          width: "100%",
                          border: v?.rd?.btnBorder,
                          borderRadius: "16px",
                          background: v?.rd?.btnBg,
                          color: v?.rd?.btnFg,
                          fontSize: "17px",
                          fontWeight: "800",
                          cursor: "pointer",
                        }}
                      >
                        {v?.t?.imOff}
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}

          {v?.isWalk ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div
                  style={{
                    overflowY: "auto",
                    minHeight: "0",
                    flex: "1 1 auto",
                    padding: "16px 20px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.025em", lineHeight: "1.2" }}>{v?.wk?.title}</span>
                    <span style={{ fontSize: "16px", color: "#5D6577" }}>{v?.wk?.mins}</span>
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#EAF1F9", borderRadius: "16px", padding: "14px 16px" }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1B2333"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: "0", marginTop: "1px" }}
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span style={{ fontSize: "16px", fontWeight: "600", lineHeight: "1.45" }}>{v?.wk?.callout}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {(v?.wk?.steps ?? []).map((s, $index) => (
                      <React.Fragment key={$index}>
                        <div style={{ display: "grid", gridTemplateColumns: "28px minmax(0,1fr)", columnGap: "12px" }}>
                          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                            <div style={{ position: "absolute", top: "28px", bottom: "0px", left: "13px", width: "2px", background: s?.line }} />
                            <span
                              style={{
                                position: "relative",
                                width: "28px",
                                height: "28px",
                                borderRadius: "50%",
                                background: "#1664B0",
                                color: "#fff",
                                fontSize: "14px",
                                fontWeight: "800",
                                display: "grid",
                                placeItems: "center",
                              }}
                            >
                              {s?.n}
                            </span>
                          </div>
                          <span style={{ fontSize: "16px", lineHeight: "1.45", padding: "3px 0 18px" }}>{s?.text}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                  {v?.wk?.hasBus ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "15px",
                          background: "#EFE8DE",
                          borderRadius: "12px",
                          padding: "10px 12px",
                        }}
                      >
                        <span
                          style={{
                            width: "8px",
                            height: "8px",
                            flexShrink: "0",
                            borderRadius: "50%",
                            background: "#1E9E5A",
                            boxShadow: "0 0 0 3px rgba(30,158,90,.18)",
                          }}
                        />
                        <span>{v?.wk?.bus}</span>
                      </div>
                    </>
                  ) : null}
                </div>
                <div style={{ padding: "12px 20px 18px", borderTop: "1px solid #EAE2D5", flexShrink: "0" }}>
                  <button
                    onClick={v?.nextLeg}
                    style={{
                      height: "56px",
                      width: "100%",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                    className="hv6"
                  >
                    {v?.wk?.cta}
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {v?.isPickBus ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div
                  style={{
                    overflowY: "auto",
                    minHeight: "0",
                    flex: "1 1 auto",
                    padding: "16px 20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {v?.pk?.isX ? (
                    <>
                      <div
                        style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#EAF1F9", borderRadius: "16px", padding: "14px 16px" }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1B2333"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flexShrink: "0", marginTop: "2px" }}
                        >
                          <path d="m21 16-4 4-4-4" />
                          <path d="M17 20V4" />
                          <path d="m3 8 4-4 4 4" />
                          <path d="M7 4v16" />
                        </svg>
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <b>{v?.pk?.xTitle}</b>
                          <span style={{ fontSize: "15px" }}>{v?.t?.transferNote}</span>
                        </span>
                      </div>
                    </>
                  ) : null}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                        fontSize: "24px",
                        fontWeight: "800",
                        letterSpacing: "-0.025em",
                        lineHeight: "1.2",
                      }}
                    >
                      {v?.t?.ride}
                      <span
                        style={{
                          display: "inline-grid",
                          placeItems: "center",
                          minWidth: "40px",
                          height: "30px",
                          padding: "0 8px",
                          borderRadius: "8px",
                          background: v?.pk?.ink,
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "800",
                          letterSpacing: "0",
                        }}
                      >
                        {v?.pk?.rid}
                      </span>
                      {v?.pk?.title}
                    </span>
                    <span style={{ fontSize: "16px", color: "#5D6577" }}>{v?.pk?.sub}</span>
                  </div>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>{v?.t?.chooseBus}</span>
                  {(v?.pk?.buses ?? []).map((x, $index) => (
                    <React.Fragment key={$index}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "14px", border: "1.5px solid #E4DBCD" }}>
                        <span
                          style={{
                            width: "44px",
                            height: "44px",
                            flexShrink: "0",
                            borderRadius: "13px",
                            background: "#E1ECF7",
                            color: "#0F5596",
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="16" height="16" x="4" y="3" rx="3" />
                            <path d="M4 11h16" />
                            <path d="M6 19v2" />
                            <path d="M18 19v2" />
                          </svg>
                        </span>
                        <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                            <span style={{ fontWeight: "800", fontSize: "17px" }}>{x?.code}</span>
                            <span style={{ fontSize: "13px", fontWeight: "800", padding: "3px 9px", borderRadius: "999px", background: x?.cBg, color: x?.cFg }}>
                              {x?.crowd}
                            </span>
                          </span>
                          <span style={{ fontSize: "14px", color: "#5D6577" }}>
                            {x?.plate} · {x?.away} · {x?.eta}
                          </span>
                        </span>
                        <button
                          onClick={x?.track}
                          style={{
                            height: "44px",
                            padding: "0 16px",
                            borderRadius: "14px",
                            border: "0",
                            background: "#1664B0",
                            color: "#fff",
                            fontSize: "15px",
                            fontWeight: "800",
                            cursor: "pointer",
                            flexShrink: "0",
                          }}
                          className="hv6"
                        >
                          {v?.t?.track}
                        </button>
                      </div>
                    </React.Fragment>
                  ))}
                  {v?.pk?.noBus ? (
                    <>
                      <div style={{ padding: "16px", borderRadius: "16px", background: "#EFE8DE" }}>{v?.t?.noBus}</div>
                    </>
                  ) : null}
                  <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.t?.chooseBusSub}</span>
                </div>
              </div>
            </>
          ) : null}

          {v?.isDone ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div
                  style={{
                    overflowY: "auto",
                    minHeight: "0",
                    flex: "1 1 auto",
                    padding: "18px 20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                  }}
                >
                  <span style={{ width: "56px", height: "56px", borderRadius: "14px", background: "#1664B0", display: "grid", placeItems: "center" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1.15" }}>{v?.dn?.title}</span>
                    <span style={{ fontSize: "16px", color: "#5D6577" }}>{v?.t?.doneSub}</span>
                  </div>
                  {v?.dn?.hasStamp ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          padding: "16px",
                          borderRadius: "16px",
                          background: "#1664B0",
                          color: "#fff",
                        }}
                      >
                        <span
                          style={{
                            width: "72px",
                            height: "72px",
                            flexShrink: "0",
                            borderRadius: "50%",
                            border: "3px solid #fff",
                            backgroundColor: "#3F82C7",
                            backgroundImage: v?.dn?.stampBg,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transform: "rotate(-8deg)",
                            boxShadow: "0 0 0 5px rgba(255,255,255,.25)",
                          }}
                        />
                        <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          <span style={{ fontSize: "14px", fontWeight: "800", color: "#fff" }}>{v?.t?.newStamp}</span>
                          <span style={{ fontSize: "18px", fontWeight: "800", lineHeight: "1.25" }}>{v?.dn?.stampName}</span>
                          <span style={{ fontSize: "14px", color: "rgba(255,255,255,.82)" }}>{v?.t?.stampSub}</span>
                        </span>
                      </div>
                    </>
                  ) : null}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                      border: "1px solid #E6DED1",
                      borderRadius: "14px",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.travelTime}</span>
                      <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.dn?.dur}</span>
                    </div>
                    <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.fare}</span>
                      <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.dn?.fare}</span>
                    </div>
                    <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "2px", borderTop: "1px solid #EAE2D5" }}>
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.walking}</span>
                      <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.dn?.walk}</span>
                    </div>
                    <div
                      style={{
                        padding: "14px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        borderTop: "1px solid #EAE2D5",
                        borderLeft: "1px solid #EAE2D5",
                      }}
                    >
                      <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.onBus}</span>
                      <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.dn?.stops}</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: "12px 20px 18px",
                    borderTop: "1px solid #EAE2D5",
                    flexShrink: "0",
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={v?.saveTrip}
                    style={{
                      height: "56px",
                      border: "1.5px solid #D6CBB9",
                      borderRadius: "16px",
                      background: "#fff",
                      color: "#1B2333",
                      fontSize: "16px",
                      fontWeight: "700",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={v?.dn?.starFill} stroke={v?.dn?.starStroke} strokeWidth="1.8" strokeLinejoin="round">
                      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                    </svg>
                    {v?.dn?.saveLbl}
                  </button>
                  <button
                    onClick={v?.finishTrip}
                    style={{
                      height: "56px",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                    className="hv6"
                  >
                    {v?.t?.finish}
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {v?.is?.routes ? (
            <>
              <div style={{ overflowY: "auto", minHeight: "0", flex: "1 1 auto", padding: "14px 20px 20px", display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.025em" }}>{v?.t?.routesTitle}</span>
                <span style={{ fontSize: "15px", color: "#5D6577", paddingBottom: "10px" }}>{v?.t?.routesSub}</span>
                {(v?.routeList ?? []).map((r, $index) => (
                  <React.Fragment key={$index}>
                    <button
                      onClick={r?.open}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "auto minmax(0,1fr) auto",
                        gap: "14px",
                        alignItems: "center",
                        padding: "14px 0",
                        border: "0",
                        borderTop: "1px solid #EAE2D5",
                        background: "none",
                        textAlign: "left",
                        cursor: "pointer",
                        color: "#1B2333",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-grid",
                          placeItems: "center",
                          minWidth: "48px",
                          height: "36px",
                          padding: "0 10px",
                          borderRadius: "10px",
                          background: r?.ink,
                          color: "#fff",
                          fontSize: "17px",
                          fontWeight: "800",
                        }}
                      >
                        {r?.rid}
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                        <span style={{ fontWeight: "800", fontSize: "17px" }}>{r?.name}</span>
                        <span style={{ fontSize: "15px", color: "#5D6577" }}>{r?.meta}</span>
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8A92A3"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </React.Fragment>
                ))}
              </div>
            </>
          ) : null}

          {v?.is?.wisata ? (
            <>
              <div
                style={{
                  overflowY: "auto",
                  minHeight: "0",
                  flex: "1 1 auto",
                  padding: "18px 16px 140px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div style={{ margin: "-18px -16px 0", padding: "16px 20px 20px", background: "#1664B0", color: "#fff", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.2" }}>{v?.t?.wisTitle}</span>
                      <span style={{ fontSize: "14px", fontWeight: "600", opacity: 0.9 }}>{v?.t?.wisSub}</span>
                    </div>
                    <button
                      onClick={v?.toggleLang}
                      style={{ height: "34px", padding: "0 12px", borderRadius: "999px", border: "1.5px solid rgba(255,255,255,.5)", background: "transparent", color: "#fff", display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "800", cursor: "pointer", flexShrink: "0" }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="9.5" />
                        <path d="M2.5 12h19" />
                        <path d="M12 2.5a14 14 0 0 1 0 19a14 14 0 0 1 0-19" />
                      </svg>
                      {v?.langLbl}
                    </button>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#fff", color: "#1B2333", borderRadius: "14px", padding: "12px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "800", display: "flex", alignItems: "center", gap: "8px", color: "#1664B0" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /><path d="M8.5 11h.01" /><path d="M12 11h.01" /><path d="M15.5 11h.01" /></svg>
                      {v?.t?.aiPlan}
                    </span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <input
                        value={v?.planText}
                        onChange={v?.onPlanText}
                        onKeyDown={v?.onPlanKey}
                        placeholder={v?.t?.aiPlanPh}
                        style={{ flex: "1", minWidth: "0", height: "44px", border: "1.5px solid #E4DBCD", borderRadius: "10px", padding: "0 12px", fontSize: "15px", fontWeight: "600", color: "#1B2333", background: "#fff", outline: "none" }}
                      />
                      <button
                        onClick={v?.sendPlan}
                        style={{ height: "44px", padding: "0 16px", border: "0", borderRadius: "10px", background: "#D21624", color: "#fff", fontSize: "15px", fontWeight: "800", cursor: "pointer", flexShrink: "0" }}
                      >
                        {v?.t?.aiPlanBtn}
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", overflowX: "auto", margin: "0 -16px", padding: "0 16px", scrollbarWidth: "none" }}>
                  {(v?.cats ?? []).map((c, $index) => (
                    <React.Fragment key={$index}>
                      <button
                        onClick={c?.pick}
                        style={{
                          flexShrink: "0",
                          height: "40px",
                          padding: "0 16px",
                          borderRadius: "999px",
                          border: `1px solid ${c?.bd ?? ""}`,
                          background: c?.bg,
                          color: c?.fg,
                          fontSize: "15px",
                          fontWeight: "700",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c?.lbl}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                {v?.hasPkgs ? (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <span style={{ fontSize: "17px", fontWeight: "800", padding: "0 4px" }}>{v?.t?.packages}</span>
                      <div style={{ display: "flex", gap: "12px", overflowX: "auto", margin: "0 -16px", padding: "0 16px 4px", scrollbarWidth: "none" }}>
                        {(v?.pkgs ?? []).map((k, $index) => (
                          <React.Fragment key={$index}>
                            <button
                              onClick={k?.open}
                              style={{
                                flexShrink: "0",
                                position: "relative",
                                width: "280px",
                                height: "188px",
                                border: "0",
                                borderRadius: "16px",
                                overflow: "hidden",
                                padding: "0",
                                cursor: "pointer",
                                textAlign: "left",
                                color: "#fff",
                                backgroundColor: k?.tint,
                                backgroundImage: k?.bg,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  inset: "0",
                                  background: "linear-gradient(180deg, rgba(14,20,45,0) 30%, rgba(14,20,45,.86) 100%)",
                                }}
                              />
                              <span
                                style={{
                                  position: "absolute",
                                  left: "16px",
                                  right: "16px",
                                  bottom: "14px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "3px",
                                }}
                              >
                                <span style={{ fontSize: "13px", fontWeight: "700", color: "rgba(255,255,255,.88)" }}>{k?.dur}</span>
                                <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1.2" }}>{k?.title}</span>
                              </span>
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ) : null}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <span style={{ fontSize: "17px", fontWeight: "800", padding: "0 4px" }}>{v?.t?.places}</span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "12px" }}>
                    {(v?.wisList ?? []).map((p, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={p?.open}
                          style={{
                            position: "relative",
                            height: "216px",
                            border: "0",
                            borderRadius: "16px",
                            overflow: "hidden",
                            padding: "0",
                            cursor: "pointer",
                            textAlign: "left",
                            color: "#fff",
                            backgroundColor: p?.tint,
                            backgroundImage: p?.bg,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <span
                            style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(14,20,45,0) 30%, rgba(14,20,45,.86) 100%)" }}
                          />
                          {p?.stamped ? (
                            <>
                              <span
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "10px",
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  background: "#1664B0",
                                  border: "2px solid #fff",
                                  display: "grid",
                                  placeItems: "center",
                                }}
                              >
                                <svg
                                  width="15"
                                  height="15"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#fff"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M20 6 9 17l-5-5" />
                                </svg>
                              </span>
                            </>
                          ) : null}
                          <span
                            style={{ position: "absolute", left: "12px", right: "12px", bottom: "12px", display: "flex", flexDirection: "column", gap: "3px" }}
                          >
                            <span style={{ fontSize: "12px", fontWeight: "700", color: "rgba(255,255,255,.85)" }}>{p?.cat}</span>
                            <span style={{ fontSize: "16px", fontWeight: "800", lineHeight: "1.25" }}>{p?.name}</span>
                            <span
                              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,.9)" }}
                            >
                              <span
                                style={{
                                  width: "8px",
                                  height: "8px",
                                  flexShrink: "0",
                                  borderRadius: "50%",
                                  background: "#fff",
                                  boxShadow: `0 0 0 2px ${p?.dot ?? ""}`,
                                }}
                              />
                              <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p?.near}</span>
                            </span>
                          </span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}

          {v?.is?.place ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div style={{ overflowY: "auto", minHeight: "0", flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "260px",
                      flexShrink: "0",
                      backgroundColor: v?.pl?.tint,
                      backgroundImage: v?.pl?.bg,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={v?.back}
                      aria-label={v?.t?.back}
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "#fff",
                        border: "0",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        color: "#1B2333",
                        boxShadow: "0 4px 12px rgba(21,23,28,.2)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5" />
                        <path d="m12 19-7-7 7-7" />
                      </svg>
                    </button>
                    {v?.pl?.hasPhoto ? (
                      <>
                        <span
                          style={{
                            position: "absolute",
                            right: "10px",
                            bottom: "10px",
                            fontSize: "12px",
                            color: "#fff",
                            background: "rgba(21,23,28,.6)",
                            padding: "3px 8px",
                            borderRadius: "6px",
                          }}
                        >
                          {v?.t?.photoCredit}
                        </span>
                      </>
                    ) : null}
                  </div>
                  <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{v?.pl?.cat}</span>
                      <span style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1.15" }}>{v?.pl?.name}</span>
                    </div>
                    <span style={{ fontSize: "16px", lineHeight: "1.55", textWrap: "pretty" }}>{v?.pl?.desc}</span>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                        border: "1px solid #E4DBCD",
                        borderRadius: "14px",
                        background: "#fff",
                      }}
                    >
                      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.hours}</span>
                        <span style={{ fontSize: "15px", fontWeight: "800" }}>{v?.pl?.hours}</span>
                      </div>
                      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                        <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.price}</span>
                        <span style={{ fontSize: "15px", fontWeight: "800" }}>{v?.pl?.price}</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "14px",
                        borderRadius: "14px",
                        background: "#fff",
                        border: "1px solid #E4DBCD",
                      }}
                    >
                      <span
                        style={{
                          width: "44px",
                          height: "44px",
                          flexShrink: "0",
                          borderRadius: "13px",
                          background: "#F5F0E8",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="16" height="16" x="4" y="3" rx="3" />
                          <path d="M4 11h16" />
                          <path d="M6 19v2" />
                          <path d="M18 19v2" />
                        </svg>
                      </span>
                      <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                        <span style={{ fontWeight: "800" }}>{v?.pl?.stop}</span>
                        <span style={{ fontSize: "14px", color: "#5D6577" }}>{v?.pl?.stopSub}</span>
                      </span>
                      <span style={{ display: "flex", gap: "4px" }}>
                        {(v?.pl?.routes ?? []).map((rb, $index) => (
                          <React.Fragment key={$index}>
                            <span
                              style={{
                                display: "inline-grid",
                                placeItems: "center",
                                minWidth: "30px",
                                height: "24px",
                                padding: "0 6px",
                                borderRadius: "6px",
                                background: rb?.ink,
                                color: "#fff",
                                fontSize: "13px",
                                fontWeight: "800",
                              }}
                            >
                              {rb?.rid}
                            </span>
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 14px", borderRadius: "16px", background: v?.pl?.stampBg }}>
                      <span
                        style={{
                          width: "36px",
                          height: "36px",
                          flexShrink: "0",
                          borderRadius: "50%",
                          border: "2px dashed #1B2333",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1B2333"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="9" r="6" />
                          <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
                        </svg>
                      </span>
                      <span style={{ fontSize: "15px", fontWeight: "700" }}>{v?.pl?.stampTxt}</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "12px 20px 18px", borderTop: "1px solid #EAE2D5", flexShrink: "0", background: "#EFE8DE" }}>
                  <button
                    onClick={v?.pl?.go}
                    style={{
                      height: "56px",
                      width: "100%",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                    className="hv6"
                  >
                    {v?.t?.goHere}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {v?.is?.package ? (
            <>
              <div style={{ display: "flex", flexDirection: "column", minHeight: "0", flex: "1 1 auto" }}>
                <div style={{ overflowY: "auto", minHeight: "0", flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "220px",
                      flexShrink: "0",
                      backgroundColor: v?.pg?.tint,
                      backgroundImage: v?.pg?.bg,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={v?.back}
                      aria-label={v?.t?.back}
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "#fff",
                        border: "0",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        color: "#1B2333",
                        boxShadow: "0 4px 12px rgba(21,23,28,.2)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5" />
                        <path d="m12 19-7-7 7-7" />
                      </svg>
                    </button>
                  </div>
                  <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{v?.pg?.dur}</span>
                      <span style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.03em", lineHeight: "1.15" }}>{v?.pg?.title}</span>
                    </div>
                    <span style={{ fontSize: "16px", lineHeight: "1.55", textWrap: "pretty" }}>{v?.pg?.desc}</span>
                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start",
                        background: "#EAF1F9",
                        borderRadius: "16px",
                        padding: "12px 14px",
                        fontSize: "15px",
                      }}
                    >
                      <b>{v?.t?.tip}</b>
                      <span>{v?.pg?.tip}</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {(v?.pg?.items ?? []).map((it, $index) => (
                        <React.Fragment key={$index}>
                          <div style={{ display: "grid", gridTemplateColumns: "32px minmax(0,1fr)", columnGap: "12px" }}>
                            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                              <div style={{ position: "absolute", top: "32px", bottom: "0px", left: "15px", borderLeft: it?.line }} />
                              <span
                                style={{
                                  position: "relative",
                                  width: "32px",
                                  height: "32px",
                                  borderRadius: "50%",
                                  background: "#1664B0",
                                  color: "#fff",
                                  fontSize: "15px",
                                  fontWeight: "800",
                                  display: "grid",
                                  placeItems: "center",
                                  marginTop: "16px",
                                }}
                              >
                                {it?.n}
                              </span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingBottom: "14px" }}>
                              <button
                                onClick={it?.open}
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "64px minmax(0,1fr)",
                                  gap: "12px",
                                  alignItems: "center",
                                  padding: "8px",
                                  border: "0",
                                  borderRadius: "16px",
                                  background: "#fff",
                                  textAlign: "left",
                                  cursor: "pointer",
                                  color: "#1B2333",
                                }}
                              >
                                <span
                                  style={{
                                    width: "64px",
                                    height: "64px",
                                    borderRadius: "12px",
                                    backgroundColor: it?.tint,
                                    backgroundImage: it?.bg,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }}
                                />
                                <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                                  <span style={{ fontWeight: "800" }}>{it?.name}</span>
                                  <span style={{ fontSize: "14px", color: "#5D6577" }}>{it?.cat}</span>
                                </span>
                              </button>
                              {it?.hasLeg ? (
                                <>
                                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", padding: "0 4px" }}>
                                    {(it?.chips ?? []).map((c, $index) => (
                                      <React.Fragment key={$index}>
                                        {c?.sep ? (
                                          <>
                                            <svg
                                              width="12"
                                              height="12"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="#8A92A3"
                                              strokeWidth="2.4"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            >
                                              <path d="m9 18 6-6-6-6" />
                                            </svg>
                                          </>
                                        ) : null}
                                        {c?.isWalk ? (
                                          <>
                                            <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577", whiteSpace: "nowrap" }}>{c?.txt}</span>
                                          </>
                                        ) : null}
                                        {c?.isBus ? (
                                          <>
                                            <span
                                              style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: "6px",
                                                fontSize: "14px",
                                                fontWeight: "700",
                                                color: "#5D6577",
                                                whiteSpace: "nowrap",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  display: "inline-grid",
                                                  placeItems: "center",
                                                  minWidth: "28px",
                                                  height: "20px",
                                                  padding: "0 5px",
                                                  borderRadius: "5px",
                                                  background: c?.ink,
                                                  color: "#fff",
                                                  fontSize: "12px",
                                                  fontWeight: "800",
                                                }}
                                              >
                                                {c?.rid}
                                              </span>
                                              {c?.txt}
                                            </span>
                                          </>
                                        ) : null}
                                      </React.Fragment>
                                    ))}
                                    <span style={{ fontSize: "14px", color: "#5D6577" }}>· {it?.legTime}</span>
                                  </div>
                                </>
                              ) : null}
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ padding: "12px 20px 18px", borderTop: "1px solid #EAE2D5", flexShrink: "0", background: "#EFE8DE" }}>
                  <button
                    onClick={v?.pg?.start}
                    style={{
                      height: "56px",
                      width: "100%",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                    className="hv6"
                  >
                    {v?.pg?.startLbl}
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {v?.is?.history ? (
            <>
              <div
                style={{
                  overflowY: "auto",
                  minHeight: "0",
                  flex: "1 1 auto",
                  padding: "18px 16px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div style={{ margin: "-18px -16px 0", padding: "20px 20px 18px", background: "#1664B0", color: "#fff" }}>
                  <span style={{ fontSize: "24px", fontWeight: "800", letterSpacing: "-0.02em" }}>{v?.t?.histTitle}</span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                    gap: "4px",
                    padding: "4px",
                    borderRadius: "14px",
                    background: "#EFE8DE",
                  }}
                >
                  <button
                    onClick={v?.hs?.trips?.set}
                    style={{
                      height: "40px",
                      border: "0",
                      borderRadius: "11px",
                      background: v?.hs?.trips?.bg,
                      boxShadow: v?.hs?.trips?.sh,
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1B2333",
                      cursor: "pointer",
                    }}
                  >
                    {v?.t?.trips}
                  </button>
                  <button
                    onClick={v?.hs?.tx?.set}
                    style={{
                      height: "40px",
                      border: "0",
                      borderRadius: "11px",
                      background: v?.hs?.tx?.bg,
                      boxShadow: v?.hs?.tx?.sh,
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1B2333",
                      cursor: "pointer",
                    }}
                  >
                    {v?.t?.tx}
                  </button>
                </div>
                {v?.histTrips ? (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {(v?.tripsList ?? []).map((x, $index) => (
                        <React.Fragment key={$index}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px", borderRadius: "16px", background: "#fff" }}>
                            <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "4px" }}>
                              <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{x?.date}</span>
                              <span style={{ fontWeight: "800", lineHeight: "1.3" }}>{x?.title}</span>
                              <span style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", fontSize: "14px", color: "#5D6577" }}>
                                {(x?.routes ?? []).map((rb, $index) => (
                                  <React.Fragment key={$index}>
                                    <span
                                      style={{
                                        display: "inline-grid",
                                        placeItems: "center",
                                        minWidth: "28px",
                                        height: "20px",
                                        padding: "0 5px",
                                        borderRadius: "5px",
                                        background: rb?.ink,
                                        color: "#fff",
                                        fontSize: "12px",
                                        fontWeight: "800",
                                      }}
                                    >
                                      {rb?.rid}
                                    </span>
                                  </React.Fragment>
                                ))}
                                <span>{x?.meta}</span>
                              </span>
                            </div>
                            <button
                              onClick={x?.repeat}
                              style={{
                                height: "44px",
                                padding: "0 14px",
                                borderRadius: "14px",
                                border: "1px solid #DDD3C3",
                                background: "#fff",
                                fontSize: "15px",
                                fontWeight: "700",
                                color: "#1B2333",
                                cursor: "pointer",
                                flexShrink: "0",
                              }}
                              className="hv5"
                            >
                              {v?.t?.repeat}
                            </button>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                ) : null}
                {v?.histTx ? (
                  <>
                    <div style={{ display: "flex", flexDirection: "column", background: "#fff", borderRadius: "16px", padding: "4px 16px" }}>
                      {(v?.txList ?? []).map((x, $index) => (
                        <React.Fragment key={$index}>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "40px minmax(0,1fr) auto",
                              gap: "12px",
                              alignItems: "center",
                              padding: "12px 0",
                              borderBottom: "1px solid #EAE2D5",
                            }}
                          >
                            <span
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "12px",
                                background: x?.iconBg,
                                display: "grid",
                                placeItems: "center",
                                color: "#1B2333",
                              }}
                            >
                              {x?.isTop ? (
                                <>
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                  </svg>
                                </>
                              ) : null}
                              {x?.isPay ? (
                                <>
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <rect x="3" y="3" width="7" height="7" rx="1" />
                                    <rect x="14" y="3" width="7" height="7" rx="1" />
                                    <rect x="3" y="14" width="7" height="7" rx="1" />
                                    <path d="M14 14h3v3h-3z" />
                                  </svg>
                                </>
                              ) : null}
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                              <span style={{ fontWeight: "700" }}>{x?.title}</span>
                              <span style={{ fontSize: "14px", color: "#5D6577" }}>{x?.date}</span>
                            </span>
                            <span style={{ fontWeight: "800", color: x?.color, whiteSpace: "nowrap" }}>{x?.amt}</span>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </>
          ) : null}

          {v?.is?.account ? (
            <>
              <div
                style={{
                  overflowY: "auto",
                  minHeight: "0",
                  flex: "1 1 auto",
                  padding: "18px 16px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", margin: "-18px -16px 0", padding: "20px 20px 22px", background: "#1664B0", color: "#fff" }}>
                  <span
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: "#EFE8DE",
                      color: "#1664B0",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "22px",
                      fontWeight: "800",
                    }}
                  >
                    RA
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "-0.02em" }}>Rina Ayu</span>
                    <span style={{ fontSize: "15px", fontWeight: "600", opacity: 0.9 }}>{v?.t?.profileSub}</span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0,1fr))", background: "#fff", borderRadius: "16px" }}>
                  <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.stTrips}</span>
                    <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.acc?.trips}</span>
                  </div>
                  <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.passport}</span>
                    <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.acc?.stamps}</span>
                  </div>
                  <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid #EAE2D5" }}>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#5D6577" }}>{v?.t?.stCO2}</span>
                    <span style={{ fontSize: "20px", fontWeight: "800" }}>{v?.acc?.co2}</span>
                  </div>
                </div>
                <div style={{ background: "#fff", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "17px", fontWeight: "800" }}>{v?.t?.passport}</span>
                    <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.acc?.passSub}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: "14px 8px" }}>
                    {(v?.acc?.stampList ?? []).map((s, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={s?.open}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "6px",
                            border: "0",
                            background: "none",
                            padding: "0",
                            cursor: "pointer",
                            color: s?.color,
                          }}
                        >
                          <span
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              border: s?.border,
                              backgroundColor: s?.tint,
                              backgroundImage: s?.bg,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              transform: s?.rot,
                            }}
                          />
                          <span style={{ fontSize: "12px", fontWeight: "700", textAlign: "center", lineHeight: "1.25" }}>{s?.name}</span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div style={{ background: "#fff", borderRadius: "16px", padding: "6px 16px", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "17px", fontWeight: "800", padding: "12px 0 6px" }}>{v?.t?.settings}</span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "12px 0",
                      borderTop: "1px solid #EAE2D5",
                    }}
                  >
                    <span style={{ fontWeight: "700" }}>{v?.t?.language}</span>
                    <div style={{ display: "flex", gap: "4px", padding: "4px", borderRadius: "12px", background: "#F5F0E8" }}>
                      <button
                        onClick={v?.setId}
                        style={{
                          height: "36px",
                          padding: "0 12px",
                          border: "0",
                          borderRadius: "9px",
                          background: v?.lg?.id,
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#1B2333",
                          cursor: "pointer",
                        }}
                      >
                        Indonesia
                      </button>
                      <button
                        onClick={v?.setEn}
                        style={{
                          height: "36px",
                          padding: "0 12px",
                          border: "0",
                          borderRadius: "9px",
                          background: v?.lg?.en,
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#1B2333",
                          cursor: "pointer",
                        }}
                      >
                        English
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={v?.toggleAlerts}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      padding: "12px 0",
                      border: "0",
                      borderTop: "1px solid #EAE2D5",
                      background: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      color: "#1B2333",
                      width: "100%",
                    }}
                  >
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontWeight: "700" }}>{v?.t?.alerts}</span>
                      <span style={{ fontSize: "14px", color: "#5D6577" }}>{v?.t?.alertsSub}</span>
                    </span>
                    <span
                      style={{
                        position: "relative",
                        width: "52px",
                        height: "32px",
                        flexShrink: "0",
                        borderRadius: "16px",
                        background: v?.sw?.bg,
                        transition: "background .2s",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: v?.sw?.x,
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          background: "#fff",
                          boxShadow: "0 1px 3px rgba(0,0,0,.25)",
                          transition: "left .2s",
                        }}
                      />
                    </span>
                  </button>
                </div>
                <div style={{ background: "#fff", borderRadius: "16px", padding: "6px 16px", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "17px", fontWeight: "800", padding: "12px 0 6px" }}>{v?.t?.favStops}</span>
                  {(v?.acc?.favs ?? []).map((f, $index) => (
                    <React.Fragment key={$index}>
                      <button
                        onClick={f?.open}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "minmax(0,1fr) auto",
                          gap: "12px",
                          alignItems: "center",
                          padding: "12px 0",
                          border: "0",
                          borderTop: "1px solid #EAE2D5",
                          background: "none",
                          textAlign: "left",
                          cursor: "pointer",
                          color: "#1B2333",
                          width: "100%",
                        }}
                      >
                        <span style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: "700" }}>{f?.name}</span>
                          <span style={{ fontSize: "14px", color: "#5D6577" }}>{f?.sub}</span>
                        </span>
                        <span style={{ display: "flex", gap: "4px" }}>
                          {(f?.routes ?? []).map((rb, $index) => (
                            <React.Fragment key={$index}>
                              <span
                                style={{
                                  display: "inline-grid",
                                  placeItems: "center",
                                  minWidth: "30px",
                                  height: "22px",
                                  padding: "0 6px",
                                  borderRadius: "6px",
                                  background: rb?.ink,
                                  color: "#fff",
                                  fontSize: "13px",
                                  fontWeight: "800",
                                }}
                              >
                                {rb?.rid}
                              </span>
                            </React.Fragment>
                          ))}
                        </span>
                      </button>
                    </React.Fragment>
                  ))}
                </div>
                <span style={{ fontSize: "13px", color: "#5D6577", textAlign: "center" }}>{v?.t?.proto}</span>
              </div>
            </>
          ) : null}
        </div>
        {v?.showTabs ? (
          <>
            <nav
              style={{
                position: "absolute",
                zIndex: "9",
                left: "0px",
                right: "0px",
                bottom: "0px",
                height: "64px",
                background: "#fff",
                borderTop: "1px solid #E4DBCD",
                display: "grid",
                gridTemplateColumns: "repeat(5, minmax(0,1fr))",
              }}
            >
              <button
                onClick={v?.tabSt?.home?.go}
                style={{
                  border: "0",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  fontSize: "12px",
                  fontWeight: v?.tabSt?.home?.fw,
                  color: v?.tabSt?.home?.fg,
                  cursor: "pointer",
                }}
              >
                <span style={{ width: "52px", height: "28px", borderRadius: "14px", background: v?.tabSt?.home?.bg, display: "grid", placeItems: "center" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 10.5 12 3l9 7.5" />
                    <path d="M5 9v11h14V9" />
                  </svg>
                </span>
                {v?.t?.tHome}
              </button>
              <button
                onClick={v?.tabSt?.route?.go}
                style={{
                  border: "0",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  fontSize: "12px",
                  fontWeight: v?.tabSt?.route?.fw,
                  color: v?.tabSt?.route?.fg,
                  cursor: "pointer",
                }}
              >
                <span style={{ width: "52px", height: "28px", borderRadius: "14px", background: v?.tabSt?.route?.bg, display: "grid", placeItems: "center" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="19" r="3" />
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                    <circle cx="18" cy="5" r="3" />
                  </svg>
                </span>
                {v?.t?.tRoute}
              </button>
              <button
                onClick={v?.tabSt?.wisata?.go}
                style={{
                  border: "0",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  fontSize: "12px",
                  fontWeight: v?.tabSt?.wisata?.fw,
                  color: v?.tabSt?.wisata?.fg,
                  cursor: "pointer",
                }}
              >
                <span style={{ width: "52px", height: "28px", borderRadius: "14px", background: v?.tabSt?.wisata?.bg, display: "grid", placeItems: "center" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="m15.8 8.2-2.3 5.3-5.3 2.3 2.3-5.3z" />
                  </svg>
                </span>
                {v?.t?.tWisata}
              </button>
              <button
                onClick={v?.tabSt?.history?.go}
                style={{
                  border: "0",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  fontSize: "12px",
                  fontWeight: v?.tabSt?.history?.fw,
                  color: v?.tabSt?.history?.fg,
                  cursor: "pointer",
                }}
              >
                <span style={{ width: "52px", height: "28px", borderRadius: "14px", background: v?.tabSt?.history?.bg, display: "grid", placeItems: "center" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                </span>
                {v?.t?.tHistory}
              </button>
              <button
                onClick={v?.tabSt?.account?.go}
                style={{
                  border: "0",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2px",
                  fontSize: "12px",
                  fontWeight: v?.tabSt?.account?.fw,
                  color: v?.tabSt?.account?.fg,
                  cursor: "pointer",
                }}
              >
                <span style={{ width: "52px", height: "28px", borderRadius: "14px", background: v?.tabSt?.account?.bg, display: "grid", placeItems: "center" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                </span>
                {v?.t?.tAccount}
              </button>
            </nav>
          </>
        ) : null}

        {v?.fc?.show ? (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: "10",
                left: v?.L?.fcL,
                right: v?.L?.fcR,
                width: v?.L?.fcW,
                bottom: v?.L?.fcB,
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px",
                borderRadius: "16px",
                color: "#fff",
                background: "#1664B0",
                boxShadow: "0 2px 8px rgba(27,35,51,.12)",
              }}
            >
              <button
                onClick={v?.fc?.open}
                style={{
                  flex: "1",
                  minWidth: "0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  border: "0",
                  background: "none",
                  padding: "0",
                  textAlign: "left",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    flexShrink: "0",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,.18)",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="6" cy="19" r="3" />
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
                    <circle cx="18" cy="5" r="3" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", minWidth: "0", lineHeight: "1.3" }}>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "rgba(255,255,255,.85)" }}>{v?.fc?.label}</span>
                  <span style={{ fontWeight: "800", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{v?.fc?.title}</span>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,.88)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {v?.fc?.sub}
                  </span>
                </span>
              </button>
              <button
                onClick={v?.fc?.open}
                style={{
                  height: "40px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  border: "0",
                  background: "#fff",
                  color: "#0F5596",
                  fontSize: "14px",
                  fontWeight: "800",
                  cursor: "pointer",
                  flexShrink: "0",
                }}
              >
                {v?.fc?.cta}
              </button>
              {v?.fc?.canClose ? (
                <>
                  <button
                    onClick={v?.fc?.close}
                    aria-label={v?.t?.dismiss}
                    style={{
                      width: "36px",
                      height: "36px",
                      flexShrink: "0",
                      borderRadius: "10px",
                      border: "0",
                      background: "rgba(255,255,255,.16)",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </>
              ) : null}
            </div>
          </>
        ) : null}

        {v?.modalOpen ? (
          <>
            <div onClick={v?.closeModal} style={{ position: "absolute", inset: "0", zIndex: "30", background: "rgba(21,23,28,.4)" }} />
            <div
              style={{
                position: "absolute",
                zIndex: "31",
                left: v?.mb?.l,
                right: v?.mb?.r,
                top: v?.mb?.t,
                bottom: v?.mb?.b,
                width: v?.mb?.w,
                transform: v?.mb?.tf,
                maxHeight: "90%",
                overflowY: "auto",
                background: "#fff",
                borderRadius: v?.mb?.rad,
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                boxShadow: "0 12px 32px rgba(27,35,51,.18)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span style={{ fontSize: "20px", fontWeight: "800", letterSpacing: "-0.02em" }}>{v?.md?.title}</span>
                <button
                  onClick={v?.closeModal}
                  aria-label={v?.t?.close}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "#F5F0E8",
                    border: "0",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    color: "#1B2333",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              {v?.md?.when ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {(v?.md?.whenOpts ?? []).map((w, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={w?.pick}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "12px",
                            minHeight: "56px",
                            padding: "0 16px",
                            borderRadius: "16px",
                            border: `2px solid ${w?.bd ?? ""}`,
                            background: "#fff",
                            cursor: "pointer",
                            color: "#1B2333",
                            textAlign: "left",
                          }}
                        >
                          <span style={{ fontWeight: "800" }}>{w?.lbl}</span>
                          <span style={{ color: "#5D6577", fontWeight: "600" }}>{w?.sub}</span>
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <button
                    onClick={v?.closeModal}
                    style={{
                      height: "52px",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                  >
                    {v?.t?.done}
                  </button>
                </>
              ) : null}

              {v?.md?.pax ? (
                <>
                  {(v?.md?.paxRows ?? []).map((p, $index) => (
                    <React.Fragment key={$index}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "6px 0" }}>
                        <span style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ fontWeight: "800" }}>{p?.lbl}</span>
                          <span style={{ fontSize: "14px", color: "#5D6577" }}>{p?.sub}</span>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <button
                            onClick={p?.dec}
                            aria-label="−"
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "50%",
                              border: "1.5px solid #D6CBB9",
                              background: "#fff",
                              display: "grid",
                              placeItems: "center",
                              cursor: "pointer",
                              color: "#1B2333",
                            }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14" />
                            </svg>
                          </button>
                          <span style={{ minWidth: "20px", textAlign: "center", fontSize: "18px", fontWeight: "800" }}>{p?.n}</span>
                          <button
                            onClick={p?.inc}
                            aria-label="+"
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "50%",
                              border: "1.5px solid #D6CBB9",
                              background: "#fff",
                              display: "grid",
                              placeItems: "center",
                              cursor: "pointer",
                              color: "#1B2333",
                            }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                              <path d="M5 12h14" />
                              <path d="M12 5v14" />
                            </svg>
                          </button>
                        </span>
                      </div>
                    </React.Fragment>
                  ))}
                  <button
                    onClick={v?.closeModal}
                    style={{
                      height: "52px",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                  >
                    {v?.t?.done}
                  </button>
                </>
              ) : null}

              {v?.md?.pay ? (
                <>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "14px 16px", borderRadius: "14px", background: "#EFE8DE" }}>
                    <span style={{ display: "flex", gap: "4px" }}>
                      {(v?.md?.payRoutes ?? []).map((rb, $index) => (
                        <React.Fragment key={$index}>
                          <span
                            style={{
                              display: "inline-grid",
                              placeItems: "center",
                              minWidth: "30px",
                              height: "24px",
                              padding: "0 6px",
                              borderRadius: "6px",
                              background: rb?.ink,
                              color: "#fff",
                              fontSize: "13px",
                              fontWeight: "800",
                            }}
                          >
                            {rb?.rid}
                          </span>
                        </React.Fragment>
                      ))}
                    </span>
                    <span style={{ fontWeight: "800", fontSize: "17px" }}>{v?.md?.payTrip}</span>
                    {(v?.md?.fareRows ?? []).map((f, $index) => (
                      <React.Fragment key={$index}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px" }}>
                          <span>{f?.lbl}</span>
                          <span style={{ fontWeight: "700" }}>{f?.amt}</span>
                        </div>
                      </React.Fragment>
                    ))}
                    <span style={{ fontSize: "14px", color: "#5D6577" }}>{v?.t?.fareNote}</span>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{v?.t?.payHow}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {(v?.md?.payOpts ?? []).map((p, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={p?.pick}
                          style={{
                            display: "grid",
                            gridTemplateColumns: "44px minmax(0,1fr) 22px",
                            gap: "12px",
                            alignItems: "center",
                            padding: "12px 14px",
                            borderRadius: "16px",
                            border: `2px solid ${p?.bd ?? ""}`,
                            background: "#fff",
                            textAlign: "left",
                            cursor: "pointer",
                            color: "#1B2333",
                          }}
                        >
                          <span
                            style={{
                              width: "44px",
                              height: "44px",
                              borderRadius: "13px",
                              background: "#EAF1F9",
                              color: "#1664B0",
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            {p?.isQR ? (
                              <>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <rect x="3" y="3" width="7" height="7" rx="1" />
                                  <rect x="14" y="3" width="7" height="7" rx="1" />
                                  <rect x="3" y="14" width="7" height="7" rx="1" />
                                  <path d="M14 14h3v3h-3z" />
                                  <path d="M17 20h4v-3" />
                                </svg>
                              </>
                            ) : null}
                            {p?.isWallet ? (
                              <>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2" />
                                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                                </svg>
                              </>
                            ) : null}
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                            <span style={{ fontWeight: "800" }}>{p?.lbl}</span>
                            <span style={{ fontSize: "14px", color: "#5D6577" }}>{p?.sub}</span>
                          </span>
                          <span style={{ width: "22px", height: "22px", borderRadius: "50%", border: p?.radio }} />
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  {v?.md?.isWallet ? (
                    <>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                        <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.t?.total}</span>
                        <span style={{ fontSize: "22px", fontWeight: "800" }}>{v?.md?.total}</span>
                      </div>
                    </>
                  ) : null}
                  <button
                    onClick={v?.pay}
                    style={{
                      height: "56px",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                    className="hv6"
                  >
                    {v?.md?.payBtn}
                  </button>
                </>
              ) : null}

              {v?.md?.qr ? (
                <>
                  {v?.hasTicket ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", padding: "8px 0" }}>
                        <div style={{ padding: "12px", borderRadius: "16px", border: "1px solid #E4DBCD" }}>
                          <canvas ref={v?.qrRef} style={{ width: "210px", height: "210px", display: "block" }} />
                        </div>
                        <span style={{ fontSize: "18px", fontWeight: "800", letterSpacing: "0.08em" }}>{v?.md?.code}</span>
                        <span style={{ fontSize: "15px", color: "#15803D", fontWeight: "700" }}>{v?.ticketLbl}</span>
                        <span style={{ fontSize: "15px", color: "#5D6577", textAlign: "center" }}>{v?.t?.qrHint}</span>
                      </div>
                    </>
                  ) : null}
                  {v?.noTicket ? (
                    <>
                      <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "16px", borderRadius: "14px", background: "#EFE8DE" }}>
                        <b>{v?.md?.noTkTitle}</b>
                        <span style={{ color: "#5D6577" }}>{v?.md?.noTkSub}</span>
                      </div>
                    </>
                  ) : null}
                </>
              ) : null}

              {v?.md?.topup ? (
                <>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{v?.t?.amount}</span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: "8px" }}>
                    {(v?.md?.amts ?? []).map((a, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={a?.pick}
                          style={{
                            height: "52px",
                            borderRadius: "14px",
                            border: `2px solid ${a?.bd ?? ""}`,
                            background: "#fff",
                            fontSize: "16px",
                            fontWeight: "800",
                            color: "#1B2333",
                            cursor: "pointer",
                          }}
                        >
                          {a?.lbl}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#5D6577" }}>{v?.t?.method}</span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {(v?.md?.methods ?? []).map((m, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={m?.pick}
                          style={{
                            minHeight: "40px",
                            padding: "0 14px",
                            borderRadius: "999px",
                            border: `1.5px solid ${m?.bd ?? ""}`,
                            background: m?.bg,
                            fontSize: "15px",
                            fontWeight: "700",
                            color: m?.fg,
                            cursor: "pointer",
                          }}
                        >
                          {m?.lbl}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <button
                    onClick={v?.doTopup}
                    style={{
                      height: "56px",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                    className="hv6"
                  >
                    {v?.md?.topBtn}
                  </button>
                </>
              ) : null}

              {v?.md?.report ? (
                <>
                  <span style={{ fontSize: "15px", color: "#5D6577" }}>{v?.md?.repBus}</span>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {(v?.md?.repCats ?? []).map((c, $index) => (
                      <React.Fragment key={$index}>
                        <button
                          onClick={c?.pick}
                          style={{
                            minHeight: "40px",
                            padding: "0 14px",
                            borderRadius: "999px",
                            border: `1.5px solid ${c?.bd ?? ""}`,
                            background: c?.bg,
                            fontSize: "15px",
                            fontWeight: "700",
                            color: c?.fg,
                            cursor: "pointer",
                          }}
                        >
                          {c?.lbl}
                        </button>
                      </React.Fragment>
                    ))}
                  </div>
                  <textarea
                    value={v?.reportText}
                    onChange={v?.onReportText}
                    placeholder={v?.t?.reportPh}
                    rows="3"
                    style={{
                      border: "1.5px solid #DDD3C3",
                      borderRadius: "14px",
                      padding: "12px 14px",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#1B2333",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                  <button
                    onClick={v?.sendReport}
                    style={{
                      height: "56px",
                      border: "0",
                      borderRadius: "16px",
                      background: "#D21624",
                      color: "#fff",
                      fontSize: "17px",
                      fontWeight: "800",
                      cursor: "pointer",
                    }}
                    className="hv6"
                  >
                    {v?.t?.send}
                  </button>
                </>
              ) : null}
            </div>
          </>
        ) : null}

        {v?.chatBackdrop ? (
          <>
            <div onClick={v?.closeChat} style={{ position: "absolute", inset: "0", zIndex: "19", background: "rgba(21,23,28,.32)" }} />
          </>
        ) : null}
        {v?.chatOpen ? (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: "20",
                top: v?.L?.chT,
                bottom: v?.L?.chB,
                left: v?.L?.chL,
                right: v?.L?.chR,
                width: v?.L?.chW,
                maxHeight: v?.L?.chMaxH,
                background: v?.L?.chBg,
                backdropFilter: v?.L?.chBlur,
                border: v?.L?.chBorder,
                borderRadius: v?.L?.chRad,
                boxShadow: "0 16px 48px rgba(21,23,28,.2)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 14px 12px 18px",
                  borderBottom: "1px solid rgba(21,23,28,.08)",
                  flexShrink: "0",
                }}
              >
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: "#1664B0",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: "0",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /><path d="M8.5 11h.01" /><path d="M12 11h.01" /><path d="M15.5 11h.01" /></svg>
                </span>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", lineHeight: "1.25" }}>
                  <span style={{ fontSize: "17px", fontWeight: "800" }}>{v?.t?.askTitle}</span>
                  <span style={{ fontSize: "14px", color: "#5D6577" }}>{v?.t?.chatSub}</span>
                </div>
                <button
                  onClick={v?.clearChat}
                  aria-label={v?.t?.clear}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "rgba(21,23,28,.06)",
                    border: "0",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    color: "#1B2333",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="M6 6l1 14h10l1-14" />
                  </svg>
                </button>
                <button
                  onClick={v?.closeChat}
                  aria-label={v?.t?.close}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "rgba(21,23,28,.06)",
                    border: "0",
                    display: "grid",
                    placeItems: "center",
                    cursor: "pointer",
                    color: "#1B2333",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              <div
                ref={v?.msgRef}
                style={{
                  flex: "1 1 auto",
                  minHeight: "120px",
                  overflowY: "auto",
                  padding: "14px 14px 8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {(v?.msgs ?? []).map((m, $index) => (
                  <React.Fragment key={$index}>
                    {m?.bot ? (
                      <>
                        <div style={{ alignSelf: "flex-start", maxWidth: "90%", display: "flex", flexDirection: "column", gap: "6px" }}>
                          <div
                            style={{
                              background: "#fff",
                              border: "1px solid rgba(21,23,28,.08)",
                              borderRadius: "4px 18px 18px 18px",
                              padding: "11px 14px",
                              fontSize: "16px",
                              lineHeight: "1.5",
                              whiteSpace: "pre-wrap",
                            }}
                          >
                            {m?.text}
                          </div>
                          {m?.hasItin ? (
                            <>
                              <div
                                style={{
                                  background: "#fff",
                                  border: "1px solid rgba(21,23,28,.08)",
                                  borderRadius: "14px",
                                  padding: "12px",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "8px",
                                }}
                              >
                                <span style={{ fontWeight: "800" }}>{m?.itin?.title}</span>
                                {(m?.itin?.items ?? []).map((it, $index) => (
                                  <React.Fragment key={$index}>
                                    <button
                                      onClick={it?.open}
                                      style={{
                                        display: "grid",
                                        gridTemplateColumns: "24px 48px minmax(0,1fr)",
                                        gap: "10px",
                                        alignItems: "center",
                                        border: "0",
                                        background: "none",
                                        padding: "0",
                                        textAlign: "left",
                                        cursor: "pointer",
                                        color: "#1B2333",
                                      }}
                                    >
                                      <span
                                        style={{
                                          width: "24px",
                                          height: "24px",
                                          borderRadius: "50%",
                                          background: "#1664B0",
                                          color: "#fff",
                                          fontSize: "13px",
                                          fontWeight: "800",
                                          display: "grid",
                                          placeItems: "center",
                                        }}
                                      >
                                        {it?.n}
                                      </span>
                                      <span
                                        style={{
                                          width: "48px",
                                          height: "48px",
                                          borderRadius: "10px",
                                          backgroundColor: it?.tint,
                                          backgroundImage: it?.bg,
                                          backgroundSize: "cover",
                                          backgroundPosition: "center",
                                        }}
                                      />
                                      <span style={{ display: "flex", flexDirection: "column", minWidth: "0" }}>
                                        <span style={{ fontWeight: "700", fontSize: "15px" }}>{it?.name}</span>
                                        <span style={{ fontSize: "13px", color: "#5D6577" }}>{it?.sub}</span>
                                      </span>
                                    </button>
                                  </React.Fragment>
                                ))}
                                {m?.itin?.hasNote ? (
                                  <>
                                    <span style={{ fontSize: "14px", color: "#5D6577" }}>{m?.itin?.note}</span>
                                  </>
                                ) : null}
                                <button
                                  onClick={m?.itin?.start}
                                  style={{
                                    height: "44px",
                                    border: "0",
                                    borderRadius: "12px",
                                    background: "#1664B0",
                                    color: "#fff",
                                    fontSize: "15px",
                                    fontWeight: "800",
                                    cursor: "pointer",
                                  }}
                                >
                                  {m?.itin?.startLbl}
                                </button>
                              </div>
                            </>
                          ) : null}
                          {m?.hasAction ? (
                            <>
                              <button
                                onClick={m?.doAction}
                                style={{
                                  alignSelf: "flex-start",
                                  minHeight: "40px",
                                  padding: "8px 14px",
                                  borderRadius: "12px",
                                  border: "0",
                                  background: "#1664B0",
                                  color: "#fff",
                                  fontSize: "15px",
                                  fontWeight: "700",
                                  cursor: "pointer",
                                  textAlign: "left",
                                }}
                              >
                                {m?.actionLbl}
                              </button>
                            </>
                          ) : null}
                          {m?.hasSrc ? (
                            <>
                              <span style={{ fontSize: "13px", color: "#5D6577", paddingLeft: "4px" }}>{m?.src}</span>
                            </>
                          ) : null}
                        </div>
                      </>
                    ) : null}
                    {m?.me ? (
                      <>
                        <div
                          style={{
                            alignSelf: "flex-end",
                            maxWidth: "82%",
                            background: "#1664B0",
                            color: "#fff",
                            borderRadius: "18px 4px 18px 18px",
                            padding: "11px 14px",
                            fontSize: "16px",
                            lineHeight: "1.45",
                          }}
                        >
                          {m?.text}
                        </div>
                      </>
                    ) : null}
                  </React.Fragment>
                ))}
                {v?.typing ? (
                  <>
                    <div
                      style={{
                        alignSelf: "flex-start",
                        background: "#fff",
                        border: "1px solid rgba(21,23,28,.08)",
                        borderRadius: "4px 18px 18px 18px",
                        padding: "11px 14px",
                        fontSize: "16px",
                        color: "#5D6577",
                      }}
                    >
                      {v?.t?.thinking}
                    </div>
                  </>
                ) : null}
              </div>
              <div style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "8px 14px 10px", flexShrink: "0", scrollbarWidth: "none" }}>
                {(v?.quick ?? []).map((q, $index) => (
                  <React.Fragment key={$index}>
                    <button
                      onClick={q?.ask}
                      style={{
                        flexShrink: "0",
                        minHeight: "40px",
                        padding: "8px 14px",
                        borderRadius: "999px",
                        border: "1px solid rgba(21,23,28,.12)",
                        background: "rgba(255,255,255,.9)",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: "#1B2333",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                      }}
                      className="hv5"
                    >
                      {q?.text}
                    </button>
                  </React.Fragment>
                ))}
              </div>
              {v?.narrow ? (
                <>
                  <div style={{ display: "flex", gap: "8px", padding: "4px 14px 16px", flexShrink: "0" }}>
                    <input
                      value={v?.chatInput}
                      onChange={v?.onChatInput}
                      onKeyDown={v?.onChatKey}
                      placeholder={v?.t?.chatPh}
                      style={{
                        flex: "1",
                        minWidth: "0",
                        height: "50px",
                        border: "1.5px solid #DDD3C3",
                        borderRadius: "14px",
                        padding: "0 14px",
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#1B2333",
                        background: "#fff",
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={v?.sendChat}
                      aria-label={v?.t?.send}
                      style={{
                        width: "50px",
                        height: "50px",
                        flexShrink: "0",
                        border: "0",
                        borderRadius: "14px",
                        background: "#1664B0",
                        display: "grid",
                        placeItems: "center",
                        cursor: "pointer",
                        color: "#fff",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : null}

        {v?.wide ? (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: "21",
                left: v?.L?.barL,
                width: v?.L?.barW,
                bottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                height: "60px",
                padding: "0 8px 0 18px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.62)",
                backdropFilter: "none",
                border: "1px solid rgba(255,255,255,.8)",
                boxShadow: "0 10px 36px rgba(21,23,28,.16)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" /><path d="M8.5 11h.01" /><path d="M12 11h.01" /><path d="M15.5 11h.01" /></svg>
              <input
                value={v?.chatInput}
                onChange={v?.onChatInput}
                onKeyDown={v?.onChatKey}
                onFocus={v?.openChat}
                placeholder={v?.t?.chatPh}
                style={{
                  flex: "1",
                  minWidth: "0",
                  height: "44px",
                  border: "0",
                  outline: "none",
                  background: "transparent",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#1B2333",
                }}
              />
              <button
                onClick={v?.sendChat}
                aria-label={v?.t?.send}
                style={{
                  width: "44px",
                  height: "44px",
                  flexShrink: "0",
                  border: "0",
                  borderRadius: "14px",
                  background: "#1664B0",
                  display: "grid",
                  placeItems: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </>
        ) : null}

        {v?.toastShow ? (
          <>
            <div
              style={{
                position: "absolute",
                zIndex: "40",
                top: "16px",
                left: "50%",
                transform: "translateX(-50%)",
                maxWidth: "calc(100% - 32px)",
                background: "#1B2333",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "700",
                padding: "12px 18px",
                borderRadius: "14px",
                boxShadow: "0 10px 30px rgba(21,23,28,.3)",
                textAlign: "center",
              }}
            >
              {v?.toastText}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
