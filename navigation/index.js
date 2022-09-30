import { NavigationContainer } from "@react-navigation/native";
import React from "react";
//import StackRecipesNavigator from "./stack";
import  TabNavigation  from "./tabs";

const AppNavigator= () => {
  return (
    <NavigationContainer>
      <TabNavigation/>
    </NavigationContainer>
  );
};

export default AppNavigator;