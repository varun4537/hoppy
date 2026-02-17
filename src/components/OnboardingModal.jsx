import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "../context/GameContext";

const SLIDES = [
    {
        title: "Welcome to Hoppy!",
        emoji: "👋",
        desc: "Your personal guide to the night sky. Learn to 'star hop' from bright stars to deep-sky treasures using your own telescope."
    },
    {
        title: "Pick a Target",
        emoji: "🎯",
        desc: "Choose a Messier object from the list. We'll guide you step-by-step from a bright naked-eye star to your target."
    },
    {
        title: "Match the View",
        emoji: "🔭",
        desc: "The red circles represent your telescope's view. Simply nudge your scope until the stars in the sky match the screen."
    },
    {
        title: "Protect Your Eyes",
        emoji: "🔴",
        desc: "Toggle 'Red Light Mode' in Settings to preserve your dark adaptation. Setup your equipment there too!"
    }
];

export default function OnboardingModal({ isOpen, onClose }) {
    const [index, setIndex] = useState(0);
    const { redMode } = useGame();

    if (!isOpen) return null;

    const nextSlide = () => {
        if (index < SLIDES.length - 1) {
            setIndex(index + 1);
        } else {
            onClose();
        }
    };

    const prevSlide = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <div className="onboarding-backdrop" style={{ zIndex: 1000 }}>
            <motion.div
                className={`onboarding-modal ${redMode ? "red-mode-onboarding" : ""}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
            >
                <div className="onboarding-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="slide-container"
                        >
                            <div className="slide-emoji">{SLIDES[index].emoji}</div>
                            <h2 className="slide-title">{SLIDES[index].title}</h2>
                            <p className="slide-desc">{SLIDES[index].desc}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="dots-container">
                        {SLIDES.map((_, i) => (
                            <div
                                key={i}
                                className={`dot ${i === index ? "active" : ""}`}
                                onClick={() => setIndex(i)}
                            />
                        ))}
                    </div>

                    <div className="modal-actions">
                        {index > 0 ? (
                            <button className="onboard-btn secondary" onClick={prevSlide}>Back</button>
                        ) : (
                            <div style={{ flex: 1 }} /> // Spacer
                        )}
                        <button className="onboard-btn primary" onClick={nextSlide}>
                            {index === SLIDES.length - 1 ? "Get Started" : "Next"}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
