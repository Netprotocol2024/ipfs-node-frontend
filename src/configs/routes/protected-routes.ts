import { lazy } from "react";

export interface ProtectedRouteInterface {
  path: string;
  key: string;
  name: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const protectedRoutes = [
 
];

export const protectedRouteNames = protectedRoutes.map((route) => route.key);
export const protectedRoutePaths = protectedRoutes.map((route) => route.path);

export default protectedRoutes;
