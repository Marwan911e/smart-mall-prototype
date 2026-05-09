import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, SlidersHorizontal, Star, MapPin, Heart, Navigation2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const sneakersImg = "https://images.unsplash.com/photo-1639409392969-71b5b1943cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwcHJvZHVjdCUyMGRpc3BsYXklMjBtb2Rlcm58ZW58MXx8fHwxNzc4MjYzNTA5fDA&ixlib=rb-4.1.0&q=80&w=400";
const fashionImg = "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBjbG90aGluZyUyMGJvdXRpcXVlJTIwbW9kZXJufGVufDF8fHx8MTc3ODI2MzUwNXww&ixlib=rb-4.1.0&q=80&w=400";
const techImg = "https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNoJTIwc3RvcmUlMjBkaXNwbGF5fGVufDF8fHx8MTc3ODI2MzUxM3ww&ixlib=rb-4.1.0&q=80&w=400";

const products = [
  { id: 1, name: "Nike Air Max 270", store: "Nike", floor: "Level 3", price: "$129", originalPrice: "$159", rating: 4.8, reviews: 248, image: sneakersImg, badge: "On Sale", badgeColor: "#FF6B6B", inStock: true },
  { id: 2, name: "Oversized Blazer", store: "Zara", floor: "Level 1", price: "$89", originalPrice: null, rating: 4.6, reviews: 142, image: fashionImg, badge: "New", badgeColor: "#7B61FF", inStock: true },
  { id: 3, name: "AirPods Pro 2", store: "Apple Store", floor: "Level 2", price: "$249", originalPrice: "$279", rating: 4.9, reviews: 892, image: techImg, badge: "Best Seller", badgeColor: "#00D4AA", inStock: true },
  { id: 4, name: "Jordan 1 Retro", store: "Foot Locker", floor: "Level 3", price: "$189", originalPrice: null, rating: 4.7, reviews: 334, image: sneakersImg, badge: null, badgeColor: null, inStock: false },
  { id: 5, name: "Linen Shirt", store: "H&M", floor: "Level 1", price: "$34", originalPrice: "$49", rating: 4.4, reviews: 87, image: fashionImg, badge: "Deal", badgeColor: "#FFD166", inStock: true },
  { id: 6, name: "Samsung Galaxy", store: "Samsung", floor: "Level 2", price: "$699", originalPrice: "$799", rating: 4.7, reviews: 521, image: techImg, badge: "Sale", badgeColor: "#FF6B6B", inStock: true },
];

const filterTabs = ["All", "Fashion", "Electronics", "Sports", "Beauty"];
const sortOptions = ["Relevance", "Price ↑", "Price ↓", "Rating", "Distance"];

export default function SearchResults() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [liked, setLiked] = useState<Set<number>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

      <StatusBar />

      {/* Header */}
      <div className="px-5 pb-3">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate("/search")}
            className="w-9 h-9 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <ChevronLeft size={18} color="#fff" />
          </button>
          <div className="flex-1 px-4 py-2.5 rounded-2xl flex items-center gap-2"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 400 }}>Nike shoes, Zara jacket…</span>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-9 h-9 rounded-2xl flex items-center justify-center"
            style={{
              background: showFilters ? "rgba(76,201,240,0.2)" : "rgba(255,255,255,0.07)",
              border: showFilters ? "1px solid rgba(76,201,240,0.4)" : "1px solid rgba(255,255,255,0.08)"
            }}>
            <SlidersHorizontal size={16} color={showFilters ? "#4CC9F0" : "#fff"} />
          </button>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-3">
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 400 }}>
            <span style={{ color: "#fff", fontWeight: 700 }}>284</span> results found
          </span>
          <span style={{ color: "#4CC9F0", fontSize: 12, fontWeight: 600 }}>Relevance ▾</span>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className="px-4 py-1.5 rounded-xl flex-shrink-0"
              style={{
                background: activeFilter === tab ? "#4CC9F0" : "rgba(255,255,255,0.06)",
                color: activeFilter === tab ? "#060D1A" : "rgba(255,255,255,0.5)",
                fontSize: 13,
                fontWeight: activeFilter === tab ? 700 : 400,
                border: activeFilter === tab ? "none" : "1px solid rgba(255,255,255,0.07)"
              }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto pb-28 px-5" style={{ scrollbarWidth: "none" }}>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => navigate("/store")}
              className="rounded-3xl overflow-hidden flex flex-col text-left relative"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>

              {/* Image */}
              <div className="relative" style={{ height: 140 }}>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(6,13,26,0.8) 100%)" }} />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-lg"
                    style={{ background: `${product.badgeColor}30`, border: `1px solid ${product.badgeColor}60` }}>
                    <span style={{ color: product.badgeColor, fontSize: 9, fontWeight: 700, letterSpacing: "0.05em" }}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Like button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(prev => {
                      const next = new Set(prev);
                      next.has(product.id) ? next.delete(product.id) : next.add(product.id);
                      return next;
                    });
                  }}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(6,13,26,0.6)", backdropFilter: "blur(8px)" }}>
                  <Heart size={13}
                    color={liked.has(product.id) ? "#FF6B6B" : "rgba(255,255,255,0.7)"}
                    fill={liked.has(product.id) ? "#FF6B6B" : "none"} />
                </button>

                {/* Out of stock overlay */}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(6,13,26,0.7)" }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em" }}>
                      OUT OF STOCK
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col gap-1.5">
                <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{product.name}</p>
                <div className="flex items-center gap-1">
                  <MapPin size={10} color="rgba(255,255,255,0.35)" />
                  <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 400 }}>
                    {product.store} · {product.floor}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div>
                    <span style={{ color: "#4CC9F0", fontSize: 14, fontWeight: 700 }}>{product.price}</span>
                    {product.originalPrice && (
                      <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 400, textDecoration: "line-through", marginLeft: 4 }}>
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Star size={9} color="#FFD166" fill="#FFD166" />
                    <span style={{ color: "#FFD166", fontSize: 10, fontWeight: 600 }}>{product.rating}</span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate("/map"); }}
                  className="flex items-center gap-1.5 mt-1 py-1.5 rounded-xl justify-center"
                  style={{ background: "rgba(76,201,240,0.12)", border: "1px solid rgba(76,201,240,0.2)" }}>
                  <Navigation2 size={11} color="#4CC9F0" />
                  <span style={{ color: "#4CC9F0", fontSize: 11, fontWeight: 600 }}>Navigate</span>
                </button>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
