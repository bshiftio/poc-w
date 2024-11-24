import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import { Root } from "@/Root.tsx";
import { init } from "@/telegram/init.ts";

import "./index.css";

// Mock the environment in case, we are outside Telegram.
import "./telegram/mockEnv.ts";

import { Provider } from "react-redux";
import { store } from "@/framework/presentation/store/store.ts";
import { Toaster } from "./framework/presentation/components/ui/toaster.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);

// Configure all application dependencies.
init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Root />
      <Toaster />
    </Provider>
  </StrictMode>
);
