import {
  Heading,
  Paragraph,
  Spotlight,
  Grid,
  Blockquote,
  UnorderedList,
} from '@amsterdam/design-system-react';
import styles from '../../../../App.module.scss';
import { AIOTAImages } from '../AIOTAImages';

export default function PageOne() {
  return (
    <div className={styles.blogContainer}>
      <Heading level={2}>AI On the Amstel Meetup</Heading>
      <br />
      <Paragraph size="small">🎤 Gehost door: Grant Easterbrook.</Paragraph>
      <Paragraph size="small">
        📍 Locatie: 5 Gustav Mahlerplein, Amsterdam.
      </Paragraph>
      <Paragraph size="small">🗓 Datum: 26 FEB 2025.</Paragraph>

      <br />
      <AIOTAImages />
      <br />
      <Spotlight className={styles.customBlockquote}>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              🤖 This is the year of agentic AI. We are not in the loop – we are
              looped in!
            </Blockquote>
            <Paragraph size="small">Ioannis Zempekakis </Paragraph>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <br />

      <section>
        <Paragraph>
          Deze editie ging vooral over de uitdagingen van het bouwen en
          implementeren van <strong>agentische AI</strong> – systemen die
          zelfstandig acties kunnen uitvoeren.
        </Paragraph>
        <br />
        <Paragraph>
          De paneldiscussie werd gehost door Grant Easterbrook en bestond uit
          drie sprekers:
        </Paragraph>
        <br />

        <UnorderedList>
          <UnorderedList.Item>
            <strong>Ioannis Zempekakis</strong> – Director of AI & Data Science
            bij Prosus Group.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Khashayar Mansouri</strong> – CEO van Starnus, een
            tech-startup gespecialiseerd in agentische AI.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Joseph Groot Kormelink</strong> – Managing Director bij AI
            Heroes, actief in AI-consultancy en startups.
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          Ze deelden hun ervaringen met het bouwen en inzetten van agentische
          AI-systemen. Interessant was vooral hoe ze spraken over de uitdagingen
          die ze onderweg tegenkwamen:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            Behouden van controle over autonome acties
          </UnorderedList.Item>
          <UnorderedList.Item>
            Bouwen van betrouwbare agent-architecturen
          </UnorderedList.Item>
          <UnorderedList.Item>
            Het trainen van modellen die bruikbaar zijn in de praktijk
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          Het was ook gewoon fijn om in een ruimte te zijn vol mensen die actief
          werken in het AI-veld. De sfeer was open, technisch en inspirerend.
        </Paragraph>
        <br />
        <Paragraph>Ik zou zonder twijfel weer gaan. 🚀</Paragraph>
      </section>
    </div>
  );
}
