import { Link } from 'react-router-dom';
import { PATHS } from '@/constants/page-paths';
import { cn } from '@/lib/utils/cn';

export const Logo = ({ className }: { className?: string }) => {
  const classes = cn(
    className, 
    'object-contain min-w-32 min-h-32 max-h-48 max-w-48',
    'brightness-110 contrast-125' 
  );

  return (
    <Link to={PATHS.HOME}>
      <div className='flex gap-3 justify-center items-center h-full w-full'>
        <img 
          src={'/img/Logo.png'} 
          className={classes} 
          alt="Company Logo" 
        />
      </div>
    </Link>
  );
};
