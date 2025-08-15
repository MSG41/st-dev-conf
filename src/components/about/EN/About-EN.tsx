import {
  Accordion,
  Paragraph,
  Link,
} from '@amsterdam/design-system-react';

import styles from '../../../App.module.scss';

export default function AboutEn() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.accordion}>
        <Accordion headingLevel={1}>
          <Accordion.Section label="Who am I?">
            <Paragraph>
              I am Salim Thaifa, a Fullstack Developer at the Municipality of
              Amsterdam, with a background in civil engineering and a passion
              for technology and software development. I enjoy working on
              challenging projects and continuously developing myself in an
              ever-evolving technological landscape.
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
              Design System. It’s been a truly enjoyable experience to use it in
              this context.
            </Paragraph>
          </Accordion.Section>
          <Accordion.Section label="This blog as open-source github repository">
            <Paragraph>
              <Link href="https://github.com/MSG41/st-dev-conf">
                {' '}
                This is the link to the open-source GitHub repository.
              </Link>
              {''} I know it's not perfect yet, and I will do my best to improve
              it as much as I can. Any suggestions or feedback are always
              welcome. ❤️
            </Paragraph>
          </Accordion.Section>
        </Accordion>
      </div>
    </div>
  );
}
