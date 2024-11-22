import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import { routes } from "@/navigation/routes.tsx";
import { ThemeProvider, useTheme } from "./theme-provider";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const { setTheme } = useTheme();

  return (
    <ThemeProvider
      defaultTheme={isDark ? "dark" : "light"}
      storageKey="vite-ui-theme"
    >
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}
