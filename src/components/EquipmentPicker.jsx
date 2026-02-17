/**
 * EquipmentPicker — slide-up modal for selecting astronomical equipment
 */
import { motion, AnimatePresence } from "framer-motion";
import EQUIPMENT from "../data/equipment";
import { useGame } from "../context/GameContext";

export default function EquipmentPicker({ isOpen, onClose }) {
    const { allEquipment, equipmentIndex, setEquipmentIndex } = useGame();

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="info-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="info-modal equipment-modal"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 28, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="info-close" onClick={onClose}>✕</button>

                    <div className="equip-header">
                        <span className="equip-header-icon">🔭</span>
                        <div>
                            <div className="info-title">Your Equipment</div>
                            <div className="equip-subtitle">
                                This sets the "view-widths" in hop instructions
                            </div>
                        </div>
                    </div>

                    <div className="equip-list">
                        {allEquipment.map((eq, index) => (
                            <button
                                key={eq.id || index}
                                className={`equip-option ${equipmentIndex === index ? "active" : ""}`}
                                onClick={() => { setEquipmentIndex(index); onClose(); }}
                            >
                                <span className="equip-icon">{eq.icon}</span>
                                <div className="equip-info">
                                    <div className="equip-name">{eq.name}</div>
                                    <div className="equip-description">{eq.description}</div>
                                </div>
                                <div className="equip-fov">{eq.fovLabel}</div>
                                {equipmentIndex === index && (
                                    <span className="equip-check">✓</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="equip-tip">
                        💡 Tip: Hold your fist at arm's length — it covers about 10° of sky.
                        Three finger-widths ≈ 5°.
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
