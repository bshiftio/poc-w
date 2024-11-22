import { themeParams, useSignal } from "@telegram-apps/sdk-react";
import type { FC } from "react";
import { List } from "@telegram-apps/telegram-ui";
import { Page } from "@/components/Page.tsx";

export const ThemeParamsPage: FC = () => {
  const tp = useSignal(themeParams.state);

  return (
    <Page>
      <List></List>
    </Page>
  );
};
