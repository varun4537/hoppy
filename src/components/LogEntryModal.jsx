import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "../context/GameContext";

export default function LogEntryModal({ isOpen, onClose, object }) {
    const { logObservation, redMode } = useGame();
    const [notes, setNotes] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        if (isOpen) {
            setNotes("");
            // Default to now, formatted for datetime-local? or just date?
            // "2024-05-15"
            const now = new Date();
            setDate(now.toISOString().split("T")[0]);
        }
    }, [isOpen]);

    if (!isOpen || !object) return null;

    const handleSave = () => {
        // Convert date string to timestamp if needed, or store as is
        // Let's store timestamp for sorting
        const timestamp = new Date(date).getTime();
        logObservation(object, notes, timestamp);
        onClose();
    };

    return (
        <div className="onboarding-backdrop" style={{ zIndex: 1100 }}>
            <motion.div
                className={`info-modal ${redMode ? "red-mode-log" : ""}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{ width: "90%", maxWidth: "450px" }}
            >
                <div className="info-header">
                    <span className="info-emoji">📝</span>
                    <div>
                        <h2 className="info-title">Log Observation</h2>
                        <span className="info-designation">Record your sighting of {object.name}</span>
                    </div>
                </div>

                <div className="bn-section" style={{ marginTop: "1rem" }}>
                    <label>Date Viewed</label>
                    <input
                        type="date"
                        className="builder-search"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ width: "100%" }}
                    />
                </div>

                <div className="bn-section" style={{ marginTop: "1rem" }}>
                    <label>Field Notes</label>
                    <textarea
                        className="bn-textarea"
                        placeholder="What did you see? (e.g. Faint fuzz, resolved stars...)"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        style={{ height: "100px" }}
                    />
                </div>

                <div className="modal-actions">
                    <button className="onboard-btn secondary" onClick={onClose}>Cancel</button>
                    <button className="onboard-btn primary" onClick={handleSave}>Save Entry</button>
                </div>
            </motion.div>
        </div>
    );
}
