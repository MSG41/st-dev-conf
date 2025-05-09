import {
  Blockquote,
  Card,
  Grid,
  Heading,
  Spotlight,
  Image,
  Paragraph,
} from '@amsterdam/design-system-react';
import { HomeCube } from '../homeCube';
import styles from '../../../../App.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Spotlight>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              👋🏼 Welkom op mijn blog – een plek waar ik mijn gedachten en
              inzichten deel over meetups, conferenties en alles wat me
              inspireert. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>

      <div className={styles.standardHeading}>
        <Heading level={2}>Nieuwste Updates:</Heading>
      </div>

      <div className={styles.homePageUpdates}>
        <Card>
          <Image
            alt=""
            aspectRatio="16:9"
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/003-conf1-OuRntj879zhiacsnjyJyBD0L16p7zD.jpg"
          />
          <Card.HeadingGroup tagline="Conference">
            <Heading level={2} size="level-3">
              <Card.Link href="/devworld2025">
                DEVWORLD 2025 – Technologie, Innovatie & Netwerken{' '}
              </Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            DEVWorld 2025 bracht developers en tech-experts van over de hele
            wereld samen om de nieuwste technologieën, frameworks en
            methodologieën te verkennen.
          </Paragraph>
          <Paragraph size="small" className={styles.date}>
            27 FEB 2025
          </Paragraph>
        </Card>

        <Card>
          <Image
            alt=""
            aspectRatio="16:9"
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/001-8ioEa6iZVK6EmWDnKSlsG7DZbjEomz.jpg"
          />
          <Card.HeadingGroup tagline="Meetup">
            <Heading level={2} size="level-3">
              <Card.Link href="/ai-meetup">
                AI On The Amstel Meetup - Agentic AI
              </Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            Deze editie ging vooral over de uitdagingen van het bouwen en
            implementeren van <strong>agentische AI</strong> – systemen die
            zelfstandig acties kunnen uitvoeren.
          </Paragraph>
          <Paragraph size="small" className={styles.date}>
            26 FEB 2025
          </Paragraph>
        </Card>
      </div>
      <div className={styles.standardHeading}>
        <Heading level={3}>3D Kubus</Heading>
      </div>
      <HomeCube />
    </div>
  );
}
