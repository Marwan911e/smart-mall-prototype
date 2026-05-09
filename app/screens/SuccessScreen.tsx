import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { CheckCircle, Star, ShoppingBag, Navigation, Coffee, Share2, ThumbsUp } from "lucide-react";
import confetti from "canvas-confetti";

const nearbyProducts = [
  {
    id: 1,
    name: "Black Belt",
    store: "StyleHub",
    price: "SAR 79",
    img: "https://images.unsplash.com/photo-1602714007833-58fc14b465e0?w=100&q=70",
  },
  {
    id: 2,
    name: "White Sneakers",
    store: "StyleHub",
    price: "SAR 245",
    img: "https://images.unsplash.com/photo-1773848091915-e703753f43ba?w=100&q=70",
  },
  {
    id: 3,
    name: "Cargo Jacket",
    store: "UrbanEdge",
    price: "SAR 320",
    img: "https://images.unsplash.com/photo-1666861585341-5bd1e7b1ed71?w=100&q=70",
  },
];

export function SuccessScreen() {
  const navigate = useNavigate();
  const confettiRef = useRef(false);

  useEffect(() => {
    if (!confettiRef.current) {
      confettiRef.current = true;
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.4 },
          colors: ["#2979FF", "#22C55E", "#F59E0B", "#8B5CF6", "#EF4444"],
        });
      }, 400);
    }
  }, []);

  return (
    <div
      className="flex flex-col min-h-full items-center"
      style={{
        background: "linear-gradient(180deg, #050D1A 0%, #071420 100%)",
        fontFamily: "Inter, sans-serif",
        paddingBottom: "24px",
      }}
    >
      {/* Success animation */}
      <div className="flex flex-col items-center pt-10 pb-6 px-6 text-center">
        <motion.div
          className="relative flex items-center justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "130px",
              height: "130px",
              border: "2px solid rgba(34,197,94,0.3)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: "100px",
              height: "100px",
              border: "2px solid rgba(34,197,94,0.5)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          {/* Icon */}
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #14532D, #22C55E)",
              boxShadow: "0 0 40px rgba(34,197,94,0.5)",
            }}
          >
            <CheckCircle size={40} color="white" fill="white" strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1
          style={{ fontSize: "28px", fontWeight: 800, color: "white", lineHeight: 1.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          You've Arrived! 🎉
        </motion.h1>

        <motion.p
          style={{ fontSize: "14px", color: "#94A3B8", marginTop: "8px", lineHeight: 1.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Welcome to <span style={{ color: "#22C55E", fontWeight: 600 }}>StyleHub</span> on Floor 3
        </motion.p>

        {/* Store confirmation card */}
        <motion.div
          className="w-full mt-5 p-4 rounded-2xl"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{ width: "44px", height: "44px", background: "rgba(34,197,94,0.15)" }}
            >
              <ShoppingBag size={22} color="#22C55E" />
            </div>
            <div className="flex-1 text-left">
              <p style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>StyleHub</p>
              <p style={{ fontSize: "11px", color: "#22C55E" }}>Floor 3 · East Wing · Store 3B</p>
              <p style={{ fontSize: "10px", color: "#64748B", marginTop: "2px" }}>
                Open until 10:00 PM · Low crowd now
              </p>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={9} color="#F59E0B" fill={i <= 4 ? "#F59E0B" : "transparent"} />
                ))}
              </div>
              <span style={{ fontSize: "9px", color: "#64748B" }}>4.5 (89)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trip summary — Gestalt: Proximity */}
      <motion.div
        className="w-full px-5 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div
          className="flex items-center justify-around py-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { label: "Time Saved", value: "8 min", color: "#2979FF" },
            { label: "Distance", value: "180m", color: "#22C55E" },
            { label: "Crowd Avoided", value: "2 zones", color: "#F59E0B" },
          ].map(({ label, value, color }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span style={{ fontSize: "16px", fontWeight: 700, color }}>{value}</span>
              <span style={{ fontSize: "10px", color: "#64748B" }}>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Rating prompt */}
      <motion.div
        className="w-full px-5 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <div
          className="p-4 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ fontSize: "13px", fontWeight: 600, color: "white", marginBottom: "10px" }}>
            Rate your navigation experience
          </p>
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.button key={i} whileTap={{ scale: 0.85 }}>
                <Star size={30} color="#F59E0B" fill={i <= 5 ? "#F59E0B" : "transparent"} />
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Nearby recommendations — UI Pattern: Recommendation */}
      <div className="w-full px-5 mb-5">
        <p style={{ fontSize: "13px", fontWeight: 600, color: "white", marginBottom: "10px" }}>
          Recommended Nearby Products
        </p>
        <div className="flex gap-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {nearbyProducts.map((item, i) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 cursor-pointer"
              style={{ width: "110px" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "85px", objectFit: "cover" }} />
                <div style={{ padding: "8px" }}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "white" }}>{item.name}</p>
                  <p style={{ fontSize: "9px", color: "#2979FF", fontWeight: 600, marginTop: "2px" }}>{item.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="w-full px-5 flex flex-col gap-3">
        <motion.button
          onClick={() => navigate("/app")}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <ShoppingBag size={18} />
          Continue Shopping
        </motion.button>

        <div className="flex gap-3">
          <motion.button
            onClick={() => navigate("/app/cafe")}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl"
            style={{
              height: "46px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#94A3B8",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <Coffee size={15} />
            Find a Café
          </motion.button>

          <motion.button
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl"
            style={{
              height: "46px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#94A3B8",
            }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <Share2 size={15} />
            Share Trip
          </motion.button>
        </div>
      </div>
    </div>
  );
}
