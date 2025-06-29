import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import AuthSectionImage from "../shared/AuthSectionImage";
import { Logo } from "../shared/Logo";
// import { Footer } from "../template/Footer";
import PageLoader from "../template/PageLoader";

const AuthLayout = () => {
  return (
    <Suspense>
      <div className="flex flex-auto flex-col justify-between min-h-screen">
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2  ">
          <AuthSectionImage />
          <Suspense fallback={<PageLoader />}>
            <div className="flex flex-col justify-center gap-4 md:gap-8 items-center relative">
              <img
                src="/img/green.svg"
                alt="Green Light"
                className="absolute top-0 left-0 transform -translate-x-1/2 pointer-events-none opacity-90 "
              />
              {/* <Logo className="lg:absolute top-0 right-0 w-28" /> */}
              <div className="flex flex-col max-w-[340px] w-full space-y-6 my-12 md:my-0">
                <Outlet />
              </div>
            </div>
          </Suspense>
        </main>
        {/* <Footer /> */}
      </div>
    </Suspense>
  );
};
export default AuthLayout;
