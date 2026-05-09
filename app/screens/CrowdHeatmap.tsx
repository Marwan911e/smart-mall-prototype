import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Clock, Users, TrendingDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const timeSlots = ["Now", "1h", "2h", "4h", "8h"];

const crowdZones = [
  { name: "Food Court", level: 92, color: "#FF4444", x: 40, y: 100, w: 80, h: 60, label: "Food\nCourt" },
  { name: "Fashion Wing", level: 68, color: "#FF9500", x: 130, y: 100, w: 70, h: 60, label: "Fashion" },
  { name: "Apple Store", level: 45, color: "#FFD166", x: 40, y: 270, w: 80, h: 60, label: "Apple" },
  { name: "Nike Store", level: 22, color: "#00D4AA", x: 210, y: 270, w: 70, h: 60, label: "Nike" },
  { name: "Electronics", level: 78, color: "#FF6B35", x: 290, y: 100, w: 70, h: 60, label: "Tech" },
  { name: "H&M", level: 35, color: "#4CC9F0", x: 210, y: 100, w: 70, h: 60, label: "H&M" },
  { name: "Samsung", level: 55, color: "#FFD166", x: 130, y: 270, w: 70, h: 60, label: "Samsung" },
  { name: "Foot Locker", level: 30, color: "#4CC9F0", x: 290, y: 270, w: 70, h: 60, label: "Foot\nLocker" },
];

function getCrowdColor(level: number) {
  if (level >= 80) return "#FF4444";
  if (level >= 60) return "#FF9500";
  if (level >= 40) return "#FFD166";
  return "#00D4AA";
}

function getCrowdLabel(level: number) {
  if (level >= 80) return "Very Busy";
  if (level >= 60) return "Busy";
  if (level >= 40) return "Moderate";
  return "Quiet";
}

const areaStats = [
  { name: "Food Court", crowd: 92, change: +8, floor: "L1" },
  { name: "Electronics", crowd: 78, change: +3, floor: "L2" },
  { name: "Fashion Wing", crowd: 68, change: -5, floor: "L1" },
  { name: "Samsung", crowd: 55, change: +12, floor: "L2" },
  { name: "Apple Store", crowd: 45, change: -10, floor: "L2" },
  { name: "Nike Store", crowd: 22, change: -15, floor: "L3" },
];

