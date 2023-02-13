import React from "react";
import { View,SectionList } from "react-native";
import MakeTrip from "../JsonDatas/MakeTrip.json";
import {HeaderLine,ProfileContent} from "./HeaderLine";
import { HeaderSection } from "./HeaderSection";
const Landing = () => {
    
    return (
      
      <View>
        <HeaderSection title="Make your trip eventful" description="Make the most of it with Club Mahindra" />


        <SectionList
         sections={MakeTrip}
         keyExtractor={(item, index:number) => item + index.toString()}
         renderItem={({item}) => (
          <ProfileContent 
            image={item.image}
            child={item.child}
            adults={item.adults}
            name={item.name}
            />
          )}
         renderSectionHeader={({section: {title}}) => (
           <HeaderLine title={title}/>
         )}
         />
      </View>
    )
}
export default Landing;