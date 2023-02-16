import React from "react";
import { Text,View,FlatList,ImageBackground } from "react-native";
import { HeaderSection } from "./HeaderSection";
import Data from './Data.json'
import { ServiceAmenities,Styles } from "./LoginStyle";
import LinearGradient from "react-native-linear-gradient";

const ServicesAmenities=()=>{
     const cardRenderitem=(item)=>{
      // console.log("item====>",item.item.description)
      return(
        
          <ImageBackground source={{uri : item.item.image}} style={ServiceAmenities.imageCard}>
               <LinearGradient
                    colors={['transparent', 'transparent','transparent','#000000',]}
                    style={{bottom:0, right:0,left:0,top:10, position:"absolute",flex:0.5,flexDirection:'column-reverse'}}
                    useAngle={true}
                    angle={180}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    >
                    <View style={{}}>
                    <Text style={ServiceAmenities.cardData}>{item.item.title}</Text>
                    </View>
                
                </LinearGradient>
          </ImageBackground>
         
      )
     }
    return(
      <View>
        <HeaderSection title="Services & Amenities" description="Add services as per your need & preferenc" />
       
        <FlatList
        data={Data}
        renderItem={cardRenderitem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={ServiceAmenities.contentContainerStyle}
        />
       
     </View>
  )
}
export default ServicesAmenities;