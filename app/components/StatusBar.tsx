import { Wifi, Battery, Signal } from "lucide-react";

interface StatusBarProps {
  light?: boolean;
}

export function StatusBar({ light = false }: StatusBarProps) {
  const color = light ? "#FFFFFF" : "#FFFFFF";
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div className="flex items-center justify-between px-7 pt-[52px] pb-2 relative z-10"
      style={{ color }}>
      <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.3px" }}>{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal size={14} strokeWidth={2} />
        <Wifi size={14} strokeWidth={2} />
        <div className="flex items-center gap-0.5">
          <div className="w-6 h-3 rounded-sm border flex items-center px-0.5"
            style={{ borderColor: "rgba(255,255,255,0.6)" }}>
            <div className="h-1.5 rounded-sm flex-1"
              style={{ background: color, maxWidth: "85%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
