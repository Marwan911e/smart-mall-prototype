import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Navigation2, MapPin, ChevronUp, Clock, Footprints, ChevronRight } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const floors = ["B1", "L1", "L2", "L3", "L4"];

const routeSteps = [
  { step: 1, direction: "Start", desc: "From current location – Main Entrance", icon: "📍" },
  { step: 2, direction: "Turn Right", desc: "Head toward East Wing Elevators", icon: "➡️" },
  { step: 3, direction: "Take Elevator", desc: "Go up to Level 3", icon: "🛗" },
  { step: 4, direction: "Turn Left", desc: "Walk 40m past Food Court", icon: "⬅️" },
  { step: 5, direction: "Arrive", desc: "Nike Store – Unit 3B-12", icon: "🏪" },
];

export default function NavigationMap() {
  const navigate = useNavigate();
  const [activeFloor, setActiveFloor] = useState("L3");
  const [panelExpanded, setPanelExpanded] = useState(false);

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      {/* Map area */}
      <div className="absolute inset-0">
        {/* Grid background - simulating floor plan */}
        <div className="absolute inset-0"
          style={{
            background: "#0A1628",
            backgroundImage: `
              linear-gradient(rgba(76,201,240,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76,201,240,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px"
          }} />

        {/* Floor plan SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 390 560" preserveAspectRatio="xMidYMid meet">
          {/* Outer mall structure */}
          <rect x="30" y="100" width="330" height="380" rx="16" fill="none" stroke="rgba(76,201,240,0.2)" strokeWidth="1.5" />

          {/* Store blocks */}
          {[
            { x: 40, y: 110, w: 80, h: 60, label: "Food\nCourt", color: "rgba(255,107,107,0.15)", stroke: "rgba(255,107,107,0.35)" },
            { x: 130, y: 110, w: 70, h: 60, label: "H&M", color: "rgba(76,201,240,0.1)", stroke: "rgba(76,201,240,0.3)" },
            { x: 210, y: 110, w: 70, h: 60, label: "Zara", color: "rgba(0,212,170,0.1)", stroke: "rgba(0,212,170,0.3)" },
            { x: 290, y: 110, w: 70, h: 60, label: "Adidas", color: "rgba(76,201,240,0.1)", stroke: "rgba(76,201,240,0.25)" },
            { x: 40, y: 280, w: 80, h: 60, label: "Apple\nStore", color: "rgba(123,97,255,0.15)", stroke: "rgba(123,97,255,0.4)" },
            { x: 130, y: 280, w: 70, h: 60, label: "Samsung", color: "rgba(76,201,240,0.1)", stroke: "rgba(76,201,240,0.25)" },
            { x: 290, y: 280, w: 70, h: 60, label: "Foot\nLocker", color: "rgba(255,209,102,0.1)", stroke: "rgba(255,209,102,0.3)" },
          ].map((s, i) => (
            <g key={i}>
              <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="8" fill={s.color} stroke={s.stroke} strokeWidth="1" />
              <text x={s.x + s.w / 2} y={s.y + s.h / 2 - 4} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Inter">
                {s.label.split("\n")[0]}
              </text>
              {s.label.includes("\n") && (
                <text x={s.x + s.w / 2} y={s.y + s.h / 2 + 8} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="Inter">
                  {s.label.split("\n")[1]}
                </text>
              )}
            </g>
          ))}

          {/* NIKE destination (highlighted) */}
          <rect x="210" y="280" width="70" height="60" rx="8" fill="rgba(76,201,240,0.25)" stroke="#4CC9F0" strokeWidth="1.5" />
          <text x="245" y="313" textAnchor="middle" fill="#4CC9F0" fontSize="9" fontWeight="bold" fontFamily="Inter">NIKE</text>
          {/* Destination pin */}
          <circle cx="245" cy="295" r="6" fill="#4CC9F0" />
          <line x1="245" y1="301" x2="245" y2="308" stroke="#4CC9F0" strokeWidth="1.5" />

          {/* Corridors */}
          <rect x="30" y="180" width="330" height="90" rx="0" fill="rgba(76,201,240,0.03)" />
          <rect x="180" y="100" width="40" height="380" rx="0" fill="rgba(76,201,240,0.03)" />

          {/* Route path animation */}
          <path
            d="M 195 500 L 195 450 L 195 400 L 195 350 L 245 350 L 245 310"
            fill="none"
            stroke="#4CC9F0"
            strokeWidth="2.5"
            strokeDasharray="8 4"
            strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" from="0" to="-60" dur="1.5s" repeatCount="indefinite" />
          </path>

          {/* Route dots */}
          {[[195, 500], [195, 400], [245, 340]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill={i === 2 ? "#4CC9F0" : "rgba(76,201,240,0.5)"} />
          ))}

          {/* You are here */}
          <g transform="translate(195, 500)">
            <circle cx="0" cy="0" r="10" fill="rgba(76,201,240,0.15)" />
            <circle cx="0" cy="0" r="6" fill="#4CC9F0" />
            <circle cx="0" cy="0" r="3" fill="#fff" />
            <circle cx="0" cy="0" r="14" fill="none" stroke="rgba(76,201,240,0.3)" strokeWidth="1">
              <animate attributeName="r" from="10" to="20" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Elevators */}
          {[[165, 225], [225, 225]].map(([cx, cy], i) => (
            <g key={i}>
              <rect x={cx - 8} y={cy - 10} width="16" height="20" rx="3" fill="rgba(123,97,255,0.2)" stroke="rgba(123,97,255,0.5)" strokeWidth="1" />
              <text x={cx} y={cy + 4} textAnchor="middle" fill="rgba(123,97,255,0.8)" fontSize="7" fontFamily="Inter">E</text>
            </g>
          ))}

          {/* North indicator */}
          <g transform="translate(355, 120)">
            <circle cx="0" cy="0" r="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="0" y="4" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Inter" fontWeight="bold">N</text>
          </g>
        </svg>
      </div>

      {/* Top overlay */}
      <div className="relative z-10">
        <StatusBar />
        <div className="px-5 flex items-center gap-3">
          <button onClick={() => navigate(-1)}
            className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(6,13,26,0.8)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <ChevronLeft size={18} color="#fff" />
          </button>
          <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
            style={{ background: "rgba(6,13,26,0.85)", backdropFilter: "blur(16px)", border: "1px solid rgba(76,201,240,0.3)" }}>
            <Navigation2 size={14} color="#4CC9F0" />
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Navigating to Nike Store</span>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4CC9F0" }} />
              <span style={{ color: "#4CC9F0", fontSize: 11, fontWeight: 600 }}>LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floor selector */}
      <div className="absolute right-4 top-1/3 flex flex-col gap-1.5 z-10">
        {floors.map((floor) => (
          <button
            key={floor}
            onClick={() => setActiveFloor(floor)}
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: activeFloor === floor ? "rgba(76,201,240,0.25)" : "rgba(6,13,26,0.8)",
              backdropFilter: "blur(12px)",
              border: activeFloor === floor ? "1px solid rgba(76,201,240,0.6)" : "1px solid rgba(255,255,255,0.1)",
              color: activeFloor === floor ? "#4CC9F0" : "rgba(255,255,255,0.4)",
              fontSize: 11,
              fontWeight: 700
            }}>
            {floor}
          </button>
        ))}
      </div>

      {/* Bottom navigation panel */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 rounded-t-3xl"
        style={{
          background: "rgba(6,13,26,0.96)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "none"
        }}
        animate={{ height: panelExpanded ? 340 : 180 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}>

        {/* Handle */}
        <button
          onClick={() => setPanelExpanded(!panelExpanded)}
          className="w-full flex flex-col items-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.2)" }} />
          <div className="flex items-center gap-2">
            <ChevronUp size={14} color="rgba(255,255,255,0.3)"
              style={{ transform: panelExpanded ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 500 }}>
              {panelExpanded ? "Less Details" : "More Details"}
            </span>
          </div>
        </button>

        {/* ETA row */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div>
                <p style={{ color: "#fff", fontSize: 28, fontWeight: 800, letterSpacing: "-1px", lineHeight: 1 }}>3 min</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 400 }}>~200m walk</p>
              </div>
              <div className="flex gap-2">
                <div className="px-2.5 py-1 rounded-xl flex items-center gap-1.5"
                  style={{ background: "rgba(0,212,170,0.15)", border: "1px solid rgba(0,212,170,0.3)" }}>
                  <Footprints size={12} color="#00D4AA" />
                  <span style={{ color: "#00D4AA", fontSize: 11, fontWeight: 600 }}>Low Crowd</span>
                </div>
                <div className="px-2.5 py-1 rounded-xl flex items-center gap-1.5"
                  style={{ background: "rgba(76,201,240,0.15)", border: "1px solid rgba(76,201,240,0.3)" }}>
                  <Clock size={12} color="#4CC9F0" />
                  <span style={{ color: "#4CC9F0", fontSize: 11, fontWeight: 600 }}>Optimal</span>
                </div>
              </div>
            </div>
            <button
              className="px-5 py-3 rounded-2xl"
              style={{ background: "linear-gradient(90deg, #00B4D8, #4361EE)", boxShadow: "0 6px 20px rgba(0,180,216,0.3)" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>Start</span>
            </button>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 rounded-full overflow-hidden mb-4" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="h-full rounded-full"
              style={{ width: "0%", background: "linear-gradient(90deg, #4CC9F0, #7B61FF)" }} />
          </div>
        </div>

        {/* Expanded route steps */}
        {panelExpanded && (
          <div className="px-5 overflow-y-auto" style={{ maxHeight: 180, scrollbarWidth: "none" }}>
            {routeSteps.map((step, i) => (
              <div key={step.step}
                className="flex items-start gap-3 pb-3"
                style={{ borderBottom: i < routeSteps.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", marginBottom: i < routeSteps.length - 1 ? 12 : 0 }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: i === 0 ? "rgba(76,201,240,0.2)" : i === routeSteps.length - 1 ? "rgba(0,212,170,0.2)" : "rgba(255,255,255,0.05)",
                    border: i === 0 ? "1px solid rgba(76,201,240,0.4)" : i === routeSteps.length - 1 ? "1px solid rgba(0,212,170,0.4)" : "1px solid rgba(255,255,255,0.08)"
                  }}>
                  <span style={{ fontSize: 14 }}>{step.icon}</span>
                </div>
                <div>
                  <p style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{step.direction}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 400 }}>{step.desc}</p>
                </div>
                {i < routeSteps.length - 1 && (
                  <ChevronRight size={14} color="rgba(255,255,255,0.2)" className="ml-auto mt-2" />
                )}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
