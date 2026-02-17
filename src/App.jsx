
import { GameProvider, useGame } from "./context/GameContext";
import ObjectSelect from "./components/ObjectSelect";
import HopScreen from "./components/HopScreen";
import SuccessScreen from "./components/SuccessScreen";
import CustomHopBuilder from "./components/CustomHopBuilder";
import EquipmentPicker from "./components/EquipmentPicker";
import LoginScreen from "./components/LoginScreen";
import SettingsScreen from "./components/SettingsScreen";
import { auth } from "./lib/firebase"; // Optional usage directly
import "./index.css";

import { useState, useEffect } from "react";
import OnboardingModal from "./components/OnboardingModal";
import ObservingLog from "./components/ObservingLog";
import AboutScreen from "./components/AboutScreen";
import ConstellationList from "./components/ConstellationList";
import ConstellationDetail from "./components/ConstellationDetail";

function AppContent() {
  const { screen, user, authLoading } = useGame();
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("hoppy_onboarding_seen");
    if (!seen) {
      setShowOnboarding(true);
    }
  }, []);

  const closeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem("hoppy_onboarding_seen", "true");
  };

  if (authLoading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020408",
        color: "#44ccff"
      }}>
        Loading Star Map...
      </div>
    );
  }

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <>
      <OnboardingModal isOpen={showOnboarding} onClose={closeOnboarding} />
      {screen === "select" && <ObjectSelect />}
      {screen === "hop" && <HopScreen />}
      {screen === "success" && <SuccessScreen />}
      {screen === "builder" && <CustomHopBuilder />}
      {screen === "constellations" && <ConstellationList />}
      {screen === "constellation-detail" && <ConstellationDetail />}
      {screen === "settings" && <SettingsScreen />}
      {screen === "log" && <ObservingLog />}
      {screen === "about" && <AboutScreen />}
    </>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
