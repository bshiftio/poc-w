import type { FC } from "react";

import { Page } from "@/components/Page.tsx";
import Counter from "@/components/Counter";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <h1>Welcome to mini app</h1>
      <Counter />
    </Page>
  );
};
