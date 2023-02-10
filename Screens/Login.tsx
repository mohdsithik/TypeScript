import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ScrollView } from "react-native";
import { AppStackParam } from "../App";
import { RecommendationCard } from "./RecommendationCard";
import { UpcommingBookingCard } from "./UpcommingBookingCard";
import Styles from "./LoginStyle";
// import { SliderContainer } from "./sliderContainer";
import { Slider } from '@miblanchard/react-native-slider';
import { SliderComponent } from "./sliderContainer";
type authScreenProp = StackNavigationProp<AppStackParam, 'Login'>



const Login = () => {
  const [value, setValue] = useState(1)



  

  const navigation = useNavigation<authScreenProp>();

  return (
    <ScrollView>
      <View style={Styles.mainContainer}>
        <RecommendationCard />
        <UpcommingBookingCard />
      <SliderComponent/>
               
            
      </View>

    </ScrollView>



  );
}
export default Login;