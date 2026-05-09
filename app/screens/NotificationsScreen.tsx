import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, AlertTriangle, Navigation, Sparkles, Tag, Users, Check, X, Bell } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "alert",
    icon: AlertTriangle,
    iconColor: "#EF4444",
    iconBg: "rgba(239,68,68,0.15)",
    title: "High Crowd Detected",
    body: "H&M on Floor 2 is now 85% full. We recommend avoiding this area.",
    time: "Just now",
    read: false,
    action: { label: "Reroute", path: "/app/navigation" },
  },
  {
    id: 2,
    type: "navigation",
    icon: Navigation,
    iconColor: "#2979FF",
    iconBg: "rgba(41,121,255,0.15)",
    title: "Route Updated",
    body: "A faster, less crowded route to UrbanEdge has been found. Save 2 min.",
    time: "2 min ago",
    read: false,
    action: { label: "View Route", path: "/app/navigation" },
  },
  {
    id: 3,
    type: "recommendation",
    icon: Sparkles,
    iconColor: "#8B5CF6",
    iconBg: "rgba(139,92,246,0.15)",
    title: "AI Found a Match",
    body: "StyleHub on Floor 3 has black cargo pants matching your style preference.",
    time: "5 min ago",
    read: false,
    action: { label: "View Store", path: "/app/results" },
  },
  {
    id: 4,
    type: "promo",
    icon: Tag,
    iconColor: "#F59E0B",
    iconBg: "rgba(245,158,11,0.15)",
    title: "Flash Sale Alert",
    body: "20% off all cargo pants at UrbanEdge today only. Limited time offer!",
    time: "15 min ago",
    read: true,
    action: { label: "Shop Now", path: "/app/results" },
  },
  {
    id: 5,
    type: "crowd",
    icon: Users,
    iconColor: "#22C55E",
    iconBg: "rgba(34,197,94,0.15)",
    title: "Crowd Cleared",
    body: "Food Court area crowd level dropped to medium. Now a good time to visit.",
    time: "22 min ago",
    read: true,
    action: { label: "View Map", path: "/app/heatmap" },
  },
  {
    id: 6,
    type: "alert",
    icon: AlertTriangle,
    iconColor: "#EF4444",
    iconBg: "rgba(239,68,68,0.15)",
    title: "Congestion Warning",
    body: "Main entrance (East) is heavily congested. Use West entrance instead.",
    time: "38 min ago",
    read: true,
    action: null,
  },
];

export function NotificationsScreen() {
  const navigate = useNavigate();
  const [items, setItems] = useState(notifications);

  const unreadCount = items.filter((n) => !n.read).length;

  const markAllRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const dismiss = (id: number) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div
      className="flex flex-col min-h-full"
      style={{ background: "#050D1A", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-4 pt-3 pb-3"
        style={{
          background: "rgba(5,13,26,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center rounded-full"
              style={{ width: "36px", height: "36px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <ArrowLeft size={16} color="white" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h2 style={{ fontSize: "17px", fontWeight: 600, color: "white" }}>Notifications</h2>
                {unreadCount > 0 && (
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: "20px", height: "20px", background: "#EF4444", fontSize: "10px", color: "white", fontWeight: 700 }}
                  >
                    {unreadCount}
                  </div>
                )}
              </div>
              <p style={{ fontSize: "11px", color: "#64748B" }}>Real-time shopping alerts</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button onClick={markAllRead}>
              <span style={{ fontSize: "12px", color: "#2979FF", fontWeight: 500 }}>Mark all read</span>
            </button>
          )}
        </div>
      </div>

      {/* Notification list — Gestalt: Proximity + Similarity */}
      <div className="px-4 pt-3 flex flex-col gap-2 pb-6">
        <AnimatePresence>
          {items.map((notif, i) => (
            <motion.div
              key={notif.id}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: notif.read ? "rgba(255,255,255,0.03)" : "rgba(41,121,255,0.06)",
                border: `1px solid ${notif.read ? "rgba(255,255,255,0.07)" : "rgba(41,121,255,0.2)"}`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100, height: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {/* Unread indicator — Gestalt: Visual Hierarchy */}
              {!notif.read && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "3px",
                    height: "60%",
                    borderRadius: "0 2px 2px 0",
                    background: "#2979FF",
                  }}
                />
              )}

              <div className="flex items-start gap-3 px-4 py-3">
                {/* Icon */}
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{ width: "38px", height: "38px", background: notif.iconBg, marginTop: "1px" }}
                >
                  <notif.icon size={17} color={notif.iconColor} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p style={{ fontSize: "13px", fontWeight: notif.read ? 500 : 600, color: "white", lineHeight: 1.3 }}>
                      {notif.title}
                    </p>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <span style={{ fontSize: "10px", color: "#64748B" }}>{notif.time}</span>
                      <button
                        onClick={() => dismiss(notif.id)}
                        className="flex items-center justify-center rounded-full"
                        style={{ width: "18px", height: "18px", background: "rgba(255,255,255,0.06)" }}
                      >
                        <X size={10} color="#64748B" />
                      </button>
                    </div>
                  </div>
                  <p style={{ fontSize: "11px", color: "#94A3B8", lineHeight: 1.5, marginTop: "3px" }}>
                    {notif.body}
                  </p>
                  {notif.action && (
                    <motion.button
                      onClick={() => navigate(notif.action!.path)}
                      className="mt-2 px-3 py-1.5 rounded-xl"
                      style={{
                        background: "rgba(41,121,255,0.15)",
                        border: "1px solid rgba(41,121,255,0.25)",
                        fontSize: "11px",
                        color: "#2979FF",
                        fontWeight: 600,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {notif.action.label}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 gap-3">
            <div
              className="flex items-center justify-center rounded-full"
              style={{ width: "64px", height: "64px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Bell size={28} color="#374151" />
            </div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#374151" }}>No notifications</p>
            <p style={{ fontSize: "12px", color: "#1F2937" }}>You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
