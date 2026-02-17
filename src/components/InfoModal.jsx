/**
 * InfoModal — Glassmorphic slide-up modal showing DSO details
 */
import { motion, AnimatePresence } from "framer-motion";

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

export default function InfoModal({ dso, onClose, redMode }) {
    if (!dso) return null;

    return (
        <AnimatePresence>
            <motion.div
                className={`info-backdrop ${redMode ? "red-mode" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="info-modal"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button className="info-close" onClick={onClose}>✕</button>

                    {/* Header */}
                    <div className="info-header">
                        <span className="info-emoji">{TYPE_EMOJIS[dso.type] || "🌌"}</span>
                        <div>
                            <h2 className="info-title">{dso.fullName}</h2>
                            <span className="info-designation">{dso.name}</span>
                        </div>
                    </div>

                    {/* Quick Facts Grid */}
                    <div className="info-facts">
                        {dso.distance && (
                            <div className="fact-item">
                                <span className="fact-label">Distance</span>
                                <span className="fact-value">{dso.distance}</span>
                            </div>
                        )}
                        <div className="fact-item">
                            <span className="fact-label">Magnitude</span>
                            <span className="fact-value">{dso.magnitude}</span>
                        </div>
                        <div className="fact-item">
                            <span className="fact-label">Type</span>
                            <span className="fact-value fact-type">{dso.type}</span>
                        </div>
                        <div className="fact-item">
                            <span className="fact-label">Constellation</span>
                            <span className="fact-value">{dso.constellation}</span>
                        </div>
                        <div className="fact-item">
                            <span className="fact-label">Best Season</span>
                            <span className="fact-value">{dso.bestSeason}</span>
                        </div>
                        <div className="fact-item">
                            <span className="fact-label">Difficulty</span>
                            <span
                                className="fact-value"
                                style={{ color: diffColors[dso.difficulty] }}
                            >
                                {diffLabels[dso.difficulty]}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="info-description">{dso.description}</p>

                    {/* Fun Fact */}
                    {dso.funFact && (
                        <div className="info-funfact">
                            <span className="funfact-icon">💡</span>
                            <p>{dso.funFact}</p>
                        </div>
                    )}

                    {/* NASA Link */}
                    {dso.nasaUrl && (
                        <a
                            href={dso.nasaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="info-nasa-link"
                        >
                            🔭 View on NASA Hubble Catalog →
                        </a>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
