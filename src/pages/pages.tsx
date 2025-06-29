import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "@/components/template/PageLoader";
import { PublicRoute } from "../components/layouts/PublicRoute";
import publicRoutes from "../configs/routes/public-routes";
const AllRoutes = () => {
  return (
      <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        {publicRoutes.map(({ key, path, component: Component }) => (
          <Route key={key} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
};

const Pages = () => {
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <AllRoutes />
      </Suspense>
    </>
  );
};

export default Pages;
