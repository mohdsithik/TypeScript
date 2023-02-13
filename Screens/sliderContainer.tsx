/* @flow */
import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import Styles from './LoginStyle';
// styles
import {
  customStyles5,
  iosStyles,
  styles,
  trackMarkStyles,
} from './sliderContinerStyle';



const DEFAULT_VALUE = 0.2;



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
  // console.log("value===>",value);
  const [trackValue,seTrackValue]=React.useState(["Today","28Jul","12Aug","11Sep","11Oct"]);
  // console.log("trackValue==>",trackValue)
  let renderTrackMarkComponent: React.ReactNode;
  // console.log("trackValue==>",trackValue[0])

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
    
     <View>
        <View style={{justifyContent:"space-between",flexDirection:'row',alignContent:'center'}}>{trackValue.map((text)=>{
        return(
          <View>
          <Text style={(text==trackValue[value[1]-1] || text==trackValue[value[0]-1]) ? Styles.textColor : Styles.textColor2}>{text}</Text>
        </View>
        )
      })}
      
      </View>
      {renderChildren()}
    </View>
   
    
  );
};

const track = [1,2,3,4,5];
 export const SliderComponent = () => (

   <View style={styles.mainContiner}>
    <ScrollView contentContainerStyle={styles.container}>
        <SliderContainer
          caption="<Slider/> to test click rounding"
          trackMarks={track}
          sliderValue={[2, 3]}
          >
          <Slider
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

);


