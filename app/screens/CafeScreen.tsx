import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Users, Wifi, Star, Navigation, Coffee, BookOpen } from "lucide-react";

const cafes = [
  {
    id: 1,
    name: "Blue Bottle Coffee",
    floor: "Floor 2",
    distance: "95m",
    wait: "5 min",
    seats: 18,
    totalSeats: 30,
    crowd: "Low",
    crowdPct: 38,
    wifi: true,
    quiet: true,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1750040970096-31907e42d6a5?w=300&q=80",
    tags: ["Quiet", "WiFi", "Study-friendly"],
  },
  {
    id: 2,
    name: "The Coffee Workshop",
    floor: "Floor 1",
    distance: "210m",
    wait: "12 min",
    seats: 6,
    totalSeats: 24,
    crowd: "High",
    crowdPct: 78,
    wifi: true,
    quiet: false,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1760326652193-bc25f0fe4a8e?w=300&q=80",
    tags: ["Busy", "Specialty Coffee"],
  },
  {
    id: 3,
    name: "Arôme Café",
    floor: "Floor 3",
    distance: "320m",
    wait: "2 min",
    seats: 22,
    totalSeats: 28,
    crowd: "Low",
    crowdPct: 21,
    wifi: true,
    quiet: true,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1666861585341-5bd1e7b1ed71?w=300&q=80",
    tags: ["Very Quiet", "WiFi", "Cozy"],
  },
];

const crowdColor = (l: string) => l === "Low" ? "#22C55E" : l === "Medium" ? "#F59E0B" : "#EF4444";
const crowdBg = (l: string) => l === "Low" ? "rgba(34,197,94,0.12)" : l === "Medium" ? "rgba(245,158,11,0.12)" : "rgba(239,68,68,0.12)";

const filters = ["All", "Quiet", "WiFi", "Study", "Low Crowd"];

