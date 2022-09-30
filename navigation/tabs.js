import {Ionicons} from "@expo/vector-icons";
import React from "react";
import StackHomeNavigation  from "./home";
import StackListNavigation  from "./list";
import StackRecipesNavigation  from "./stack";
import color from "../constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator() ;

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName= "HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily:"lato-bold",
          color: color.primary,
        },
      }}
    >
       <BottomTab.Screen
        name = "HomeTab"
        comnponent = {StackHomeNavigation}
        options = {{
          title: "Inicio",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name = {focused ? "ios-home" : "ios-home-outline"}
              size = {24}
              color = {color.primary}
            />
          )
        }}
      />

      <BottomTab.Screen
        name = "RecipesTab"
        comnponent = {StackRecipesNavigation}
        options = {{
          title: "Recetas",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name = {focused ? "ios-retaurant" : "ios-restaurant-outline"}
              size = {24}
              color = {color.primary}
            />
          )
        }}
      />

      <BottomTab.Screen
        name = "ListTab"
        comnponent = {StackListNavigation}
        options = {{
          title: "Lista Super",
          tabBarIcon: ({focused}) => (
            <Ionicons
              name = {focused ? "ios-list" : "ios-list-outline"}
              size = {24}
              color = {color.primary}
            />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Tabs;