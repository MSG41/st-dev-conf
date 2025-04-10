import {
  Heading,
  Paragraph,
  ImageSlider,
  Spotlight,
  Grid,
  Blockquote,
  UnorderedList,
  Link,
} from '@amsterdam/design-system-react';

import styles from '../../../../App.module.scss';

export default function PageTwoEn() {
  return (
    <div className={styles.blogContainer}>
      <Heading level={2}>
        DEVWORLD 2025 – Technology, Innovation & Networking
      </Heading>
      <br />
      <Paragraph size="small">🎤 Hosted by: RAI Amsterdam</Paragraph>
      <Paragraph size="small">📍 Location: RAI Amsterdam</Paragraph>
      <Paragraph size="small">🗓 Date: 27 FEB 2025</Paragraph>
      <Paragraph size="small">
        👥 Visitors: 7,500+ developers, engineers, tech leaders & product
        managers
      </Paragraph>

      <br />
      <ImageSlider
        controls
        images={[
          {
            alt: 'entrance',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112303-cF13gD1WwdYvQw7YwOyaPNgil4ProF.jpg',
          },
          {
            alt: 'presentation',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112513-fBYoynS3aWiYOiFUy1z7ZR1uCBUG6o.jpg',
          },
          {
            alt: 'presentation-coding',
            src: 'https://zznqketqz3cgxck6.public.blob.vercel-storage.com/DEVWORLD2025/20250227_112924-CSMUYM7XUEHvzz91RuwrgqrLwv8iDy.jpg',
          },
        ]}
      />
      <br />

      <Spotlight className={styles.customBlockquote}>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              DEVWorld 2025 brought together developers and tech experts from
              around the world to explore the latest technologies, frameworks,
              and methodologies.
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <br />

      <section>
        <Paragraph>
          This year’s focus included Agentic AI, data scraping, LLM
          implementations, and DevOps innovation. I attended DEVWorld 2025 to
          learn how other professionals work and what kind of projects they’re
          involved in. It was also a very international setting, so everyone
          spoke English, which was a pleasant experience.
        </Paragraph>
        <br />

        <Paragraph>
          During the sessions, it was inspiring to see how tech is being used
          for software internationalization, sustainable software, and AI
          implementations. When I shared my experience at the municipality and
          our project{' '}
          <Link href="https://bomen.amsterdam.nl/">De Bomenkaart</Link> many
          people responded with genuine interest and appreciation. 🌳
        </Paragraph>
        <br />

        <Paragraph>
          <strong>🌟 Highlights of the Day:</strong>
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            "Beyond Code: Building a Thriving Tech Community" – Tina Tran (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Benefits of Using ING API SDK for Java Developers" – Lokesh
            Haralakatta (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Insights on Software Internationalization & NIO’s Smart Vehicle
            Tech" – Dominique Massonié (NIO)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Future of AI Panel" – Bob van Luijt (Weaviate) & Steve Sewell
            (Builder.io)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Gain More Confidence in Your Code with Mutation Testing" – Simone
            Romani (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "The Hidden Champions: How Booking.com Mentors Close Opportunity
            Gaps for Women in Tech" – Natasha ten Cate & Floriana Zefi
            (Booking.com)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Secure or Sorry: Your Software is Now a (European) Product" –
            Daniel Thompson-Yvetot (CrabNebula Ltd.)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Will LLMs Really Consume the Internet?" – Ariel Shulman (Bright
            Data)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Is Passwordless the Future? Examining the Pros and Cons of FIDO2" –
            Marc Cortada Beromeu & Alexandru-Madalin Ghenea (ING)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Build Your Custom Copilot with Microsoft Copilot Studio" – Daniel
            Laskewitz (Microsoft)
          </UnorderedList.Item>
          <UnorderedList.Item>
            "Engineering Leadership in Crisis: Rebuilding Trust, Technology, and
            Teamwork" – Simon Hall (Payaut)
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          My experience at DEVWorld 2025 was very positive thanks to the great
          organization and inspiring setting. At the Datadog booth, I got a live
          demo of their Azure integration. I was impressed by how visual and
          easy it was to trace errors. Datadog’s monitoring and log analysis
          felt more efficient than Azure’s default tools.
        </Paragraph>
        <br />

        <Paragraph>
          The Future of AI panel was also super insightful. I gained a clearer
          picture of how vector databases and AI deployments are being used
          across industries. Bright Data’s talk on scraping data to feed AI
          models was a highlight—it’s something I could imagine applying at the
          municipality to train our own agents with more relevant data.
        </Paragraph>
        <br />

        <Paragraph>
          <strong>🎮 Extras & Networking:</strong>
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>Games & Challenges</UnorderedList.Item>
          <UnorderedList.Item>Robot Battles</UnorderedList.Item>
          <UnorderedList.Item>RC Car Racing</UnorderedList.Item>
          <UnorderedList.Item>VR Games</UnorderedList.Item>
          <UnorderedList.Item>Old-school arcade games</UnorderedList.Item>
          <UnorderedList.Item>Tech Night Festival</UnorderedList.Item>
          <UnorderedList.Item>Live music & DJs</UnorderedList.Item>
          <UnorderedList.Item>Karaoke bar</UnorderedList.Item>
          <UnorderedList.Item>Networking drinks</UnorderedList.Item>
        </UnorderedList>
        <br />

        <Paragraph>
          <strong>Conclusion:</strong>
          <br />
          DEVWorld 2025 was an inspiring event that showcased the latest in tech
          and offered great networking opportunities. A must-attend conference
          for developers and tech leaders.
        </Paragraph>
      </section>
    </div>
  );
}
