import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Sparkles, Heart, ShoppingBag, ChevronRight, Star, MapPin, Zap } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const fashionImg = "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBjbG90aGluZyUyMGJvdXRpcXVlJTIwbW9kZXJufGVufDF8fHx8MTc3ODI2MzUwNXww&ixlib=rb-4.1.0&q=80&w=400";
const sneakersImg = "https://images.unsplash.com/photo-1639409392969-71b5b1943cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwcHJvZHVjdCUyMGRpc3BsYXklMjBtb2Rlcm58ZW58MXx8fHwxNzc4MjYzNTA5fDA&ixlib=rb-4.1.0&q=80&w=400";
const techImg = "https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNoJTIwc3RvcmUlMjBkaXNwbGF5fGVufDF8fHx8MTc3ODI2MzUxM3ww&ixlib=rb-4.1.0&q=80&w=400";
const womanImg = "https://images.unsplash.com/photo-1758274251689-a1d85909bc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNob3BwaW5nJTIwZmFzaGlvbiUyMHN0eWxpc2h8ZW58MXx8fHwxNzc4MjYzNTA1fDA&ixlib=rb-4.1.0&q=80&w=400";

const styleCategories = [
  { label: "For You", emoji: "✨", active: true },
  { label: "Trending", emoji: "🔥" },
  { label: "New Arrivals", emoji: "🆕" },
  { label: "On Sale", emoji: "💸" },
  { label: "Style Match", emoji: "👗" },
];

const featuredItems = [
  { name: "Summer Floral Dress", brand: "Zara", price: "$79", match: 97, image: fashionImg, floor: "L1", color: "#7B61FF" },
  { name: "Leather Crossbody Bag", brand: "Mango", price: "$129", match: 94, image: womanImg, floor: "L1", color: "#FF6B6B" },
];

const gridItems = [
  { name: "Air Force 1 '07", brand: "Nike", price: "$110", match: 92, image: sneakersImg, floor: "L3", liked: true },
  { name: "Smart Watch Series 9", brand: "Apple", price: "$399", match: 89, image: techImg, floor: "L2", liked: false },
  { name: "Oversized Hoodie", brand: "H&M", price: "$44", match: 88, image: fashionImg, floor: "L1", liked: true },
  { name: "Wireless Speaker", brand: "JBL", price: "$79", match: 85, image: techImg, floor: "L2", liked: false },
  { name: "Linen Blazer", brand: "Zara", price: "$99", match: 83, image: fashionImg, floor: "L1", liked: false },
  { name: "Pro Earbuds", brand: "Sony", price: "$199", match: 81, image: techImg, floor: "L2", liked: true },
];

