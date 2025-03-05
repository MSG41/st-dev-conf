import {
  Accordion,
  Blockquote,
  Grid,
  Link,
  Paragraph,
  Spotlight,
} from '@amsterdam/design-system-react';
import SwiperCube from '../../../animatedComponents/swiperCube/swiperCube';

export default function Home() {
  return (
    <div className="container">
      <Spotlight color="blue">
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote inverseColor>
              📝 In deze blog deel ik mijn ervaringen en inzichten van de
              meetups en conferenties die ik bijgewoond heb. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <SwiperCube />

      {/* TEKSTEN */}
      <div className="accordion">
        <Accordion headingLevel={1}>
          <Accordion.Section label="Wie ben ik?">
            <Paragraph>
              Ik ben Salim Thaifa, Fullstack Developer bij Gemeente Amsterdam,
              cluster Digitalisering, Innovatie & Informatie (DII). Ik ben
              gepassioneerd door creativiteit, technologie en innovatie.
              Oorspronkelijk ben ik civiel ingenieur, maar vier jaar geleden
              maakte ik de overstap naar softwareontwikkeling, omdat het perfect
              bij me past: het is snel, creatief, indrukwekkend, efficiënt en je
              ziet direct de resultaten van je harde werk. Als autodidact heb ik
              mezelf leren programmeren — JA, zonder AI of ChatGPT — maar vooral
              door zelf na te denken en projecten voor mezelf te starten, en
              door gebruik te maken van platforms zoals Stack Overflow, YouTube,
              cursussen en andere forums. Ik leer graag van experts en blijf
              mezelf continu ontwikkelen. Mijn interesses zijn breed; ik hou
              onder andere van klussen en probeer altijd dingen te repareren als
              ze kapot zijn — mijn vrouw denkt soms dat ik gek ben! Verder hou
              ik van denkpuzzels, kunst, eten en koken, en adrenaline-gevende
              activiteiten. Ik geloof in de kracht van open source en deel mijn
              kennis graag met anderen!
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Waarom deze blog?">
            <Paragraph>
              Ik wilde een plek waar ik mijn ervaringen en inzichten van
              conferenties kan verzamelen en delen. Het is fijn om alle
              conferenties op één plek terug te kunnen vinden in een
              persoonlijke omgeving. Daarnaast biedt deze blog me de perfecte
              kans om te werken met het doordacht ontworpen Amsterdam Design
              System — petje af voor het getalenteerde team achter dit systeem!
              Het is een echt plezier om het in deze context te gebruiken.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="De open-source GitHub-repository">
            <Paragraph>
              <Link href="https://github.com/MSG41/st-dev-conf">
                {' '}
                Dit is de link naar de open-source GitHub repository.
              </Link>{' '}
              Ik weet dat het nog niet perfect is en ik zal mijn best doen om
              het te verbeteren. Alle suggesties en feedback zijn altijd welkom.
            </Paragraph>
          </Accordion.Section>
        </Accordion>
      </div>
    </div>
  );
}
