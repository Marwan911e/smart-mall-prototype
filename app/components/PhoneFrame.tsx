import { Outlet } from "react-router";
import { BottomNav } from "./BottomNav";

export function PhoneFrame() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0A0F1E 0%, #0D1B2A 50%, #0A1628 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6B8CAE 1px, transparent 1px), linear-gradient(90deg, #6B8CAE 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Phone frame */}
      <div
        className="relative flex flex-col overflow-hidden shadow-2xl"
        style={{
          width: "390px",
          height: "844px",
          borderRadius: "50px",
          background: "#050D1A",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.05), 0 40px 120px rgba(0,0,0,0.8), 0 0 80px rgba(41,121,255,0.08)",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center"
          style={{
            width: "126px",
            height: "37px",
            background: "#000",
            borderRadius: "0 0 24px 24px",
          }}
        />

        {/* Status bar */}
        <div
          className="flex-shrink-0 flex items-center justify-between px-8 pt-1"
          style={{ height: "50px" }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            9:41
          </span>
          <div className="flex items-center gap-1.5" style={{ paddingTop: "4px" }}>
            {/* Signal */}
            <div className="flex items-end gap-0.5">
              {[4, 6, 8, 10].map((h, i) => (
                <div
                  key={i}
                  style={{
                    width: "3px",
                    height: `${h}px`,
                    borderRadius: "1px",
                    background: i < 3 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
            {/* WiFi */}
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M8 9.5C8.83 9.5 9.5 10.17 9.5 11S8.83 12.5 8 12.5 6.5 11.83 6.5 11 7.17 9.5 8 9.5Z" fill="rgba(255,255,255,0.7)" />
              <path d="M2.5 5.5C4 4 6 3 8 3s5.5 1.5 5.5 2.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M0 2.5C2 1 4.8 0 8 0s6 1 8 2.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            </svg>
            {/* Battery */}
            <div className="flex items-center gap-0.5">
              <div
                style={{
                  width: "25px",
                  height: "13px",
                  borderRadius: "3px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  padding: "1.5px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "70%",
                    height: "100%",
                    borderRadius: "1.5px",
                    background: "rgba(255,255,255,0.7)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: "none" }}>
            <Outlet />
          </div>
          <BottomNav />
        </div>
      </div>

      {/* Side buttons */}
      <div
        className="absolute"
        style={{
          right: "calc(50% + 192px)",
          top: "140px",
          width: "3px",
          height: "32px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        className="absolute"
        style={{
          right: "calc(50% + 192px)",
          top: "188px",
          width: "3px",
          height: "64px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        className="absolute"
        style={{
          right: "calc(50% + 192px)",
          top: "264px",
          width: "3px",
          height: "64px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "2px 0 0 2px",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "calc(50% + 192px)",
          top: "168px",
          width: "3px",
          height: "90px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
