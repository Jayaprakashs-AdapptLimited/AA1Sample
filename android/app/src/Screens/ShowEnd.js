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
import {ScrollView} from 'react-native-gesture-handler';

const renderItem = ({item, index}) =>
  index > 2 ? (
    <View style={styles.othersLeaderboardContainer}>
      <OtherPlayersScoreCard
        positionNumber={index + 1}
        value={item.choice_set[0].value}
        name={item.name}
        url={item.avatar_url}
      />
    </View>
  ) : (
    ''
  );

export default function ShowEnd() {
  const correctValue = data.correct[0].value;
  let indexNumber = [];
  const sortedFriends = data.friends.sort((a, b) => {
    const differenceA = Math.abs(a.choice_set[0].value - correctValue);
    const differenceB = Math.abs(b.choice_set[0].value - correctValue);
    return differenceA - differenceB;
  });

  const myValue = sortedFriends.filter((each, index) => {
    if (index < 3) {
      indexNumber.push(index + 1);
      return each;
    }
  });
  console.log(myValue, 'myValueeee');

  return (
    <View style={styles.showEndContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <View style={styles.titleAlign}>
          <Header title="Din gruppes samlede resultat i aften" />
        </View>
        <ScrollView>
          <TopThreePlayers item={myValue} index={indexNumber} />

          <FlatList
            data={sortedFriends}
            renderItem={renderItem}
            style={{marginTop: 60}}
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

function OtherPlayersScoreCard({positionNumber, name, value, url}) {
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

function TopThreePlayers({item, index}) {
  return (
    <View style={styles.topThreeContainer}>
      <View style={styles.topSecondThirdContainer}>
        <View>
          <Image
            style={styles.topThreeProfile}
            source={{
              uri: item[1].avatar_url,
            }}
            alt="aa1 Logo"
          />
        </View>
        <View style={styles.rankingNumberContainer}>
          <Text style={styles.rankingNumber}> {index[1]} </Text>
        </View>
        <Text style={styles.topThreeName}> {item[1].name} </Text>
        <Text style={styles.percentage}>{item[1].choice_set[0].value}</Text>
        <Text style={styles.replyTextAlign}>
          Svar <Text style={styles.replyNumberStyle}> 7</Text>
        </Text>
      </View>

      <View style={styles.topFirstContainer}>
        <View>
          {index[0] === 1 ? (
            <Image
              style={styles.crownImage}
              source={require('../assets/image/crown.png')}
              alt="aa1 Logo"
            />
          ) : (
            ''
          )}
          <Image
            style={styles.topThreeProfile}
            source={{
              uri: item[0].avatar_url,
            }}
            alt="aa1 Logo"
          />
        </View>
        <View style={styles.rankingNumberContainer}>
          <Text style={styles.rankingNumber}> {index[0]} </Text>
        </View>
        <Text style={styles.topThreeName}> {item[0].name} </Text>
        <Text style={styles.percentage}>{item[0].choice_set[0].value}</Text>
        <Text style={styles.replyTextAlign}>
          Svar <Text style={styles.replyNumberStyle}> 7</Text>
        </Text>
      </View>
      <View style={styles.topSecondThirdContainer}>
        <View style={styles.winnerProfile}>
          <Image
            style={styles.topThreeProfile}
            source={{
              uri: item[2].avatar_url,
            }}
            alt="aa1 Logo"
          />
        </View>
        <View style={styles.rankingNumberContainer}>
          <Text style={styles.rankingNumber}> {index[2]} </Text>
        </View>
        <Text style={styles.topThreeName}> {item[2].name} </Text>
        <Text style={styles.percentage}> {item[2].choice_set[0].value} </Text>
        <Text style={styles.replyTextAlign}>
          Svar <Text style={styles.replyNumberStyle}>7</Text>
        </Text>
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
