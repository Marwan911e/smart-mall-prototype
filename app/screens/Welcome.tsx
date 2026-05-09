import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { MapPin, Zap, ShoppingBag, Navigation2 } from "lucide-react";
import { StatusBar } from "../components/StatusBar";

const mallBg = "https://images.unsplash.com/photo-1758448501002-8c7bb7a7d9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzgyNTA5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const features = [
  { icon: Navigation2, label: "Smart Navigation", color: "#4CC9F0" },
  { icon: Zap, label: "Live Updates", color: "#7B61FF" },
  { icon: ShoppingBag, label: "AI Shopping", color: "#00D4AA" },
  { icon: MapPin, label: "Crowd-Aware", color: "#FF6B6B" },
];

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="absolute inset-0 overflow-hidden"
      style={{ background: "#050E1D", fontFamily: "'Inter', sans-serif" }}>

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={mallBg} alt="Smart Mall" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(5,14,29,0.4) 0%, rgba(5,14,29,0.7) 40%, rgba(5,14,29,0.97) 75%, #050E1D 100%)" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />

      <StatusBar />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 px-8 pb-16 flex flex-col">

        {/* Logo & Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #00B4D8, #4361EE)" }}>
              <Navigation2 size={20} color="#fff" strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: "0.15em", fontWeight: 600 }}>
                SMART MALL
              </div>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 700, letterSpacing: "-0.3px", lineHeight: 1.1 }}>
                NexaGuide
              </div>
            </div>
          </div>

          <h1 style={{ color: "#fff", fontSize: 36, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 12 }}>
            Navigate.<br />
            <span style={{ background: "linear-gradient(90deg, #4CC9F0, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Discover.
            </span><br />
            Shop Smarter.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, lineHeight: 1.6, fontWeight: 400 }}>
            AI-powered indoor navigation with real-time crowd intelligence for a seamless mall experience.
          </p>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-2.5 mb-8">
          {features.map(({ icon: Icon, label, color }) => (
            <div key={label}
              className="flex items-center gap-2.5 px-3.5 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}20` }}>
                <Icon size={14} color={color} strokeWidth={2.2} />
              </div>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/home")}
            className="w-full py-4 rounded-2xl relative overflow-hidden"
            style={{ background: "linear-gradient(90deg, #00B4D8, #4361EE)", boxShadow: "0 8px 32px rgba(0,180,216,0.35)" }}>
            <div className="absolute inset-0 opacity-20"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)", transform: "translateX(-100%)" }} />
            <span style={{ color: "#fff", fontSize: 16, fontWeight: 700, letterSpacing: "-0.2px" }}>
              Get Started
            </span>
          </button>

          <button
            onClick={() => navigate("/home")}
            className="w-full py-3.5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, fontWeight: 500 }}>
              Sign In to Account
            </span>
          </button>
        </motion.div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-5">
          {[0, 1, 2].map((i) => (
            <div key={i}
              className="rounded-full"
              style={{
                width: i === 0 ? 20 : 6,
                height: 6,
                background: i === 0 ? "#4CC9F0" : "rgba(255,255,255,0.2)"
              }} />
          ))}
        </div>
      </div>
    </div>
  );
}
