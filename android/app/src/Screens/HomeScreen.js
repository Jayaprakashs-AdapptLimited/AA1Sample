import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="Velkommen" />
        <Text style={styles.subContent}>
          Spil med og vind op til 100.000 kr.
        </Text>
        <Logo />
        <Button />
        <Text style={styles.textStyle}>
          Du kan registrere dig senere, hvis du ombestemmer dig
        </Text>
      </LinearGradient>
    </View>
  );
}

export function Header({title}) {
  return (
    <View>
      <View style={styles.logoAlign}>
        <Image
          style={styles.navLogo}
          source={require('../assets/image/logo.png')}
          alt="dr Logo"
        />
      </View>
      <Text style={styles.sectionContainer}> {title} </Text>
    </View>
  );
}

function Logo() {
  return (
    <View style={styles.logoViewAlign}>
      <Image
        style={styles.logo}
        source={require('../assets/image/41ab7d0ee71737419013f0162ef09fcb.png')}
        alt="aa1 Logo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  navLogo: {
    width: 80,
    height: 24,
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 28,
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
  },
  logoAlign: {
    alignItems: 'center',
    top: 40,
  },
  sectionContainer: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    marginTop: 60,
    fontWeight: 'bold',
  },
  subContent: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'medium',
    marginTop: 10,
  },
  logoViewAlign: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 499,
    height: 281,
  },
});

export default HomeScreen;
