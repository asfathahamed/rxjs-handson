import Simple from "./components/simple-1/simple-1";
import Simple2 from "./components/simple-2/simple-2";
import Simple3 from "./components/simple-3/simple-3";

export interface RouteConfig {
  path: string;
  exact?: boolean;
  content?: any;
  component?: any;
  sidebar?: string;
}

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    exact: true,
    content: () => <h1>Introduction</h1>,
  },
  {
    path: "/simple1",
    sidebar: "Simple",
    component: Simple,
  },
  {
    path: "/simple2",
    sidebar: "Simple 2",
    component: Simple2,
  },
  {
    path: "/simple3",
    sidebar: "Simple 3",
    component: Simple3,
  },
];
