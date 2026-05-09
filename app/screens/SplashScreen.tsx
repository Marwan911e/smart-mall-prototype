import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/app");
    }, 3200);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #050D1A 0%, #0B1D3A 50%, #0D2444 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#2979FF 1px, transparent 1px), linear-gradient(90deg, #2979FF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow rings */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          border: "1px solid rgba(41,121,255,0.12)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "280px",
          height: "280px",
          border: "1px solid rgba(41,121,255,0.2)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Logo container */}
      <motion.div
        className="relative flex flex-col items-center gap-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo icon */}
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "28px",
            background: "linear-gradient(135deg, #1565C0 0%, #2979FF 100%)",
            boxShadow: "0 0 60px rgba(41,121,255,0.5), 0 20px 40px rgba(0,0,0,0.4)",
          }}
          animate={{ boxShadow: ["0 0 60px rgba(41,121,255,0.5), 0 20px 40px rgba(0,0,0,0.4)", "0 0 90px rgba(41,121,255,0.8), 0 20px 40px rgba(0,0,0,0.4)", "0 0 60px rgba(41,121,255,0.5), 0 20px 40px rgba(0,0,0,0.4)"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Map pin + shopping bag combo icon */}
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path
              d="M26 4C19.373 4 14 9.373 14 16C14 24.5 26 40 26 40C26 40 38 24.5 38 16C38 9.373 32.627 4 26 4Z"
              fill="white"
              opacity="0.95"
            />
            <circle cx="26" cy="16" r="6" fill="#2979FF" />
            <circle cx="26" cy="16" r="3" fill="white" />
            {/* Shopping bag at bottom */}
            <rect x="18" y="43" width="16" height="13" rx="3" fill="white" opacity="0.85" />
            <path d="M22 43V41C22 38.791 23.791 37 26 37C28.209 37 30 38.791 30 41V43" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          </svg>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col items-center gap-2">
          <motion.h1
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.5px",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Smart Mall
          </motion.h1>
          <motion.p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(148,163,184,0.9)",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "Inter, sans-serif",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Shopping Assistant
          </motion.p>
        </div>

        {/* Tagline */}
        <motion.p
          style={{
            fontSize: "13px",
            color: "rgba(100,116,139,0.8)",
            textAlign: "center",
            maxWidth: "220px",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.6,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          AI-powered navigation · Real-time crowd intelligence
        </motion.p>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-16 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div
          style={{
            width: "180px",
            height: "3px",
            borderRadius: "2px",
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #1565C0, #2979FF, #42A5F5)",
              borderRadius: "2px",
            }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          style={{
            fontSize: "11px",
            color: "rgba(100,116,139,0.6)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Initializing...
        </motion.p>
      </motion.div>
    </div>
  );
}
