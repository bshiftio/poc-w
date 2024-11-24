import { IndexPage } from "@/framework/presentation/pages/IndexPage/IndexPage";
import type { ComponentType, JSX } from "react";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [{ path: "/", Component: IndexPage }];
