import React from "react";
import { BrowserRouter } from "react-router-dom";

// Example: Zustand store (auto theme)
import { useThemeStore } from "./store/theme";

// Example: shadcn/ui Toaster for notifications
import { Toaster } from "@/components/ui/toaster";

function App() {
  // Zustand: theme management
  const theme = useThemeStore((state) => state.theme);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 theme-transition">
        {/* Main app content goes here */}
        {/* Example: <Routes /> for actual app routing */}
        <h1 className="text-2xl font-bold mb-4">🚚 Tramy Transport UI</h1>
        <p className="mb-8">Welcome to your modern React + Vite + Tailwind + Zustand + shadcn/ui project!</p>
        {/* Toast notifications */}
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;