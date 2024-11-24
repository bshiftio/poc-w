import type { ComponentType, JSX } from "react";

import { IndexPage } from "@/framework/pages/IndexPage/IndexPage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [{ path: "/", Component: IndexPage }];
