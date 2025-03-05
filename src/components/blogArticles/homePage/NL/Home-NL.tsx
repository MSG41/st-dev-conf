import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react';
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
    </div>
  );
}
