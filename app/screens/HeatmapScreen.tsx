import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, AlertTriangle, RefreshCw, Users, Navigation, ChevronRight } from "lucide-react";

const crowdZones = [
  { id: 1, x: 60, y: 80, r: 52, level: "high", label: "Food Court", pct: 88 },
  { id: 2, x: 200, y: 70, r: 38, level: "medium", label: "Electronics", pct: 55 },
  { id: 3, x: 310, y: 90, r: 32, level: "low", label: "Bookstore", pct: 22 },
  { id: 4, x: 80, y: 200, r: 40, level: "medium", label: "Shoes", pct: 60 },
  { id: 5, x: 200, y: 190, r: 50, level: "high", label: "H&M", pct: 78 },
  { id: 6, x: 310, y: 200, r: 36, level: "low", label: "UrbanEdge", pct: 30 },
  { id: 7, x: 80, y: 310, r: 34, level: "low", label: "Zara", pct: 25 },
  { id: 8, x: 200, y: 310, r: 38, level: "medium", label: "Café", pct: 48 },
  { id: 9, x: 310, y: 310, r: 30, level: "low", label: "StyleHub", pct: 20 },
];

const levelColor = { high: "#EF4444", medium: "#F59E0B", low: "#22C55E" };
const levelAlpha = { high: 0.25, medium: 0.2, low: 0.15 };
const levelBg = { high: "rgba(239,68,68,0.12)", medium: "rgba(245,158,11,0.12)", low: "rgba(34,197,94,0.12)" };
const levelBorder = { high: "rgba(239,68,68,0.3)", medium: "rgba(245,158,11,0.3)", low: "rgba(34,197,94,0.3)" };

const floorTabs = ["F1", "F2", "F3", "F4"];

