/* @flow */
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import {Styles} from './LoginStyle';
import Dimention from './Dimention';





const DEFAULT_VALUE = 9;
var markData : number | number[]=9;
// console.log("markData==>",markData)
var data33=false;
const RenderThumbComponent=()=>{
  return(
   <View>
    {data33 ? <View style={Sliderstyle.thumb3}/> : <View style={Sliderstyle.thumb}><Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',fontSize:14}}>{markData}</Text></View>}
      
   
    </View>
  )
}
const RenderAboveThumbComponent=()=>{
  return(
   <View 
  
   >
    {data33 ? <View
               style={{backgroundColor:'#1DADE3',width:55,height:58,alignItems:'center',borderTopLeftRadius:66,borderTopRightRadius:66,borderBottomWidth:0}}
              >
              <View style={Sliderstyle.thumb2}>
               <Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',fontSize:14}}>{markData}</Text>
               </View> 
               </View>
      
      : undefined}
   
    </View>
  )
}
const StartFunction=()=>{
  console.log("bbbbbbbbbbbbbbbbbbbbbbbb=====+=")
  data33=true;

}
const CompleteFunction=()=>{
  data33=false;
  console.log("End==============>")
}
// const RenderAboveThumbComponent=()=>{
//   return(
//     <View style={Sliderstyle.thumb}><Text style={{textAlign:'center'}}>{markData}</Text></View>
//   )
// }
const SliderContainer = (props: {
  caption: string;
  children: React.ReactElement;
  sliderValue?: Array<number>;
  trackMarks?: Array<number> | number | string;
  vertical?: boolean;
}) => {
  const { caption, sliderValue, trackMarks } = props;
  const [value, setValue] = React.useState(
    sliderValue ? sliderValue : DEFAULT_VALUE
  );
  markData=Math.round(value);
  // console.log("value===>",value);
  // console.log("trackMarks===>",trackMarks);

 
 
  let renderTrackMarkComponent: React.ReactNode;


  if (trackMarks) {
    renderTrackMarkComponent = (index: number) => {
      const currentMarkValue = trackMarks[index];
      // const style =
      //   currentMarkValue==0
      //     ? RenderNum(1)
      //     : Sliderstyle.activeMark;
      // return <View style={style}></View>;
      if(currentMarkValue==1 || currentMarkValue==10)
      {
        return <View style={{width:40}}><Text style={{textAlign:'center',fontFamily:'Poppins-SemiBold',fontSize:14}}>{currentMarkValue}</Text></View>
      }
      else{
        const style =
          currentMarkValue
            ? Sliderstyle.activeMark
            : Sliderstyle.activeMark;
        return <View style={style}></View>;
      }
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
      {renderChildren()}
    </View>
   
    
  );
};

const track = [1,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10];
const Landing = () => (
  

  
   <View>
    <ScrollView contentContainerStyle={Sliderstyle.container}>
        <SliderContainer
          caption="<Slider/> to test click rounding"
          trackMarks={track}
         
         
        >
          
         
          <Slider
          onSlidingComplete={CompleteFunction}
           trackMarks={track}
           minimumTrackTintColor='transparent'
           onSlidingStart={StartFunction}
        // animationType='spring' 
        // animateTransitions={true}
        // animateTransitions
           renderAboveThumbComponent={RenderAboveThumbComponent}
      // debugTouchArea
      // thumbTouchSize={{width: 70, height: 90}}
            renderThumbComponent={RenderThumbComponent}
            minimumValue={1}
            maximumValue={10}
            // thumbStyle={undefined}
            // thumbStyle={Sliderstyle.thumb}
            // trackClickable={false}
            trackStyle={Sliderstyle.track}
          
        
          />
        </SliderContainer>
      
    </ScrollView>
    
    </View>
  
);
const borderWidth = 1.5;
const borderRadius = 12;
const Sliderstyle=StyleSheet.create({
  thumb2:{
    backgroundColor: "white",
    borderRadius: Dimention.n(33),
    height: Dimention.n(37),
    borderWidth: Dimention.n(2),
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    borderColor: '#169EDE',
    shadowOpacity: 0.35,
    shadowRadius: Dimention.n(2),
    width: Dimention.n(37),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:10

  },
  thumb: {
    backgroundColor: "#F4F6F7",
    borderRadius: Dimention.n(33),
    height: Dimention.n(37),
    borderWidth: Dimention.n(1.3),
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    borderColor: '#169EDE',
    shadowOpacity: 0.35,
    shadowRadius: Dimention.n(2),
    width: Dimention.n(37),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},
track: {
  backgroundColor: '#1DADE3',
  borderRadius: Dimention.n(10),
  height: Dimention.n(47),
  width:Dimention.n(335)
},
activeMark: {
  borderColor: 'white',
  borderWidth,
  borderRadius,
  shadowColor: '#31a4db',
  shadowOffset: {
      width: 1,
      height: 1,
  },
  shadowOpacity: Dimention.n(5),
  shadowRadius: Dimention.n(1),
  // left: Dimention.n(1),
},
thumb3:{
  backgroundColor: "transparent",
  // borderRadius: Dimention.n(33),
  height: Dimention.n(37),
  // borderWidth: Dimention.n(1.3),
  // shadowColor: "black",
  // shadowOffset: {
  //     width: 0,
  //     height: 2,
  // },
  // borderColor: '#169EDE',
  // shadowOpacity: 0.35,
  // shadowRadius: Dimention.n(2),
  width: Dimention.n(37),
  // flex: 1,
  // justifyContent: "center",
  // alignItems: "center",
},
container: {
  marginLeft: Dimention.n(20),
  marginRight: Dimention.n(20),
  // margin:40,
  // padding:25,
  paddingTop:80,
  // backgroundColor:'red',
  // marginBottom:50,
  height:160,
  marginTop:100
},
})
export default Landing;


