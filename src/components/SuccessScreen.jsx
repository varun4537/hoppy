/**
 * SuccessScreen — Shown when user finds a DSO
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import LogEntryModal from "./LogEntryModal";

export default function SuccessScreen() {
    const { dso, goToSelect, redMode } = useGame();
    const [showLogModal, setShowLogModal] = useState(false);

    if (!dso) return null;

    return (
        <div className={`success-screen ${redMode ? "red-mode" : ""}`}>
            <motion.div
                className="success-card"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="success-emoji">🔭</div>
                <h1 className="success-title">You found {dso.name}!</h1>
                <p className="success-fullname">{dso.fullName}</p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="success-funfact"
                >
                    <span className="funfact-icon">💡</span>
                    <p>{dso.funFact}</p>
                </motion.div>

                <p className="success-description">{dso.description}</p>

                <div className="success-meta">
                    <span>📐 Type: {dso.type}</span>
                    <span>🌟 Mag: {dso.magnitude}</span>
                    <span>📍 {dso.constellation}</span>
                </div>

                <div className="success-actions" style={{ flexDirection: "column", gap: "1rem" }}>
                    <button className="success-btn primary" onClick={() => setShowLogModal(true)}>
                        📝 Log This Sighting
                    </button>
                    <button className="success-btn secondary" onClick={goToSelect}>
                        Back to List
                    </button>
                </div>
            </motion.div>

            <LogEntryModal
                isOpen={showLogModal}
                onClose={() => setShowLogModal(false)}
                object={dso}
            />
        </div>
    );
}
