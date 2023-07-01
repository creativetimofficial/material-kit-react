declare module "routes" {
  export type RouteConfig = {
    name: string;
    icon?: React.ReactNode;
    href?: string;
    description?: string;
    dropdown?: boolean;
    collapse?: RouteConfig[];
    route?: string;
    component?: React.ReactNode;
  };
  const routes: RouteConfig[];
  export default routes;
}
