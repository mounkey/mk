import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Ingredients, List, ViewList} from './screens/';
import React, { useState } from 'react';

import AppNavigator from './navigation';
import Color  from './constants/colors';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {

  //useState
  const [selected, setSelected] = useState(false);
  const [order, setOrder] = useState([]);

  //funciones


  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  
  const onSelectedEnlarge = ( select, order ) => {
    setOrder(order)
    setSelected(select);
  };
  
  return (
    <View style={styles.container}>
      <AppNavigator/>       
    <StatusBar style="auto" />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primary,
    color: Color.letter,     
    fontFamily: 'Lato-Regular',
  }, 

});
