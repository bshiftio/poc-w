import { type FC } from "react";
import { initData, useSignal } from "@telegram-apps/sdk-react";
import { Page } from "../components/Page";

export const InitDataPage: FC = () => {
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  return <Page></Page>;
};
