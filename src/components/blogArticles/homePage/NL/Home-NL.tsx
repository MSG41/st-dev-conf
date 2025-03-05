import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react';

export default function Home() {
  return (
    <Spotlight color="blue">
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Blockquote inverseColor>
            📝 In deze blog deel ik mijn ervaringen en inzichten van de meetups
            en conferenties die ik bijgewoond heb. 💡
          </Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  );
}
