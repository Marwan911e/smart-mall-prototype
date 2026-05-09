import React from "react";

interface MobileFrameProps {
  children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#060D1A]"
      style={{ background: "linear-gradient(135deg, #060D1A 0%, #0A1628 50%, #0D1F3C 100%)" }}>
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00B4D8 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #4361EE 0%, transparent 70%)" }} />
      </div>

      {/* Phone frame */}
      <div className="relative" style={{ width: 390, height: 844 }}>
        {/* Phone outer bezel */}
        <div className="absolute inset-0 rounded-[52px] shadow-2xl pointer-events-none z-20"
          style={{
            background: "linear-gradient(145deg, #2A2D35 0%, #1A1D24 40%, #0F1218 100%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.12)"
          }} />

        {/* Screen area */}
        <div className="absolute rounded-[44px] overflow-hidden z-10"
          style={{ top: 4, left: 4, right: 4, bottom: 4 }}>
          {children}
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-[14px] left-1/2 -translate-x-1/2 z-30 rounded-full"
          style={{ width: 126, height: 34, background: "#000", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)" }}>
          <div className="absolute right-[28px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{ background: "#1A1A1A" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
              style={{ background: "#2A2A2A" }} />
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute -left-[3px] rounded-l-sm z-20"
          style={{ top: 120, width: 4, height: 36, background: "#2A2D35" }} />
        <div className="absolute -left-[3px] rounded-l-sm z-20"
          style={{ top: 168, width: 4, height: 64, background: "#2A2D35" }} />
        <div className="absolute -left-[3px] rounded-l-sm z-20"
          style={{ top: 244, width: 4, height: 64, background: "#2A2D35" }} />
        <div className="absolute -right-[3px] rounded-r-sm z-20"
          style={{ top: 168, width: 4, height: 80, background: "#2A2D35" }} />
      </div>
    </div>
  );
}
