import React from "react";
import { View, Text,Image, StyleSheet } from "react-native";
import { MakeTripStyle } from "./LoginStyle";
export const HeaderLine = (props) => {
  

    return (
        <View>
           <View style={MakeTripStyle.dateLineContent}>
                <Text style={MakeTripStyle.titleDate}>{props.title}</Text>
                <View style={MakeTripStyle.lineBorder} />
            </View>

        </View>
    )
}
// export default HeaderLine;
export const ProfileContent=(props)=>{
    return(
        <View style={MakeTripStyle.profileContentStyle} >
              
        <Image style={MakeTripStyle.profileIcon} source={{uri : props.image}} />
        <View style={{marginTop:4}}>
        <Text style={MakeTripStyle.childAdult}>{props.adults}Adults {props.child}Child</Text>
        <Text style={MakeTripStyle.userName}>{props.name}</Text>
        </View>
      </View>
    )
}