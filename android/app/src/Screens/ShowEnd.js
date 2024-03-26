import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import data from '../json/showend data 1.json';

export default function ShowEnd() {
  const correctValue = data.correct[0].value;

  const sortedFriends = data.friends.sort((a, b) => {
    const differenceA = Math.abs(a.choice_set[0].value - correctValue);
    const differenceB = Math.abs(b.choice_set[0].value - correctValue);
    return differenceA - differenceB;
  });

  const renderItem = ({item, index: number}) => (
    <View style={styles.othersLeaderboardContainer}>
      <OthersLeaderBoard
        positionNumber={number + 4}
        value={item.choice_set[0].value}
        name={item.name}
        url={item.avatar_url}
      />
    </View>
  );
  return (
    <View style={styles.showEndContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <View style={styles.titleAlign}>
          <Header title="Din gruppes samlede resultat i aften" />
        </View>
        <View style={styles.topThreeContainer}>
          <View style={styles.topSecondThirdContainer}>
            <View>
              <Image
                style={styles.topThreeProfile}
                source={{
                  uri: 'https://avatar-static.stage.uno.svt.se/avatars/5CvqZhhC1D.png?time=661148502',
                }}
                alt="aa1 Logo"
              />
            </View>
            <View style={styles.rankingNumberContainer}>
              <Text style={styles.rankingNumber}> 2 </Text>
            </View>
            <Text style={styles.topThreeName}> Name2 </Text>
            <Text style={styles.percentage}> 82%</Text>
            <Text style={styles.replyTextAlign}>
              Svar <Text style={styles.replyNumberStyle}> 7</Text>
            </Text>
          </View>
          <View style={styles.topFirstContainer}>
            <View>
              <Image
                style={styles.crownImage}
                source={require('../assets/image/crown.png')}
                alt="aa1 Logo"
              />
              <Image
                style={styles.topThreeProfile}
                source={{
                  uri: 'https://avatar-static.stage.uno.svt.se/avatars/MJV9LDIhHI.png?time=660981702',
                }}
                alt="aa1 Logo"
              />
            </View>
            <View style={styles.rankingNumberContainer}>
              <Text style={styles.rankingNumber}> 1 </Text>
            </View>
            <Text style={styles.topThreeName}> Name </Text>
            <Text style={styles.percentage}> 82%</Text>
            <Text style={styles.replyTextAlign}>
              Svar <Text style={styles.replyNumberStyle}> 7</Text>
            </Text>
          </View>

          <View style={styles.topSecondThirdContainer}>
            <View style={styles.winnerProfile}>
              <Image
                style={styles.topThreeProfile}
                source={{
                  uri: 'https://avatar-static.stage.uno.svt.se/avatars/8kcp84mcKp.png?time=661148111',
                }}
                alt="aa1 Logo"
              />
            </View>
            <View style={styles.rankingNumberContainer}>
              <Text style={styles.rankingNumber}> 3 </Text>
            </View>
            <Text style={styles.topThreeName}> Name3 </Text>
            <Text style={styles.percentage}> 82%</Text>
            <Text style={styles.replyTextAlign}>
              Svar <Text style={styles.replyNumberStyle}>7</Text>
            </Text>
          </View>
        </View>

        <SafeAreaView style={styles.container}>
          <FlatList
            data={sortedFriends}
            renderItem={renderItem}
            style={{marginTop: 50}}
          />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}

function OthersLeaderBoard({positionNumber, name, value, url}) {
  return (
    <View style={styles.othersLeaderboard}>
      <View style={styles.positionImage}>
        <Text style={styles.positionNumber}> {positionNumber} </Text>
        <Image
          style={styles.othersProfileIcon}
          source={{
            uri: url,
          }}
          alt="aa1 Logo"
        />
      </View>
      <View style={styles.nameScore}>
        <View style={{width: '50%'}}>
          <Text style={styles.othersLeaderboardName}> {name} </Text>
          <Text style={styles.othersLeaderboardReply}>
            Svar <Text style={styles.replyNumberStyle}> 7</Text>
          </Text>
        </View>
        <View style={{width: '30%'}}>
          <Text style={styles.othersLeaderboardPercentage}>{value}</Text>
        </View>
      </View>
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
      <Text style={styles.screenTitle}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  showEndContainer: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  titleAlign: {flexDirection: 'row', justifyContent: 'center'},
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 28,
    fontFamily: 'Inter-Bold',
    fontSize: 13,
  },
  logoAlign: {
    alignItems: 'center',
    top: 40,
  },
  navLogo: {
    width: 80,
    height: 24,
  },
  screenTitle: {
    color: '#FEA501',
    fontSize: 18,
    marginTop: 60,
    fontFamily: 'Inter-ExtraBold',
    fontWeight: 'bold',
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  topFirstContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  topSecondThirdContainer: {
    top: 60,
    alignItems: 'center',
  },

  topThreeProfile: {
    width: 80,
    height: 80,
    borderWidth: 6,
    borderColor: '#9396a6',
    borderRadius: 50,
  },
  crownImage: {
    width: 40,
    height: 40,
    transform: [{rotate: '45deg'}],
    left: 56,
    top: 20,
    tintColor: '#ffca3e',
  },
  topThreeName: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  percentage: {
    color: '#FEA501',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  replyTextAlign: {
    color: '#873189',
    borderWidth: 1.5,
    borderColor: '#cfb7e9',
    paddingHorizontal: 10,
    paddingTop: 5,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: '#2A0D5F',
  },
  replyNumberStyle: {
    color: '#FEA501',
  },
  othersLeaderboard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#a53597',
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: '#2A0D5F',
  },
  positionNumber: {
    color: '#9684a2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  othersLeaderboardName: {
    color: '#FFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  othersLeaderboardReply: {
    color: '#663077',
    borderWidth: 1.5,
    borderColor: '#8b7a9c',
    paddingHorizontal: 10,
    paddingTop: 2,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: '#2f0e63',
  },
  othersLeaderboardPercentage: {
    color: '#FEA501',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
  othersProfileIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#cabed6',
    borderRadius: 50,
  },
  rankingNumber: {
    color: '#ff267e',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#FFF',
    padding: 5,
    borderWidth: 1.5,
    borderColor: '#9b91af',
    borderRadius: 50,
  },
  rankingNumberContainer: {
    position: 'relative',
    top: -20,
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  positionImage: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  nameScore: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  othersLeaderboardContainer: {
    marginTop: 15,
  },
});
