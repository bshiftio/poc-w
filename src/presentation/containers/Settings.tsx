import React, { useEffect } from "react";
import { Switch } from "../components/ui/switch";

import {
  loadAppSettings,
  toggleSetting,
} from "../store/slices/appSettingsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const { settings, status, error } = useAppSelector(
    (state) => state.appSettings
  );

  useEffect(() => {
    dispatch(loadAppSettings());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  const toggleTheme = () => {
    const newValue = settings.theme === "dark" ? "light" : "dark";
    dispatch(toggleSetting(["theme", newValue]));
  };

  const toggleNotifications = () => {
    const newValue = !settings.notificationsEnabled;
    dispatch(toggleSetting(["notificationsEnabled", newValue]));
  };

  const toggleAutoUpdate = () => {
    const newValue = !settings.autoUpdate;
    dispatch(toggleSetting(["autoUpdate", newValue]));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Settings</h1>
      {settings && (
        <div className="w-full max-w-md text-center">
          <h2 className="text-lg font-semibold mb-4">Current Settings</h2>
          <div className="space-y-4">
            {/* Theme Switch */}
            <div className="flex items-center justify-between">
              <span className="text-left font-medium">Dark Theme</span>
              <Switch
                checked={settings.theme === "dark"}
                onCheckedChange={toggleTheme}
              />
            </div>

            {/* Notifications Switch */}
            <div className="flex items-center justify-between">
              <span className="text-left font-medium">Notifications</span>
              <Switch
                checked={settings.notificationsEnabled}
                onCheckedChange={toggleNotifications}
              />
            </div>

            {/* Auto-Update Switch */}
            <div className="flex items-center justify-between">
              <span className="text-left font-medium">Auto-Update</span>
              <Switch
                checked={settings.autoUpdate}
                onCheckedChange={toggleAutoUpdate}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
