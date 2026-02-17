/**
 * CustomHopBuilder — create your own star-hopping route
 * 
 * Flow: Select target DSO → Pick start star → Add waypoints → Add notes → Save
 */
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "../context/GameContext";
import { STARS, DSOs } from "../data/stars";
import SkyMap from "./SkyMap";

// Searchable list of bright stars (mag < 4.0)
const STAR_OPTIONS = Object.entries(STARS)
    .filter(([, s]) => s.mag < 4.0)
    .sort((a, b) => a[1].mag - b[1].mag)
    .map(([key, s]) => ({
        key,
        label: s.name || key,
        constellation: s.constellation || "",
        mag: s.mag,
        ra: s.ra,
        dec: s.dec,
    }));

const DSO_OPTIONS = Object.entries(DSOs)
    .sort((a, b) => a[1].magnitude - b[1].magnitude)
    .map(([key, d]) => ({
        key,
        label: `${d.name} — ${d.fullName}`,
        mag: d.magnitude,
        ra: d.ra,
        dec: d.dec,
    }));

export default function CustomHopBuilder() {
    const { goToSelect, saveCustomHop, startHop, equipment } = useGame();

    const [builderStep, setBuilderStep] = useState(0); // 0=target, 1=startStar, 2=waypoints, 3=notes
    const [targetDso, setTargetDso] = useState(null);
    const [startStar, setStartStar] = useState(null);
    const [waypoints, setWaypoints] = useState([]);
    const [notes, setNotes] = useState({});
    const [search, setSearch] = useState("");
    const [routeName, setRouteName] = useState("");
    const [visualMode, setVisualMode] = useState(false);

    const filteredStars = useMemo(() => {
        if (!search.trim()) return STAR_OPTIONS.slice(0, 30);
        const q = search.toLowerCase();
        return STAR_OPTIONS.filter(s =>
            s.label.toLowerCase().includes(q) || s.constellation.toLowerCase().includes(q)
        ).slice(0, 30);
    }, [search]);

    const filteredDSOs = useMemo(() => {
        if (!search.trim()) return DSO_OPTIONS.slice(0, 30);
        const q = search.toLowerCase();
        return DSO_OPTIONS.filter(d => d.label.toLowerCase().includes(q)).slice(0, 30);
    }, [search]);

    function addWaypoint(star) {
        if (waypoints.find(w => w.key === star.key)) return;
        setWaypoints([...waypoints, star]);
        setSearch("");
    }

    function removeWaypoint(idx) {
        setWaypoints(waypoints.filter((_, i) => i !== idx));
    }

    function buildAndSave() {
        if (!targetDso || !startStar) return;

        const dso = DSOs[targetDso.key];
        const hopId = `custom_${targetDso.key}_${Date.now()}`;

        // Build steps
        const steps = [];

        // Step 1: Find starting constellation
        steps.push({
            center: [startStar.ra, startStar.dec],
            zoom: 0.8,
            highlight: [startStar.key],
            connectStars: [],
            arrows: [],
            title: `Start at ${startStar.label}`,
            instruction: notes.start || `Begin at ${startStar.label} (magnitude ${startStar.mag.toFixed(1)}).`,
        });

        // Waypoint steps
        let prevKey = startStar.key;
        waypoints.forEach((wp, i) => {
            steps.push({
                center: [wp.ra, wp.dec],
                zoom: 2,
                highlight: [prevKey, wp.key],
                connectStars: [],
                arrows: [[prevKey, wp.key]],
                title: notes[`wp_title_${i}`] || `Hop to ${wp.label}`,
                instruction: notes[`wp_${i}`] || `From ${STARS[prevKey]?.name || prevKey}, hop to ${wp.label}.`,
            });
            prevKey = wp.key;
        });

        // Final step: target
        steps.push({
            center: [dso.ra, dso.dec],
            zoom: 4,
            highlight: [],
            connectStars: [],
            arrows: [[prevKey, `${targetDso.key}_target`]],
            title: `🎉 You found ${dso.name}!`,
            instruction: notes.target || dso.description,
            isTarget: true,
        });

        const hop = {
            id: hopId,
            name: routeName || `My Route to ${dso.name}`,
            subtitle: `Custom hop via ${startStar.label}`,
            constellation: dso.constellation,
            difficulty: dso.difficulty || 3,
            steps,
            isCustom: true,
        };

        saveCustomHop(hop);
        startHop(hopId);
    }

    const stepTitles = ["Pick Your Target", "Choose Starting Star", "Add Waypoints", "Add Notes & Save"];

    // ─────────────────────────────────────────────────────────────
    // VISUAL MODE LOGIC
    // ─────────────────────────────────────────────────────────────

    // Construct the "step" for SkyMap based on current builder state
    const visualStep = useMemo(() => {
        if (!targetDso) return null; // Can't go visual without target? Actually we could for browsing

        // Default center: Target or Start Star or Waypoint
        let center = [targetDso.ra, targetDso.dec];
        let zoom = 1;

        if (builderStep === 1 && startStar) {
            center = [startStar.ra, startStar.dec];
            zoom = 1.2;
        } else if (builderStep === 2) {
            const lastPoint = waypoints.length > 0 ? waypoints[waypoints.length - 1] : startStar;
            if (lastPoint) {
                center = [lastPoint.ra, lastPoint.dec];
                zoom = 1.5;
            }
        }

        // Build arrows
        const arrows = [];
        if (startStar && waypoints.length > 0) {
            let prev = startStar.key;
            waypoints.forEach(wp => {
                arrows.push([prev, wp.key]);
                prev = wp.key;
            });
        }
        if (builderStep === 2 && waypoints.length > 0) {
            // Show arrow to target? Or just user path?
            // Maybe show arrow from last waypoint to cursor? checking...
            // For now just show existing path
        }

        // Highlights
        const highlight = [];
        if (startStar) highlight.push(startStar.key);
        waypoints.forEach(wp => highlight.push(wp.key));
        // Add target if close?

        return {
            center,
            zoom,
            arrows,
            highlight,
            connectStars: [], // Could add constellation lines if we knew them
            isTarget: false, // Don't show target marker yet unless finished? 
            // Actually, showing target marker is helpful
        };
    }, [targetDso, startStar, waypoints, builderStep]);

    function handleObjectClick(key, star) {
        if (builderStep === 1) {
            // Picking start star
            setStartStar({
                key,
                label: star.name || key,
                constellation: star.constellation || "",
                mag: star.mag,
                ra: star.ra,
                dec: star.dec
            });
            // Auto-advance? No, let user confirm or just see it selected
        } else if (builderStep === 2) {
            // Adding waypoints
            // Check if already added
            if (key === startStar?.key || waypoints.find(w => w.key === key)) return;

            addWaypoint({
                key,
                label: star.name || key,
                constellation: star.constellation || "",
                mag: star.mag,
                ra: star.ra,
                dec: star.dec
            });
        }
    }

    return (
        <motion.div
            className="builder-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="builder-header">
                <button className="builder-back" onClick={goToSelect}>← Back</button>
                <h2>✏️ Create Your Hop</h2>
                {builderStep > 0 && builderStep < 3 && (
                    <button
                        className="builder-mode-toggle"
                        onClick={() => setVisualMode(!visualMode)}
                        style={{
                            marginLeft: "auto",
                            padding: "6px 12px",
                            borderRadius: "16px",
                            background: visualMode ? "var(--accent)" : "rgba(255,255,255,0.1)",
                            color: "#fff",
                            border: "none",
                            fontSize: "0.85rem",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                        }}
                    >
                        {visualMode ? "📝 List View" : "🗺️ Map View"}
                    </button>
                )}
                <div className="builder-progress">
                    {stepTitles.map((t, i) => (
                        <div
                            key={i}
                            className={`progress-dot ${i === builderStep ? "active" : ""} ${i < builderStep ? "done" : ""}`}
                            title={t}
                        />
                    ))}
                </div>
            </div>

            <div className="builder-step-title">{stepTitles[builderStep]}</div>

            {/* VISUAL MODE OVERLAY */}
            {visualMode && builderStep > 0 && builderStep < 3 && visualStep ? (
                <div
                    style={{
                        position: "absolute",
                        top: "120px", // Below header approx
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 10,
                        background: "#020408"
                    }}
                >
                    <SkyMap
                        step={visualStep}
                        dso={targetDso}
                        equipment={equipment}
                        onObjectClick={handleObjectClick}
                    />

                    {/* Floating HUD */}
                    <div style={{
                        position: "absolute",
                        bottom: "30px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "rgba(10,14,24,0.85)",
                        padding: "12px 24px",
                        borderRadius: "24px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "8px",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                        pointerEvents: "none", // Let clicks pass through if needed, but buttons need pointer events
                        minWidth: "280px"
                    }}>
                        <div style={{ color: "#e0e6ed", fontSize: "0.95rem", fontWeight: 500, textAlign: "center" }}>
                            {builderStep === 1
                                ? (startStar ? `Selected: ${startStar.label}` : "Tap a star to set Start Point")
                                : "Tap stars to add waypoints"
                            }
                        </div>

                        <div style={{ display: "flex", gap: "10px", pointerEvents: "auto" }}>
                            {builderStep === 1 && startStar && (
                                <button
                                    className="builder-next"
                                    style={{ fontSize: "0.9rem", padding: "6px 16px" }}
                                    onClick={() => setBuilderStep(2)}
                                >
                                    Confirm Start →
                                </button>
                            )}

                            {builderStep === 2 && (
                                <>
                                    <button
                                        className="builder-prev"
                                        style={{ fontSize: "0.9rem", padding: "6px 12px", background: "rgba(255,255,255,0.1)" }}
                                        onClick={() => {
                                            if (waypoints.length > 0) {
                                                const newWp = [...waypoints];
                                                newWp.pop();
                                                setWaypoints(newWp);
                                            } else {
                                                setBuilderStep(1);
                                            }
                                        }}
                                    >
                                        {waypoints.length > 0 ? "Undo Last" : "← Back"}
                                    </button>

                                    {waypoints.length > 0 && (
                                        <button
                                            className="builder-next"
                                            style={{ fontSize: "0.9rem", padding: "6px 16px" }}
                                            onClick={() => setBuilderStep(3)}
                                        >
                                            Done →
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}

            {/* Step 0: Pick target DSO */}
            {builderStep === 0 && (
                <div className="builder-body">
                    <input
                        className="builder-search"
                        placeholder="Search Messier objects…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                    <div className="builder-list">
                        {filteredDSOs.map((d) => (
                            <button
                                key={d.key}
                                className={`builder-item ${targetDso?.key === d.key ? "selected" : ""}`}
                                onClick={() => { setTargetDso(d); setSearch(""); }}
                            >
                                <span className="bi-name">{d.label}</span>
                                <span className="bi-mag">mag {d.mag.toFixed(1)}</span>
                            </button>
                        ))}
                    </div>
                    {targetDso && (
                        <button className="builder-next" onClick={() => setBuilderStep(1)}>
                            Next: Pick Starting Star →
                        </button>
                    )}
                </div>
            )}

            {/* Step 1: Pick start star */}
            {builderStep === 1 && (
                <div className="builder-body">
                    <div className="builder-chosen">
                        Target: <strong>{targetDso.label}</strong>
                    </div>
                    <input
                        className="builder-search"
                        placeholder="Search bright stars…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                    />
                    <div className="builder-list">
                        {filteredStars.map((s) => (
                            <button
                                key={s.key}
                                className={`builder-item ${startStar?.key === s.key ? "selected" : ""}`}
                                onClick={() => { setStartStar(s); setSearch(""); }}
                            >
                                <span className="bi-name">{s.label}</span>
                                <span className="bi-constellation">{s.constellation}</span>
                                <span className="bi-mag">mag {s.mag.toFixed(1)}</span>
                            </button>
                        ))}
                    </div>
                    <div className="builder-nav">
                        <button className="builder-prev" onClick={() => setBuilderStep(0)}>← Back</button>
                        {startStar && (
                            <button className="builder-next" onClick={() => setBuilderStep(2)}>
                                Next: Add Waypoints →
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Step 2: Add waypoints */}
            {builderStep === 2 && (
                <div className="builder-body">
                    <div className="builder-chosen">
                        Route: <strong>{startStar.label}</strong> →
                        {waypoints.map((w, i) => (
                            <span key={i}> {w.label} →</span>
                        ))}
                        <strong> {targetDso.label}</strong>
                    </div>
                    <input
                        className="builder-search"
                        placeholder="Search for waypoint stars (optional)…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="builder-list">
                        {filteredStars
                            .filter(s => s.key !== startStar?.key)
                            .map((s) => (
                                <button
                                    key={s.key}
                                    className={`builder-item ${waypoints.find(w => w.key === s.key) ? "selected" : ""}`}
                                    onClick={() => addWaypoint(s)}
                                >
                                    <span className="bi-name">{s.label}</span>
                                    <span className="bi-constellation">{s.constellation}</span>
                                    <span className="bi-mag">mag {s.mag.toFixed(1)}</span>
                                </button>
                            ))}
                    </div>

                    {waypoints.length > 0 && (
                        <div className="builder-waypoints">
                            <div className="bw-title">Your Waypoints:</div>
                            {waypoints.map((w, i) => (
                                <div key={i} className="bw-item">
                                    <span>{i + 1}. {w.label}</span>
                                    <button className="bw-remove" onClick={() => removeWaypoint(i)}>✕</button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="builder-nav">
                        <button className="builder-prev" onClick={() => setBuilderStep(1)}>← Back</button>
                        <button className="builder-next" onClick={() => setBuilderStep(3)}>
                            Next: Notes & Save →
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Notes & Save */}
            {builderStep === 3 && (
                <div className="builder-body">
                    <input
                        className="builder-search"
                        placeholder="Name your route (optional)"
                        value={routeName}
                        onChange={(e) => setRouteName(e.target.value)}
                    />

                    <div className="builder-notes">
                        <div className="bn-section">
                            <label>Notes for starting at {startStar.label}:</label>
                            <textarea
                                className="bn-textarea"
                                placeholder={`e.g. "Find the W-shape of Cassiopeia high in the north…"`}
                                value={notes.start || ""}
                                onChange={(e) => setNotes({ ...notes, start: e.target.value })}
                            />
                        </div>

                        {waypoints.map((w, i) => (
                            <div key={i} className="bn-section">
                                <label>Notes for hopping to {w.label}:</label>
                                <textarea
                                    className="bn-textarea"
                                    placeholder={`e.g. "Move 2 binocular widths east, look for a faint triangle…"`}
                                    value={notes[`wp_${i}`] || ""}
                                    onChange={(e) => setNotes({ ...notes, [`wp_${i}`]: e.target.value })}
                                />
                            </div>
                        ))}

                        <div className="bn-section">
                            <label>Notes for finding {targetDso.label}:</label>
                            <textarea
                                className="bn-textarea"
                                placeholder="e.g. 'Look for a fuzzy smudge just above the last star…'"
                                value={notes.target || ""}
                                onChange={(e) => setNotes({ ...notes, target: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="builder-nav">
                        <button className="builder-prev" onClick={() => setBuilderStep(2)}>← Back</button>
                        <button className="builder-save" onClick={buildAndSave}>
                            🚀 Save & Try It!
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
