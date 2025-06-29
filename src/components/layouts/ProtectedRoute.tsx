import { Navigate, useLocation } from "react-router-dom";
import { APP_CONFIG } from "@/constants/app-config";
import UserLayout from "./MainLayout";
import { useUserStore } from "@/store";
import { useAppConfig } from "./AppConfigProvider";
import PageLoader from "../template/PageLoader";
const { unAuthenticatedEntryPath } = APP_CONFIG;

export const ProtectedRoute = () => {
  // const { isAuthenticated } = useUserStore();
  const isAuthenticated=true;
  const { isLoading } = useAppConfig();
  const location = useLocation();
  if (isLoading) {
    return <PageLoader />;
  }
  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={unAuthenticatedEntryPath}
        state={{ from: location }}
      />
    );
  }

  return <UserLayout />;
};