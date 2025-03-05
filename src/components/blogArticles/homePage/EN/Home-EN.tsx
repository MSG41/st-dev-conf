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
              📝 In this blog, I share my experiences and insights about the
              meetups and conferences I have attended. 💡
            </Blockquote>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <SwiperCube />

      {/* Texts */}
      <div className="accordion">
        <Accordion headingLevel={1}>
          <Accordion.Section label="Who am I?">
            <Paragraph>
              I am Salim Thaifa, a Fullstack Developer in the Tech department of
              the Municipality of Amsterdam, within the Digitalization,
              Innovation & Information (DII) cluster. I am passionate about
              creativity, technology, and innovation. Originally, I am a civil
              engineer, but four years ago, I made the switch to software
              development/engineering because it suits me perfectly: it’s
              fast-paced, creative, impressive, efficient, and you can
              immediately see the results of your hard work. As a self-taught
              programmer—YES, without using AI or ChatGPT—I mostly learned by
              thinking for myself, starting projects I came up with, and using
              platforms like Stack Overflow, YouTube, courses, and other forums.
              I enjoy learning from experts and continuously work on improving
              my skills. My interests are diverse: I love DIY projects and
              always try to fix things when they break—my wife sometimes thinks
              I’m crazy because I never stop until it’s actually fixed. It often
              takes me a lot of time and energy, but it's a guilty pleasure!
              Additionally, I enjoy solving mechanical and 3D puzzles,
              appreciating art in general, cooking, and adrenaline-giving
              activities. I believe in the power of open source and love sharing
              my knowledge with others!
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="Why a Blog?">
            <Paragraph>
              I wanted to create a space to gather all my notes, experiences,
              and thoughts from the conferences I’ve attended and share my
              insights with others. With many more conferences planned in the
              future, it’s nice to have everything in one place for easy
              reference. Additionally, this blog gives me the perfect
              opportunity to work with the thoughtfully designed Amsterdam
              Design System— hats off to the talented team behind it! It’s been
              a truly enjoyable experience to use it in this context.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="The open source github repository">
            <Paragraph>
              <Link href="https://github.com/MSG41/st-dev-conf">
                {' '}
                This is the link to the open-source GitHub repository.
              </Link>
              {''} I know it's not perfect yet, and I will do my best to improve
              it as much as I can. Any suggestions or feedback are always
              welcome.
            </Paragraph>
          </Accordion.Section>
        </Accordion>
      </div>
    </div>
  );
}
