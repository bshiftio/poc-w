import Counter from "@/components/Counter";
import { Page } from "@/components/ui/Page";
import type { FC } from "react";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <h1>Welcome to mini app</h1>
      <Counter />
    </Page>
  );
};
