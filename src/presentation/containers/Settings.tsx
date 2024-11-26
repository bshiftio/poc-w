import React, { useEffect } from "react";
import { Button } from "../components/ui/button";

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
          <ul className="mb-8 text-left">
            <li>
              <strong>Theme:</strong>{" "}
              {settings.theme === "dark" ? "Dark" : "Light"}
            </li>
            <li>
              <strong>Notifications:</strong>{" "}
              {settings.notificationsEnabled ? "Enabled" : "Disabled"}
            </li>
            <li>
              <strong>Auto-Update:</strong>{" "}
              {settings.autoUpdate ? "Enabled" : "Disabled"}
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant={"outline"} onClick={toggleTheme}>
              Toggle Theme
            </Button>
            <Button variant={"default"} onClick={toggleNotifications}>
              Toggle Notifications
            </Button>
            <Button variant={"ghost"} onClick={toggleAutoUpdate}>
              Toggle Auto-Update
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
