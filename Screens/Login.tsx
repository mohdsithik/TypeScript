import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View,Text,TouchableOpacity } from "react-native";
import { AppStackParam } from "../App";

type authScreenProp=StackNavigationProp<AppStackParam,'Login'>
const Login=()=>{
    const navigation =useNavigation<authScreenProp>();
    return(
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('Landing')}>
            <Text>Create Employee Record</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate('EmployeeList')}>
            <Text>Employee List</Text>
          </TouchableOpacity>
        </View>
    );
}
export default Login;