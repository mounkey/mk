import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { styles } from './style';

export default function Menualt() {

    return (
        <View style={styles.header}>
            <View style={styles.imageContainer}>
                <Image style={styles.logo} source={require('../../assets/logo.png')}  />
            </View>
            <View style={styles.menuContainer}>
                <Image source={require('../../assets/menu1.png')} />
                <Image source={require('../../assets/menu4.png')} />
            </View>
        </View>
    );
}
