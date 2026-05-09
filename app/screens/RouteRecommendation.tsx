import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Navigation2, Clock, Footprints, Zap, Users, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const routes = [
  {
    id: "smart",
    title: "Smart Route",
    subtitle: "AI-Optimized",
    eta: "8 min",
    distance: "420m",
    crowd: "Low",
    crowdColor: "#00D4AA",
    stops: 3,
    icon: Zap,
    color: "#4CC9F0",
    gradient: "linear-gradient(135deg, rgba(76,201,240,0.2), rgba(67,97,238,0.2))",
    border: "rgba(76,201,240,0.4)",
    tag: "RECOMMENDED",
    tagColor: "#4CC9F0",
    steps: [
      { place: "Current Location", sub: "Main Entrance Area" },
      { place: "North Corridor", sub: "Turn right — 80m" },
      { place: "Central Elevator B", sub: "Go to Level 3" },
      { place: "Nike Store", sub: "Unit 3B-12 — Arrive!" },
    ],
  },
  {
    id: "quick",
    title: "Fastest Route",
    subtitle: "Direct Path",
    eta: "5 min",
    distance: "280m",
    crowd: "High",
    crowdColor: "#FF6B6B",
    stops: 1,
    icon: Clock,
    color: "#FFD166",
    gradient: "linear-gradient(135deg, rgba(255,209,102,0.1), rgba(255,107,107,0.1))",
    border: "rgba(255,209,102,0.3)",
    tag: "FASTEST",
    tagColor: "#FFD166",
    steps: [
      { place: "Current Location", sub: "Main Entrance Area" },
      { place: "West Shortcut", sub: "Through crowded Food Court" },
      { place: "Nike Store", sub: "Unit 3B-12 — Arrive!" },
    ],
  },
  {
    id: "scenic",
    title: "Scenic Route",
    subtitle: "Less Crowded",
    eta: "12 min",
    distance: "600m",
    crowd: "Very Low",
    crowdColor: "#7B61FF",
    stops: 5,
    icon: Footprints,
    color: "#7B61FF",
    gradient: "linear-gradient(135deg, rgba(123,97,255,0.15), rgba(76,201,240,0.1))",
    border: "rgba(123,97,255,0.3)",
    tag: "PEACEFUL",
    tagColor: "#7B61FF",
    steps: [
      { place: "Current Location", sub: "Main Entrance Area" },
      { place: "East Wing", sub: "Pass by Apple Store" },
      { place: "Skybridge", sub: "Over Level 2 Atrium" },
      { place: "West Corridor L3", sub: "Quiet path" },
      { place: "Nike Store", sub: "Unit 3B-12 — Arrive!" },
    ],
  },
];

