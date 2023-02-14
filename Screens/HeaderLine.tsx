import React from "react";
import { View, Text,Image, StyleSheet } from "react-native";
import { MakeTripStyle } from "./LoginStyle";
interface ProfileContentPropsType{
    image:string,
    adults:string,
    child:string,
    name:string
  };
interface propsType{
    title:string
};
  export const HeaderLine = (props : propsType) => {


    return (
        <View>
           <View style={MakeTripStyle.dateLineContent}>
                <Text style={MakeTripStyle.titleDate}>{props.title}</Text>
                <View style={MakeTripStyle.lineBorder} />
            </View>

        </View>
    )
}
export const ProfileContent=(ProfileContentProps : ProfileContentPropsType)=>{
    return(
        <View style={MakeTripStyle.profileContentStyle} >
              
        <Image style={MakeTripStyle.profileIcon} source={{uri : ProfileContentProps.image}} />
        <View style={{marginTop:4}}>
        <Text style={MakeTripStyle.childAdult}>{ProfileContentProps.adults}Adults {ProfileContentProps.child}Child</Text>
        <Text style={MakeTripStyle.userName}>{ProfileContentProps.name}</Text>
        </View>
      </View>
    )
}