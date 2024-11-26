import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import { init } from "@/telegram/init.ts";

import "./index.css";

// Mock the environment in case, we are outside Telegram.
import "./telegram/mockEnv.ts";

import { Provider } from "react-redux";

import { Root } from "./Root.tsx";
import { store } from "./presentation/store/store.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

// Configure all application dependencies.
init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </StrictMode>
);
