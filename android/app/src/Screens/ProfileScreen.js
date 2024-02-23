import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Header} from '../components/HomeScreen';

export default function ProfileScreen() {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={{flex: 1}}>
        <Header title="Dine informationer" />
        <View style={{marginLeft: 40, marginRight: 40}}>
          <Text style={styles.subContent}>
            Skriv dine oplysninger, så vi kan kontakte dig under udsendelsen,
            hvis du vinder praemien.
          </Text>
        </View>

        {/* <Logo />
        <Button />
        <Text style={styles.textStyle}>
          Du kan registrere dig senere, hvis du ombestemmer dig
        </Text>  */}
      </LinearGradient>
    </View>
  );
}

const styles = {
  subContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    // fontFamily: 'Inter-Thin',
    fontWeight: 'medium',
    marginTop: 10,
  },
};
