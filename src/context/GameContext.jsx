/**
 * GameContext — manages global game state
 * 
 * Tracks: current screen, hop, step index, red light mode,
 *         equipment selection, custom hops
 */
import { createContext, useContext, useState, useCallback, useEffect } from "react";
import EQUIPMENT from "../data/equipment";
import HOPS from "../data/hops";
import { DSOs } from "../data/stars";
import { auth, googleProvider, signInWithPopup, signInAnonymously, signOut, onAuthStateChanged } from "../lib/firebase";

const GameContext = createContext(null);

// Load custom hops from localStorage
function loadCustomHops() {
    try {
        const raw = localStorage.getItem("hoppy_custom_hops");
        return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
}

export function GameProvider({ children }) {
    const [screen, setScreen] = useState("select"); // "select" | "hop" | "success" | "builder"
    const [currentHopId, setCurrentHopId] = useState(null);
    const [stepIndex, setStepIndex] = useState(0);
    const [redMode, setRedMode] = useState(() => {
        const saved = localStorage.getItem("hoppy_red_mode");
        return saved ? JSON.parse(saved) : true;
    });
    const [showConstellations, setShowConstellations] = useState(true);
    const [selectedConstellation, setSelectedConstellation] = useState(null); // New state
    const [customHops, setCustomHops] = useState(loadCustomHops);

    // Auth State
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const [authError, setAuthError] = useState(null);

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const signInGoogle = useCallback(async () => {
        setAuthError(null);
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Google Sign In Error:", error);
            setAuthError(error.message);
        }
    }, []);

    const signInGuest = useCallback(async () => {
        setAuthError(null);
        try {
            await signInAnonymously(auth);
        } catch (error) {
            console.error("Guest Sign In Error:", error);
            setAuthError(error.message);
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout Error:", error);
        }
    }, []);

    // Equipment logic moved below
    const allHops = { ...HOPS, ...customHops };
    const hop = currentHopId ? allHops[currentHopId] : null;
    const currentStep = hop ? hop.steps[stepIndex] : null;
    const totalSteps = hop ? hop.steps.length : 0;

    // Derived DSO (handle custom hops which are like "custom_M45_123")
    const dso = currentHopId ? (
        currentHopId.startsWith("custom_")
            ? DSOs[currentHopId.split("_")[1]]
            : DSOs[currentHopId]
    ) : null;

    // Equipment State
    const [equipmentIndex, setEquipmentIndex] = useState(() => {
        const saved = localStorage.getItem('hoppy_equipment_index');
        return saved ? JSON.parse(saved) : 0;
    });
    const [customEquipment, setCustomEquipment] = useState(() => {
        const saved = localStorage.getItem('hoppy_custom_equipment');
        return saved ? JSON.parse(saved) : [];
    });
    const [showFOV, setShowFOV] = useState(() => {
        const saved = localStorage.getItem('hoppy_show_fov');
        return saved ? JSON.parse(saved) : true;
    });

    const allEquipment = [...EQUIPMENT, ...customEquipment];
    const equipment = allEquipment[equipmentIndex] || allEquipment[0];

    useEffect(() => {
        localStorage.setItem('hoppy_equipment_index', JSON.stringify(equipmentIndex));
    }, [equipmentIndex]);

    useEffect(() => {
        localStorage.setItem('hoppy_custom_equipment', JSON.stringify(customEquipment));
    }, [customEquipment]);

    useEffect(() => {
        localStorage.setItem('hoppy_show_fov', JSON.stringify(showFOV));
    }, [showFOV]);

    useEffect(() => {
        localStorage.setItem("hoppy_red_mode", JSON.stringify(redMode));
        if (redMode) document.body.classList.add("red-mode");
        else document.body.classList.remove("red-mode");
    }, [redMode]);

    const addCustomEquipment = (newEquip) => {
        setCustomEquipment(prev => [...prev, newEquip]);
    };

    const removeCustomEquipment = (index) => {
        // Adjust current index if needed
        if (equipmentIndex >= EQUIPMENT.length + index) {
            setEquipmentIndex(0); // Reset to default safely
        }
        setCustomEquipment(prev => prev.filter((_, i) => i !== index));
    };

    // Persist equipment choice (old, now handled by equipmentIndex)
    // useEffect(() => {
    //     localStorage.setItem("hoppy_equipment", equipmentId);
    // }, [equipmentId]);

    // This setEquipment is now redundant with the new equipment state management
    // const setEquipment = useCallback((id) => {
    //     setEquipmentId(id);
    // }, []);

    const startHop = useCallback((hopId) => {
        setCurrentHopId(hopId);
        setStepIndex(0);
        setScreen("hop");
    }, []);

    const nextStep = useCallback(() => {
        if (!hop) return;
        if (currentStep?.isTarget) {
            setScreen("success");
        } else if (stepIndex < totalSteps - 1) {
            setStepIndex((i) => i + 1);
        }
    }, [hop, currentStep, stepIndex, totalSteps]);

    const prevStep = useCallback(() => {
        if (stepIndex > 0) setStepIndex((i) => i - 1);
    }, [stepIndex]);

    const goToSelect = useCallback(() => {
        setScreen("select");
        setCurrentHopId(null);
        setStepIndex(0);
    }, []);

    const goToBuilder = useCallback(() => {
        setScreen("builder");
    }, []);

    const goToSettings = useCallback(() => {
        setScreen("settings");
    }, []);

    const goToLog = useCallback(() => {
        setScreen("log");
    }, []);

    const goToAbout = useCallback(() => {
        setScreen("about");
    }, []);

    const goToConstellations = useCallback(() => {
        setScreen("constellations");
    }, []);

    const goToConstellationDetail = useCallback((constellation) => {
        setSelectedConstellation(constellation);
        setScreen("constellation-detail");
    }, []);

    const toggleRedMode = useCallback(() => {
        setRedMode((v) => !v);
    }, []);

    const toggleConstellations = useCallback(() => {
        setShowConstellations((v) => !v);
    }, []);

    const saveCustomHop = useCallback((hop) => {
        setCustomHops((prev) => {
            const next = { ...prev, [hop.id]: hop };
            localStorage.setItem("hoppy_custom_hops", JSON.stringify(next));
            return next;
        });
    }, []);

    const deleteCustomHop = useCallback((hopId) => {
        setCustomHops((prev) => {
            const next = { ...prev };
            delete next[hopId];
            localStorage.setItem("hoppy_custom_hops", JSON.stringify(next));
            return next;
        });
    }, []);

    // Observing Log Logic
    const [observingLog, setObservingLog] = useState(() => {
        try {
            const saved = localStorage.getItem("hoppy_observing_log");
            return saved ? JSON.parse(saved) : [];
        } catch { return []; }
    });

    useEffect(() => {
        localStorage.setItem("hoppy_observing_log", JSON.stringify(observingLog));
    }, [observingLog]);

    const logObservation = useCallback((object, notes = "", date = Date.now()) => {
        setObservingLog(prev => {
            // Check if already logged today? Or allow multiple?
            // Let's allow multiple but maybe warn? For now simple append.
            const newEntry = {
                id: crypto.randomUUID(), // Unique entry ID
                objectId: object.id || object.name, // Link to object
                objectName: object.name,
                date,
                equipment: equipment.name,
                notes
            };
            return [newEntry, ...prev];
        });
    }, [equipment]);

    const deleteLogEntry = useCallback((entryId) => {
        setObservingLog(prev => prev.filter(e => e.id !== entryId));
    }, []);

    const value = {
        screen,
        currentHopId,
        hop,
        currentStep,
        stepIndex,
        totalSteps,
        dso,
        redMode,
        showConstellations,
        equipment,
        allEquipment,
        equipmentIndex,
        setEquipmentIndex,
        customEquipment,
        addCustomEquipment,
        removeCustomEquipment,
        customHops,
        allHops,
        startHop,
        nextStep,
        prevStep,
        goToSelect,

        goToBuilder,
        goToSettings,
        goToLog,
        goToAbout,
        goToConstellations,
        goToConstellationDetail,
        selectedConstellation,
        // setEquipment, // Old setEquipment, might be redundant
        toggleRedMode,
        toggleConstellations,
        saveCustomHop,
        deleteCustomHop,
        isFirstStep: stepIndex === 0,
        isLastStep: stepIndex === totalSteps - 1,
        user,
        authLoading,
        authError,
        signInGoogle,
        signInGuest,
        logout,
        observingLog,
        logObservation,
        deleteLogEntry
    };

    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error("useGame must be used inside GameProvider");
    return ctx;
}
