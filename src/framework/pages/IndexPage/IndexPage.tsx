import type { FC } from "react";

import { Page } from "@/framework/presentation/components/Page";
import Counter from "@/framework/presentation/components/Counter";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <h1>Welcome to mini app</h1>
      <Counter />
    </Page>
  );
};