export function CafeScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center rounded-full"
            style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <ArrowLeft size={16} color="white" />
          </button>
          <div>
            <h2 style={{ fontSize: "17px", fontWeight: 600, color: "white" }}>Café Availability</h2>
            <p style={{ fontSize: "11px", color: "#64748B" }}>3 cafés · Live seating updates</p>
          </div>
        </div>
      </div>

      {/* Summary bar — Gestalt: Proximity */}
      <div className="px-4 pt-3 pb-3">
        <div
          className="flex items-center justify-around py-3 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#22C55E" }}>2</span>
            <span style={{ fontSize: "10px", color: "#64748B" }}>Quiet Cafés</span>
          </div>
          <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.08)" }} />
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontSize: "20px", fontWeight: 700, color: "white" }}>40</span>
            <span style={{ fontSize: "10px", color: "#64748B" }}>Seats Available</span>
          </div>
          <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.08)" }} />
          <div className="flex flex-col items-center gap-1">
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#F59E0B" }}>5 min</span>
            <span style={{ fontSize: "10px", color: "#64748B" }}>Min Wait</span>
          </div>
        </div>
      </div>

      {/* AI Recommendation — UI Pattern: Recommendation */}
      <div className="px-4 pb-3">
        <div
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
          style={{ background: "rgba(41,121,255,0.1)", border: "1px solid rgba(41,121,255,0.2)" }}
        >
          <BookOpen size={14} color="#2979FF" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: "11px", color: "#93C5FD", lineHeight: 1.5 }}>
            <span style={{ fontWeight: 600, color: "#2979FF" }}>AI Recommends:</span> Arôme Café — quietest option with 22 seats available, perfect for a rest break
          </p>
        </div>
      </div>

      {/* Filter chips */}
      <div className="px-4 pb-3">
        <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {filters.map((f, i) => (
            <button
              key={f}
              className="flex-shrink-0 px-3 py-1.5 rounded-full"
              style={{
                background: i === 0 ? "rgba(41,121,255,0.2)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${i === 0 ? "rgba(41,121,255,0.4)" : "rgba(255,255,255,0.07)"}`,
                fontSize: "11px",
                color: i === 0 ? "#2979FF" : "#94A3B8",
                fontWeight: i === 0 ? 600 : 400,
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Café cards — Gestalt: Similarity (uniform card structure) */}
      <div className="px-4 flex flex-col gap-3 pb-6">
        {cafes.map((cafe, i) => (
          <motion.div
            key={cafe.id}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Image + overlay */}
            <div style={{ height: "130px", position: "relative", overflow: "hidden" }}>
              <img
                src={cafe.img}
                alt={cafe.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(5,13,26,0.9) 0%, transparent 60%)",
                }}
              />
              {/* Badges on image */}
              <div className="absolute top-2 left-2 flex gap-1.5">
                <div
                  className="px-2 py-0.5 rounded-full"
                  style={{ background: crowdBg(cafe.crowd), border: `1px solid ${crowdColor(cafe.crowd)}40`, backdropFilter: "blur(8px)" }}
                >
                  <span style={{ fontSize: "9px", fontWeight: 700, color: crowdColor(cafe.crowd) }}>
                    {cafe.crowd} Crowd
                  </span>
                </div>
                {cafe.quiet && (
                  <div
                    className="px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", backdropFilter: "blur(8px)" }}
                  >
                    <span style={{ fontSize: "9px", fontWeight: 600, color: "#A78BFA" }}>Quiet Zone</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-2 left-3">
                <p style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>{cafe.name}</p>
              </div>
              <div className="absolute bottom-2 right-3 flex items-center gap-1">
                <Star size={11} color="#F59E0B" fill="#F59E0B" />
                <span style={{ fontSize: "11px", color: "#FDE68A", fontWeight: 600 }}>{cafe.rating}</span>
              </div>
            </div>

            {/* Details */}
            <div style={{ padding: "12px" }}>
              {/* Info row */}
              <div className="flex flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Navigation size={10} color="#94A3B8" />
                  <span style={{ fontSize: "10px", color: "#94A3B8" }}>{cafe.floor} · {cafe.distance}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <Clock size={10} color="#94A3B8" />
                  <span style={{ fontSize: "10px", color: "#94A3B8" }}>Wait: {cafe.wait}</span>
                </div>
                {cafe.wifi && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(41,121,255,0.08)" }}>
                    <Wifi size={10} color="#2979FF" />
                    <span style={{ fontSize: "10px", color: "#2979FF" }}>WiFi</span>
                  </div>
                )}
              </div>

              {/* Seat availability progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <Users size={10} color="#94A3B8" />
                    <span style={{ fontSize: "10px", color: "#94A3B8" }}>
                      {cafe.seats} / {cafe.totalSeats} seats free
                    </span>
                  </div>
                  <span style={{ fontSize: "10px", color: crowdColor(cafe.crowd), fontWeight: 600 }}>{cafe.crowdPct}%</span>
                </div>
                <div style={{ height: "5px", borderRadius: "2.5px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <motion.div
                    style={{ height: "100%", borderRadius: "2.5px", background: crowdColor(cafe.crowd) }}
                    initial={{ width: 0 }}
                    animate={{ width: `${cafe.crowdPct}%` }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {cafe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)", fontSize: "10px", color: "#64748B", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Navigate button */}
              <motion.button
                onClick={() => navigate("/app/navigation")}
                className="w-full flex items-center justify-center gap-2 rounded-xl"
                style={{
                  height: "40px",
                  background: cafe.crowd === "Low" ? "linear-gradient(135deg, #14532D, #22C55E)" : "rgba(255,255,255,0.06)",
                  border: `1px solid ${cafe.crowd === "Low" ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.08)"}`,
                  fontSize: "13px",
                  fontWeight: 600,
                  color: cafe.crowd === "Low" ? "white" : "#94A3B8",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Navigation size={14} />
                Navigate Here
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
