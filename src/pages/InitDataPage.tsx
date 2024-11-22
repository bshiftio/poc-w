import { type FC } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";

import { Page } from "@/components/Page.tsx";

export const InitDataPage: FC = () => {
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  return <Page></Page>;
};
