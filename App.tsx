import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Landing from "./Screens/Landing";

export type AppStackParam={
  Login:undefined;
  Landing : undefined;
  EmployeeList:undefined;
};

const App=()=>{
  const Stack=createNativeStackNavigator<AppStackParam>();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Landing" component={Landing} />
       
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;