import { Page } from "@/presentation/components/Page";
import SettingsPage from "@/presentation/containers/Settings";

import type { FC } from "react";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <h1>Welcome to mini app</h1>
      <SettingsPage />
    </Page>
  );
};
