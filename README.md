# 🔭 Hoppy — Star Hopping Guide

**Hoppy** is an interactive astronomy web app designed to help you find deep-sky objects (DSOs) using the "star hopping" technique. It simulates the view through your specific telescope or binoculars, guiding you star-by-star from a bright constellation to your target.

![Hoppy Screenshot](https://raw.githubusercontent.com/placeholder-image.png)

## ✨ Features

- **Guided Star Hops**: Step-by-step instructions with simulated telescope views.
- **Interactive Sky Map**:
  - Real-time pan and zoom.
  - Constellation lines and asterism overlays.
  - Accurate star positions and magnitudes.
- **Custom Hop Builder**:
  - Create your own paths to any object.
  - Interactive "connect-the-dots" path creation.
- **Equipment Manager**:
  - Define your own telescopes and eyepieces.
  - See accurate Field of View (FOV) circles on the map.
- **Red Light Mode**:
  - Full-app dark red theme to preserve your night vision.
  - Persists across sessions.
- **Constellation Browser**:
  - Browse deep-sky objects by constellation.
  - Interactive stick figure visualizations using real star data.
- **Observing Log**:
  - Log your observations with date, equipment, and notes.
- **PWA Support**: Installable as a native-like app on mobile.

## 🔐 Authentication & Data

Hoppy supports **Google Sign-In** and **Guest Access**.

- **Authentication**: We use Firebase Auth to securely handle user identity.
- **Data Persistence**: Currently, all data (Custom Hops, Equipment, Settings) is saved to your browser's **Local Storage**.
  - *Note: This means your data will not yet sync between different devices, even if you are logged in. Cloud sync is a planned feature for a future update.*

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: Vanilla CSS (Glassmorphism, custom design system)
- **State Management**: React Context API
- **Maps**: Custom HTML5 Canvas rendering engine (stereographic projection)
- **Auth**: Firebase Authentication

## 🚀 Getting Started

1. Clone the repo
2. Install dependencies: `npm install`
3. Create a `.env` file with your Firebase config (see below)
4. Run dev server: `npm run dev`

### Firebase Config (.env)

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

*If no keys are provided, the app runs in **Mock Mode**, simulating a logged-in experience.*

## 📄 License

MIT
