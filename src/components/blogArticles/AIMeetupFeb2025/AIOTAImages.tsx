import { ImageSlider } from '@amsterdam/design-system-react';

export const AIOTAImages = () => {
  return (
    <ImageSlider
      controls
      images={[
        {
          alt: 'AOTA1',
          src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/20250226_174021-6YnwwqLItwTyTDeEGgxQeN8jw7zERp.jpg',
        },
        {
          alt: 'AOTA2',
          src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/20250226_182925-hQdNGpLbLZAg5yOyOtfpGLCK3CkszB.jpg',
        },
      ]}
    />
  );
};