/**
 * HopScreen — Guided star hopping experience
 * Now with equipment selector and FOV-based view-width instructions
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "../context/GameContext";
import SkyMap from "./SkyMap";
import InfoModal from "./InfoModal";
import EquipmentPicker from "./EquipmentPicker";
import { STARS } from "../data/stars";
import { angularDistance, cardinalDirection, formatViewLength } from "../data/equipment";

export default function HopScreen() {
    const {
        hop,
        currentStep,
        stepIndex,
        totalSteps,
        dso,
        nextStep,
        prevStep,
        goToSelect,
        isFirstStep,
        redMode,
        toggleRedMode,
        showConstellations,
        toggleConstellations,
        equipment,
    } = useGame();

    const [showInfo, setShowInfo] = useState(false);
    const [showEquipment, setShowEquipment] = useState(false);

    // Compute FOV-based hop hint for current step
    const fovHint = useMemo(() => {
        if (!currentStep?.arrows?.length) return null;

        const hints = [];
        for (const [fromKey, toKey] of currentStep.arrows) {
            const from = STARS[fromKey];
            // Target can be a star or a DSO marker
            const toClean = toKey.replace(/_target$/, "");
            const toDso = dso && toClean === dso.name ? dso : null;
            const toStar = STARS[toKey] || STARS[toClean];
            const to = toStar || (toDso ? { ra: toDso.ra, dec: toDso.dec } : null);

            if (!from || !to) continue;

            const dist = angularDistance(from.ra, from.dec, to.ra, to.dec);
            const dir = cardinalDirection(from.ra, from.dec, to.ra, to.dec);
            const viewLen = formatViewLength(dist, equipment);
            hints.push({ dist, dir, viewLen, fromName: from.name || fromKey });
        }

        if (hints.length === 0) return null;
        const h = hints[0];
        return `Move ${h.viewLen} ${h.dir} (${h.dist.toFixed(1)}°)`;
    }, [currentStep, equipment, dso]);

    if (!hop || !currentStep) return null;

    return (
        <div className={`hop-screen ${redMode ? "red-mode" : ""}`}>
            <SkyMap step={currentStep} dso={dso} equipment={equipment} />

            {/* Top bar */}
            <div className="hop-top-bar">
                <button className="hop-back-btn" onClick={goToSelect}>
                    ← Back
                </button>
                <div className="hop-progress">
                    {hop.steps.map((_, i) => (
                        <span
                            key={i}
                            className={`progress-dot ${i === stepIndex ? "active" : ""} ${i < stepIndex ? "done" : ""}`}
                        />
                    ))}
                </div>
                <div className="hop-top-actions">
                    <button
                        className="hop-icon-btn"
                        onClick={() => setShowEquipment(true)}
                        title="Change equipment"
                    >
                        🔭
                    </button>
                    <button
                        className="hop-icon-btn"
                        onClick={() => setShowInfo(true)}
                        title="Object info"
                    >
                        ℹ️
                    </button>
                    <button
                        className={`hop-icon-btn ${showConstellations ? "active" : ""}`}
                        onClick={toggleConstellations}
                        title="Toggle constellations"
                    >
                        🌌
                    </button>
                    <button className="red-toggle-mini" onClick={toggleRedMode} title="Toggle red light">
                        {redMode ? "🔴" : "💡"}
                    </button>
                </div>
                <span className="hop-step-count">
                    {stepIndex + 1}/{totalSteps}
                </span>
            </div>

            {/* Touch hint (first step only) */}
            {stepIndex === 0 && (
                <motion.div
                    className="touch-hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    👆 Drag to pan · Pinch to zoom
                </motion.div>
            )}

            {/* Bottom instruction panel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={stepIndex}
                    className="hop-bottom-panel"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                >
                    <h2 className="hop-step-title">{currentStep.title}</h2>
                    <p className="hop-instruction">{currentStep.instruction}</p>
                    {fovHint && (
                        <div className="hop-fov-hint">
                            <span className="fov-icon">📐</span>
                            <span className="fov-text">{fovHint}</span>
                            <span className="fov-equip">{equipment.name}</span>
                        </div>
                    )}
                    <div className="hop-nav">
                        <button
                            className="hop-nav-btn prev"
                            onClick={prevStep}
                            disabled={isFirstStep}
                        >
                            ‹ Prev
                        </button>
                        <button className="hop-nav-btn next" onClick={nextStep}>
                            {currentStep.isTarget ? "🎉 Done!" : "Next ›"}
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Info Modal */}
            {showInfo && (
                <InfoModal
                    dso={dso}
                    onClose={() => setShowInfo(false)}
                    redMode={redMode}
                />
            )}

            {/* Equipment Picker */}
            <EquipmentPicker
                isOpen={showEquipment}
                onClose={() => setShowEquipment(false)}
            />
        </div>
    );
}