export default function CrowdHeatmap() {
  const navigate = useNavigate();
  const [activeTime, setActiveTime] = useState("Now");
  const [activeFloor, setActiveFloor] = useState("L1");

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

      <StatusBar />

      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: "none" }}>
        <div className="px-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <ChevronLeft size={18} color="#fff" />
            </button>
            <div>
              <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>Crowd Heatmap</h1>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#00FF88" }} />
                <span style={{ color: "#00FF88", fontSize: 11, fontWeight: 600 }}>Live Data · Updated 30s ago</span>
              </div>
            </div>
          </div>

          {/* Time selector */}
          <div className="flex gap-2 mb-4">
            <Clock size={14} color="rgba(255,255,255,0.4)" className="mt-1.5" />
            <div className="flex gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setActiveTime(slot)}
                  className="px-3 py-1.5 rounded-xl"
                  style={{
                    background: activeTime === slot ? "rgba(76,201,240,0.25)" : "rgba(255,255,255,0.05)",
                    border: activeTime === slot ? "1px solid rgba(76,201,240,0.5)" : "1px solid rgba(255,255,255,0.07)",
                    color: activeTime === slot ? "#4CC9F0" : "rgba(255,255,255,0.4)",
                    fontSize: 12,
                    fontWeight: activeTime === slot ? 700 : 400
                  }}>
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Floor tabs */}
          <div className="flex gap-2 mb-4">
            {["B1", "L1", "L2", "L3"].map((floor) => (
              <button
                key={floor}
                onClick={() => setActiveFloor(floor)}
                className="px-4 py-2 rounded-xl"
                style={{
                  background: activeFloor === floor ? "#FF6B6B" : "rgba(255,255,255,0.05)",
                  border: activeFloor === floor ? "none" : "1px solid rgba(255,255,255,0.07)",
                  color: activeFloor === floor ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  fontWeight: activeFloor === floor ? 700 : 400
                }}>
                {floor}
              </button>
            ))}
          </div>

          {/* Heatmap SVG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl overflow-hidden mb-4"
            style={{ background: "rgba(10,22,40,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <svg viewBox="0 0 370 280" className="w-full">
              {/* Background */}
              <rect x="0" y="0" width="370" height="280" fill="#0A1628" rx="12" />
              {/* Grid */}
              <defs>
                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(76,201,240,0.06)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="370" height="280" fill="url(#smallGrid)" />

              {/* Outer wall */}
              <rect x="20" y="20" width="330" height="240" rx="12" fill="none" stroke="rgba(76,201,240,0.15)" strokeWidth="1" />

              {/* Heatmap zones */}
              {crowdZones.map((zone, i) => {
                const alpha = zone.level / 100;
                return (
                  <g key={i}>
                    {/* Glow */}
                    <rect
                      x={zone.x - 5}
                      y={zone.y - 5}
                      width={zone.w + 10}
                      height={zone.h + 10}
                      rx="14"
                      fill={zone.color}
                      opacity={alpha * 0.15}
                    />
                    {/* Block */}
                    <rect
                      x={zone.x}
                      y={zone.y}
                      width={zone.w}
                      height={zone.h}
                      rx="8"
                      fill={zone.color}
                      opacity={0.08 + alpha * 0.2}
                      stroke={zone.color}
                      strokeWidth="1"
                      strokeOpacity={0.4 + alpha * 0.3}
                    />
                    {/* Label */}
                    <text x={zone.x + zone.w / 2} y={zone.y + zone.h / 2 - 6} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="Inter">
                      {zone.label.split("\n")[0]}
                    </text>
                    {zone.label.includes("\n") && (
                      <text x={zone.x + zone.w / 2} y={zone.y + zone.h / 2 + 5} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7.5" fontFamily="Inter">
                        {zone.label.split("\n")[1]}
                      </text>
                    )}
                    {/* Percentage */}
                    <text x={zone.x + zone.w / 2} y={zone.y + zone.h / 2 + 16} textAnchor="middle" fill={zone.color} fontSize="9" fontFamily="Inter" fontWeight="bold">
                      {zone.level}%
                    </text>
                  </g>
                );
              })}

              {/* Corridors */}
              <rect x="20" y="170" width="330" height="45" fill="rgba(76,201,240,0.03)" />
              <rect x="170" y="20" width="30" height="240" fill="rgba(76,201,240,0.03)" />

              {/* Visitor count */}
              <rect x="20" y="248" width="330" height="1" fill="rgba(255,255,255,0.05)" />
              <text x="35" y="268" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter">Total: 2,847 visitors</text>
              <text x="295" y="268" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter">Live</text>
              <circle cx="288" cy="265" r="3" fill="#00FF88">
                <animate attributeName="opacity" from="1" to="0.3" dur="1s" repeatCount="indefinite" />
              </circle>
            </svg>
          </motion.div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mb-5 py-3 px-4 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { color: "#00D4AA", label: "Quiet <40%" },
              { color: "#FFD166", label: "Moderate" },
              { color: "#FF9500", label: "Busy" },
              { color: "#FF4444", label: "Very Busy" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: color }} />
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>

          {/* Area stats */}
          <div className="mb-4">
            <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 10 }}>
              Area Breakdown
            </h3>
            <div className="flex flex-col gap-2.5">
              {areaStats.map((area) => {
                const color = getCrowdColor(area.crowd);
                const label = getCrowdLabel(area.crowd);
                return (
                  <div key={area.name}
                    className="flex items-center gap-3 p-3 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}20` }}>
                      {area.crowd >= 60 ? (
                        <AlertTriangle size={14} color={color} />
                      ) : (
                        <CheckCircle2 size={14} color={color} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{area.name}</span>
                        <div className="flex items-center gap-2">
                          <span style={{ color, fontSize: 12, fontWeight: 700 }}>{area.crowd}%</span>
                          <span style={{
                            color: area.change > 0 ? "#FF6B6B" : "#00D4AA",
                            fontSize: 10,
                            fontWeight: 600
                          }}>
                            {area.change > 0 ? "↑" : "↓"}{Math.abs(area.change)}%
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${area.crowd}%` }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: color }} />
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10 }}>{label}</span>
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10 }}>Floor {area.floor}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Suggestion */}
          <div className="p-4 rounded-2xl mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,170,0.1), rgba(76,201,240,0.1))",
              border: "1px solid rgba(0,212,170,0.3)"
            }}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown size={14} color="#00D4AA" />
              <span style={{ color: "#00D4AA", fontSize: 12, fontWeight: 700 }}>AI RECOMMENDATION</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.5 }}>
              <span style={{ color: "#fff", fontWeight: 600 }}>Best time to shop:</span> Head to the Food Court after 3:00 PM when crowd drops below 50%. Nike & H&M are currently quiet — perfect to visit now!
            </p>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
