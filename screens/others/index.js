import { Button, Menu, Pickers, TT } from '../../components';
import { StyleSheet, Text, View } from 'react-native';

import Color from '../../constants/colors';
import React from 'react';

const Others= ({navigation}) => {
  return (
    <View style={styles.container}>
      <Menu/>
      <View style={styles.textContainerTitle}>
        <Text style={styles.textTitle}>Agregar Otros </Text>
      </View>
     
    </View>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color.primary ,
     
    },
    textContainerTitle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    textTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Color.letter,
    },
  });

export default Others;
