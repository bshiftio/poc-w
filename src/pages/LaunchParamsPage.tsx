import { useLaunchParams } from "@telegram-apps/sdk-react";
import { List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Page } from "@/components/Page.tsx";

export const LaunchParamsPage: FC = () => {
  const lp = useLaunchParams();

  return (
    <Page>
      <List></List>
    </Page>
  );
};
