import {
  Badge,
  Field,
  ImageSlider,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react';

export default function PageOne() {
  return (
    <div style={{ padding: '20px' }}>
      <Field>
        <Label htmlFor="input1">AI On the Amstel Meetup</Label>
        <Badge label="🗓 Datum: 26 februari 2025" />
        <Paragraph id="description1" size="small">
          Hosted by: Grant Easterbrook
        </Paragraph>
        <TextArea
          aria-describedby="description1"
          defaultValue="Hoe bouw je een geavanceerde agentische AI-assistent."
          id="input1"
          
        />
      </Field>{' '}
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
    </div>
  );
}
