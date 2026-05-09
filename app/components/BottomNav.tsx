import { useNavigate, useLocation } from "react-router";
import { Home, Search, Map, Bell, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/app" },
  { icon: Search, label: "Search", path: "/app/search" },
  { icon: Map, label: "Map", path: "/app/heatmap" },
  { icon: Bell, label: "Alerts", path: "/app/notifications" },
  { icon: User, label: "Profile", path: "/app/profile" },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/app") return location.pathname === "/app";
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className="flex-shrink-0"
      style={{
        background: "rgba(10, 18, 35, 0.92)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingBottom: "8px",
      }}
    >
      <div className="flex items-center justify-around px-2 pt-2 pb-1">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = isActive(path);
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-2xl transition-all duration-200 min-w-[48px]"
              style={{
                background: active ? "rgba(41, 121, 255, 0.15)" : "transparent",
              }}
            >
              <Icon
                size={22}
                style={{
                  color: active ? "#2979FF" : "#64748B",
                  strokeWidth: active ? 2.5 : 1.8,
                }}
              />
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#2979FF" : "#64748B",
                  letterSpacing: "0.02em",
                }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
