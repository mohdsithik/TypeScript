import React,{FC} from "react";
import { View,Text } from "react-native";
import Styles from "./LoginStyle";

interface HeaderSectionType{
    title : string,
    description:string,
}
export const HeaderSection:FC<HeaderSectionType>=({...prop})=>{
    const {title,description}=prop;
    return(
        <View>
        <Text style={Styles.upcommindDataCardtitle}>{title}</Text> 
        <Text style={Styles.upcommindDataCardDes}>{description}</Text> 
        </View>
    )
}