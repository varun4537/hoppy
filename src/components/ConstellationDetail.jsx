
import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import { DSOs } from "../data/stars";
import ConstellationIcon from "./ConstellationIcon";

export default function ConstellationDetail() {
    const { selectedConstellation, goToConstellations, startHop, redMode } = useGame();

    if (!selectedConstellation) return null;

    // Find DSOs in this constellation
    const constellationDSOs = Object.values(DSOs).filter(
        dso => dso.constellation === selectedConstellation.name
    );

    return (
        <div className={`builder-screen ${redMode ? "red-mode" : ""}`} style={{ overflowY: "auto" }}>
            <div className="login-bg-layer" />
            <div className="login-noise" />

            {/* Header */}
            <div className="builder-header">
                <button className="back-btn" onClick={goToConstellations}>
                    ← Back
                </button>
                <h2>{selectedConstellation.name}</h2>
                <div style={{ width: 40 }} />
            </div>

            <div className="constellation-detail-content" style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>

                {/* Hero / Stick Figure View */}
                <div className="glass-panel" style={{
                    padding: "2rem",
                    marginBottom: "2rem",
                    textAlign: "center",
                    minHeight: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.3)"
                }}>
                    <div style={{ width: "250px", height: "250px", filter: redMode ? "sepia(1) hue-rotate(-50deg) saturate(3)" : "none" }}>
                        <ConstellationIcon constellation={selectedConstellation} size={250} strokeWidth={1.5} />
                    </div>
                </div>

                {/* DSOs List */}
                <h3 style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem", marginBottom: "1rem" }}>
                    Deep Sky Objects
                </h3>

                {constellationDSOs.length === 0 ? (
                    <p style={{ opacity: 0.5, fontStyle: "italic" }}>No popular deep sky objects found in our database for this constellation yet.</p>
                ) : (
                    <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
                        {constellationDSOs.map(dso => (
                            <motion.button
                                key={dso.id}
                                className="object-card"
                                onClick={() => startHop(dso.id)} // Assuming DSO ID matches Hop ID for now, might need check
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    padding: "1rem"
                                }}
                            >
                                <div style={{ fontSize: "1.5rem" }}>
                                    {/* Emoji based on type if we had access, generic for now */}
                                    🌌
                                </div>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: "1.1rem" }}>{dso.fullName}</h4>
                                    <span style={{ opacity: 0.7, fontSize: "0.9rem" }}>{dso.type} • Mag {dso.magnitude}</span>
                                </div>
                                <div style={{ marginLeft: "auto", fontSize: "1.5rem", opacity: 0.5 }}>
                                    →
                                </div>
                            </motion.button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
