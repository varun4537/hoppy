import { useGame } from "../context/GameContext";
import { motion } from "framer-motion";

export default function AboutScreen() {
    const { goToSettings, redMode } = useGame();

    return (
        <div className={`builder-screen ${redMode ? "red-mode" : ""}`} style={{ paddingBottom: "5rem" }}>
            <div className="builder-header" style={{ maxWidth: "600px", width: "100%" }}>
                <button className="builder-back" onClick={goToSettings}>← Back</button>
                <h2 style={{ textAlign: "center" }}>About Hoppy</h2>
                <div style={{ width: "40px" }} /> {/* Spacer */}
            </div>

            <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    maxWidth: "600px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    padding: "1rem"
                }}
            >
                <div className="about-hero" style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔭</div>
                    <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>Hoppy</h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>v1.0.0</p>
                    <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
                        Your personal guide to the cosmos. Hoppy helps you find deep-sky objects using the traditional method of <strong>star hopping</strong>.
                    </p>
                </div>

                <div className="bn-section">
                    <h3>✨ Features</h3>
                    <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.8", color: "var(--text-secondary)" }}>
                        <li>Interactive Star Map with Red Light Mode</li>
                        <li>Guided Hops to Messier Objects</li>
                        <li>Custom Hop Builder</li>
                        <li>Observing Logbook</li>
                        <li>Equipment Field of View Simulator</li>
                    </ul>
                </div>

                <div className="bn-section">
                    <h3>🚀 Credits</h3>
                    <p style={{ lineHeight: "1.6", color: "var(--text-secondary)" }}>
                        Created by <strong>Varun</strong> using React, Vite, and Firebase.
                    </p>
                    <p style={{ marginTop: "0.5rem", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                        Star data derived from the <strong>NASA/Simbad</strong> databases.
                    </p>
                </div>

                <div className="bn-section">
                    <h3>🔗 Links</h3>
                    <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
                        <a
                            href="https://github.com/varun4537/hoppy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="onboard-btn secondary"
                            style={{ textDecoration: "none", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                        >
                            <span style={{ fontSize: "1.2rem" }}>🐙</span> GitHub
                        </a>
                        <a
                            href="https://github.com/varun4537/hoppy/issues"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="onboard-btn secondary"
                            style={{ textDecoration: "none", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                        >
                            <span style={{ fontSize: "1.2rem" }}>🐞</span> Report Bug
                        </a>
                    </div>
                </div>

                <p style={{ textAlign: "center", fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", marginTop: "2rem" }}>
                    © {new Date().getFullYear()} Hoppy Star Guide. All rights reserved.
                </p>
            </motion.div>
        </div>
    );
}
