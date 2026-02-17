import { motion, AnimatePresence } from "framer-motion";

export default function PrivacyModal({ isOpen, onClose, type = "privacy" }) {
    if (!isOpen) return null;

    const title = type === "privacy" ? "Privacy Policy" : "Terms of Service";

    return (
        <div className="info-backdrop" onClick={onClose} style={{ zIndex: 200 }}>
            <motion.div
                className="info-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                style={{ maxHeight: "80vh" }}
            >
                <button className="info-close" onClick={onClose}>✕</button>

                <div className="info-header">
                    <span className="info-emoji">{type === "privacy" ? "🔒" : "📜"}</span>
                    <div>
                        <h2 className="info-title">{title}</h2>
                        <span className="info-designation">Fun Science Project Edition</span>
                    </div>
                </div>

                <div className="info-description" style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
                    {type === "privacy" ? (
                        <>
                            <strong>1. Data Collection</strong>
                            {"\n"}We do not collect personal data. Authentication is handled securely by Firebase to save your progress (custom hops and viewing history). We don't sell or share your data because... well, we're just stargazing enthusiasts building a fun science project.

                            {"\n\n"}<strong>2. Local Storage</strong>
                            {"\n"}We use your browser's local storage to remember your red-light mode preference and telescope equipment settings. That's it.

                            {"\n\n"}<strong>3. Location</strong>
                            {"\n"}If you enable location services (future feature), coordinates will stay on your device to calculate accurate star positions. We don't track you.
                        </>
                    ) : (
                        <>
                            <strong>1. Usage</strong>
                            {"\n"}Hoppy is a free educational tool designed to help you find deep-sky objects. Use it to learn and explore the night sky!

                            {"\n\n"}<strong>2. Safety Warning</strong>
                            {"\n"}Please be careful when using this app at night. Don't walk around while staring at your screen—tripping over a telescope tripod is distinctively unfun.

                            {"\n\n"}<strong>3. Disclaimer</strong>
                            {"\n"}We strive for accuracy, but this is a hobby project. Don't use it for critical navigation or orbital mechanics calculations. Have fun and enjoy the stars.
                        </>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
