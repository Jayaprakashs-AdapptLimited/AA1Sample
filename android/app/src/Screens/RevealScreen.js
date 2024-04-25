import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const data = {
  state: 'round_end',
  version: 291,
  data: {
    next_show: '',
    state_sequence: 79,
    state_starttime: '2024-04-24T11:41:55.405Z',
    show_type: 'live',
    threshold_type: 0,
    threshold_value: 0,
    show_button: null,
    results: [
      {
        id: 1413183266,
        obj_type: 'NumericPoll',
        question: 'Question 14',
        event_id: 1736802959,
        event: '/api/1/polls/event/1736802959',
        min_value: 0,
        max_value: 100,
        order: 0,
        enabled: true,
        is_active: true,
        start_time: null,
        end_time: null,
        last_modified: '2024-04-24T11:41:54.614886',
        created: '2024-04-24T11:00:32.936673',
        data: {
          title: 'QUESTION 14',
          image_id: 61,
          factoids: [],
          exponent: 0,
          display_as_time: false,
          image:
            'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/199',
          image_description: null,
        },
        total_votes: 3,
        result: {
          audience: 89,
          correct: 50,
          contestant: 30,
          winner: 'contestant',
          share_correct_result: '',
          is_last: false,
          better_answer_image_id: '',
          exact_answer_image_id: '',
          orignal_mean: 4,
        },
        timestamp: '2024-04-24T11:41:54.717',
      },
    ],
    leaderboard: {
      friends: {},
    },
    ending_soon: false,
    server_time: '2024-04-24T11:58:57.075138+00:00',
  },
  event: 1736802959,
  event_name: 'TX_04',
  user: 'None',
  use_leaderboard: true,
  count_anonymous_players: true,
  registration_method: 'email',
};

const HorizontalLineWithMinMax = ({minValue, maxValue, value}) => {
  // console.log(value.data.results[0].result.correct, 'Value');
  // const correctValue = value.data.results[0].result.correct;
  // const contestantValue = value.data.results[0].result.contestant;
  // const audienceValue = value.data.results[0].result.audience;
  // console.log(correctValue, 'correct value');
  // console.log(contestantValue, 'contestant value');
  // console.log(audienceValue, 'Audience value');

  ////////////// Using static data
  console.log(data.data.results[0].min_value);
  const correctValue = data.data.results[0].result.correct;
  const contestantValue = data.data.results[0].result.contestant;
  const audienceValue = data.data.results[0].result.audience;
  console.log(correctValue, 'correct value');
  console.log(contestantValue, 'contestant value');
  console.log(audienceValue, 'Audience value');

  const totalHeight = 140;

  const calculateHeightAndMarginTop = value => {
    console.log(value, 'height value');
    const height = (value / 100) * totalHeight;
    const marginTop = -((value / 100) * totalHeight);
    return {height, marginTop};
  };

  const correctStyles = calculateHeightAndMarginTop(correctValue);
  const contestantStyles = calculateHeightAndMarginTop(contestantValue);
  const audienceStyles = calculateHeightAndMarginTop(audienceValue);

  const adjustBottomValue = bottomValue => {
    const totalHeight = 140;
    const height = (bottomValue / 100) * totalHeight;
    const marginTop = (bottomValue / 100) * height;
    return marginTop;
  };

  const correctBottom = adjustBottomValue(correctValue);
  const contestantBottom = adjustBottomValue(contestantValue);
  const audienceBottom = adjustBottomValue(audienceValue);
  // console.log(calculateHeightAndMarginTop(correctValue), ':SSS');
  console.log(correctBottom, 'bottom correct');
  console.log(contestantBottom, 'bottom contestant');
  // console.log(audienceBottom, 'bottom audience');

  //<View style={[styles.dotVerticalLine, { height: correctStyles.height, marginTop: correctStyles.marginTop, left: `${correctValue}%` }]} />
  // <View style={[styles.norwayDotVerticalLine, { height: audienceStyles.height, marginTop: audienceStyles.marginTop, left: `${audienceValue}%` }]} />
  //<View style={[styles.participantDotVerticalLine, { height: contestantStyles.height, marginTop: contestantStyles.marginTop, left: `${contestantValue}%` }]} />

  return (
    <View style={styles.container}>
      <Text style={styles.valueText}>{minValue}</Text>
      <View style={styles.shortVerticalLine} />
      {/* Correct score container */}
      <View style={styles.horizontalLine}>
        <View>
          <View
            style={[
              styles.dotVerticalLine,
              {
                height: correctStyles.height,
                marginTop: correctStyles.marginTop,
              },
              {left: `${correctValue + 1}%`},
            ]}
          />
          <View style={[styles.dot, {left: `${correctValue}%`}]} />
          <View>
            <Text
              style={[
                styles.scorePoster,
                {
                  left: `${correctValue - 12}%`,
                  bottom: calculateHeightAndMarginTop(correctValue).height,
                },
              ]}>
              Korekt <Text> {correctValue} </Text>
            </Text>
          </View>
        </View>

        {/* Norway score container */}
        <View>
          <View
            style={[
              styles.norwayDotVerticalLine,
              {
                height: audienceStyles.height,
                marginTop: audienceStyles.marginTop,
                left: `${audienceValue + 1}%`,
              },
            ]}
          />
          <View
            style={[styles.dot, styles.norwayDot, {left: `${audienceValue}%`}]}
          />
          <View>
            <Text
              style={[
                styles.scorePoster,
                styles.norwayPosterAlign,
                {
                  left: `${audienceValue - 12}%`,
                  bottom: calculateHeightAndMarginTop(audienceValue).height,
                },
              ]}>
              Noreg <Text> {audienceValue} </Text>
            </Text>
          </View>
        </View>

        {/* Participant score container */}
        <View>
          <View
            style={[
              styles.participantDotVerticalLine,
              {
                height: contestantStyles.height,
                marginTop: contestantStyles.marginTop,
                left: `${contestantValue + 1}%`,
              },
            ]}
          />
          <View
            style={[
              styles.dot,
              styles.participantDot,
              {left: `${contestantValue}%`},
            ]}
          />
          <View>
            <Text
              style={[
                styles.scorePoster,
                styles.participantPosterAlign,
                {
                  left: `${contestantValue - 14}%`,
                  bottom: calculateHeightAndMarginTop(contestantValue).height,
                },
              ]}>
              Deltakar <Text> {contestantValue} </Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.shortVerticalLine} />
      <View>
        <Text style={styles.maxValueText}>{maxValue}</Text>
      </View>
    </View>
  );
};

