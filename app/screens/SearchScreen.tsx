import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Search, Camera, X, SlidersHorizontal, ChevronDown } from "lucide-react";

const suggestions = [
  "Black cargo pants",
  "Black joggers",
  "Black tactical pants",
  "Cargo trousers slim fit",
  "Black streetwear pants",
];

const filters = {
  brand: ["Nike", "Zara", "H&M", "Levi's", "Adidas", "Uniqlo"],
  floor: ["Floor 1", "Floor 2", "Floor 3", "Floor 4"],
  price: ["Under SAR 100", "SAR 100–200", "SAR 200–400", "Over SAR 400"],
  crowd: ["Low", "Medium", "High"],
  distance: ["< 100m", "< 200m", "< 500m", "Any"],
};

type FilterKey = keyof typeof filters;

export function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("Black cargo");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({
    crowd: "Low",
    floor: "Floor 2",
  });
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const toggleFilter = (key: string, val: string) => {
    setActiveFilters((prev) => {
      const next = { ...prev };
      if (next[key] === val) delete next[key];
      else next[key] = val;
      return next;
    });
  };

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ArrowLeft size={16} color="white" />
          </button>
          <h2 style={{ fontSize: "17px", fontWeight: 600, color: "white" }}>Product Search</h2>
        </div>

        {/* Search input — Gestalt: Visual Hierarchy (primary action) */}
        <div
          className="flex items-center gap-3 px-4"
          style={{
            height: "52px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.07)",
            border: "1.5px solid rgba(41,121,255,0.4)",
            boxShadow: "0 0 20px rgba(41,121,255,0.1)",
          }}
        >
          <Search size={18} color="#2979FF" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, brands..."
            autoFocus
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontSize: "15px",
              color: "white",
              fontFamily: "Inter, sans-serif",
            }}
          />
          {query && (
            <button onClick={() => setQuery("")}>
              <X size={16} color="#64748B" />
            </button>
          )}
          <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.1)" }} />
          <button
            className="flex items-center justify-center rounded-xl"
            style={{ width: "34px", height: "34px", background: "rgba(41,121,255,0.15)" }}
          >
            <Camera size={16} color="#2979FF" />
          </button>
        </div>
      </div>

      {/* AI Visual Search card */}
      <div className="px-4 pb-3">
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(41,121,255,0.12) 0%, rgba(0,180,216,0.08) 100%)",
            border: "1px solid rgba(41,121,255,0.2)",
            padding: "14px",
          }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: "44px", height: "44px", background: "rgba(41,121,255,0.2)" }}
            >
              <Camera size={22} color="#2979FF" />
            </div>
            <div className="flex-1">
              <p style={{ fontSize: "13px", fontWeight: 600, color: "white", marginBottom: "2px" }}>
                AI Visual Search
              </p>
              <p style={{ fontSize: "11px", color: "#94A3B8" }}>
                Upload a photo and let AI find similar products in the mall
              </p>
            </div>
            <motion.button
              className="px-3 py-2 rounded-xl"
              style={{ background: "linear-gradient(135deg, #1565C0, #2979FF)", fontSize: "11px", color: "white", fontWeight: 600, whiteSpace: "nowrap" }}
              whileTap={{ scale: 0.95 }}
            >
              Try It
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Filters toggle — UI Pattern: Search & Filter */}
      <div className="px-4 pb-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{
            background: showFilters ? "rgba(41,121,255,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${showFilters ? "rgba(41,121,255,0.3)" : "rgba(255,255,255,0.08)"}`,
          }}
        >
          <SlidersHorizontal size={14} color={showFilters ? "#2979FF" : "#94A3B8"} />
          <span style={{ fontSize: "12px", color: showFilters ? "#2979FF" : "#94A3B8", fontWeight: 500 }}>
            Filters
          </span>
          {Object.keys(activeFilters).length > 0 && (
            <span
              className="flex items-center justify-center rounded-full"
              style={{ width: "16px", height: "16px", background: "#2979FF", fontSize: "9px", color: "white", fontWeight: 700 }}
            >
              {Object.keys(activeFilters).length}
            </span>
          )}
          <ChevronDown
            size={13}
            color="#64748B"
            style={{ transform: showFilters ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4 flex flex-col gap-3">
              {(Object.entries(filters) as [FilterKey, string[]][]).map(([key, options]) => (
                <div key={key}>
                  <button
                    className="flex items-center gap-1 mb-2"
                    onClick={() => setOpenFilter(openFilter === key ? null : key)}
                  >
                    <span style={{ fontSize: "11px", color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {key}
                    </span>
                    {activeFilters[key] && (
                      <span
                        className="px-1.5 rounded"
                        style={{ background: "rgba(41,121,255,0.2)", fontSize: "9px", color: "#2979FF", fontWeight: 600 }}
                      >
                        {activeFilters[key]}
                      </span>
                    )}
                  </button>
                  <div className="flex flex-wrap gap-2">
                    {options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => toggleFilter(key, opt)}
                        className="px-3 py-1.5 rounded-full"
                        style={{
                          background: activeFilters[key] === opt ? "rgba(41,121,255,0.2)" : "rgba(255,255,255,0.05)",
                          border: `1px solid ${activeFilters[key] === opt ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                          fontSize: "11px",
                          color: activeFilters[key] === opt ? "#2979FF" : "#94A3B8",
                          fontWeight: activeFilters[key] === opt ? 600 : 400,
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Suggestions — Gestalt: Proximity */}
      <div className="px-4">
        <p style={{ fontSize: "12px", color: "#64748B", fontWeight: 500, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.6px" }}>
          Suggestions
        </p>
        <div className="flex flex-col gap-1">
          {suggestions.map((s, i) => (
            <motion.button
              key={s}
              onClick={() => navigate("/app/results")}
              className="flex items-center gap-3 px-3 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                textAlign: "left",
              }}
              whileTap={{ scale: 0.98, background: "rgba(41,121,255,0.08)" }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Search size={14} color="#2979FF" />
              <span style={{ flex: 1, fontSize: "14px", color: "rgba(203,213,225,0.9)" }}>{s}</span>
              <span style={{ fontSize: "10px", color: "#64748B" }}>→</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Search CTA */}
      <div className="px-4 pt-4 pb-4">
        <motion.button
          onClick={() => navigate("/app/results")}
          className="w-full flex items-center justify-center gap-2 rounded-2xl"
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
          <Search size={18} />
          Search Products
        </motion.button>
      </div>
    </div>
  );
}
