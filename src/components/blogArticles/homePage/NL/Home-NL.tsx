import {
  Blockquote,
  Grid,
  Spotlight,
  Heading,
} from '@amsterdam/design-system-react';
import { HomeUpdates, HomeUpdateCard } from '../HomeUpdates';
import { HomeCube } from '../homeCube';
import styles from '../../../../App.module.scss';

export default function Home() {
  const cards: HomeUpdateCard[] = [
    {
      type: 'Conference',
      title: 'DEVWORLD 2025: Technologie, Innovatie & Netwerken',
      link: '/devworld2025',
      image:
        'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/003-conf1-OuRntj879zhiacsnjyJyBD0L16p7zD.jpg',
      description:
        'DEVWorld 2025 bracht developers en tech-experts van over de hele wereld samen om de nieuwste technologieën, frameworks en methodologieën te verkennen.',
      date: '2025-02-27',
      dateLabel: '27 FEB 2025',
    },
    {
      type: 'Meetup',
      title: 'AI On The Amstel Meetup: Agentic AI',
      link: '/ai-meetup',
      image:
        'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstel-26Feb2025/001-8ioEa6iZVK6EmWDnKSlsG7DZbjEomz.jpg',
      description:
        'Deze editie ging vooral over de uitdagingen van het bouwen en implementeren van agentische AI: systemen die zelfstandig acties kunnen uitvoeren.',
      date: '2025-02-26',
      dateLabel: '26 FEB 2025',
    },
    {
      type: 'Meetup',
      title: 'AI On the Amstel Meetup: Juli Editie',
      link: '/ai-meetup-jul2025',
      image:
        'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/AiOnTheAmstelJuly2025/11.jpeg',
      description:
        'Recordbrekende 350 bezoekers verzamelden zich in het Rode Hoed theater voor inzichten van de DeepSeek doorbraak tot toekomstige AGI-voorspellingen, met brancheleiders van Anthropic, Prosus en Booking.com die de volgende fase van AI bespraken.',
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
              👋🏼 Welkom op mijn blog: een plek waar ik mijn gedachten en
              inzichten deel over meetups, conferenties en alles wat me
              inspireert. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>

      <div className={styles.standardHeading}>
        <Heading level={2}>Nieuwste Updates:</Heading>
      </div>

      <HomeUpdates
        cards={cards}
        sortLabel="Sorteer op datum"
        searchPlaceholder="Zoek updates..."
        updateLabel="update gevonden"
        updatesLabel="updates gevonden"
      />

      <div className={styles.standardHeading}>
        <Heading level={3}>3D Kubus</Heading>
      </div>
      <HomeCube />
    </div>
  );
}
