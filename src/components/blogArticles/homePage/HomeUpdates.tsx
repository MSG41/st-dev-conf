import { useState } from 'react';
import {
  Card,
  Image,
  Heading,
  Paragraph,
} from '@amsterdam/design-system-react';
import styles from '../../../App.module.scss';

export interface HomeUpdateCard {
  type: string;
  title: string;
  link: string;
  image: string;
  description: string;
  date: string;
  dateLabel: string;
}

interface HomeUpdatesProps {
  cards: HomeUpdateCard[];
  sortLabel: string;
  searchPlaceholder: string;
  updateLabel: string;
  updatesLabel: string;
}

export function HomeUpdates({
  cards,
  sortLabel,
  searchPlaceholder,
  updateLabel,
  updatesLabel,
}: HomeUpdatesProps) {
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [search, setSearch] = useState('');

  const normalizedSearch = search.trim().toLowerCase();
  const filteredCards = cards
    .filter(
      (card) =>
        card.title.trim().toLowerCase().includes(normalizedSearch) ||
        card.description.trim().toLowerCase().includes(normalizedSearch)
    )
    .sort((a, b) => {
      if (sortOrder === 'desc') {
        return a.date < b.date ? 1 : -1;
      } else {
        return a.date > b.date ? 1 : -1;
      }
    });

  return (
    <>
      <div className={styles.homePageControls}>
        <button
          type="button"
          className={styles.sortButton}
          onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
        >
          {sortLabel}: {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
        </button>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className={styles.searchInput}
          aria-label={searchPlaceholder}
        />
      </div>
      <Paragraph
        size="small"
        style={{ textAlign: 'center', marginBottom: '1rem' }}
      >
        {filteredCards.length === 1 ? (
          <>
            <span className={styles.updateCountNumber}>1</span> {updateLabel}
          </>
        ) : (
          <>
            <span className={styles.updateCountNumber}>
              {filteredCards.length}
            </span>{' '}
            {updatesLabel}
          </>
        )}
      </Paragraph>
      <div className={styles.homePageUpdates}>
        {filteredCards.map((card, idx) => (
          <Card key={idx}>
            <Image alt="" aspectRatio="16:9" src={card.image} />
            <Card.HeadingGroup tagline={card.type}>
              <Heading level={1} size="level-4">
                <Card.Link href={card.link}>{card.title}</Card.Link>
              </Heading>
            </Card.HeadingGroup>
            <Paragraph>{card.description}</Paragraph>
            <Paragraph size="small" className={styles.date}>
              {card.dateLabel}
            </Paragraph>
          </Card>
        ))}
      </div>
    </>
  );
}
