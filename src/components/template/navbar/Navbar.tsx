import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';
import { LeftNav } from './nav-menu/LeftNav';
import { RightNav } from './nav-menu/RightNav';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 md:px-8 bg-transparent text-white font-normal flex items-center justify-between backdrop-blur-md transition-all duration-300',
        isScrolled ? 'h-16' : 'h-24'
      )}
    >
      <LeftNav />
      {/* <RightNav /> */}
    </nav>
  );
};
