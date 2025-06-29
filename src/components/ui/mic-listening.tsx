import Lottie from 'react-lottie';

import micListening from '@/assets/lottie/mic-listening.json';

export const MicListening = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: micListening,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={options} height={52} width={52} />;
};