export default function RouteRecommendation() {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState("smart");
  const [expanded, setExpanded] = useState<string | null>("smart");

  const selected = routes.find(r => r.id === selectedRoute)!;

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #4CC9F0 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <StatusBar />

      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: "none" }}>
        <div className="px-5">

          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <button onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <ChevronLeft size={18} color="#fff" />
            </button>
            <div>
              <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>Route AI</h1>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>Smart recommendations · Nike Store</p>
            </div>
          </div>

          {/* Destination card */}
          <div className="flex items-center gap-3 p-4 rounded-2xl mb-5"
            style={{ background: "rgba(76,201,240,0.08)", border: "1px solid rgba(76,201,240,0.2)" }}>
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(76,201,240,0.2)" }}>
              <MapPin size={18} color="#4CC9F0" />
            </div>
            <div className="flex-1">
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, fontWeight: 500 }}>DESTINATION</p>
              <p style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Nike Store</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>Level 3, Wing B · Unit 3B-12</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00D4AA" }} />
                <span style={{ color: "#00D4AA", fontSize: 11, fontWeight: 600 }}>Open</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>Crowd: Low</p>
            </div>
          </div>

          {/* Route options */}
          <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 10 }}>
            Choose Your Route
          </h3>
          <div className="flex flex-col gap-3 mb-5">
            {routes.map((route) => {
              const Icon = route.icon;
              const isSelected = selectedRoute === route.id;
              const isExpanded = expanded === route.id;

              return (
                <motion.div
                  key={route.id}
                  layout
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: isSelected ? route.gradient : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isSelected ? route.border : "rgba(255,255,255,0.07)"}`,
                  }}>
                  <button
                    onClick={() => {
                      setSelectedRoute(route.id);
                      setExpanded(isExpanded ? null : route.id);
                    }}
                    className="w-full p-4 flex items-start gap-3 text-left">
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${route.color}20`, border: `1px solid ${route.color}40` }}>
                      <Icon size={18} color={route.color} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>{route.title}</span>
                        <span className="px-2 py-0.5 rounded-lg"
                          style={{
                            background: `${route.tagColor}20`,
                            color: route.tagColor,
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            border: `1px solid ${route.tagColor}40`
                          }}>
                          {route.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock size={11} color="rgba(255,255,255,0.4)" />
                          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{route.eta}</span>
                        </div>
                        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>{route.distance}</span>
                        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
                        <div className="flex items-center gap-1">
                          <Users size={11} color={route.crowdColor} />
                          <span style={{ color: route.crowdColor, fontSize: 12, fontWeight: 600 }}>{route.crowd}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          background: isSelected ? route.color : "transparent",
                          border: `2px solid ${isSelected ? route.color : "rgba(255,255,255,0.2)"}`
                        }}>
                        {isSelected && <CheckCircle2 size={12} color="#fff" fill="#fff" />}
                      </div>
                      <ChevronRight size={14} color="rgba(255,255,255,0.3)"
                        style={{ transform: isExpanded ? "rotate(90deg)" : "none", transition: "transform 0.2s" }} />
                    </div>
                  </button>

                  {/* Expanded steps */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4">
                      <div className="h-px mb-3" style={{ background: "rgba(255,255,255,0.06)" }} />
                      <div className="flex flex-col gap-2">
                        {route.steps.map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="flex flex-col items-center">
                              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                  background: i === 0 ? "rgba(76,201,240,0.2)" : i === route.steps.length - 1 ? "rgba(0,212,170,0.2)" : "rgba(255,255,255,0.06)",
                                  border: i === 0 ? "1px solid rgba(76,201,240,0.5)" : i === route.steps.length - 1 ? "1px solid rgba(0,212,170,0.5)" : "1px solid rgba(255,255,255,0.1)"
                                }}>
                                <span style={{ color: "#fff", fontSize: 9, fontWeight: 700 }}>{i + 1}</span>
                              </div>
                              {i < route.steps.length - 1 && (
                                <div className="w-px flex-1 my-1" style={{ background: "rgba(255,255,255,0.08)", minHeight: 16 }} />
                              )}
                            </div>
                            <div className="pb-2">
                              <p style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{step.place}</p>
                              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>{step.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Comparison stats */}
          <div className="p-4 rounded-2xl mb-5"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", marginBottom: 12 }}>
              ROUTE COMPARISON
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Time", smart: "8 min", fast: "5 min", scenic: "12 min" },
                { label: "Distance", smart: "420m", fast: "280m", scenic: "600m" },
                { label: "Crowd", smart: "Low", fast: "High", scenic: "Very Low" },
              ].map(({ label, smart, fast, scenic }) => (
                <div key={label}>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 600, letterSpacing: "0.04em", marginBottom: 6 }}>
                    {label.toUpperCase()}
                  </p>
                  {[
                    { val: smart, color: "#4CC9F0" },
                    { val: fast, color: "#FFD166" },
                    { val: scenic, color: "#7B61FF" },
                  ].map(({ val, color }, i) => (
                    <div key={i} className="py-1 rounded-lg mb-1"
                      style={{ background: "rgba(255,255,255,0.03)" }}>
                      <span style={{ color, fontSize: 11, fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Start button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/map")}
            className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 mb-4"
            style={{
              background: "linear-gradient(90deg, #00B4D8, #4361EE)",
              boxShadow: "0 8px 32px rgba(0,180,216,0.35)"
            }}>
            <Navigation2 size={20} color="#fff" />
            <span style={{ color: "#fff", fontSize: 16, fontWeight: 700 }}>
              Start Navigation · {selected.eta}
            </span>
          </motion.button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
