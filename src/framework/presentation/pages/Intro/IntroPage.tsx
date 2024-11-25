import type { FC } from "react";
import { Page } from "../../components/ui/Page";

export const IntroPage: FC = () => {
  return (
    <Page back={false}>
      <h1>Welcome to mini app</h1>
    </Page>
  );
};
