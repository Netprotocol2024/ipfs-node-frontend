import { Navigate, useLocation } from "react-router-dom";
import { APP_CONFIG } from "@/constants/app-config";
import MainLayout from "./MainLayout";
import { useUserStore } from "@/store";
import { useAppConfig } from "./AppConfigProvider";
import PageLoader from "../template/PageLoader";
const { authenticatedEntryPath } = APP_CONFIG;

export const PublicRoute = () => {
  // const { isAuthenticated } = useUserStore();
  const isAuthenticated=false;
  const location = useLocation();
  const { isLoading } = useAppConfig();
  const path = location.state?.from?.pathname || authenticatedEntryPath;
  if (isLoading) {
    return <PageLoader />;
  }
  if (isAuthenticated) {
    return <Navigate replace to={path} />;
  }

  return <MainLayout />;
};
