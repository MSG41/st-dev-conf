import SwiperCube from '../../animatedComponents/swiperCube/swiperCube';

export const HomeCube = () => {
  const homeCubeImages = [
    {
      alt: '001',
      src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube1-RZnEnfuQ213WLkFc9AkhlP1WKfs8GL.jpg',
    },
    {
      alt: '002',
      src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube2-m7HvFF6cPn12EZzHkTG2lI3PQqOfty.jpg',
    },
    {
      alt: '003',
      src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube3-87Ok0XYxt9IaLEOuzJdlBxREKlawzB.jpg',
    },
    {
      alt: '004',
      src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/cubeImages/cube4-JetLl6JTUBzhUDq8YQbCM6iYd26S8I.jpg',
    },
  ];

  return <SwiperCube images={homeCubeImages} />;
};
