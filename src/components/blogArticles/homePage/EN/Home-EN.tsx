import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react';
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
    </div>
  );
}
