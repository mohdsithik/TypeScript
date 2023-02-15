import React from "react";
import { Text,View,FlatList } from "react-native";
import SplitBookingData from "../JsonDatas/SplitBookingData.json";
import SplitBookingRoomsTypesData from "../JsonDatas/SplitBookingRoomsTypesData.json";
import { SplitBookingCard } from "./LoginStyle";
import { HeaderSection } from "./HeaderSection";

const SplitBooking=()=>{
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
    <View style={{marginTop:20,marginBottom:20}}>
    <View style={SplitBookingCard.topCard}>
      <View style={SplitBookingCard.innerCard}>
      <Text style={SplitBookingCard.smallCard}>{SplitBookingRoomsTypesData.duration}</Text>
      <View style={SplitBookingCard.innerBoxAlign}>
      <View>
      <Text style={SplitBookingCard.lableTitle}>Chick-in</Text>
      <Text style={SplitBookingCard.Content}>{SplitBookingRoomsTypesData.chickIn}</Text>
      </View>
      <View style={SplitBookingCard.innerLineAlign}>
      <View style={SplitBookingCard.dotBorder}/>
      <View style={SplitBookingCard.lineBorder}/>
      <View style={SplitBookingCard.dotBorder}/>
      </View>
      <View>
      <Text style={SplitBookingCard.lableTitle}>Chick-out</Text>
      <Text style={SplitBookingCard.Content}>{SplitBookingRoomsTypesData.chickOut}</Text>
      </View>
      </View>
      </View>

      <View style={SplitBookingCard.topBoxTextStyle}>
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
export default SplitBooking