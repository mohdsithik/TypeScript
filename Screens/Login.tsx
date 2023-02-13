import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ScrollView,Pressable,Text } from "react-native";
import { AppStackParam } from "../App";
import { RecommendationCard } from "./RecommendationCard";
import { UpcommingBookingCard } from "./UpcommingBookingCard";
import {Styles} from "./LoginStyle";
import MakeYourTrip from "./MakeYourTrip";

type authScreenProp = StackNavigationProp<AppStackParam, 'Login'>



const Login = () => {
  const [value, setValue] = useState(1)



  

  const navigation = useNavigation<authScreenProp>();

  return (
    <ScrollView>
      <View style={Styles.mainContainer}>
        <RecommendationCard />
        <UpcommingBookingCard />
     {/* <Pressable onPress={()=>navigation.navigate("Landing")}>
      <Text style={{color:'red'}}>click</Text>
     </Pressable> */}
               
         <MakeYourTrip/>   
      </View>

    </ScrollView>



  );
}
export default Login;