import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, Store, Navigation2, MapPin, Star, Trash2, ChevronRight, ShoppingBag } from "lucide-react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";

const fashionImg = "https://images.unsplash.com/photo-1765009433753-c7462637d21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RvcmUlMjBjbG90aGluZyUyMGJvdXRpcXVlJTIwbW9kZXJufGVufDF8fHx8MTc3ODI2MzUwNXww&ixlib=rb-4.1.0&q=80&w=400";
const sneakersImg = "https://images.unsplash.com/photo-1639409392969-71b5b1943cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmVha2VycyUyMHNob2VzJTIwcHJvZHVjdCUyMGRpc3BsYXklMjBtb2Rlcm58ZW58MXx8fHwxNzc4MjYzNTA5fDA&ixlib=rb-4.1.0&q=80&w=400";
const techImg = "https://images.unsplash.com/photo-1762401244552-9eb61a7f9416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHMlMjB0ZWNoJTIwc3RvcmUlMjBkaXNwbGF5fGVufDF8fHx8MTc3ODI2MzUxM3ww&ixlib=rb-4.1.0&q=80&w=400";

const savedStores = [
  { id: 1, name: "Apple Store", floor: "Level 2", category: "Electronics", rating: 4.9, isOpen: true, color: "#7B61FF", visits: 8 },
  { id: 2, name: "Nike", floor: "Level 3", category: "Sports & Footwear", rating: 4.8, isOpen: true, color: "#4CC9F0", visits: 5 },
  { id: 3, name: "Zara", floor: "Level 1", category: "Fashion", rating: 4.7, isOpen: true, color: "#00D4AA", visits: 12 },
  { id: 4, name: "Starbucks", floor: "Ground Floor", category: "Food & Drinks", rating: 4.6, isOpen: false, color: "#FFD166", visits: 24 },
];

const savedProducts = [
  { id: 1, name: "Nike Air Max 270", store: "Nike", price: "$129", image: sneakersImg, inStock: true },
  { id: 2, name: "Oversized Blazer", store: "Zara", price: "$89", image: fashionImg, inStock: true },
  { id: 3, name: "AirPods Pro 2", store: "Apple", price: "$249", image: techImg, inStock: true },
  { id: 4, name: "Jordan 1 Retro", store: "Foot Locker", price: "$189", image: sneakersImg, inStock: false },
];

const savedRoutes = [
  { id: 1, from: "Main Entrance", to: "Nike Store", eta: "8 min", date: "2 days ago" },
  { id: 2, from: "Food Court", to: "Apple Store", eta: "4 min", date: "1 week ago" },
  { id: 3, from: "Parking B", to: "Zara", eta: "6 min", date: "2 weeks ago" },
];

const tabs = ["Stores", "Products", "Routes"];

