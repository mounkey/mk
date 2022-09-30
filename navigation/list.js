import {Camera, Ingredients, List, Other, Recipes, Welcome} from '../screens';

import React from 'react';
import colors from '../constants/colors';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackListNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{ headerStyle: {  backgroundColor: colors.primary, }, headerTintColor: colors.letter,}}> 
      <Stack.Screen name="List" component={List} options={{ title: 'Lista Supermercado'}} />
      <Stack.Screen name="viewList" component={viewList} options={{title: 'Lista Supermercado (Vista'}}/>
    </Stack.Navigator>
  );
};

export default StackListNavigator;