export default function Recommendations() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("For You");
  const [liked, setLiked] = useState<Set<number>>(new Set([0, 2, 5]));

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 opacity-10 rounded-full"
          style={{ background: "radial-gradient(circle, #7B61FF 0%, transparent 70%)", transform: "translate(20%, -20%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
      </div>

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
            <div className="flex-1">
              <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: "-0.5px" }}>AI Style Picks</h1>
              <div className="flex items-center gap-1.5">
                <Sparkles size={11} color="#7B61FF" />
                <span style={{ color: "#7B61FF", fontSize: 11, fontWeight: 600 }}>Personalized for Alex</span>
              </div>
            </div>
            <button className="w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Zap size={16} color="#FFD166" />
            </button>
          </div>

          {/* AI Insight Banner */}
          <div className="p-4 rounded-2xl mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(123,97,255,0.2), rgba(76,201,240,0.1))",
              border: "1px solid rgba(123,97,255,0.35)"
            }}>
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles size={13} color="#7B61FF" />
              <span style={{ color: "#7B61FF", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em" }}>AI STYLE ANALYSIS</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, lineHeight: 1.5 }}>
              Based on your browsing history and past purchases, we curated <span style={{ color: "#fff", fontWeight: 700 }}>47 items</span> that match your style profile — <span style={{ color: "#7B61FF", fontWeight: 600 }}>Minimalist Modern</span>.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-5" style={{ scrollbarWidth: "none" }}>
            {styleCategories.map(({ label, emoji }) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl flex-shrink-0"
                style={{
                  background: activeCategory === label ? "linear-gradient(90deg, rgba(123,97,255,0.3), rgba(76,201,240,0.3))" : "rgba(255,255,255,0.05)",
                  border: activeCategory === label ? "1px solid rgba(123,97,255,0.5)" : "1px solid rgba(255,255,255,0.07)",
                  color: activeCategory === label ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: 12,
                  fontWeight: activeCategory === label ? 700 : 400
                }}>
                <span>{emoji}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Featured horizontal scroll */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px" }}>Top Matches</h3>
              <span style={{ color: "#4CC9F0", fontSize: 12, fontWeight: 600 }}>See All</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {featuredItems.map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => navigate("/store")}
                  className="flex-shrink-0 rounded-3xl overflow-hidden flex flex-col text-left"
                  style={{ width: 200, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="relative" style={{ height: 200 }}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, transparent 50%, rgba(6,13,26,0.9) 100%)" }} />
                    {/* Match badge */}
                    <div className="absolute top-2 left-2 px-2.5 py-1 rounded-xl flex items-center gap-1"
                      style={{ background: `${item.color}25`, border: `1px solid ${item.color}50`, backdropFilter: "blur(8px)" }}>
                      <Sparkles size={10} color={item.color} />
                      <span style={{ color: item.color, fontSize: 11, fontWeight: 700 }}>{item.match}% Match</span>
                    </div>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(6,13,26,0.7)", backdropFilter: "blur(8px)" }}>
                      <Heart size={13} color="#FF6B6B" fill="#FF6B6B" />
                    </button>
                  </div>
                  <div className="p-3">
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 10, fontWeight: 600 }}>{item.brand.toUpperCase()}</p>
                    <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, lineHeight: 1.3, marginTop: 2 }}>{item.name}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span style={{ color: "#4CC9F0", fontSize: 14, fontWeight: 700 }}>{item.price}</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={9} color="rgba(255,255,255,0.3)" />
                        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10 }}>{item.floor}</span>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate("/map"); }}
                      className="w-full mt-2 py-1.5 rounded-xl flex items-center justify-center gap-1.5"
                      style={{ background: "rgba(76,201,240,0.12)", border: "1px solid rgba(76,201,240,0.2)" }}>
                      <span style={{ color: "#4CC9F0", fontSize: 11, fontWeight: 600 }}>Navigate There</span>
                    </button>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Grid recommendations */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px" }}>More For You</h3>
              <div className="flex items-center gap-1">
                <ShoppingBag size={12} color="rgba(255,255,255,0.4)" />
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>47 items</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gridItems.map((item, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  onClick={() => navigate("/store")}
                  className="rounded-2xl overflow-hidden flex flex-col text-left"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="relative" style={{ height: 130 }}>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, transparent 40%, rgba(6,13,26,0.85) 100%)" }} />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-lg"
                      style={{ background: "rgba(123,97,255,0.3)", backdropFilter: "blur(8px)" }}>
                      <span style={{ color: "#A78BFA", fontSize: 9, fontWeight: 700 }}>{item.match}%</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLiked(prev => {
                          const next = new Set(prev);
                          next.has(i) ? next.delete(i) : next.add(i);
                          return next;
                        });
                      }}
                      className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(6,13,26,0.7)" }}>
                      <Heart size={11}
                        color={liked.has(i) ? "#FF6B6B" : "rgba(255,255,255,0.7)"}
                        fill={liked.has(i) ? "#FF6B6B" : "none"} />
                    </button>
                  </div>
                  <div className="p-2.5">
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 9, fontWeight: 600, letterSpacing: "0.04em" }}>
                      {item.brand.toUpperCase()}
                    </p>
                    <p style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.3, marginTop: 1 }}>{item.name}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span style={{ color: "#4CC9F0", fontSize: 13, fontWeight: 700 }}>{item.price}</span>
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 9 }}>{item.floor}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
