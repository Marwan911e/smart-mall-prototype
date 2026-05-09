import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Bell, Navigation2, Users, Store, Tag, ChevronRight, TrendingUp, Zap, Star, Clock } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const mallImg = "https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzgyNTA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
const profileImg = "https://images.unsplash.com/photo-1707396172424-f3293f788364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMGF2YXRhciUyMHBvcnRyYWl0JTIweW91bmclMjBwZXJzb258ZW58MXx8fHwxNzc4MjYzNTE0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const quickActions = [
  { icon: Navigation2, label: "Navigate", color: "#4CC9F0", bg: "rgba(76,201,240,0.15)", path: "/map" },
  { icon: Users, label: "Heatmap", color: "#FF6B6B", bg: "rgba(255,107,107,0.15)", path: "/heatmap" },
  { icon: TrendingUp, label: "Trending", color: "#7B61FF", bg: "rgba(123,97,255,0.15)", path: "/recommendations" },
  { icon: Zap, label: "Route AI", color: "#00D4AA", bg: "rgba(0,212,170,0.15)", path: "/route" },
];

const nearbyStores = [
  { name: "Apple Store", floor: "Level 2", category: "Electronics", rating: 4.9, wait: "5 min", color: "#7B61FF" },
  { name: "Zara", floor: "Level 1", category: "Fashion", rating: 4.7, wait: "2 min", color: "#00D4AA" },
  { name: "Nike", floor: "Level 3", category: "Sports", rating: 4.8, wait: "Low Crowd", color: "#4CC9F0" },
];

const liveStats = [
  { value: "2,847", label: "Visitors Now", icon: Users, color: "#4CC9F0" },
  { value: "148", label: "Open Stores", icon: Store, color: "#00D4AA" },
  { value: "67", label: "Active Deals", icon: Tag, color: "#FF6B6B" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 overflow-hidden flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #4CC9F0 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
      </div>

      <StatusBar />

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-28"
        style={{ scrollbarWidth: "none" }}>

        {/* Header */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em" }}>
                GOOD AFTERNOON
              </p>
              <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", lineHeight: 1.2 }}>
                Welcome, Alex 👋
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-2xl flex items-center justify-center relative"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Bell size={16} color="rgba(255,255,255,0.7)" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                  style={{ background: "#FF6B6B", border: "1.5px solid #060D1A" }} />
              </button>
              <button onClick={() => navigate("/profile")}
                className="w-9 h-9 rounded-2xl overflow-hidden"
                style={{ border: "2px solid #4CC9F0" }}>
                <img src={profileImg} alt="profile" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Mall Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden relative mb-5"
            style={{ height: 160 }}>
            <img src={mallImg} alt="Mall" className="w-full h-full object-cover" />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(5,14,29,0.8) 0%, rgba(5,14,29,0.3) 100%)" }} />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "#00FF88" }}>
                  <div className="w-2 h-2 rounded-full animate-ping" style={{ background: "#00FF88" }} />
                </div>
                <span style={{ color: "#00FF88", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em" }}>LIVE</span>
              </div>
              <div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 500, letterSpacing: "0.08em" }}>NEXAPARK MALL</p>
                <p style={{ color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: "-0.3px" }}>Discover Today's Best</p>
                <button
                  onClick={() => navigate("/search")}
                  className="mt-2 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5"
                  style={{ background: "rgba(76,201,240,0.25)", border: "1px solid rgba(76,201,240,0.4)" }}>
                  <span style={{ color: "#4CC9F0", fontSize: 12, fontWeight: 600 }}>Explore Now</span>
                  <ChevronRight size={12} color="#4CC9F0" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Live Stats */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {liveStats.map(({ value, label, icon: Icon, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-3"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Icon size={16} color={color} strokeWidth={2} />
                <p style={{ color: "#fff", fontSize: 17, fontWeight: 700, marginTop: 6, marginBottom: 2, letterSpacing: "-0.5px" }}>
                  {value}
                </p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 500 }}>{label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 style={{ color: "#fff", fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px" }}>Quick Actions</h2>
            </div>
            <div className="grid grid-cols-4 gap-2.5">
              {quickActions.map(({ icon: Icon, label, color, bg, path }) => (
                <button
                  key={label}
                  onClick={() => navigate(path)}
                  className="flex flex-col items-center gap-2 py-3.5 rounded-2xl"
                  style={{ background: bg, border: `1px solid ${color}25` }}>
                  <Icon size={20} color={color} strokeWidth={2} />
                  <span style={{ color, fontSize: 10, fontWeight: 600, letterSpacing: "0.02em" }}>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Nearby Stores */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 style={{ color: "#fff", fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px" }}>Nearby Stores</h2>
              <button onClick={() => navigate("/search-results")}
                className="flex items-center gap-1">
                <span style={{ color: "#4CC9F0", fontSize: 12, fontWeight: 600 }}>See All</span>
                <ChevronRight size={12} color="#4CC9F0" />
              </button>
            </div>
            <div className="flex flex-col gap-2.5">
              {nearbyStores.map((store) => (
                <button
                  key={store.name}
                  onClick={() => navigate("/store")}
                  className="flex items-center gap-3 p-3.5 rounded-2xl w-full text-left"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${store.color}20` }}>
                    <Store size={18} color={store.color} />
                  </div>
                  <div className="flex-1">
                    <p style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{store.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 400 }}>
                      {store.floor} · {store.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                      <Star size={10} color="#FFD166" fill="#FFD166" />
                      <span style={{ color: "#FFD166", fontSize: 11, fontWeight: 600 }}>{store.rating}</span>
                    </div>
                    <div className="px-2 py-0.5 rounded-lg"
                      style={{ background: "rgba(0,212,170,0.15)" }}>
                      <span style={{ color: "#00D4AA", fontSize: 10, fontWeight: 600 }}>
                        <Clock size={8} style={{ display: "inline", marginRight: 3 }} />{store.wait}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Banner */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/recommendations")}
            className="w-full p-4 rounded-3xl flex items-center gap-4 text-left"
            style={{
              background: "linear-gradient(135deg, rgba(123,97,255,0.25), rgba(76,201,240,0.15))",
              border: "1px solid rgba(123,97,255,0.3)"
            }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #7B61FF, #4CC9F0)" }}>
              <Zap size={22} color="#fff" fill="#fff" />
            </div>
            <div className="flex-1">
              <p style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>AI Style Picks</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 400 }}>
                Personalized for you · 12 new items
              </p>
            </div>
            <ChevronRight size={18} color="rgba(255,255,255,0.4)" />
          </motion.button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
