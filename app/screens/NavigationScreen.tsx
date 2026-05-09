import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CornerUpRight, ArrowRight, Clock, Navigation, RefreshCw, Footprints, Zap } from "lucide-react";

const steps = [
  { id: 1, icon: "↑", label: "Head north along East Corridor", dist: "45m", done: true },
  { id: 2, icon: "→", label: "Turn right at Escalator B", dist: "12m", done: true },
  { id: 3, icon: "↑", label: "Take escalator to Floor 3", dist: "", done: false, current: true },
  { id: 4, icon: "→", label: "Turn right after escalator", dist: "20m", done: false },
  { id: 5, icon: "✓", label: "StyleHub — Arrived!", dist: "", done: false },
];

export function NavigationScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(42);
  const [eta, setEta] = useState(3);
  const [rerouting, setRerouting] = useState(false);
  const [dotPos, setDotPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotPos((p) => (p >= 100 ? 0 : p + 0.4));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleReroute = () => {
    setRerouting(true);
    setTimeout(() => setRerouting(false), 1800);
  };

  // SVG path progress for the animated dot
  const pathLength = 260;
  const dotOffset = pathLength - (dotPos / 100) * pathLength;

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ArrowLeft size={16} color="white" />
          </button>
          <div className="flex-1">
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "white" }}>Navigating to StyleHub</h2>
            <p style={{ fontSize: "11px", color: "#64748B" }}>Black Cargo Pants · Floor 3</p>
          </div>
          <motion.button
            onClick={handleReroute}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
            style={{ background: "rgba(41,121,255,0.12)", border: "1px solid rgba(41,121,255,0.2)" }}
            animate={rerouting ? { opacity: [1, 0.5, 1] } : {}}
            transition={rerouting ? { duration: 0.4, repeat: 4 } : {}}
          >
            <RefreshCw size={12} color="#2979FF" />
            <span style={{ fontSize: "11px", color: "#2979FF", fontWeight: 600 }}>Reroute</span>
          </motion.button>
        </div>
      </div>

      {/* ETA + Info bar — Gestalt: Proximity */}
      <div className="px-4 pt-3 pb-3">
        <div
          className="flex items-center justify-around rounded-2xl py-3"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex flex-col items-center gap-0.5">
            <Clock size={16} color="#2979FF" />
            <span style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>{eta} min</span>
            <span style={{ fontSize: "10px", color: "#64748B" }}>ETA</span>
          </div>
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.08)" }} />
          <div className="flex flex-col items-center gap-0.5">
            <Footprints size={16} color="#22C55E" />
            <span style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>180m</span>
            <span style={{ fontSize: "10px", color: "#64748B" }}>Distance</span>
          </div>
          <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.08)" }} />
          <div className="flex flex-col items-center gap-0.5">
            <Zap size={16} color="#F59E0B" />
            <span style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>Low</span>
            <span style={{ fontSize: "10px", color: "#64748B" }}>Crowd</span>
          </div>
        </div>
      </div>

      {/* Map view with animated path */}
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
          <svg width="100%" viewBox="0 0 358 220" style={{ display: "block" }}>
            {/* Floor plan */}
            <rect x="10" y="10" width="338" height="200" rx="10" fill="rgba(255,255,255,0.02)" />
            
            {/* Corridors */}
            <rect x="10" y="100" width="338" height="16" fill="rgba(41,121,255,0.05)" />
            <rect x="160" y="10" width="16" height="200" fill="rgba(41,121,255,0.05)" />
            
            {/* Rooms */}
            <rect x="20" y="20" width="130" height="72" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="186" y="20" width="80" height="72" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="280" y="20" width="58" height="72" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="20" y="126" width="60" height="74" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="90" y="126" width="60" height="74" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <rect x="186" y="126" width="80" height="74" rx="6" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.25)" strokeWidth="1.5" />
            <rect x="280" y="126" width="58" height="74" rx="6" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* Labels */}
            <text x="85" y="60" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter, sans-serif">Food Court</text>
            <text x="226" y="60" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Inter, sans-serif">H&M</text>
            <text x="309" y="60" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Inter, sans-serif">Zara</text>
            <text x="226" y="168" textAnchor="middle" fill="rgba(34,197,94,0.8)" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700">StyleHub</text>
            <text x="226" y="180" textAnchor="middle" fill="rgba(34,197,94,0.6)" fontSize="7.5" fontFamily="Inter, sans-serif">🎯 Destination</text>

            {/* Escalator icon */}
            <rect x="164" y="94" width="8" height="12" rx="2" fill="rgba(41,121,255,0.5)" />
            <text x="168" y="104" textAnchor="middle" fill="#2979FF" fontSize="7" fontFamily="Inter, sans-serif">▲</text>

            {/* Navigation path */}
            <path
              id="navPath"
              d="M100 178 L100 108 L168 108 L168 108 L168 60 L168 60"
              stroke="rgba(41,121,255,0.2)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M100 178 L100 108 L168 108 L168 108 L168 60 L168 60"
              stroke="#2979FF"
              strokeWidth="3"
              strokeDasharray="8 6"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            {/* Animated path to destination */}
            <path
              d="M168 108 L226 108 L226 126"
              stroke="#22C55E"
              strokeWidth="3"
              strokeDasharray="8 6"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />

            {/* User position */}
            <motion.g
              animate={{ x: [0, 0, 68], y: [0, -70, -70] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 1] }}
            >
              <circle cx="100" cy="178" r="10" fill="rgba(41,121,255,0.3)" stroke="rgba(41,121,255,0.8)" strokeWidth="2" />
              <circle cx="100" cy="178" r="5" fill="#2979FF" />
              <motion.circle
                cx="100"
                cy="178"
                r="14"
                fill="none"
                stroke="rgba(41,121,255,0.4)"
                strokeWidth="1.5"
                animate={{ r: [10, 18], opacity: [0.6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.g>

            {/* Destination pulse */}
            <motion.circle
              cx="226"
              cy="168"
              r="8"
              fill="rgba(34,197,94,0.3)"
              stroke="#22C55E"
              strokeWidth="1.5"
              animate={{ r: [6, 12], opacity: [0.8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <circle cx="226" cy="168" r="5" fill="#22C55E" />
          </svg>
        </div>
      </div>

      {/* Reroute alert */}
      <AnimatePresence>
        {rerouting && (
          <motion.div
            className="mx-4 mb-3 px-3 py-2.5 rounded-xl flex items-center gap-2"
            style={{ background: "rgba(41,121,255,0.15)", border: "1px solid rgba(41,121,255,0.3)" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <RefreshCw size={14} color="#2979FF" />
            <span style={{ fontSize: "12px", color: "#93C5FD", fontWeight: 500 }}>
              Finding less crowded route...
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Turn-by-turn steps — Gestalt: Proximity + Similarity */}
      <div className="px-4 pb-3">
        <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 500, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.6px" }}>
          Turn-by-Turn
        </p>
        <div className="flex flex-col gap-1.5">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="flex items-center gap-3 px-3 py-2.5 rounded-2xl"
              style={{
                background: step.current
                  ? "rgba(41,121,255,0.12)"
                  : step.done
                  ? "rgba(34,197,94,0.06)"
                  : "rgba(255,255,255,0.03)",
                border: `1px solid ${
                  step.current
                    ? "rgba(41,121,255,0.3)"
                    : step.done
                    ? "rgba(34,197,94,0.15)"
                    : "rgba(255,255,255,0.06)"
                }`,
              }}
            >
              <div
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: "32px",
                  height: "32px",
                  background: step.current
                    ? "rgba(41,121,255,0.2)"
                    : step.done
                    ? "rgba(34,197,94,0.15)"
                    : "rgba(255,255,255,0.05)",
                  fontSize: "14px",
                }}
              >
                <span style={{ color: step.current ? "#2979FF" : step.done ? "#22C55E" : "#64748B" }}>
                  {step.icon}
                </span>
              </div>
              <div className="flex-1">
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: step.current ? 600 : 400,
                    color: step.done ? "#22C55E" : step.current ? "white" : "#94A3B8",
                    lineHeight: 1.3,
                  }}
                >
                  {step.label}
                </p>
                {step.dist && (
                  <p style={{ fontSize: "10px", color: "#64748B" }}>{step.dist}</p>
                )}
              </div>
              {step.current && (
                <motion.div
                  style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2979FF" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar — UI Pattern: Progress Feedback */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize: "12px", color: "#64748B" }}>Route Progress</span>
          <span style={{ fontSize: "12px", color: "#2979FF", fontWeight: 600 }}>{progress}%</span>
        </div>
        <div style={{ height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <motion.div
            style={{
              height: "100%",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #1565C0, #2979FF, #42A5F5)",
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <motion.button
          onClick={() => navigate("/app/success")}
          className="w-full mt-4 flex items-center justify-center gap-2 rounded-2xl"
          style={{
            height: "52px",
            background: "linear-gradient(135deg, #1565C0, #2979FF)",
            fontSize: "15px",
            fontWeight: 600,
            color: "white",
            boxShadow: "0 8px 24px rgba(41,121,255,0.35)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          <Navigation size={18} />
          Arrived at Destination
        </motion.button>
      </div>
    </div>
  );
}
