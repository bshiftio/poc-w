import { themeParams, useSignal } from "@telegram-apps/sdk-react";
import type { FC } from "react";
import { Page } from "@/components/Page.tsx";

export const ThemeParamsPage: FC = () => {
  const tp = useSignal(themeParams.state);

  return <Page></Page>;
};
