import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup as firebaseSignInWithPopup,
    signInAnonymously as firebaseSignInAnonymously,
    signOut as firebaseSignOut,
    onAuthStateChanged as firebaseOnAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Check if config is provided
const isConfigured = Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.apiKey.length > 0
);

let app;
let auth;
let googleProvider;

if (isConfigured) {
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        googleProvider = new GoogleAuthProvider();
    } catch (e) {
        console.error("Firebase Init Error:", e);
        isConfigured = false; // Fallback to mock
    }
}

if (!isConfigured) {
    console.warn("Firebase not configured or init failed. Using Mock Auth.");
    auth = { currentUser: null }; // Mock auth object
    googleProvider = {};
}

// Wrapper functions
export const signInWithPopup = async (_, provider) => {
    if (isConfigured) return firebaseSignInWithPopup(auth, provider);
    // Simulate network delay
    await new Promise(r => setTimeout(r, 800));
    throw new Error("Google Login requires valid Firebase configuration in .env");
};

export const signInAnonymously = async (_) => {
    if (isConfigured) return firebaseSignInAnonymously(auth);

    // Mock Guest Login
    await new Promise(r => setTimeout(r, 500));
    const mockUser = { uid: "guest-" + Date.now(), isAnonymous: true, displayName: "Guest" };
    localStorage.setItem("mock_user", JSON.stringify(mockUser));

    // Trigger update
    window.dispatchEvent(new CustomEvent("mock-auth-change", { detail: mockUser }));
    return { user: mockUser };
};

export const signOut = async (_) => {
    if (isConfigured) return firebaseSignOut(auth);

    localStorage.removeItem("mock_user");
    window.dispatchEvent(new CustomEvent("mock-auth-change", { detail: null }));
};

export const onAuthStateChanged = (_, callback) => {
    if (isConfigured) return firebaseOnAuthStateChanged(auth, callback);

    // Initial check
    const stored = localStorage.getItem("mock_user");
    if (stored) {
        try {
            callback(JSON.parse(stored));
        } catch {
            callback(null);
        }
    } else {
        callback(null);
    }

    // Listen for changes
    const handler = (e) => callback(e.detail);
    window.addEventListener("mock-auth-change", handler);
    return () => window.removeEventListener("mock-auth-change", handler);
};

export { auth, googleProvider };
