import {
  Blockquote,
  Card,
  Grid,
  Spotlight,
  Image,
  Heading,
  Paragraph,
} from '@amsterdam/design-system-react';
import SwiperCube from '../../../animatedComponents/swiperCube/swiperCube';
import styles from '../../../../App.module.scss';

export default function HomeEn() {
  return (
    <div className={styles.container}>
      <Spotlight>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              📝 Welcome to my blog – a space where I share my thoughts and
              insights about meetups, conferences, and everything that inspires
              me. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>

      <div className={styles.standardHeading}>
        <Heading level={2}>Latest Updates:</Heading>
      </div>

      <div className={styles.homePageUpdates}>
        <Card>
          <Image
            alt=""
            aspectRatio="16:9"
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/20250226_174021-6YnwwqLItwTyTDeEGgxQeN8jw7zERp.jpg"
          />
          <Card.HeadingGroup tagline="Meetup">
            <Heading level={1} size="level-4">
              <Card.Link href="/en/ai-meetup">
                AI On The Amstel Meetup - Agentic AI
              </Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            This edition focused on the challenges of building and implementing
            <strong> agentic AI</strong> – systems that can take action
            autonomously.
          </Paragraph>
          <Paragraph size="small" className={styles.date}>
            26 FEB 2025
          </Paragraph>
        </Card>

        <Card>
          <Image
            alt=""
            aspectRatio="16:9"
            src="https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112513-fBYoynS3aWiYOiFUy1z7ZR1uCBUG6o.jpg"
          />
          <Card.HeadingGroup tagline="Conference">
            <Heading level={1} size="level-4">
              <Card.Link href="/en/devworld2025">
                DEVWORLD 2025 – Technology, Innovation & Networking{' '}
              </Card.Link>
            </Heading>
          </Card.HeadingGroup>
          <Paragraph>
            DEVWorld 2025 brought together developers and tech experts from
            around the world to explore the latest technologies, frameworks, and
            methodologies.
          </Paragraph>
          <Paragraph size="small" className={styles.date}>
            27 FEB 2025
          </Paragraph>
        </Card>
      </div>
      <div className={styles.standardHeading}>
        <Heading level={2}>Cool 3D Cube :) </Heading>
      </div>
      <SwiperCube />
    </div>
  );
}
