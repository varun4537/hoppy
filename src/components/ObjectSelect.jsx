/**
 * ObjectSelect — Browse & search Messier objects + custom hops
 */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useGame } from "../context/GameContext";
import HOPS from "../data/hops";
import { DSOs } from "../data/stars";
import InfoModal from "./InfoModal";
import EquipmentPicker from "./EquipmentPicker";

const SEASONS = ["All", "Winter", "Spring", "Summer", "Autumn"];
const TYPE_EMOJIS = {
    "emission nebula": "🔴",
    "nebula": "🟣",
    "planetary nebula": "💍",
    "supernova remnant": "💥",
    "globular cluster": "🌐",
    "open cluster": "✨",
    "star cloud": "☁️",
    "spiral galaxy": "🌀",
    "barred spiral galaxy": "🌀",
    "starburst galaxy": "🔥",
    "elliptical galaxy": "⚪",
    "lenticular galaxy": "🔘",
};

const diffLabels = ["", "Easy", "Moderate", "Intermediate", "Challenging", "Expert"];
const diffColors = ["", "#44dd88", "#44ccff", "#ffaa44", "#ff6644", "#ff4466"];

export default function ObjectSelect() {
    const { startHop, redMode, toggleRedMode, goToBuilder, goToSettings, goToLog, customHops, deleteCustomHop, equipment, user, logout, observingLog } = useGame();
    const [search, setSearch] = useState("");
    const [season, setSeason] = useState("All");
    const [sortBy, setSortBy] = useState("difficulty");
    const [infoDso, setInfoDso] = useState(null);
    const [showEquipment, setShowEquipment] = useState(false);

    const hopList = useMemo(() => {
        let items = Object.keys(HOPS)
            .filter((id) => DSOs[id])
            .map((id) => ({ id, hop: HOPS[id], dso: DSOs[id] }));

        if (search.trim()) {
            const q = search.toLowerCase();
            items = items.filter(
                ({ id, dso }) =>
                    id.toLowerCase().includes(q) ||
                    dso.name.toLowerCase().includes(q) ||
                    dso.fullName.toLowerCase().includes(q) ||
                    dso.constellation.toLowerCase().includes(q) ||
                    dso.type.toLowerCase().includes(q)
            );
        }

        if (season !== "All") {
            items = items.filter(({ dso }) => dso.bestSeason === season);
        }

        if (sortBy === "name") items.sort((a, b) => a.dso.fullName.localeCompare(b.dso.fullName));
        else if (sortBy === "magnitude") items.sort((a, b) => a.dso.magnitude - b.dso.magnitude);
        else items.sort((a, b) => a.dso.difficulty - b.dso.difficulty);

        return items;
    }, [search, season, sortBy]);

    const customHopList = Object.values(customHops);

    return (
        <div className={`select-screen ${redMode ? "red-mode" : ""}`}>
            <header className="select-header">
                <h1 className="app-title">
                    <span className="title-star">★</span> Hoppy
                </h1>
                <p className="app-subtitle">Learn to star hop — find deep sky objects step by step</p>

                <div className="header-actions">
                    <button
                        className="equip-badge"
                        onClick={() => setShowEquipment(true)}
                        title="Change equipment"
                    >
                        🔭 {equipment.name}
                    </button>
                    <div className="header-actions-row">
                        <button className="equip-badge" onClick={goToLog} title="View Logbook" style={{ cursor: "pointer" }}>
                            📝 My Log
                        </button>
                        <button className="red-mode-toggle" onClick={toggleRedMode} title="Toggle red light mode">
                            {redMode ? "🔴 Red Light ON" : "💡 Normal Mode"}
                        </button>
                        <button className="icon-btn" onClick={goToSettings} title="Settings">⚙️</button>
                    </div>
                </div>
            </header>

            {/* Search + Filters */}
            <div className="filter-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search objects, constellations…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="filter-row">
                    <div className="season-tabs">
                        {SEASONS.map((s) => (
                            <button
                                key={s}
                                className={`season-tab ${season === s ? "active" : ""}`}
                                onClick={() => setSeason(s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                    <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="difficulty">Sort: Difficulty</option>
                        <option value="name">Sort: Name</option>
                        <option value="magnitude">Sort: Brightness</option>
                    </select>
                </div>
            </div>

            <p className="result-count">{hopList.length} object{hopList.length !== 1 ? "s" : ""}</p>

            {/* Object Grid */}
            <div className="card-grid">
                {/* Create Your Own Hop card */}
                <motion.button
                    className="object-card create-hop-card"
                    onClick={goToBuilder}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <div className="create-hop-icon">✏️</div>
                    <h2 className="card-name">Create Your Own Hop</h2>
                    <p className="card-constellation">Build a custom star-hopping route</p>
                </motion.button>

                {/* Custom hops */}
                {customHopList.map((hop) => (
                    <motion.button
                        key={hop.id}
                        className="object-card custom-hop-card"
                        onClick={() => startHop(hop.id)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <div className="card-type">
                            <span className="type-emoji">⭐</span>
                            <span className="type-label custom-badge">CUSTOM</span>
                        </div>
                        <h2 className="card-name">{hop.name}</h2>
                        <p className="card-constellation">{hop.subtitle}</p>
                        <div className="card-meta">
                            <span className="season-badge">📌 My Route</span>
                            <button
                                className="card-info-btn card-delete-btn"
                                onClick={(e) => { e.stopPropagation(); deleteCustomHop(hop.id); }}
                                title="Delete custom hop"
                            >
                                🗑️
                            </button>
                        </div>
                    </motion.button>
                ))}

                {/* Standard hops */}
                <AnimatePresence>
                    {hopList.map(({ id, hop, dso }, i) => (
                        <motion.button
                            key={id}
                            className="object-card"
                            onClick={() => startHop(id)}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.35 }}
                            layout
                        >
                            <div className="card-type">
                                <span className="type-emoji">{TYPE_EMOJIS[dso.type] || "🌌"}</span>
                                <span className="type-label">{dso.type.toUpperCase()}</span>
                            </div>
                            <h2 className="card-name">{dso.fullName}</h2>
                            <span className="card-designation">{dso.name}</span>
                            <p className="card-constellation">{dso.constellation}</p>
                            <div className="card-meta">
                                {observingLog.some(e => e.objectId === id) && (
                                    <span className="season-badge" style={{ background: "rgba(40, 255, 100, 0.2)", color: "#4f8" }}>
                                        ✅ Observed
                                    </span>
                                )}
                                <span
                                    className="difficulty-badge"
                                    style={{ background: diffColors[dso.difficulty] + "22", color: diffColors[dso.difficulty] }}
                                >
                                    {diffLabels[dso.difficulty]}
                                </span>
                                <span className="season-badge">
                                    {dso.bestSeason === "Winter" && "❄️"}
                                    {dso.bestSeason === "Spring" && "🌸"}
                                    {dso.bestSeason === "Summer" && "☀️"}
                                    {dso.bestSeason === "Autumn" && "🍂"}
                                    {" "}{dso.bestSeason}
                                </span>
                                <button
                                    className="card-info-btn"
                                    onClick={(e) => { e.stopPropagation(); setInfoDso(dso); }}
                                    title="Object info"
                                >
                                    ℹ️
                                </button>
                            </div>
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            <footer className="select-footer">
                <p>🔭 {Object.keys(HOPS).length} Messier objects to explore</p>
            </footer>

            {infoDso && (
                <InfoModal
                    dso={infoDso}
                    onClose={() => setInfoDso(null)}
                    redMode={redMode}
                />
            )}

            <EquipmentPicker
                isOpen={showEquipment}
                onClose={() => setShowEquipment(false)}
            />
        </div>
    );
}
