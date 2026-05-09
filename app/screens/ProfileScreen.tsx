import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Heart, MapPin, ShoppingBag, Users, Accessibility, Bell, ChevronRight, Star, Shield, Settings } from "lucide-react";

const savedBrands = ["Nike", "Zara", "H&M", "Levi's", "Adidas"];
const savedLocations = [
  { name: "UrbanEdge", floor: "Floor 2", icon: "👕" },
  { name: "Blue Bottle Coffee", floor: "Floor 2", icon: "☕" },
  { name: "StyleHub", floor: "Floor 3", icon: "👔" },
];

const preferences = [
  { label: "Shopping Style", value: "Casual & Streetwear", icon: ShoppingBag },
  { label: "Preferred Floor", value: "Floor 2, 3", icon: MapPin },
  { label: "Budget Range", value: "SAR 100–300", icon: Star },
];

export function ProfileScreen() {
  const navigate = useNavigate();
  const [crowdSensitivity, setCrowdSensitivity] = useState(2);
  const [notifEnabled, setNotifEnabled] = useState(true);
  const [accessMode, setAccessMode] = useState(false);

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center rounded-full"
              style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <ArrowLeft size={16} color="white" />
            </button>
            <h2 style={{ fontSize: "17px", fontWeight: 600, color: "white" }}>Profile & Preferences</h2>
          </div>
          <button
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <Settings size={16} color="#94A3B8" />
          </button>
        </div>

        {/* Avatar + name */}
        <div className="flex items-center gap-4">
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: "64px",
              height: "64px",
              background: "linear-gradient(135deg, #1565C0, #2979FF)",
              fontSize: "24px",
            }}
          >
            👤
          </div>
          <div>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>Ahmed Al-Rashid</p>
            <p style={{ fontSize: "12px", color: "#64748B" }}>Member since 2024</p>
            <div className="flex items-center gap-1 mt-1">
              <Shield size={11} color="#22C55E" />
              <span style={{ fontSize: "10px", color: "#22C55E", fontWeight: 600 }}>Verified Shopper</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 flex flex-col gap-4 pb-6">

        {/* Favorite Brands — Gestalt: Proximity */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Heart size={14} color="#EF4444" fill="#EF4444" />
            <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Favorite Brands</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {savedBrands.map((brand) => (
              <div
                key={brand}
                className="px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(41,121,255,0.1)",
                  border: "1px solid rgba(41,121,255,0.2)",
                  fontSize: "12px",
                  color: "#93C5FD",
                  fontWeight: 500,
                }}
              >
                {brand}
              </div>
            ))}
            <button
              className="px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px dashed rgba(255,255,255,0.1)",
                fontSize: "12px",
                color: "#64748B",
              }}
            >
              + Add
            </button>
          </div>
        </div>

        {/* Saved Locations */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={14} color="#2979FF" />
            <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Saved Locations</p>
          </div>
          <div className="flex flex-col gap-2">
            {savedLocations.map((loc) => (
              <motion.button
                key={loc.name}
                onClick={() => navigate("/app/navigation")}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", textAlign: "left" }}
                whileTap={{ scale: 0.98 }}
              >
                <span style={{ fontSize: "18px" }}>{loc.icon}</span>
                <div className="flex-1">
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "white" }}>{loc.name}</p>
                  <p style={{ fontSize: "10px", color: "#64748B" }}>{loc.floor}</p>
                </div>
                <ChevronRight size={13} color="#64748B" />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Shopping Preferences */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ShoppingBag size={14} color="#F59E0B" />
            <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Shopping Preferences</p>
          </div>
          <div className="flex flex-col gap-2">
            {preferences.map((pref) => (
              <div
                key={pref.label}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center justify-center rounded-lg" style={{ width: "30px", height: "30px", background: "rgba(245,158,11,0.1)" }}>
                  <pref.icon size={14} color="#F59E0B" />
                </div>
                <div className="flex-1">
                  <p style={{ fontSize: "10px", color: "#64748B" }}>{pref.label}</p>
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "white" }}>{pref.value}</p>
                </div>
                <ChevronRight size={13} color="#64748B" />
              </div>
            ))}
          </div>
        </div>

        {/* Crowd Sensitivity — UI Pattern: Settings */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Users size={14} color="#22C55E" />
            <p style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Crowd Sensitivity</p>
          </div>
          <div className="flex items-center justify-between mb-2">
            {["Low", "Medium", "High", "Avoid All"].map((level, i) => (
              <motion.button
                key={level}
                onClick={() => setCrowdSensitivity(i)}
                className="flex-1 py-2 text-center rounded-xl mx-0.5"
                style={{
                  background: crowdSensitivity === i ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${crowdSensitivity === i ? "rgba(34,197,94,0.4)" : "rgba(255,255,255,0.06)"}`,
                  fontSize: "10px",
                  color: crowdSensitivity === i ? "#22C55E" : "#64748B",
                  fontWeight: crowdSensitivity === i ? 700 : 400,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {level}
              </motion.button>
            ))}
          </div>
          <p style={{ fontSize: "10px", color: "#64748B", textAlign: "center" }}>
            Routes will avoid areas exceeding your sensitivity level
          </p>
        </div>

        {/* Accessibility & Notifications */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "16px",
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell size={14} color="#2979FF" />
                <span style={{ fontSize: "13px", color: "white", fontWeight: 500 }}>Push Notifications</span>
              </div>
              <motion.button
                onClick={() => setNotifEnabled(!notifEnabled)}
                className="relative"
                style={{
                  width: "44px",
                  height: "26px",
                  borderRadius: "13px",
                  background: notifEnabled ? "#2979FF" : "rgba(255,255,255,0.1)",
                  transition: "background 0.2s",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    top: "3px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "white",
                  }}
                  animate={{ left: notifEnabled ? "21px" : "3px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </motion.button>
            </div>

            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Accessibility size={14} color="#8B5CF6" />
                <span style={{ fontSize: "13px", color: "white", fontWeight: 500 }}>Accessibility Mode</span>
              </div>
              <motion.button
                onClick={() => setAccessMode(!accessMode)}
                className="relative"
                style={{
                  width: "44px",
                  height: "26px",
                  borderRadius: "13px",
                  background: accessMode ? "#8B5CF6" : "rgba(255,255,255,0.1)",
                  transition: "background 0.2s",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    top: "3px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "white",
                  }}
                  animate={{ left: accessMode ? "21px" : "3px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