export function HeatmapScreen() {
  const navigate = useNavigate();
  const [floor, setFloor] = useState("F2");
  const [updating, setUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState("Just now");
  const [selectedZone, setSelectedZone] = useState<number | null>(null);

  const refresh = () => {
    setUpdating(true);
    setTimeout(() => {
      setUpdating(false);
      setLastUpdate("Just now");
    }, 1200);
  };

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center rounded-full"
              style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <ArrowLeft size={16} color="white" />
            </button>
            <div>
              <h2 style={{ fontSize: "17px", fontWeight: 600, color: "white" }}>Live Crowd Map</h2>
              <div className="flex items-center gap-1.5">
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#22C55E" }} />
                <span style={{ fontSize: "10px", color: "#22C55E", fontWeight: 500 }}>Updated {lastUpdate}</span>
              </div>
            </div>
          </div>
          <motion.button
            onClick={refresh}
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            animate={updating ? { rotate: 360 } : {}}
            transition={updating ? { duration: 0.8, repeat: Infinity, ease: "linear" } : {}}
          >
            <RefreshCw size={15} color="#94A3B8" />
          </motion.button>
        </div>
      </div>

      {/* Floor selector */}
      <div className="px-4 pt-3 pb-2">
        <div
          className="flex gap-1 p-1 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {floorTabs.map((f) => (
            <button
              key={f}
              onClick={() => setFloor(f)}
              className="flex-1 py-2 rounded-xl"
              style={{
                background: floor === f ? "rgba(41,121,255,0.25)" : "transparent",
                border: floor === f ? "1px solid rgba(41,121,255,0.4)" : "1px solid transparent",
                fontSize: "12px",
                fontWeight: floor === f ? 700 : 400,
                color: floor === f ? "#2979FF" : "#64748B",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Alert banner — UI Pattern: Progress Feedback */}
      <div className="px-4 pb-2">
        <div
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)" }}
        >
          <AlertTriangle size={14} color="#EF4444" />
          <p style={{ fontSize: "11px", color: "#FCA5A5", flex: 1 }}>
            <span style={{ fontWeight: 600 }}>High congestion</span> near Food Court & H&M entrance
          </p>
          <button onClick={() => navigate("/app/navigation")} className="flex items-center gap-1">
            <span style={{ fontSize: "10px", color: "#EF4444", fontWeight: 600 }}>Reroute</span>
            <ChevronRight size={12} color="#EF4444" />
          </button>
        </div>
      </div>

      {/* Mall map with crowd overlay — Gestalt: Figure-Ground */}
      <div className="px-4 pb-3">
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
          }}
        >
          <svg width="100%" viewBox="0 0 380 410" style={{ display: "block" }}>
            {/* Mall floor plan grid */}
            <rect x="20" y="20" width="340" height="370" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            
            {/* Corridors */}
            <rect x="160" y="20" width="20" height="370" fill="rgba(41,121,255,0.06)" />
            <rect x="20" y="160" width="340" height="20" fill="rgba(41,121,255,0.06)" />
            <rect x="20" y="280" width="340" height="20" fill="rgba(41,121,255,0.04)" />

            {/* Store outlines */}
            <rect x="30" y="30" width="120" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="180" y="30" width="80" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="280" y="30" width="70" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="30" y="190" width="100" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="150" y="190" width="110" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="280" y="190" width="70" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="30" y="310" width="90" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="150" y="310" width="90" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
            <rect x="270" y="310" width="80" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

            {/* Escalators */}
            <rect x="165" y="168" width="10" height="12" rx="2" fill="rgba(41,121,255,0.4)" />
            <line x1="170" y1="168" x2="170" y2="180" stroke="rgba(41,121,255,0.6)" strokeWidth="1" />

            {/* Crowd heat overlay */}
            {crowdZones.map((zone) => (
              <g key={zone.id} onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)} style={{ cursor: "pointer" }}>
                {/* Heat glow */}
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={zone.r + 8}
                  fill={(levelColor as any)[zone.level]}
                  opacity="0.04"
                />
                <circle
                  cx={zone.x}
                  cy={zone.y}
                  r={zone.r}
                  fill={(levelColor as any)[zone.level]}
                  opacity={(levelAlpha as any)[zone.level]}
                  stroke={(levelColor as any)[zone.level]}
                  strokeWidth={selectedZone === zone.id ? "2" : "0.8"}
                  strokeOpacity="0.5"
                />
                {/* Store label */}
                <text
                  x={zone.x}
                  y={zone.y - 3}
                  textAnchor="middle"
                  fill="white"
                  fontSize="8"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                  opacity="0.85"
                >
                  {zone.label}
                </text>
                <text
                  x={zone.x}
                  y={zone.y + 9}
                  textAnchor="middle"
                  fill={(levelColor as any)[zone.level]}
                  fontSize="8"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                >
                  {zone.pct}%
                </text>
              </g>
            ))}

            {/* You are here */}
            <circle cx="310" cy="200" r="8" fill="rgba(41,121,255,0.3)" stroke="rgba(41,121,255,0.8)" strokeWidth="2" />
            <circle cx="310" cy="200" r="4" fill="#2979FF" />
            <text x="310" y="218" textAnchor="middle" fill="#2979FF" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="700">
              You
            </text>

            {/* Destination */}
            <circle cx="310" cy="310" r="8" fill="rgba(34,197,94,0.3)" stroke="rgba(34,197,94,0.8)" strokeWidth="2" />
            <circle cx="310" cy="310" r="4" fill="#22C55E" />
            <text x="310" y="328" textAnchor="middle" fill="#22C55E" fontSize="7.5" fontFamily="Inter, sans-serif" fontWeight="700">
              Dest
            </text>

            {/* Suggested route — dashed green path */}
            <path
              d="M310 200 L310 280 L310 310"
              stroke="#22C55E"
              strokeWidth="2"
              strokeDasharray="5,4"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* Legend — Gestalt: Proximity (grouped) */}
      <div className="px-4 pb-3">
        <div
          className="flex items-center justify-between px-4 py-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { level: "Low", color: "#22C55E" },
            { level: "Medium", color: "#F59E0B" },
            { level: "High", color: "#EF4444" },
          ].map(({ level, color }) => (
            <div key={level} className="flex items-center gap-2">
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: color }} />
              <span style={{ fontSize: "11px", color: "#94A3B8" }}>{level} Crowd</span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div style={{ width: "10px", height: "2px", background: "#2979FF", borderRadius: "1px" }} />
            <span style={{ fontSize: "11px", color: "#94A3B8" }}>You</span>
          </div>
        </div>
      </div>

      {/* Zone stats */}
      <div className="px-4 pb-6">
        <p style={{ fontSize: "12px", color: "#64748B", marginBottom: "10px", fontWeight: 500 }}>Low Crowd Stores Nearby</p>
        <div className="flex flex-col gap-2">
          {crowdZones.filter((z) => z.level === "low").map((zone) => (
            <motion.button
              key={zone.id}
              onClick={() => navigate("/app/navigation")}
              className="flex items-center gap-3 px-3 py-2.5 rounded-2xl"
              style={{
                background: "rgba(34,197,94,0.06)",
                border: "1px solid rgba(34,197,94,0.15)",
                textAlign: "left",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: "34px", height: "34px", background: "rgba(34,197,94,0.12)", flexShrink: 0 }}
              >
                <Users size={15} color="#22C55E" />
              </div>
              <div className="flex-1">
                <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>{zone.label}</p>
                <p style={{ fontSize: "10px", color: "#22C55E" }}>{zone.pct}% occupied</p>
              </div>
              <div className="flex items-center gap-1">
                <Navigation size={12} color="#2979FF" />
                <span style={{ fontSize: "11px", color: "#2979FF", fontWeight: 500 }}>Go</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
