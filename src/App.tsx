import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from "./presentation/components/theme-provider";
import { routes } from "./presentation/navigation/routes";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const accentColor = lp.themeParams.accentTextColor;
  console.log(accentColor);

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
