import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import { useState } from "react";
import PrivacyModal from "./PrivacyModal";
import EQUIPMENT from "../data/equipment";

export default function SettingsScreen() {
    const {
        equipment,
        setEquipment,
        equipmentList,
        equipmentIndex,
        setEquipmentIndex,
        allEquipment,
        customEquipment,
        addCustomEquipment,
        removeCustomEquipment,
        addEquipment,
        removeEquipment,
        goToSelect,
        goToAbout,
        redMode,
        toggleRedMode,
        showFOV,
        setShowFOV,
        user,
        logout
    } = useGame();

    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    // Simple state for adding custom equipment
    const [isAddingEquip, setIsAddingEquip] = useState(false);
    const [newEquipName, setNewEquipName] = useState("");
    const [newEquipFOV, setNewEquipFOV] = useState("");

    const handleAddEquip = (e) => {
        e.preventDefault();
        if (!newEquipName || !newEquipFOV) return;

        const fov = parseFloat(newEquipFOV);
        if (isNaN(fov) || fov <= 0) return;

        addCustomEquipment({
            id: `custom_${Date.now()}`,
            name: newEquipName,
            fov: fov,
            fovLabel: `${fov}° field`,
            icon: "🔭",
            shortName: "view-widths",
            description: "Custom equipment",
            isCustom: true
        });

        setIsAddingEquip(false);
        setNewEquipName("");
        setNewEquipFOV("");
    };

    return (
        <div className={`settings-screen ${redMode ? "red-mode" : ""}`}>
            {/* Background Layers */}
            <div className="login-bg-layer" />
            <div className="login-noise" />

            <div className="settings-container">
                {/* Header */}
                <header className="settings-header">
                    <button onClick={goToSelect} className="back-btn">← Back</button>
                    <h1>Settings</h1>
                    <div style={{ width: 40 }} />
                </header>

                <div className="settings-content">
                    {/* Account */}
                    <section className="settings-section">
                        <h2>Account</h2>
                        <div className="glass-panel account-panel">
                            <div>
                                <div className="user-name">{user?.displayName || "Guest Astronomer"}</div>
                                <div className="user-email">{user?.email ? user.email : (user?.isAnonymous ? "Guest Session" : "Not logged in")}</div>
                            </div>
                            <button onClick={logout} className="logout-btn-small">
                                Sign Out
                            </button>
                        </div>
                        <div className="glass-panel account-panel">
                            {/* ... */}
                        </div>
                        <button className="settings-btn secondary" onClick={goToAbout} style={{ marginTop: "1rem" }}>
                            ℹ️ About Hoppy
                        </button>
                    </section>

                    {/* Preferences */}
                    <section className="settings-section">
                        <h2>Preferences</h2>
                        <div className="glass-panel">
                            <label className="pref-row">
                                <span>🔴 Red Light Mode</span>
                                <input
                                    type="checkbox"
                                    checked={redMode}
                                    onChange={toggleRedMode}
                                    className="toggle-checkbox"
                                />
                            </label>
                            <label className="pref-row">
                                <span>Show FOV Circles</span>
                                <input
                                    type="checkbox"
                                    checked={showFOV}
                                    onChange={(e) => setShowFOV(e.target.checked)}
                                    className="toggle-checkbox"
                                />
                            </label>
                        </div>
                    </section>

                    {/* Equipment */}
                    <section className="settings-section">
                        <h2>Equipment</h2>
                        <div className="glass-panel">
                            <div className="equip-list-mini">
                                {allEquipment.map((eq, idx) => (
                                    <div key={eq.id || idx} className={`equip-item-mini ${equipmentIndex === idx ? "active" : ""}`} onClick={() => setEquipmentIndex(idx)}>
                                        <span className="equip-icon-mini">{eq.icon}</span>
                                        <div className="equip-info-mini">
                                            <div className="equip-name-mini">{eq.name}</div>
                                            <div className="equip-fov-mini">{eq.fovLabel}</div>
                                        </div>
                                        {eq.isCustom && (
                                            <button
                                                className="delete-equip-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (confirm(`Remove ${eq.name}?`)) {
                                                        removeCustomEquipment(idx - EQUIPMENT.length);
                                                    }
                                                }}
                                            >✕</button>
                                        )}
                                        {equipmentIndex === idx && <span className="check-mark">✓</span>}
                                    </div>
                                ))}
                            </div>

                            {!isAddingEquip ? (
                                <button className="add-equip-btn" onClick={() => setIsAddingEquip(true)}>
                                    + Add Custom Equipment
                                </button>
                            ) : (
                                <form onSubmit={handleAddEquip} className="add-equip-form">
                                    <input
                                        type="text"
                                        placeholder="Name (e.g. My 6 inch Dob)"
                                        value={newEquipName}
                                        onChange={(e) => setNewEquipName(e.target.value)}
                                        className="equip-input"
                                        autoFocus
                                    />
                                    <input
                                        type="number"
                                        placeholder="FOV in Degrees (e.g. 1.5)"
                                        value={newEquipFOV}
                                        onChange={(e) => setNewEquipFOV(e.target.value)}
                                        className="equip-input"
                                        step="0.1"
                                    />
                                    <div className="form-actions">
                                        <button type="button" onClick={() => setIsAddingEquip(false)}>Cancel</button>
                                        <button type="submit" disabled={!newEquipName || !newEquipFOV}>Add</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </section>

                    {/* About */}
                    <section className="about-section">
                        <p>Hoppy v1.0 • Fun Science Project</p>
                        <div className="legal-links">
                            <button onClick={() => setShowPrivacy(true)}>Privacy Policy</button>
                            <span className="divider">•</span>
                            <button onClick={() => setShowTerms(true)}>Terms of Service</button>
                        </div>
                    </section>
                </div>
            </div>

            <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} type="privacy" />
            <PrivacyModal isOpen={showTerms} onClose={() => setShowTerms(false)} type="terms" />
        </div>
    );
}
