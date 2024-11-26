// src/presentation/store/slices/appSettingsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AppSettingsActions } from "../../../application/actions/AppSettingsActions";
import { appSettingsProvider } from "../../../infrastructure/main";
import { IAppSettings, Theme } from "@/domain/IAppSettings";

const appSettingsActions = new AppSettingsActions(appSettingsProvider);

// Define the state interface
export interface IAppSettingsState {
  settings: IAppSettings;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string;
}

// Initial state
const initialState: IAppSettingsState = {
  settings: {
    theme: "light",
    notificationsEnabled: true,
    autoUpdate: true,
  },
  status: "idle",
  error: "",
};

// Async thunk to load app settings
export const loadAppSettings = createAsyncThunk(
  "appSettings/load",
  async (_, thunkAPI) => {
    try {
      return await appSettingsActions.load();
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load settings");
    }
  }
);

// Slice
const appSettingsSlice = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    // Toggle a setting and save the updated settings
    toggleSetting(
      state,
      action: {
        payload: [
          key: keyof IAppSettings,
          value: IAppSettings[keyof IAppSettings]
        ];
      }
    ) {
      const [key, value] = action.payload;

      // Update the setting
      if (key == "theme") {
        state.settings[key] = value as Theme;
      } else {
        state.settings[key] = value as boolean;
      }

      // Save the updated settings
      appSettingsActions.save(state.settings);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAppSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadAppSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.settings = action.payload;
      })
      .addCase(loadAppSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

// Export the toggle action
export const { toggleSetting } = appSettingsSlice.actions;

// Export the reducer
export default appSettingsSlice.reducer;
