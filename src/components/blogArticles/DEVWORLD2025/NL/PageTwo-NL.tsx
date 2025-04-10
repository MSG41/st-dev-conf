import {
  Heading,
  Paragraph,
  ImageSlider,
  Spotlight,
  Grid,
  Blockquote,
  UnorderedList,
} from '@amsterdam/design-system-react';

import styles from '../../../../App.module.scss';

export default function PageTwo() {
  return (
    <div className={styles.blogContainer}>
      <Heading level={2}>
        DEVWORLD 2025 – Technologie, Innovatie & Netwerken
      </Heading>
      <br />
      <Paragraph size="small">🎤 Gehost door: RAI Amsterdam</Paragraph>
      <Paragraph size="small">📍 Locatie: RAI Amsterdam</Paragraph>
      <Paragraph size="small">🗓 Datum: 27 FEB 2025</Paragraph>
      <Paragraph size="small">
        👥 Bezoekers: 7.500+ developers, engineers, techleiders &
        productmanagers
      </Paragraph>

      <br />
      <ImageSlider
        controls
        images={[
          {
            alt: 'entree',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112303-cF13gD1WwdYvQw7YwOyaPNgil4ProF.jpg',
          },
          {
            alt: 'presentatie',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112513-fBYoynS3aWiYOiFUy1z7ZR1uCBUG6o.jpg',
          },
          {
            alt: 'presentatie-coding',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112924-CSMUYM7XUEHvzz91RuwrgqrLwv8iDy.jpg',
          },
        ]}
      />
      <br />

      <Spotlight className={styles.customBlockquote}>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              DEVWorld 2025 bracht developers en tech-experts van over de hele
              wereld samen om de nieuwste technologieën, frameworks en
              methodologieën te verkennen.
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <br />

      <section>
        <Paragraph>
          De nadruk lag dit jaar op Agentic AI, data scraping,
          LLM-implementaties en DevOps-innovatie. Ik ging naar DEVWorld 2025 om
          te leren hoe andere professionals werken en met welke projecten zij
          bezig zijn. Het was een internationale setting waarin iedereen Engels
          sprak – een fijne ervaring.
        </Paragraph>
        <br />

        <Paragraph>
          Tijdens de sessies was het inspirerend om te zien hoe technologie
          wordt ingezet voor software-internationalisatie, duurzame software en
          AI-implementaties. Toen ik mijn ervaring bij de gemeente en ons
          project <strong>De Bomenkaart</strong> deelde, reageerden veel mensen
          met oprechte interesse en waardering. 🌳
        </Paragraph>
        <br />

        <Paragraph>
          <strong>🌟 Hoogtepunten van de dag:</strong>
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            "Beyond Code: Building a Thriving Tech Community" – Tina Tran (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Benefits of Using ING API SDK for Java Developers" – Lokesh
            Haralakatta (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Insights on Software Internationalization & NIO’s Smart Vehicle
            Tech" – Dominique Massonié (NIO)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Future of AI Panel" – Bob van Luijt (Weaviate) & Steve Sewell
            (Builder.io)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Gain More Confidence in Your Code with Mutation Testing" – Simone
            Romani (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "The Hidden Champions: How Booking.com Mentors Close Opportunity
            Gaps for Women in Tech" – Natasha ten Cate & Floriana Zefi
            (Booking.com)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Secure or Sorry: Your Software is Now a (European) Product" –
            Daniel Thompson-Yvetot (CrabNebula Ltd.)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Will LLMs Really Consume the Internet?" – Ariel Shulman (Bright
            Data)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Is Passwordless the Future? Examining the Pros and Cons of FIDO2" –
            Marc Cortada Beromeu & Alexandru-Madalin Ghenea (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Build Your Custom Copilot with Microsoft Copilot Studio" – Daniel
            Laskewitz (Microsoft)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Engineering Leadership in Crisis: Rebuilding Trust, Technology, and
            Teamwork" – Simon Hall (Payaut)
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          Mijn ervaring op DEVWorld 2025 was erg positief dankzij de goede
          organisatie en inspirerende setting. Bij de stand van Datadog kreeg ik
          een live demo van hun Azure-integratie. Ik was verrast door hoe
          visueel en eenvoudig het was om fouten op te sporen. De monitoring en
          loganalyse van Datadog voelde efficiënter aan dan de standaardtools
          van Azure.
        </Paragraph>
        <br />

        <Paragraph>
          Ook de paneldiscussie over de toekomst van AI was erg waardevol. Ik
          kreeg een duidelijker beeld van hoe vector databases en
          AI-toepassingen in de praktijk worden ingezet. De presentatie van
          Bright Data over het scrapen van data om AI-modellen te voeden vond ik
          ook erg interessant — dit zou iets kunnen zijn voor de gemeente om
          eigen AI-agenten te trainen met relevante data.
        </Paragraph>
        <br />

        <Paragraph>
          <strong>🎮 Extra’s & Netwerkmogelijkheden:</strong>
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>Games & Challenges</UnorderedList.Item>
          <UnorderedList.Item>Robot Battles</UnorderedList.Item>
          <UnorderedList.Item>RC Car Racing</UnorderedList.Item>
          <UnorderedList.Item>VR Games</UnorderedList.Item>
          <UnorderedList.Item>Old-school arcade games</UnorderedList.Item>
          <UnorderedList.Item>Tech Night Festival</UnorderedList.Item>
          <UnorderedList.Item>Live muziek & DJ’s</UnorderedList.Item>
          <UnorderedList.Item>Karaoke bar</UnorderedList.Item>
          <UnorderedList.Item>Netwerkborrels</UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          <strong>Conclusie:</strong>
          <br />
          DEVWorld 2025 was een inspirerend evenement dat de nieuwste
          technologische ontwikkelingen en netwerkmogelijkheden samenbracht.
          Voor developers en techleiders absoluut een conferentie die de moeite
          waard is om te bezoeken.
        </Paragraph>
      </section>
    </div>
  );
}