export default function Favorites() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Stores");
  const [stores, setStores] = useState(savedStores);

  return (
    <div className="absolute inset-0 flex flex-col"
      style={{ background: "#060D1A", fontFamily: "'Inter', sans-serif" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(76,201,240,1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,240,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

      <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FF6B6B 0%, transparent 70%)", transform: "translate(-40%, -40%)" }} />

      <StatusBar />

      <div className="flex-1 overflow-y-auto pb-28" style={{ scrollbarWidth: "none" }}>
        <div className="px-5">

          {/* Header */}
          <div className="mb-5">
            <h1 style={{ color: "#fff", fontSize: 26, fontWeight: 800, letterSpacing: "-0.8px" }}>
              Saved
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 400 }}>
              {savedStores.length} stores · {savedProducts.length} products · {savedRoutes.length} routes
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-2xl mb-5"
            style={{ background: "rgba(255,255,255,0.05)" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2.5 rounded-xl transition-all"
                style={{
                  background: activeTab === tab ? "rgba(255,255,255,0.1)" : "transparent",
                  color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.4)",
                  fontSize: 13,
                  fontWeight: activeTab === tab ? 700 : 400,
                  border: activeTab === tab ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent"
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Stores tab */}
          {activeTab === "Stores" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-3">
              {stores.map((store, i) => (
                <motion.div
                  key={store.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${store.color}18`, border: `1px solid ${store.color}30` }}>
                    <Store size={20} color={store.color} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{store.name}</span>
                      <div className="px-1.5 py-0.5 rounded-md"
                        style={{
                          background: store.isOpen ? "rgba(0,212,170,0.15)" : "rgba(255,107,107,0.15)",
                          border: `1px solid ${store.isOpen ? "rgba(0,212,170,0.3)" : "rgba(255,107,107,0.3)"}`
                        }}>
                        <span style={{ color: store.isOpen ? "#00D4AA" : "#FF6B6B", fontSize: 9, fontWeight: 700 }}>
                          {store.isOpen ? "OPEN" : "CLOSED"}
                        </span>
                      </div>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 400 }}>
                      {store.floor} · {store.category}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <Star size={10} color="#FFD166" fill="#FFD166" />
                        <span style={{ color: "#FFD166", fontSize: 11, fontWeight: 600 }}>{store.rating}</span>
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>{store.visits} visits</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => navigate("/map")}
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(76,201,240,0.15)", border: "1px solid rgba(76,201,240,0.3)" }}>
                      <Navigation2 size={14} color="#4CC9F0" />
                    </button>
                    <button
                      onClick={() => setStores(stores.filter(s => s.id !== store.id))}
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.2)" }}>
                      <Trash2 size={14} color="#FF6B6B" />
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Empty state if all deleted */}
              {stores.length === 0 && (
                <div className="flex flex-col items-center gap-3 py-16">
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)" }}>
                    <Heart size={28} color="rgba(255,255,255,0.2)" />
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, fontWeight: 500 }}>No saved stores yet</p>
                  <button onClick={() => navigate("/search")}
                    className="px-5 py-2.5 rounded-2xl"
                    style={{ background: "rgba(76,201,240,0.2)", border: "1px solid rgba(76,201,240,0.3)" }}>
                    <span style={{ color: "#4CC9F0", fontSize: 13, fontWeight: 600 }}>Explore Stores</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Products tab */}
          {activeTab === "Products" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 gap-3">
              {savedProducts.map((product, i) => (
                <motion.button
                  key={product.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => navigate("/store")}
                  className="rounded-2xl overflow-hidden flex flex-col text-left"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="relative" style={{ height: 130 }}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(180deg, transparent 40%, rgba(6,13,26,0.85) 100%)" }} />
                    <button className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(6,13,26,0.6)" }}>
                      <Heart size={11} color="#FF6B6B" fill="#FF6B6B" />
                    </button>
                    {!product.inStock && (
                      <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded-lg"
                        style={{ background: "rgba(255,107,107,0.3)" }}>
                        <span style={{ color: "#FF6B6B", fontSize: 9, fontWeight: 700 }}>OUT OF STOCK</span>
                      </div>
                    )}
                  </div>
                  <div className="p-2.5">
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontWeight: 600 }}>{product.store.toUpperCase()}</p>
                    <p style={{ color: "#fff", fontSize: 12, fontWeight: 600, lineHeight: 1.3, marginTop: 1 }}>{product.name}</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span style={{ color: "#4CC9F0", fontSize: 13, fontWeight: 700 }}>{product.price}</span>
                      <button onClick={(e) => { e.stopPropagation(); navigate("/map"); }}
                        className="px-2 py-0.5 rounded-lg"
                        style={{ background: "rgba(76,201,240,0.15)" }}>
                        <span style={{ color: "#4CC9F0", fontSize: 9, fontWeight: 600 }}>Navigate</span>
                      </button>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Routes tab */}
          {activeTab === "Routes" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-3">
              {savedRoutes.map((route, i) => (
                <motion.button
                  key={route.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => navigate("/route")}
                  className="flex items-center gap-3 p-4 rounded-2xl w-full text-left"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(76,201,240,0.15)" }}>
                    <Navigation2 size={16} color="#4CC9F0" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <MapPin size={10} color="rgba(255,255,255,0.35)" />
                      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{route.from}</span>
                      <ChevronRight size={10} color="rgba(255,255,255,0.2)" />
                      <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>{route.to}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span style={{ color: "#4CC9F0", fontSize: 11, fontWeight: 600 }}>{route.eta}</span>
                      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>·</span>
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{route.date}</span>
                    </div>
                  </div>
                  <ChevronRight size={16} color="rgba(255,255,255,0.2)" />
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
