# 💼 Investment Management Admin Dashboard

A simplified admin dashboard built with modern frontend technologies to manage investment portfolios.

## 📦 Tech Stack

- **React** + **Vite** (TypeScript)
- **Chakra UI** (Component styling)
- **Redux Toolkit** + **RTK Query** (State and API management)
- **React Hook Form** + **Yup** (Form handling & validation)
- **Recharts** (Data visualization)
- **i18next** (Internationalization with RTL support)
- **React Router DOM** (Routing setup)

---

## 💠 Setup Instructions

1. **Clone Repository**
   ```bash
   git clone https://github.com/surendra-Titus/Invest-Management
   cd investment-dashboard
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```

4. **Project Structure**
   ```
      ├── public/                  # Static public assets
      │   ├── data/                # Static data files
      │   └── locales/             # i18n translation files
      │
      ├── src/                     # Source code
      │   ├── app/                 # Application-level logic and state management (e.g., Redux slices)
      │   ├── assets/              # Static assets like images, fonts, etc.
      │   ├── components/          # Reusable UI components
      │   ├── hooks/               # Custom React hooks
      │   ├── i18n/                # i18n initialization and config
      │   ├── services/            # API calls and external service handlers
      │   ├── utils/               # Utility functions and helpers
      │   ├── App.tsx             # Main App component
      │   ├── index.css           # Global CSS
      │   ├── main.tsx            # Entry point of the application
      │
      ├── .gitignore               # Git ignore rules
      ├── index.html               # HTML entry point for Vite
      ├── package.json             # Project metadata and dependencies
      ├── package-lock.json        # Exact versions of installed dependencies
      ├── README.md                # Project documentation

   ```

---

## ✅ Features Implemented

### 1. **Dashboard UI**
- Sidebar navigation and layout using Chakra UI.
- Multilingual support (English & Arabic with RTL layout toggle).

### 2. **State Management**
- Investments are loaded using RTK Query from a local JSON file.
- Redux store is configured with proper middleware setup.

### 3. **Investment Table**
- Displays investment name, amount, and ROI with loading/error states.

### 4. **Add Investment Form**
- Form includes Name, Amount, and optional Document Upload.
- Form validation using Yup and React Hook Form.

### 5. **Charts & Summary Cards**
- Line chart for ROI trends over time using Recharts.
- Summary stats: total investment amount and average ROI.

### 6. **i18n & RTL Support**
- Implemented dynamic language switcher with `react-i18next`.
- Arabic support with proper RTL flipping and layout.

---

## 🤖 Tools & Decisions

- **Vite**: Chosen for fast dev experience and simple configuration.
- **RTK Query**: Clean abstraction for API handling and caching.
- **JSON as Mock API**: For simplicity and consistency during development.
- **Chakra UI**: Provided fast and accessible UI components with built-in RTL support.
- **Recharts**: Easy-to-integrate charting library with great customization options.

---

## ⚙️ Trade-offs & Considerations

- **Local JSON** was used instead of a live API to simplify the task scope and avoid backend setup.
- **File Upload** in the form is mocked and not sent anywhere — in a real app, this would integrate with a storage service.
- **Routing** is minimal — dashboard and form are on the same page for brevity, but structure allows easy extension.
- **Persisted i18n language** via browser detection with `i18next-browser-languagedetector`.

---

## 📌 Future Improvements

- Add drag-and-drop reordering in the investment table.
- Persist form data to a backend or localStorage.
- Add authentication and protected routes.
- Dockerize the project for containerized deployments.

---

## 🚀 Live Demo

---

# Project Setup
- created react app using vite
- command : npm create vite@latest my-vue-app -- --template react
            npm install -D vite (install dependencies)
            npx vite (run app)
- Install Chakra UI
  - Install Dependencies -> npm i @chakra-ui/react @emotion/react
  - Update tsconfig
  - Reference : https://github.com/chakra-ui/chakra-ui/blob/main/sandbox/vite-ts/src/main.tsx
- Create new git repo
- Push code to git repo 
- Setup routing npm i -D react-router-dom
- Redux
    - npm i -d @reduxjs/toolkit
    - npm i react-redux
- React - query
    - npm install @tanstack/react-query
- React - hook forms
  - npm install react-hook-form yup @hookform/resolvers
- Recharts
  - npm install recharts
- i18next
  - npm install i18next react-i18next i18next-browser-languagedetector