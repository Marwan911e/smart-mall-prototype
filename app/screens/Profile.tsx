import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ChevronRight, Settings, Bell, Shield, HelpCircle, LogOut, Star, MapPin, ShoppingBag, Footprints, Award, Crown, Zap } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const profileImg = "https://images.unsplash.com/photo-1707396172424-f3293f788364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZSUyMGF2YXRhciUyMHBvcnRyYWl0JTIweW91bmclMjBwZXJzb258ZW58MXx8fHwxNzc4MjYzNTE0fDA&ixlib=rb-4.1.0&q=80&w=400";

const stats = [
  { icon: MapPin, label: "Mall Visits", value: "47", color: "#4CC9F0" },
  { icon: ShoppingBag, label: "Purchases", value: "134", color: "#7B61FF" },
  { icon: Footprints, label: "KM Walked", value: "12.4", color: "#00D4AA" },
  { icon: Star, label: "Reviews", value: "28", color: "#FFD166" },
];

const achievements = [
  { icon: "🏆", title: "Super Shopper", desc: "100+ purchases", unlocked: true, color: "#FFD166" },
  { icon: "🗺️", title: "Explorer", desc: "Visited all wings", unlocked: true, color: "#4CC9F0" },
  { icon: "⚡", title: "Speed Walker", desc: "10km walked total", unlocked: true, color: "#7B61FF" },
  { icon: "🔥", title: "Trendsetter", desc: "50+ saved items", unlocked: false, color: "#FF6B6B" },
  { icon: "💎", title: "Diamond Member", desc: "Spend $5000+", unlocked: false, color: "#A78BFA" },
];

const settingsGroups = [
  {
    title: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", desc: "Deals & alerts", badge: "3", color: "#4CC9F0" },
      { icon: MapPin, label: "Location Services", desc: "Indoor navigation", badge: null, color: "#00D4AA" },
      { icon: Zap, label: "Smart Suggestions", desc: "AI personalization", badge: null, color: "#7B61FF" },
    ]
  },
  {
    title: "Account",
    items: [
      { icon: Shield, label: "Privacy & Security", desc: "Data & permissions", badge: null, color: "#FFD166" },
      { icon: Settings, label: "App Settings", desc: "Language, theme", badge: null, color: "#FF6B6B" },
      { icon: HelpCircle, label: "Help & Support", desc: "FAQs & feedback", badge: null, color: "#4CC9F0" },
    ]
  }
];

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 w-64 h-64 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #4361EE 0%, transparent 70%)", transform: "translate(-50%, -30%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />
      </div>

      <StatusBar />

      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: "none" }}>

        {/* Profile header */}
        <div className="px-5 pb-5">
          <div className="flex items-start justify-between mb-6">
            <h1 style={{ color: "#fff", fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}>Profile</h1>
            <button className="w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Settings size={16} color="rgba(255,255,255,0.6)" />
            </button>
          </div>

          {/* Avatar & info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 p-4 rounded-3xl mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(76,201,240,0.1), rgba(67,97,238,0.15))",
              border: "1px solid rgba(76,201,240,0.2)"
            }}>
            <div className="relative">
              <div className="w-18 h-18 rounded-3xl overflow-hidden"
                style={{ width: 72, height: 72, border: "2px solid #4CC9F0" }}>
                <img src={profileImg} alt="Alex" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FFD166, #FF9500)", border: "2px solid #060D1A" }}>
                <Crown size={12} color="#fff" fill="#fff" />
              </div>
            </div>
            <div className="flex-1">
              <h2 style={{ color: "#fff", fontSize: 20, fontWeight: 800, letterSpacing: "-0.3px" }}>Alex Johnson</h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: 400 }}>alex.johnson@email.com</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="px-2.5 py-1 rounded-xl flex items-center gap-1"
                  style={{ background: "linear-gradient(90deg, rgba(255,209,102,0.25), rgba(255,149,0,0.25))", border: "1px solid rgba(255,209,102,0.4)" }}>
                  <Crown size={10} color="#FFD166" />
                  <span style={{ color: "#FFD166", fontSize: 11, fontWeight: 700 }}>Gold Member</span>
                </div>
                <div className="px-2.5 py-1 rounded-xl"
                  style={{ background: "rgba(76,201,240,0.15)", border: "1px solid rgba(76,201,240,0.3)" }}>
                  <span style={{ color: "#4CC9F0", fontSize: 11, fontWeight: 600 }}>Since 2022</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-4 gap-2 mb-5">
            {stats.map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="rounded-2xl p-3 flex flex-col items-center gap-1"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <Icon size={16} color={color} />
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1 }}>
                  {value}
                </span>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 9, fontWeight: 500, textAlign: "center", lineHeight: 1.3 }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Loyalty progress */}
          <div className="p-4 rounded-2xl mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(255,209,102,0.1), rgba(255,149,0,0.08))",
              border: "1px solid rgba(255,209,102,0.25)"
            }}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Award size={16} color="#FFD166" />
                <span style={{ color: "#FFD166", fontSize: 13, fontWeight: 700 }}>Gold Loyalty</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                <span style={{ color: "#fff", fontWeight: 700 }}>2,340</span> / 5,000 pts
              </span>
            </div>
            <div className="h-2 rounded-full overflow-hidden mb-1" style={{ background: "rgba(255,255,255,0.08)" }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "47%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #FFD166, #FF9500)" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>
              2,660 more points to <span style={{ color: "#A78BFA", fontWeight: 600 }}>Platinum status</span>
            </p>
          </div>

          {/* Achievements */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, letterSpacing: "-0.3px" }}>Achievements</h3>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>3 / 5 unlocked</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              {achievements.map((a, i) => (
                <div key={i}
                  className="flex-shrink-0 flex flex-col items-center gap-1.5 p-3 rounded-2xl"
                  style={{
                    width: 80,
                    background: a.unlocked ? `${a.color}12` : "rgba(255,255,255,0.03)",
                    border: `1px solid ${a.unlocked ? `${a.color}30` : "rgba(255,255,255,0.06)"}`,
                    opacity: a.unlocked ? 1 : 0.5
                  }}>
                  <span style={{ fontSize: 22, filter: a.unlocked ? "none" : "grayscale(100%)" }}>{a.icon}</span>
                  <span style={{ color: a.unlocked ? "#fff" : "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 700, textAlign: "center", lineHeight: 1.3 }}>
                    {a.title}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 8, textAlign: "center", lineHeight: 1.3 }}>
                    {a.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Settings sections */}
          {settingsGroups.map((group) => (
            <div key={group.title} className="mb-4">
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 10 }}>
                {group.title.toUpperCase()}
              </p>
              <div className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                {group.items.map(({ icon: Icon, label, desc, badge, color }, i) => (
                  <button
                    key={label}
                    className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderBottom: i < group.items.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"
                    }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}18` }}>
                      <Icon size={15} color={color} />
                    </div>
                    <div className="flex-1">
                      <p style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>{label}</p>
                      <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 400 }}>{desc}</p>
                    </div>
                    {badge && (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2"
                        style={{ background: "#FF6B6B" }}>
                        <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>{badge}</span>
                      </div>
                    )}
                    <ChevronRight size={16} color="rgba(255,255,255,0.2)" />
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Sign out */}
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl mb-4"
            style={{ background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.2)" }}>
            <LogOut size={16} color="#FF6B6B" />
            <span style={{ color: "#FF6B6B", fontSize: 15, fontWeight: 600 }}>Sign Out</span>
          </button>

          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, textAlign: "center", fontWeight: 400 }}>
            NexaGuide v2.4.1 · Build 2025
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
