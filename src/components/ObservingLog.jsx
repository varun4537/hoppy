import { useGame } from "../context/GameContext";
import { motion } from "framer-motion";

export default function ObservingLog() {
    const { observingLog, deleteLogEntry, goToSelect, redMode } = useGame();

    const total = observingLog.length;
    const unique = new Set(observingLog.map(e => e.objectId)).size;

    return (
        <div className={`builder-screen ${redMode ? "red-mode-log-screen" : ""}`} style={{ paddingBottom: "5rem" }}>
            <div className="builder-header" style={{ maxWidth: "600px", width: "100%" }}>
                <button className="builder-back" onClick={goToSelect}>← Back</button>
                <h2 style={{ textAlign: "center" }}>My Observing Log</h2>
                <div style={{ width: "40px" }} /> {/* Spacer */}
            </div>

            <div className="log-stats-container">
                <div className="log-stat">
                    <span className="stat-number">{total}</span>
                    <span className="stat-label">Total Sighted</span>
                </div>
                <div className="log-stat">
                    <span className="stat-number">{unique}</span>
                    <span className="stat-label">Unique Objects</span>
                </div>
            </div>

            <div className="builder-list" style={{ width: "100%", maxWidth: "600px" }}>
                {observingLog.length === 0 ? (
                    <div className="create-hop-card" style={{ marginTop: "2rem", borderStyle: "solid" }}>
                        <span className="create-hop-icon">🔭</span>
                        <p>Your logbook is empty.</p>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                            Complete a star hop and click "Log It!" to start recording your journey.
                        </p>
                    </div>
                ) : (
                    observingLog.sort((a, b) => b.date - a.date).map(entry => (
                        <motion.div
                            key={entry.id}
                            className="equip-option"
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.5rem" }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                                <span className="equip-name" style={{ fontSize: "1rem" }}>{entry.objectName}</span>
                                <span className="equip-desc">{new Date(entry.date).toLocaleDateString()}</span>
                            </div>

                            {entry.equipment && (
                                <div className="equip-badge" style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}>
                                    🔭 {entry.equipment}
                                </div>
                            )}

                            {entry.notes && (
                                <div className="equip-tip" style={{ width: "100%", textAlign: "left", fontStyle: "italic" }}>
                                    "{entry.notes}"
                                </div>
                            )}

                            <div style={{ width: "100%", textAlign: "right", marginTop: "0.5rem" }}>
                                <button
                                    className="bw-remove"
                                    style={{ marginLeft: "auto", width: "28px", height: "28px" }}
                                    onClick={(e) => { e.stopPropagation(); deleteLogEntry(entry.id); }}
                                >
                                    🗑️
                                </button>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
}
