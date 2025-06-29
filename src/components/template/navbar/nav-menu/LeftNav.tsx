import { Logo } from '@/components/shared/Logo';
import { useAuth } from '@/lib/hooks/useAuth';
import { DesktopMenu } from './DesktopMenu';
// import { MobileMenu } from './MobileMenu';

export const LeftNav = () => {
  const isAuthenticated = true; 

  return (
    <div className="flex items-center justify-between gap-2 md:gap-8 h-full">
      
    {/* {isAuthenticated && <MobileMenu/>} */}
      <div className="h-full py-2 pl-0 md:pl-10 ">
        <Logo className="max-w-48 sm:max-w-42 h-full p-6" />
      </div>
      {/* <DesktopMenu /> */}
    </div>
  );
};
