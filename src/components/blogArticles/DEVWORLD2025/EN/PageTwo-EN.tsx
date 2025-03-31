import {
  Badge,
  Field,
  ImageSlider,
  Label,
  Paragraph,
  TextArea,
} from '@amsterdam/design-system-react';

export default function PageTwoEn() {
  return (
    <>
      <Field>
        <Label htmlFor="input1">Dev World 2025</Label>
        <Badge label="🗓 Datum: 27 february 2025" />
        <Paragraph id="description1" size="small">
          Hosted by: Amsterdam RAI
        </Paragraph>
        <TextArea
          aria-describedby="description1"
          defaultValue="Tech Conference for developers, designers, and product managers."
          id="input1"
        />
      </Field>{' '}
      <ImageSlider
        controls
        images={[
          {
            alt: 'entrance',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112303-cF13gD1WwdYvQw7YwOyaPNgil4ProF.jpg',
          },
          {
            alt: 'presentation',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112513-fBYoynS3aWiYOiFUy1z7ZR1uCBUG6o.jpg',
          },

          {
            alt: 'presentation-coding',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112924-CSMUYM7XUEHvzz91RuwrgqrLwv8iDy.jpg',
          },
        ]}
      />
    </>
  );
}
