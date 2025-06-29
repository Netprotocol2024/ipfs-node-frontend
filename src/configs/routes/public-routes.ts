import { lazy } from "react";

import { PATHS } from "../../constants/page-paths";

export const publicRoutes = [
  {
    name: "Dashboard",
    key: "dashboard",
    path: "/",
    component: lazy(() => import("../../pages/admin")),
  },

];

export const publicRouteNames = publicRoutes.map((route) => route.name);

export const publicRoutePaths = publicRoutes.map((route) => route.path);

export default publicRoutes;
