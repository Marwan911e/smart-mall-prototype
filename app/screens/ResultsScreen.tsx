import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Navigation, Star, Users, MapPin, SlidersHorizontal, Sparkles, ChevronDown } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Black Cargo Pants",
    brand: "UrbanEdge",
    floor: "Floor 2",
    distance: "120m",
    price: "SAR 189",
    crowd: "Low",
    crowdPct: 30,
    rating: 4.8,
    reviews: 124,
    img: "https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=300&q=80",
    tag: "Best Match",
    tagColor: "#2979FF",
    inStock: true,
  },
  {
    id: 2,
    name: "Tactical Cargo Pants",
    brand: "StyleHub",
    floor: "Floor 3",
    distance: "240m",
    price: "SAR 219",
    crowd: "Medium",
    crowdPct: 55,
    rating: 4.5,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1773848091915-e703753f43ba?w=300&q=80",
    tag: "AI Pick",
    tagColor: "#8B5CF6",
    inStock: true,
  },
  {
    id: 3,
    name: "Slim Cargo Trousers",
    brand: "Zara Man",
    floor: "Floor 1",
    distance: "380m",
    price: "SAR 155",
    crowd: "High",
    crowdPct: 82,
    rating: 4.3,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1666861585341-5bd1e7b1ed71?w=300&q=80",
    tag: "On Sale",
    tagColor: "#22C55E",
    inStock: true,
  },
];

const sortOptions = ["Best Match", "Nearest", "Price ↑", "Price ↓", "Least Crowd"];

const crowdColor = (level: string) =>
  level === "Low" ? "#22C55E" : level === "Medium" ? "#F59E0B" : "#EF4444";
const crowdBg = (level: string) =>
  level === "Low" ? "rgba(34,197,94,0.12)" : level === "Medium" ? "rgba(245,158,11,0.12)" : "rgba(239,68,68,0.12)";

export function ResultsScreen() {
  const navigate = useNavigate();
  const [sort, setSort] = useState("Best Match");

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-4 pt-3 pb-3"
        style={{
          background: "rgba(5,13,26,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ArrowLeft size={16} color="white" />
          </button>
          <div className="flex-1">
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "white", lineHeight: 1.2 }}>
              Black Cargo Pants
            </h2>
            <p style={{ fontSize: "11px", color: "#64748B" }}>3 stores found nearby</p>
          </div>
          <button
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <SlidersHorizontal size={16} color="#94A3B8" />
          </button>
        </div>

        {/* Sort options — UI Pattern: Search & Filter */}
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {sortOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSort(opt)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full"
              style={{
                background: sort === opt ? "rgba(41,121,255,0.2)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${sort === opt ? "rgba(41,121,255,0.4)" : "rgba(255,255,255,0.07)"}`,
                fontSize: "11px",
                color: sort === opt ? "#2979FF" : "#94A3B8",
                fontWeight: sort === opt ? 600 : 400,
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* AI Smart Tip — UI Pattern: Recommendation */}
      <div className="px-4 pt-3 pb-1">
        <div
          className="flex items-start gap-2 px-3 py-2.5 rounded-xl"
          style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}
        >
          <Sparkles size={14} color="#8B5CF6" style={{ flexShrink: 0, marginTop: "1px" }} />
          <p style={{ fontSize: "11px", color: "#C4B5FD", lineHeight: 1.5 }}>
            <span style={{ fontWeight: 600, color: "#8B5CF6" }}>AI Tip:</span> UrbanEdge on Floor 2 has your size in stock with low crowd — best option now!
          </p>
        </div>
      </div>

      {/* Product cards — Gestalt: Proximity + Similarity (uniform card structure) */}
      <div className="px-4 pt-3 flex flex-col gap-3 pb-6">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="rounded-2xl overflow-hidden cursor-pointer"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex gap-0">
              {/* Product image */}
              <div style={{ width: "110px", flexShrink: 0, position: "relative" }}>
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ width: "100%", height: "140px", objectFit: "cover" }}
                />
                {/* Tag badge — Gestalt: Figure-Ground */}
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full"
                  style={{ background: product.tagColor, fontSize: "9px", fontWeight: 700, color: "white" }}
                >
                  {product.tag}
                </div>
              </div>

              {/* Product details — Gestalt: Proximity (all related info grouped) */}
              <div className="flex-1 p-3 flex flex-col justify-between">
                <div>
                  <p style={{ fontSize: "14px", fontWeight: 700, color: "white", marginBottom: "2px" }}>
                    {product.name}
                  </p>
                  <p style={{ fontSize: "11px", color: "#64748B", marginBottom: "8px" }}>{product.brand}</p>

                  {/* Info row — Gestalt: Similarity */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <MapPin size={10} color="#94A3B8" />
                      <span style={{ fontSize: "10px", color: "#94A3B8" }}>{product.floor}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <Navigation size={10} color="#94A3B8" />
                      <span style={{ fontSize: "10px", color: "#94A3B8" }}>{product.distance}</span>
                    </div>
                    <div
                      className="flex items-center gap-1 px-2 py-1 rounded-lg"
                      style={{ background: crowdBg(product.crowd) }}
                    >
                      <Users size={10} color={crowdColor(product.crowd)} />
                      <span style={{ fontSize: "10px", color: crowdColor(product.crowd), fontWeight: 600 }}>
                        {product.crowd}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p style={{ fontSize: "16px", fontWeight: 700, color: "white" }}>{product.price}</p>
                    <div className="flex items-center gap-1">
                      <Star size={10} color="#F59E0B" fill="#F59E0B" />
                      <span style={{ fontSize: "10px", color: "#94A3B8" }}>
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  {/* Navigate CTA — Gestalt: Visual Hierarchy (most prominent button) */}
                  <motion.button
                    onClick={() => navigate("/app/navigation")}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #1565C0, #2979FF)",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "white",
                      boxShadow: "0 4px 12px rgba(41,121,255,0.4)",
                    }}
                    whileTap={{ scale: 0.93 }}
                  >
                    <Navigation size={13} />
                    Navigate
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Crowd bar */}
            <div style={{ padding: "0 12px 10px" }}>
              <div className="flex items-center justify-between mb-1">
                <span style={{ fontSize: "9px", color: "#64748B" }}>Store Crowd</span>
                <span style={{ fontSize: "9px", color: crowdColor(product.crowd), fontWeight: 600 }}>{product.crowdPct}%</span>
              </div>
              <div style={{ height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                <motion.div
                  style={{
                    height: "100%",
                    borderRadius: "2px",
                    background: crowdColor(product.crowd),
                    width: `${product.crowdPct}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${product.crowdPct}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
