import {
  Heading,
  Paragraph,
  Spotlight,
  Grid,
  Blockquote,
  UnorderedList,
} from '@amsterdam/design-system-react';
import styles from '../../../../App.module.scss';
import { AIOTACube } from '../AIOTAJulImages';

export default function PageThreeEn() {
  return (
    <div className={styles.blogContainer}>
      <Heading level={2}>
        AI On the Amstel Meetup: July Edition: Insights from the Cutting Edge
      </Heading>
      <br />
      <Paragraph size="small">🎤 Hosted by: Grant Easterbrook.</Paragraph>
      <Paragraph size="small">
        📍 Location: Rode Hoed Theater, Amsterdam.
      </Paragraph>
      <Paragraph size="small">🗓 Date: 23 JUL 2025.</Paragraph>
      <br />
      <AIOTACube />
      <br />
      <Spotlight className={styles.customBlockquote}>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              Artificial Intelligence or Artificial Stupidity?
            </Blockquote>
            <Paragraph size="small">Constantijn Van Oranje-Nassau</Paragraph>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <br />

      <section>
        <Heading level={3}>Panel & Highlights</Heading>
        <Paragraph>
          Amsterdam recently hosted another AI on the Amstel meetup, bringing
          together an impressive panel of AI leaders:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Constantijn van Oranje-Nassau (Techleap)</strong>: Moderator
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Durk Kingma</strong> (Anthropic, co-founder of OpenAI)
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Euro Beinat</strong> (Prosus)
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Júlia Ivorra Harrison</strong> (Booking.com)
          </UnorderedList.Item>
        </UnorderedList>
        <br />
        <Paragraph>
          The location was beautiful and bigger this time because more people
          joined!
        </Paragraph>
        <br />

        <Heading level={3}>
          DeepSeek's Breakthrough: A Global Wake-Up Call
        </Heading>
        <Paragraph>
          The panel opened with the surprise of the season: DeepSeek. While
          insiders saw it coming thanks to published research, the achievement
          still made waves. Not just for its technical ingenuity on a smaller
          budget, but because it signaled China might be ahead in AI. The
          takeaway? Innovation is global, and every advance is an opportunity to
          build hyper-personalized, culturally aware experiences.
        </Paragraph>
        <br />

        <Heading level={3}>Staying Ahead of the Curve</Heading>
        <Paragraph>
          For these leaders, keeping up with AI means filtering the noise:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Durk Kingma</strong> turns to Twitter, Hacker News, and
            conferences.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Euro Beinat</strong> focuses on connecting tech to user
            needs through behavior analysis, interaction design, and the
            AI-human relationship.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Júlia Ivorra Harrison</strong> prefers scientific
            conferences and rigorous internal testing to separate hype from
            reality.
          </UnorderedList.Item>
        </UnorderedList>
        <br />
        <Paragraph>
          Organizationally, they filter opportunities through four lenses: user
          needs, business strategy, trust, and real-world validation. Without
          alignment, the tech isn't pursued.
        </Paragraph>
        <br />

        <Heading level={3}>LLMs: Far from Finished</Heading>
        <Paragraph>
          None of the panelists believe large language models are at their
          limit. Expect rapid growth in capabilities over the next few years,
          with LLMs moving beyond language into actions, tools, and real-time
          personalization. Internal datasets and "Large Commerce Models" are
          already proving their value in intent understanding.
        </Paragraph>
        <br />

        <Heading level={3}>The Next Big Shifts</Heading>
        <Paragraph>
          The future is agentic AI: autonomous agents that work reliably over
          long timeframes, embedded into daily life, and capable of reshaping
          how we interact with services. Expect:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            More jobs handled by AI agents
          </UnorderedList.Item>
          <UnorderedList.Item>
            Interfaces built around user intent
          </UnorderedList.Item>
          <UnorderedList.Item>
            Everyone becoming a "coder" through natural language interfaces
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Heading level={3}>Multimodal AI & Real-World Integration</Heading>
        <Paragraph>
          The panel sees multimodality (vision, language, action) as critical,
          from virtual screen-collaborators to wearable AI glasses. The goal?
          Accessible, personalized support and planning that feels seamless.
        </Paragraph>
        <br />

        <Heading level={3}>AGI, 2028, and Contrarian Predictions</Heading>
        <Paragraph>
          Views on AGI ranged from cautious optimism to excitement about
          domain-specific breakthroughs. By 2028, they expect AI to work
          autonomously for days, be deeply integrated into daily life, and
          perhaps see Europe as an AI superpower with streamlined regulations
          and global talent.
        </Paragraph>
        <br />

        <Heading level={3}>Parting Advice</Heading>
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Durk Kingma:</strong> Practice using AI tools. Mastery comes
            from experience.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Euro Beinat:</strong> Stay close to users and real problems.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Júlia Ivorra Harrison:</strong> Experiment boldly. There's
            no manual for this new era.
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Heading level={3}>What's Next?</Heading>
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Coming up:</strong> Meetups on AI deployment in legacy
            systems, agentic assistants, large-scale recommendations, minimizing
            latency, and more.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Final thought:</strong> AI is moving fast, but the real
            opportunity lies in how we integrate it with trust, user-focus, and
            a willingness to experiment.
          </UnorderedList.Item>
        </UnorderedList>

        <br />
      </section>
    </div>
  );
}
