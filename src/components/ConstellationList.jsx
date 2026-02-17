
import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import { CONSTELLATIONS } from "../data/constellations";
import ConstellationIcon from "./ConstellationIcon";

export default function ConstellationList() {
    const { goToSelect, goToConstellationDetail, redMode } = useGame();

    return (
        <div className={`builder-screen ${redMode ? "red-mode" : ""}`} style={{ overflowY: "auto" }}>
            <div className="login-bg-layer" />
            <div className="login-noise" />

            {/* Header */}
            <div className="builder-header">
                <button className="back-btn" onClick={goToSelect}>
                    ← Back
                </button>
                <h2>Constellations</h2>
                <div style={{ width: 40 }} />
            </div>

            <div className="constellation-grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "1rem",
                padding: "1rem",
                maxWidth: "800px",
                margin: "0 auto"
            }}>
                {CONSTELLATIONS.map((constellation, index) => (
                    <motion.button
                        key={constellation.name}
                        className="glass-panel"
                        onClick={() => goToConstellationDetail(constellation)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem",
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(20,20,30,0.6)",
                            cursor: "pointer",
                            aspectRatio: "1/1"
                        }}
                    >
                        <div className="constellation-icon" style={{
                            marginBottom: "0.5rem",
                            filter: redMode ? "sepia(1) hue-rotate(-50deg) saturate(3)" : "none",
                            width: "100%",
                            height: "100%",
                            maxHeight: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <ConstellationIcon constellation={constellation} size="100%" />
                        </div>
                        <span style={{
                            color: redMode ? "#ff4444" : "#eee",
                            fontWeight: "500",
                            textAlign: "center",
                            fontSize: "0.9rem"
                        }}>
                            {constellation.name}
                        </span>
                    </motion.button>
                ))}
            </div>
            <div style={{ textAlign: "center", padding: "2rem", opacity: 0.5, fontSize: "0.9rem" }}>
                More coming soon!
            </div>
        </div>
    );
}
