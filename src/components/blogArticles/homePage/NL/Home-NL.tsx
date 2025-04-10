import {
  Accordion,
  Blockquote,
  Grid,
  Link,
  Mark,
  Paragraph,
  Spotlight,
} from '@amsterdam/design-system-react';
import SwiperCube from '../../../animatedComponents/swiperCube/swiperCube';
import styles from '../../../../App.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Spotlight color="blue">
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote className={styles.customBlockquote}>
              📝 In deze blog deel ik mijn ervaringen en inzichten van de
              meetups en conferenties die ik bijgewoond heb. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <SwiperCube />

      <div className={styles.accordion}>
        <Accordion headingLevel={1}>
          <Accordion.Section label="Wie ben ik?">
            <Paragraph>
              Ik ben Salim Thaifa, Fullstack Developer bij de Gemeente
              Amsterdam, met een achtergrond in civiele techniek en een passie
              voor technologie en softwareontwikkeling. Ik werk graag aan
              uitdagende projecten en blijf me ontwikkelen in een continu
              veranderend technologielandschap.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Waarom deze blog?">
            <Paragraph>
              Ik wilde een plek waar ik mijn ervaringen en inzichten van
              conferenties kan verzamelen en delen. Het is fijn om alle
              conferenties op één plek terug te kunnen vinden in een
              persoonlijke omgeving. Daarnaast biedt deze blog me de perfecte
              kans om te werken met het doordacht ontworpen Amsterdam Design
              System
              <Mark>
                —petje af voor het getalenteerde team achter dit systeem!
              </Mark>
              {''} Het is een echt plezier om het in deze context te gebruiken.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Deze blog als open-source GitHub-repository">
            <Paragraph>
              <Link href="https://github.com/MSG41/st-dev-conf">
                {' '}
                Dit is de link naar de open-source GitHub repository.
              </Link>{' '}
              Ik weet dat het nog niet perfect is en ik zal mijn best doen om
              het te verbeteren. Alle suggesties en feedback zijn altijd welkom.
              ❤️
            </Paragraph>
          </Accordion.Section>
        </Accordion>
      </div>
    </div>
  );
}
