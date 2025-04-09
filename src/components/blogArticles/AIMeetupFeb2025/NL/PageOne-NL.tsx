// import {
//   Badge,
//   Field,
//   ImageSlider,
//   Label,
//   Paragraph,
//   TextArea,
// } from '@amsterdam/design-system-react';





import { Card, Heading, Paragraph, PageHeading } from '@amsterdam/design-system-react';
import { Image } from '@amsterdam/design-system-react';
import styles from '../../../../App.module.scss';


export default function PageOne() {
  return (
    <div className={`scrollContainer ${styles.scrollContainer}`}>






    
<div className={styles.blogContainer}>


<Heading level={2}>
  Van bokking tot ‘quawah’: dit waren typisch Amsterdamse koopmansgoederen
</Heading>


<PageHeading>
  Gemeente Amsterdam
</PageHeading>

<Paragraph color="inverse">
  De Zuidas Community Garden is 1 van de projecten van de Green Business Club Zuidas. Het doel van deze club is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt. 70 bedrijven en organisaties werken daarvoor in verschillende projecten samen. De tuin aan de Domenico Scarlattilaan is elke dag open van 9.00 tot 17.00 uur.
</Paragraph>



<Card>
  <Image
    alt=""
    aspectRatio="16:9"
    src="https://picsum.photos/480/360"
  />
  <Card.HeadingGroup tagline="Nieuws">
    <Heading
      level={1}
      size="level-4"
    >
      <Card.Link href="/">
        Nederlands eerste houten woonwijk komt in Zuidoost
      </Card.Link>
    </Heading>
  </Card.HeadingGroup>
  <Paragraph>
    We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
  </Paragraph>
  <Paragraph size="small">
    9 april 2025
  </Paragraph>
</Card>

    </div>
    </div>

    // <div style={{ padding: '20px' }}>
    //   <Field>
    //     <Label htmlFor="input1">AI On the Amstel Meetup</Label>
    //     <Badge label="🗓 Datum: 26 februari 2025" />
    //     <Paragraph id="description1" size="small">
    //       Hosted by: Grant Easterbrook
    //     </Paragraph>
    //     <TextArea
    //       aria-describedby="description1"
    //       defaultValue="Hoe bouw je een geavanceerde agentische AI-assistent."
    //       id="input1"

    //     />
    //   </Field>{' '}
    //   <ImageSlider
    //     controls
    //     images={[
    //       {
    //         alt: 'AOTA1',
    //         src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/20250226_174021-6YnwwqLItwTyTDeEGgxQeN8jw7zERp.jpg',
    //       },
    //       {
    //         alt: 'AOTA2',
    //         src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/20250226_182925-hQdNGpLbLZAg5yOyOtfpGLCK3CkszB.jpg',
    //       },
    //     ]}
    //   />
    // </div>
  );
}
