import { useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';

function AuthSectionImage() {
  const [searchParams] = useSearchParams();
  const twin = searchParams.get('twin');

  return (
    <Card className="h-screen w-full border-none rounded-none relative">
      <CardContent className="flex h-full items-center justify-center p-0">
        <div className="w-full h-full relative">
          {/* Background Image */}
          <img
            src="/img/login.jpg"
            alt="Login"
            className="w-full h-full object-cover absolute inset-0"
          />

          {/* Gradient Overlay: light (top) to dark (bottom) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80 z-0" />

          {/* Content on top */}
          <div className="absolute bottom-8 z-10 text-white w-full flex flex-col justify-center items-center">
            <img 
              src="/img/Logo.png" 
              alt="Logo"
              className="h-56 w-56" 
            />
            <h2 className="text-center text-2xl md:text-4xl font-bold -mt-16">
              Crypto News Platform
            </h2>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default AuthSectionImage;
