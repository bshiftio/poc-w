import {
  useLaunchParams,
  miniApp,
  useSignal,
  biometry,
} from "@telegram-apps/sdk-react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";

import { routes } from "./navigation/routes";
import { useEffect } from "react";
import { ThemeProvider } from "./framework/presentation/components/ui/theme-provider";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const accentColor = lp.themeParams.accentTextColor;
  console.log(accentColor);

  if (isDark) {
    miniApp.setHeaderColor("#09090B");
    miniApp.headerColor();
  } else {
    miniApp.setHeaderColor("#FFFFFF");
    miniApp.headerColor();
  }
  useEffect(() => {
    const handleBiometryAccess = async () => {
      if (biometry.requestAccess.isAvailable()) {
        const granted = await biometry.requestAccess();
        console.log(granted);
      }
    };

    handleBiometryAccess();
  }, []);

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
