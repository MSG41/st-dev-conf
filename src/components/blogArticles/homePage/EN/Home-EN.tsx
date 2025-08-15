import {
  Blockquote,
  Grid,
  Spotlight,
  Heading,
} from '@amsterdam/design-system-react';
import { HomeUpdates, HomeUpdateCard } from '../HomeUpdates';
import { HomeCube } from '../homeCube';
import styles from '../../../../App.module.scss';

export default function HomeEn() {
  const cards: HomeUpdateCard[] = [
    {
      type: 'Conference',
      title: 'DEVWORLD 2025: Technology, Innovation & Networking',
      link: '/en/devworld2025',
      image:
        'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/003-conf1-OuRntj879zhiacsnjyJyBD0L16p7zD.jpg',
      description:
        'DEVWorld 2025 brought together developers and tech experts from around the world to explore the latest technologies, frameworks, and methodologies.',
      date: '2025-02-27',
      dateLabel: '27 FEB 2025',
    },
    {
      type: 'Meetup',
      title: 'AI On The Amstel Meetup: Agentic AI',
      link: '/en/ai-meetup',
      image:
        'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/001-8ioEa6iZVK6EmWDnKSlsG7DZbjEomz.jpg',
      description:
        'This edition focused on the challenges of building and implementing agentic AI: systems that can take action autonomously.',
      date: '2025-02-26',
      dateLabel: '26 FEB 2025',
    },
    {
      type: 'Meetup',
      title: 'AI On the Amstel Meetup: July Edition',
      link: '/en/ai-meetup-jul2025',
      image:
        'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstelJuly2025/11.jpeg',
      description:
        'Record-breaking 350 attendees gathered at Rode Hoed theater for insights from DeepSeek breakthrough to future AGI predictions, with industry leaders from Anthropic, Prosus, and Booking.com discussing the next era of AI.',
      date: '2025-07-23',
      dateLabel: '23 JUL 2025',
    },
  ];
  return (
    <div className={styles.container}>
      <Spotlight>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              📝 Welcome to my blog: a space where I share my thoughts and
              insights about meetups, conferences, and everything that inspires
              me. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>

      <div className={styles.standardHeading}>
        <Heading level={2}>Latest Updates:</Heading>
      </div>

      <HomeUpdates
        cards={cards}
        sortLabel="Sort by Date"
        searchPlaceholder="Search updates..."
        updateLabel="update found"
        updatesLabel="updates found"
      />

      <div className={styles.standardHeading}>
        <Heading level={2}>3D Cube</Heading>
      </div>
      <HomeCube />
    </div>
  );
}