function RevealScreen() {
  // const [value, setValue] = useState(0);
  // console.log(value.data.results[0].result.correct, 'value96');
  // const getMoviesFromApiAsync = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://tvapps-uat-global.studio.banijaymobile.com/api/1/show/allvone/allvonedk2024-dev/dev/state?time=683917859',
  //     );
  //     const json = await response.json();
  //     return setValue(json);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   getMoviesFromApiAsync();
  // }, []);
  const navigation = useNavigation();
  const image = {
    uri: 'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/199',
  };

  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header title="QUESTION 1" />
        <Text style={styles.subContent}>
          How many cardboard boxes does Andres manage to tear down?
        </Text>

        <View style={styles.RevealBarContainer}>
          <View style={styles.backgroundImageContainer}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>
          <View>
            <HorizontalLineWithMinMax
              minValue={data.data.results[0].min_value}
              maxValue={data.data.results[0].max_value}
              // value={value}
            />
          </View>

          <View style={{alignItems: 'center', marginTop: 380}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('question');
              }}
              style={styles.winnerButton}
              underlayColor="#fff">
              <Text style={styles.winnerText}>Deltakar Vinn </Text>
            </TouchableOpacity>
          </View>
        </View>
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
      <Text style={styles.screenTitle}> {title} </Text>
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
  logoAlign: {
    alignItems: 'center',
    top: 40,
  },
  screenTitle: {
    textAlign: 'center',
    color: '#e0d168',
    fontSize: 22,
    marginTop: 60,
    fontWeight: 'bold',
  },
  subContent: {
    color: '#fdeafe',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  winnerButton: {
    paddingTop: 10,
    paddingRight: 18,
    paddingBottom: 12,
    paddingLeft: 18,
    borderWidth: 1,
    borderColor: '#8e7b78',
    borderRadius: 6,
  },
  winnerText: {
    color: '#ddd083',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  RevealBarContainer: {
    flex: 1,
    // position: 'relative',
    justifyContent: 'center',
    marginTop: 15,
  },
  backgroundImageContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.2,
  },
  imageStyle: {
    flex: 1,
    // justifyContent: 'center',
    height: 220,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    // marginVertical: 100,
    position: 'absolute',
    marginTop: 100,
  },
  shortVerticalLine: {
    width: 2,
    height: 10,
    backgroundColor: '#FFF',
    // position: 'absolute',
  },
  horizontalLine: {
    height: 3,
    backgroundColor: '#FFF',
    flex: 1,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  norwayDot: {
    // left: '40%',
    backgroundColor: '#b806f8',
    position: 'absolute',
    bottom: 0,
  },
  participantDot: {
    backgroundColor: '#ff7c2b',
    position: 'absolute',
    // left: '80%',
    bottom: 0,
  },
  dotVerticalLine: {
    width: 3,
    height: 50,
    //   // height: '100%',
    backgroundColor: '#FFF',
    //   // position: 'absolute',
    // marginTop: '-15%',
    //   // left: '16%',
  },
  norwayDotVerticalLine: {
    width: 3,
    height: 100,
    backgroundColor: '#b806f8',
    marginTop: -104,
    position: 'absolute',
    // left: '41%',
  },
  participantDotVerticalLine: {
    width: 3,
    height: 140,
    backgroundColor: '#ff7c2b',
    marginTop: -124,
    position: 'absolute',
    // left: '81%',
    bottom: 0,
  },
  valueText: {
    position: 'absolute',
    color: '#FFF',
    bottom: 20,
    // right: 15,
    marginHorizontal: 16,
  },
  scorePoster: {
    bottom: 80,
    // bottom: '20%',
    color: '#000',
    borderWidth: 0,
    borderRadius: 8,
    padding: 5,
    backgroundColor: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    position: 'absolute',
    // right: -40,
  },
  norwayPosterAlign: {
    bottom: 104,
    backgroundColor: '#b806f8',
    color: '#FFF',
    // marginRight: 10,
    // position: 'absolute',
    // left: '32%',
  },
  participantPosterAlign: {
    backgroundColor: '#ff7c2b',
    bottom: 140,
    color: '#FFF',
    // left: '70%',
  },
  maxValueText: {
    position: 'absolute',
    color: '#FFF',
    bottom: 20,
    // right: 15,
    // marginHorizontal: 16,
    right: -10,
  },
});

export default RevealScreen;
