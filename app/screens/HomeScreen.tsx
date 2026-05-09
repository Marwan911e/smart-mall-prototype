import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Search, Compass, Users, Coffee, Sparkles, TrendingUp, ChevronRight, Bell, MapPin, Star } from "lucide-react";

const quickActions = [
  {
    icon: Search,
    label: "Find by Style",
    sub: "AI Visual Search",
    color: "#2979FF",
    bg: "rgba(41,121,255,0.15)",
    path: "/app/search",
  },
  {
    icon: Compass,
    label: "Navigate",
    sub: "Indoor Maps",
    color: "#00B4D8",
    bg: "rgba(0,180,216,0.15)",
    path: "/app/navigation",
  },
  {
    icon: Users,
    label: "Live Crowd",
    sub: "Heatmap",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.15)",
    path: "/app/heatmap",
  },
  {
    icon: Coffee,
    label: "Cafés",
    sub: "Availability",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.15)",
    path: "/app/cafe",
  },
];

const recommended = [
  {
    id: 1,
    name: "Black Cargo Pants",
    store: "UrbanEdge",
    floor: "F2",
    price: "SAR 189",
    crowd: "Low",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=200&q=80",
  },
  {
    id: 2,
    name: "Slim Fit Trousers",
    store: "StyleHub",
    floor: "F3",
    price: "SAR 155",
    crowd: "Medium",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1773848091915-e703753f43ba?w=200&q=80",
  },
];

const recentSearches = ["Black cargo pants", "Nike sneakers", "Levi's jacket", "Summer dresses"];

export function HomeScreen() {
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div
      className="flex flex-col min-h-full"
      style={{
        background: "linear-gradient(180deg, #070F1C 0%, #050D1A 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header */}
      <div className="px-5 pt-3 pb-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 400 }}>Good afternoon</p>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "white", letterSpacing: "-0.3px", lineHeight: 1.2 }}>
              Smart Mall
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full cursor-pointer"
              style={{ background: "rgba(41,121,255,0.12)", border: "1px solid rgba(41,121,255,0.2)" }}
            >
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }} />
              <span style={{ fontSize: "11px", color: "#2979FF", fontWeight: 600 }}>Live</span>
            </div>
            <button
              onClick={() => navigate("/app/notifications")}
              className="relative flex items-center justify-center"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Bell size={17} color="rgba(255,255,255,0.7)" />
              <div
                className="absolute top-1 right-1"
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444", border: "1.5px solid #050D1A" }}
              />
            </button>
          </div>
        </div>

        {/* Search bar — Gestalt: Visual Hierarchy (most prominent element) */}
        <motion.button
          onClick={() => navigate("/app/search")}
          className="w-full flex items-center gap-3 px-4"
          style={{
            height: "52px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Search size={18} color="#2979FF" />
          <span style={{ fontSize: "15px", color: "rgba(148,163,184,0.7)", fontWeight: 400 }}>
            Search products, stores, brands...
          </span>
          <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(41,121,255,0.15)" }}>
            <Sparkles size={12} color="#2979FF" />
            <span style={{ fontSize: "10px", color: "#2979FF", fontWeight: 600 }}>AI</span>
          </div>
        </motion.button>
      </div>

      {/* Mall location indicator — Gestalt: Proximity */}
      <div className="px-5 py-2">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{ background: "rgba(41,121,255,0.08)", border: "1px solid rgba(41,121,255,0.15)" }}
        >
          <MapPin size={14} color="#2979FF" />
          <span style={{ fontSize: "12px", color: "rgba(148,163,184,0.9)", fontWeight: 400 }}>
            Riyadh Park Mall · <span style={{ color: "white", fontWeight: 600 }}>Level 2, East Wing</span>
          </span>
          <div className="ml-auto flex items-center gap-1">
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E" }} />
            <span style={{ fontSize: "10px", color: "#22C55E", fontWeight: 600 }}>Located</span>
          </div>
        </div>
      </div>

      {/* Quick actions grid — Gestalt: Similarity (all cards same size/style) */}
      <div className="px-5 pt-2 pb-4">
        <p style={{ fontSize: "13px", color: "#64748B", fontWeight: 500, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
          Quick Actions
        </p>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, i) => (
            <motion.button
              key={action.path}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center gap-2 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
              whileTap={{ scale: 0.92 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="flex items-center justify-center rounded-2xl"
                style={{ width: "44px", height: "44px", background: action.bg }}
              >
                <action.icon size={20} color={action.color} />
              </div>
              <div>
                <p style={{ fontSize: "10px", fontWeight: 600, color: "white", lineHeight: 1.2, textAlign: "center" }}>
                  {action.label}
                </p>
                <p style={{ fontSize: "9px", color: "#64748B", textAlign: "center", lineHeight: 1.2 }}>
                  {action.sub}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Live crowd status card — Gestalt: Closure (complete card) */}
      <div className="px-5 mb-4">
        <motion.div
          className="rounded-2xl overflow-hidden cursor-pointer"
          style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(41,121,255,0.08) 100%)",
            border: "1px solid rgba(34,197,94,0.2)",
            padding: "14px",
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/app/heatmap")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: "40px", height: "40px", background: "rgba(34,197,94,0.15)" }}
              >
                <Users size={20} color="#22C55E" />
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Mall is Quiet Now</p>
                <p style={{ fontSize: "11px", color: "#22C55E", fontWeight: 500 }}>35% occupancy · Great time to shop</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "6px",
                      height: i <= 2 ? "12px" : "6px",
                      borderRadius: "2px",
                      background: i <= 2 ? "#22C55E" : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
              <span style={{ fontSize: "9px", color: "#64748B" }}>Crowd Level</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Recommendations — Gestalt: Proximity (grouped info) */}
      <div className="px-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <TrendingUp size={14} color="#2979FF" />
            <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>AI Picks For You</p>
          </div>
          <button onClick={() => navigate("/app/results")} className="flex items-center gap-1">
            <span style={{ fontSize: "11px", color: "#2979FF", fontWeight: 500 }}>See all</span>
            <ChevronRight size={13} color="#2979FF" />
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none", paddingBottom: "4px" }}>
          {recommended.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 cursor-pointer"
              style={{ width: "155px" }}
              onClick={() => navigate("/app/results")}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ height: "110px", overflow: "hidden", position: "relative" }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      padding: "2px 6px",
                      borderRadius: "6px",
                      background: item.crowd === "Low" ? "rgba(34,197,94,0.9)" : "rgba(245,158,11,0.9)",
                      fontSize: "9px",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    {item.crowd} Crowd
                  </div>
                </div>
                <div style={{ padding: "10px" }}>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "white", marginBottom: "2px" }}>{item.name}</p>
                  <p style={{ fontSize: "10px", color: "#64748B", marginBottom: "6px" }}>{item.store} · {item.floor}</p>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#2979FF" }}>{item.price}</span>
                    <div className="flex items-center gap-1">
                      <Star size={9} color="#F59E0B" fill="#F59E0B" />
                      <span style={{ fontSize: "10px", color: "#94A3B8" }}>{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Searches — Gestalt: Proximity */}
      <div className="px-5 mb-6">
        <p style={{ fontSize: "13px", fontWeight: 600, color: "white", marginBottom: "10px" }}>Recent Searches</p>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((term) => (
            <motion.button
              key={term}
              onClick={() => navigate("/app/results")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                fontSize: "12px",
                color: "rgba(203,213,225,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Search size={11} color="#64748B" />
              {term}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
