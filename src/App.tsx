import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { routes } from "./navigation/routes";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);

  const accentColor = lp.themeParams.accentTextColor;
  console.log(accentColor);

  if (isDark) {
    miniApp.setHeaderColor("#09090B");
    miniApp.headerColor(); // 'bg_color'
  } else {
    miniApp.setHeaderColor("#FFFFFF");
    miniApp.headerColor(); // 'bg_color'
  }

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
