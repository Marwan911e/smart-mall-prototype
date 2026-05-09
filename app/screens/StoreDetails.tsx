import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronLeft, Star, MapPin, Clock, Navigation2, Heart, Share2, Users, ShoppingBag, ChevronRight, Phone } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const storeImg = "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBjbG90aGluZyUyMGJvdXRpcXVlJTIwbW9kZXJufGVufDF8fHx8MTc3ODI2MzUwNXww&ixlib=rb-4.1.0&q=80&w=1080";
const sneakersImg = "https://images.unsplash.com/photo-1639409392969-71b5b1943cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwcHJvZHVjdCUyMGRpc3BsYXklMjBtb2Rlcm58ZW58MXx8fHwxNzc4MjYzNTA5fDA&ixlib=rb-4.1.0&q=80&w=400";

const products = [
  { name: "Air Max 270", price: "$129", image: sneakersImg, inStock: true },
  { name: "Jordan 1 Low", price: "$109", image: sneakersImg, inStock: true },
  { name: "React Vision", price: "$149", image: sneakersImg, inStock: false },
  { name: "Blazer Mid", price: "$99", image: sneakersImg, inStock: true },
];

const reviews = [
  { name: "Sarah M.", rating: 5, comment: "Amazing selection and super helpful staff!", date: "2d ago" },
  { name: "James K.", rating: 4, comment: "Great store, a bit crowded on weekends.", date: "1w ago" },
];

export default function StoreDetails() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: "none" }}>

        {/* Hero image */}
        <div className="relative" style={{ height: 280 }}>
          <img src={storeImg} alt="Nike Store" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,13,26,0.5) 0%, transparent 40%, rgba(6,13,26,0.9) 85%, #060D1A 100%)" }} />

          {/* Status bar overlay */}
          <div className="absolute top-0 left-0 right-0">
            <StatusBar />
          </div>

          {/* Back button */}
          <button onClick={() => navigate(-1)}
            className="absolute top-14 left-5 w-9 h-9 rounded-2xl flex items-center justify-center"
            style={{ background: "rgba(6,13,26,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <ChevronLeft size={18} color="#fff" />
          </button>

          {/* Action buttons */}
          <div className="absolute top-14 right-5 flex gap-2">
            {[Heart, Share2].map((Icon, i) => (
              <button key={i}
                className="w-9 h-9 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(6,13,26,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Icon size={16} color="#fff" />
              </button>
            ))}
          </div>

          {/* Store info overlay */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-2 mb-1">
              <div className="px-2 py-0.5 rounded-lg"
                style={{ background: "rgba(0,212,170,0.2)", border: "1px solid rgba(0,212,170,0.4)" }}>
                <span style={{ color: "#00D4AA", fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>OPEN NOW</span>
              </div>
              <div className="px-2 py-0.5 rounded-lg"
                style={{ background: "rgba(76,201,240,0.2)", border: "1px solid rgba(76,201,240,0.3)" }}>
                <span style={{ color: "#4CC9F0", fontSize: 10, fontWeight: 600 }}>Sports & Footwear</span>
              </div>
            </div>
            <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, letterSpacing: "-0.5px" }}>Nike Store</h1>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                <Star size={13} color="#FFD166" fill="#FFD166" />
                <span style={{ color: "#FFD166", fontSize: 13, fontWeight: 700 }}>4.8</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 400 }}>(892)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={12} color="rgba(255,255,255,0.4)" />
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 400 }}>Level 3, Wing B</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2.5 mb-5 -mt-2">
            {[
              { icon: Clock, label: "Closes at", value: "10:00 PM", color: "#4CC9F0" },
              { icon: Users, label: "Crowd Level", value: "Moderate", color: "#FFD166" },
              { icon: ShoppingBag, label: "In Stock", value: "240+ items", color: "#00D4AA" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label}
                className="rounded-2xl p-3 flex flex-col gap-1.5"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Icon size={14} color={color} />
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 500, letterSpacing: "0.04em" }}>{label.toUpperCase()}</p>
                <p style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Live Crowd Indicator */}
          <div className="p-4 rounded-2xl mb-4"
            style={{ background: "rgba(255,209,102,0.08)", border: "1px solid rgba(255,209,102,0.2)" }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#FFD166" }} />
                <span style={{ color: "#FFD166", fontSize: 12, fontWeight: 600 }}>MODERATE CROWD</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>~15 min wait</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
              <div className="h-full rounded-full"
                style={{ width: "62%", background: "linear-gradient(90deg, #FFD166, #FF6B6B)" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 6 }}>
              Best time to visit: 2–4 PM or after 8 PM
            </p>
          </div>

          {/* Navigation CTA */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/map")}
            className="w-full flex items-center justify-between p-4 rounded-2xl mb-5"
            style={{ background: "linear-gradient(90deg, rgba(0,180,216,0.3), rgba(67,97,238,0.3))", border: "1px solid rgba(76,201,240,0.35)" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #00B4D8, #4361EE)" }}>
                <Navigation2 size={18} color="#fff" />
              </div>
              <div>
                <p style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>Get Directions</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 400 }}>~3 min walk · Level 3</p>
              </div>
            </div>
            <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
          </motion.button>

          {/* Popular Products */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px" }}>Popular Products</h3>
              <button><span style={{ color: "#4CC9F0", fontSize: 12, fontWeight: 600 }}>View All</span></button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {products.map((p) => (
                <div key={p.name}
                  className="flex-shrink-0 rounded-2xl overflow-hidden"
                  style={{ width: 120, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ height: 90 }}>
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2.5">
                    <p style={{ color: "#fff", fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>{p.name}</p>
                    <p style={{ color: "#4CC9F0", fontSize: 12, fontWeight: 700, marginTop: 2 }}>{p.price}</p>
                    {!p.inStock && (
                      <p style={{ color: "#FF6B6B", fontSize: 9, fontWeight: 600, marginTop: 2 }}>Out of Stock</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-5">
            <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 12 }}>Reviews</h3>
            {reviews.map((r) => (
              <div key={r.name}
                className="p-3.5 rounded-2xl mb-2.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #4CC9F0, #7B61FF)" }}>
                      <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>{r.name[0]}</span>
                    </div>
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{r.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={10} color="#FFD166" fill="#FFD166" />
                    ))}
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, marginLeft: 4 }}>{r.date}</span>
                  </div>
                </div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 400, lineHeight: 1.5 }}>{r.comment}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <button
            className="w-full flex items-center gap-3 p-4 rounded-2xl mb-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Phone size={16} color="#4CC9F0" />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500 }}>+1 (800) 344-6453</span>
            <ChevronRight size={14} color="rgba(255,255,255,0.3)" className="ml-auto" />
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
