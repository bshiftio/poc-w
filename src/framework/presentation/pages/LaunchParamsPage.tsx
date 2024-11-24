import { Page } from "@/components/ui/Page";
import { useLaunchParams } from "@telegram-apps/sdk-react";

import type { FC } from "react";

export const LaunchParamsPage: FC = () => {
  const lp = useLaunchParams();

  return <Page></Page>;
};
