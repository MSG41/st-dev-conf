import SwiperCube from '../../animatedComponents/swiperCube/swiperCube';

export const AIOTACube = () => {
  const AIOTAImages = [
    {
      alt: '001',
      src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/001-8ioEa6iZVK6EmWDnKSlsG7DZbjEomz.jpg',
    },
    {
      alt: '002',
      src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/002-i3pF7fF3yhAPKNjSn7vqquCXMMIT4v.jpg',
    },
  ];

  return <SwiperCube images={AIOTAImages} />;
};
