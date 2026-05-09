import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Search as SearchIcon, Mic, Camera, X, Clock, TrendingUp, ArrowUpRight } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const recentSearches = ["Nike Air Max 270", "Zara jacket", "Food court", "Starbucks"];
const trendingSearches = [
  { term: "Summer dresses", count: "2.4k searches" },
  { term: "Wireless earbuds", count: "1.8k searches" },
  { term: "Sneakers under $100", count: "1.5k searches" },
  { term: "Levi's jeans", count: "1.2k searches" },
  { term: "Skincare sets", count: "980 searches" },
];

const categories = [
  { label: "All", emoji: "🌟" },
  { label: "Fashion", emoji: "👗" },
  { label: "Electronics", emoji: "📱" },
  { label: "Food", emoji: "🍜" },
  { label: "Beauty", emoji: "💄" },
  { label: "Sports", emoji: "👟" },
  { label: "Books", emoji: "📚" },
  { label: "Toys", emoji: "🎮" },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #7B61FF 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
      </div>

      <StatusBar />

      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: "none" }}>
        <div className="px-5 pt-2">

          {/* Header */}
          <div className="mb-5">
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em" }}>
              SMART SEARCH
            </p>
            <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, letterSpacing: "-0.8px", lineHeight: 1.2 }}>
              Find Anything<br />
              <span style={{ background: "linear-gradient(90deg, #4CC9F0, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Instantly
              </span>
            </h1>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-4">
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(76,201,240,0.3)",
                boxShadow: "0 0 0 0px rgba(76,201,240,0.2)"
              }}>
              <SearchIcon size={18} color="#4CC9F0" />
              <input
                className="flex-1 bg-transparent outline-none"
                placeholder="Search products, stores, brands..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && navigate("/search-results")}
                style={{ color: "#fff", fontSize: 15, fontWeight: 400 }}
              />
              {query ? (
                <button onClick={() => setQuery("")}>
                  <X size={16} color="rgba(255,255,255,0.4)" />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(123,97,255,0.2)" }}>
                    <Mic size={14} color="#7B61FF" />
                  </button>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(76,201,240,0.2)" }}>
                    <Camera size={14} color="#4CC9F0" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Search Button */}
          <button
            onClick={() => navigate("/search-results")}
            className="w-full py-3.5 rounded-2xl mb-5"
            style={{ background: "linear-gradient(90deg, #00B4D8, #4361EE)", boxShadow: "0 6px 24px rgba(0,180,216,0.3)" }}>
            <span style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Search Now</span>
          </button>

          {/* Category Chips */}
          <div className="mb-5">
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {categories.map(({ label, emoji }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl flex-shrink-0"
                  style={{
                    background: activeCategory === label ? "rgba(76,201,240,0.2)" : "rgba(255,255,255,0.05)",
                    border: activeCategory === label ? "1px solid rgba(76,201,240,0.5)" : "1px solid rgba(255,255,255,0.07)",
                    color: activeCategory === label ? "#4CC9F0" : "rgba(255,255,255,0.55)",
                    fontSize: 13,
                    fontWeight: activeCategory === label ? 600 : 400
                  }}>
                  <span>{emoji}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
                RECENT
              </h3>
              <button>
                <span style={{ color: "#FF6B6B", fontSize: 12, fontWeight: 500 }}>Clear all</span>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {recentSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => navigate("/search-results")}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl w-full text-left"
                  style={{ background: "rgba(255,255,255,0.03)" }}>
                  <Clock size={14} color="rgba(255,255,255,0.3)" />
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 400 }}>{term}</span>
                  <ArrowUpRight size={14} color="rgba(255,255,255,0.2)" className="ml-auto" />
                </button>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={14} color="#FF6B6B" />
              <h3 style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>
                TRENDING NOW
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {trendingSearches.map(({ term, count }, i) => (
                <button
                  key={term}
                  onClick={() => navigate("/search-results")}
                  className="flex items-center gap-3 p-3 rounded-2xl w-full text-left"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{
                    color: i < 3 ? "#FF6B6B" : "rgba(255,255,255,0.3)",
                    fontSize: 13,
                    fontWeight: 700,
                    width: 20,
                    flexShrink: 0
                  }}>
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>{term}</p>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 400 }}>{count}</p>
                  </div>
                  <ArrowUpRight size={14} color="rgba(255,255,255,0.2)" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
