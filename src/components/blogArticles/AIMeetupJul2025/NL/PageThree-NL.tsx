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

export default function PageThree() {
  return (
    <div className={styles.blogContainer}>
      <Heading level={2}>
        AI On the Amstel Meetup: Juli Editie: Inzichten van de Voorhoede
      </Heading>
      <br />
      <Paragraph size="small">🎤 Gehost door: Grant Easterbrook.</Paragraph>
      <Paragraph size="small">
        📍 Locatie: Rode Hoed Theater, Amsterdam.
      </Paragraph>
      <Paragraph size="small">🗓 Datum: 23 JUL 2025.</Paragraph>
      <br />
      <AIOTACube />
      <br />
      <Spotlight className={styles.customBlockquote}>
        <Grid paddingVertical="medium">
          <Grid.Cell span="all">
            <Blockquote>
              Artificiële Intelligentie of Artificiële Domheid?
            </Blockquote>
            <Paragraph size="small">Constantijn Van Oranje-Nassau</Paragraph>
          </Grid.Cell>
        </Grid>
      </Spotlight>
      <br />

      <section>
        <Heading level={3}>Panel & Hoogtepunten</Heading>
        <Paragraph>
          Amsterdam organiseerde onlangs weer een AI on the Amstel meetup, met
          een indrukwekkend panel van AI-leiders:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Constantijn van Oranje-Nassau (Techleap)</strong>: Moderator
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Durk Kingma</strong> (Anthropic, mede-oprichter van OpenAI)
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
          De locatie was prachtig en groter deze keer omdat er meer mensen
          aanwezig waren!
        </Paragraph>
        <br />

        <Heading level={3}>
          DeepSeek's Doorbraak: Een Wereldwijd Signaal
        </Heading>
        <Paragraph>
          Het panel opende met de verrassing van het seizoen: DeepSeek. Hoewel
          insiders het zagen aankomen dankzij gepubliceerd onderzoek, maakte de
          prestatie nog steeds grote indruk. Niet alleen vanwege de technische
          vindingrijkheid op een kleiner budget, maar omdat het signaleerde dat
          China misschien voorop loopt in AI. De conclusie? Innovatie is
          wereldwijd, en elke vooruitgang is een kans om hypergepersonaliseerde,
          cultureel bewuste ervaringen te bouwen.
        </Paragraph>
        <br />

        <Heading level={3}>Voorop Blijven Lopen</Heading>
        <Paragraph>
          Voor deze leiders betekent bijblijven met AI het filteren van de ruis:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Durk Kingma</strong> wendt zich tot Twitter, Hacker News, en
            conferenties.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Euro Beinat</strong> richt zich op het verbinden van
            technologie met gebruikersbehoeften door gedragsanalyse,
            interactieontwerp, en de relatie tussen AI en mens.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Júlia Ivorra Harrison</strong> geeft de voorkeur aan
            wetenschappelijke conferenties en rigoureuze interne tests om hype
            van realiteit te scheiden.
          </UnorderedList.Item>
        </UnorderedList>
        <br />
        <Paragraph>
          Op organisatorisch niveau filteren ze kansen door vier lenzen:
          gebruikersbehoeften, bedrijfsstrategie, vertrouwen en validatie in de
          praktijk. Zonder afstemming wordt de technologie niet nagestreefd.
        </Paragraph>
        <br />

        <Heading level={3}>LLMs: Verre van Voltooid</Heading>
        <Paragraph>
          Geen van de panelleden gelooft dat grote taalmodellen hun limiet
          hebben bereikt. Verwacht snelle groei in mogelijkheden in de komende
          jaren, met LLMs die verder gaan dan taal naar acties, tools, en
          real-time personalisatie. Interne datasets en "Large Commerce Models"
          bewijzen al hun waarde bij het begrijpen van intenties.
        </Paragraph>
        <br />

        <Heading level={3}>De Volgende Grote Veranderingen</Heading>
        <Paragraph>
          De toekomst is agent-gebaseerde AI: autonome agents die betrouwbaar
          werken over lange tijdsperioden, ingebed in het dagelijks leven, en in
          staat om te veranderen hoe we omgaan met diensten. Verwacht:
        </Paragraph>
        <br />
        <UnorderedList>
          <UnorderedList.Item>
            Meer banen uitgevoerd door AI-agents
          </UnorderedList.Item>
          <UnorderedList.Item>
            Interfaces gebouwd rond gebruikersintentie
          </UnorderedList.Item>
          <UnorderedList.Item>
            Iedereen wordt een "programmeur" door natuurlijke taalinterfaces
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Heading level={3}>
          Multimodale AI & Integratie in de Echte Wereld
        </Heading>
        <Paragraph>
          Het panel ziet multimodaliteit (visie, taal, actie) als cruciaal, van
          virtuele scherm-medewerkers tot draagbare AI-brillen. Het doel?
          Toegankelijke, gepersonaliseerde ondersteuning en planning die
          naadloos aanvoelt.
        </Paragraph>
        <br />

        <Heading level={3}>AGI, 2028, en Tegendraadse Voorspellingen</Heading>
        <Paragraph>
          Visies op AGI varieerden van voorzichtig optimisme tot enthousiasme
          over domeinspecifieke doorbraken. Tegen 2028 verwachten ze dat AI
          dagenlang autonoom kan werken, diep geïntegreerd is in het dagelijks
          leven, en mogelijk Europa als AI-supermacht zien met gestroomlijnde
          regelgeving en wereldwijd talent.
        </Paragraph>
        <br />

        <Heading level={3}>Afscheidsadvies</Heading>
        <UnorderedList>
          <UnorderedList.Item>
            <strong>Durk Kingma:</strong> Oefen met AI-tools. Beheersing komt
            door ervaring.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Euro Beinat:</strong> Blijf dicht bij gebruikers en echte
            problemen.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Júlia Ivorra Harrison:</strong> Experimenteer moedig. Er is
            geen handleiding voor dit nieuwe tijdperk.
          </UnorderedList.Item>
        </UnorderedList>
        <br />

        <Heading level={3}>Wat Nu?</Heading>
        <UnorderedList>
          <UnorderedList.Item>
            <strong>In het verschiet:</strong> Meetups over AI-implementatie in
            legacy systemen, agent-gebaseerde assistenten, grootschalige
            aanbevelingen, minimaliseren van latentie, en meer.
          </UnorderedList.Item>
          <UnorderedList.Item>
            <strong>Eindgedachte:</strong> AI beweegt snel, maar de echte kans
            ligt in hoe we het integreren met vertrouwen, gebruikersfocus, en
            bereidheid om te experimenteren.
          </UnorderedList.Item>
        </UnorderedList>
        <br />
      </section>
    </div>
  );
}
