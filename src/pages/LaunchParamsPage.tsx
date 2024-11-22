import { useLaunchParams } from "@telegram-apps/sdk-react";

import type { FC } from "react";

import { Page } from "@/components/Page.tsx";

export const LaunchParamsPage: FC = () => {
  const lp = useLaunchParams();

  return <Page></Page>;
};
