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

export default function PageOneEn() {
  return (
    <div className={styles.blogContainer}>
      <Heading level={2}>AI On the Amstel Meetup</Heading>
      <br />
      <Paragraph size="small">🎤 Hosted by: Grant Easterbrook.</Paragraph>
      <Paragraph size="small">
        📍 Location: 5 Gustav Mahlerplein, Amsterdam.
      </Paragraph>
      <Paragraph size="small">🗓 Date: 26 FEB 2025.</Paragraph>

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
            <Paragraph size="small">Ioannis Zempekakis</Paragraph>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <br />

      <section>
        <Paragraph>
          This edition focused on the challenges of building and implementing
          <strong> agentic AI</strong> – systems that can take action
          autonomously.
        </Paragraph>
        <br />
        <Paragraph>
          The panel discussion was hosted by Grant Easterbrook and featured
          three speakers:
        </Paragraph>
        <br />

        <UnorderedList>
          <UnorderedList.Item>
            <strong>Ioannis Zempekakis</strong> – Director of AI & Data Science
            at Prosus Group.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Khashayar Mansouri</strong> – CEO of Starnus, a tech startup
            specialized in agentic AI.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Joseph Groot Kormelink</strong> – Managing Director at AI
            Heroes, active in AI consulting and startups.
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          They shared their experiences building and deploying agentic AI
          systems. What stood out were the challenges they encountered along the
          way:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            Maintaining control over autonomous actions
          </UnorderedList.Item>
          <UnorderedList.Item>
            Building reliable agent architectures
          </UnorderedList.Item>
          <UnorderedList.Item>
            Training models that are practically usable
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          It was also just great to be in a room full of people actively working
          in the AI field. The atmosphere was open, technical, and inspiring.
        </Paragraph>
        <br />
        <Paragraph>I would definitely go again. 🚀</Paragraph>
      </section>
    </div>
  );
}
