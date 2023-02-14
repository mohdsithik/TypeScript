import React from "react";
import { StyleSheet, Text,View,FlatList } from "react-native";
import SplitBookingData from "../JsonDatas/SplitBookingData.json";
import SplitBookingRoomsTypesData from "../JsonDatas/SplitBookingRoomsTypesData.json";
import { SplitBookingCard,MakeTripStyle } from "./LoginStyle";
import { HeaderSection } from "./HeaderSection";

const Landing=()=>{
  let Data=SplitBookingData;

  let length=Object.keys(Data).length;
  // console.log("item===>",length);
   const DatarenderItem=(item : any)=>{
      // console.log("sithik",item)    
    return(
      <View>
        <Text style={SplitBookingCard.sectionListTitle}>{item.item.title}</Text>
       <View style={{marginLeft:20,flexDirection:'row'}}>
        {item.item.data.map((item)=>{
          // let num=item.item.length();
          // console.log('jjjjjjjjjj',item);
           return(
            <View style={SplitBookingCard.roomsDetails}>
              <Text style={SplitBookingCard.BedRooms}>{item.BedRomms} BR</Text>
              <Text  style={SplitBookingCard.rooms}>{item.Rooms} rooms</Text>
            </View>
             
           )
          
        })}
        {(length-1==item.index)?
                <View style={{marginRight:20}}/> : <View  style={SplitBookingCard.hLine} />
              }
        </View>
        
      </View>
    )
   }




  console.log("SplitBookingRoomsTypesData",SplitBookingRoomsTypesData.duration)
  return(
    <View>
    <View style={SplitBookingCard.topCard}>
      <View style={SplitBookingCard.innerCard}>
      <Text style={SplitBookingCard.smallCard}>{SplitBookingRoomsTypesData.duration}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:24,marginRight:24,marginTop:18}}>
      <View>
      <Text style={SplitBookingCard.lableTitle}>Chick-in</Text>
      <Text style={SplitBookingCard.Content}>{SplitBookingRoomsTypesData.chickIn}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <View style={{backgroundColor:'#1DADE3',width:8,height:8,borderRadius:6}}/>
      <View style={SplitBookingCard.lineBorder}/>
      <View style={{backgroundColor:'#1DADE3',width:8,height:8,borderRadius:6}}/>
      </View>
      <View>
      <Text style={SplitBookingCard.lableTitle}>Chick-out</Text>
      <Text style={SplitBookingCard.Content}>{SplitBookingRoomsTypesData.chickOut}</Text>
      </View>
      </View>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:24,marginRight:24,marginTop:18}}>
        <View>
          <Text style={SplitBookingCard.outerLableTitle}>Person Travelling</Text>
          <Text style={SplitBookingCard.outerLableContent}>{SplitBookingRoomsTypesData.PersonTravelling}</Text>
        </View>
        <View>
          <Text  style={SplitBookingCard.outerLableTitle}>Adults</Text>
          <Text style={SplitBookingCard.outerLableContent}>{SplitBookingRoomsTypesData.adult}</Text>
        </View>
        <View>
          <Text  style={SplitBookingCard.outerLableTitle}>Child</Text>
          <Text style={SplitBookingCard.outerLableContent}>{SplitBookingRoomsTypesData.child}</Text>
        </View>
        <View>
          <Text  style={SplitBookingCard.outerLableTitle}>Infants</Text>
          <Text style={SplitBookingCard.outerLableContent}>{SplitBookingRoomsTypesData.infant}</Text>
        </View>
      </View>
      
    </View>
    <HeaderSection title="Room types" description="These are your room types selected"/>
    <FlatList
    data={SplitBookingData}
    renderItem={DatarenderItem}
    horizontal={true}
    keyExtractor={item => item.title}
    showsHorizontalScrollIndicator={false}
    />
  

    </View>
  )
}
export default Landing