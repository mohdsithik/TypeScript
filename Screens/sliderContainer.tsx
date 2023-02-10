/* @flow */
import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';

// styles
import {
  aboveThumbStyles,
  componentThumbStyles,
  customStyles,
  customStyles2,
  customStyles3,
  customStyles4,
  customStyles5,
  customStyles6,
  customStyles7,
  customStyles8,
  customStyles9,
  iosStyles,
  styles,
  trackMarkStyles,
} from './sliderContinerStyle';

// const thumbImage = require('./img/thumb.png');
// const myfuction = () => {
//   return (
//     <View style={styles.pointerTop}>
//       <Text>.</Text>
//     </View>
//   );
// };

const DEFAULT_VALUE = 0.2;

// const CustomThumb = () => (
//   <View style={componentThumbStyles.container}>
//     <Text>Any</Text>
//   </View>
// );

const renderAboveThumbComponent = () => {
  return <View style={aboveThumbStyles.container} />;
};

const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number>;
  vertical?: boolean;
}) => {
  const { caption, sliderValue, trackMarks } = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE
  );
  let renderTrackMarkComponent: React.ReactNode;

  if (trackMarks?.length && (!Array.isArray(value) || value?.length === 2)) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      const currentSliderValue =
        value || (Array.isArray(value) && value[0]) || 0;
      const style =
        currentMarkValue > Math.max(currentSliderValue)
          ? trackMarkStyles.inactive
          : trackMarkStyles.activeMark;
      return <View style={style} />;
    };
  }

  const renderChildren = () => {
    return React.Children.map(props.children, (child: React.ReactElement) => {
      if (!!child && child.type === Slider) {
        return React.cloneElement(child, {
          onValueChange: setValue,
          renderTrackMarkComponent,
          trackMarks,
          value,
        });
      }

      return child;
    });
  };

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text>{caption}</Text>
        <Text>{Array.isArray(value) ? value.join(' - ') : value}</Text>
      </View>
      {renderChildren()}
    </View>
  );
};
const track = [1,2,3,4,5];

 export const SliderComponent = () => (
  <SafeAreaView>
   <View style={styles.mainContiner}>
    <ScrollView contentContainerStyle={styles.container}>
     
        <SliderContainer
          caption="<Slider/> to test click rounding"
          trackMarks={track}
          sliderValue={[2, 3]}
          >
          <Slider
          // animateTransitions
          // maximumTrackTintColor="black"
          thumbStyle={iosStyles.thumb}
          value={1}
          minimumValue={1}
          maximumValue={5}
          step={1}
          trackStyle={customStyles5.track}
          minimumTrackTintColor="#169EDE"
         
          />
        </SliderContainer>
      
    </ScrollView>
    </View>
  </SafeAreaView>
);

// export default App;
