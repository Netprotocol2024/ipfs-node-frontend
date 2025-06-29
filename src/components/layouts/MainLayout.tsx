import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../template/navbar/Navbar";
import PageLoader from "../template/PageLoader";
const UserLayout = () => {
  return (
    <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
      <Navbar />
      <div className="h-full flex flex-auto flex-col justify-between">
        <Suspense fallback={<PageLoader />}>
          <main className="relative h-full flex flex-auto flex-col w-screen">
            <Outlet />
          </main>
        </Suspense>
      
      </div>
    </div>
  );
};

export default UserLayout;
