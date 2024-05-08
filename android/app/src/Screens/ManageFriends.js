import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 13,
    name: 'Dhoni',
    image:
      'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/386',
    description: null,
    acceptance: true,
  },
  {
    id: 14,
    name: 'Yuvraj',
    image:
      'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/387',
    description: null,
    acceptance: true,
  },
  {
    id: 15,
    name: 'Hardik',
    image:
      'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/388',
    description: null,
    acceptance: true,
  },
  {
    id: 16,
    name: 'Mitchell',
    image:
      'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/389',
    description: null,
    acceptance: true,
  },
  {
    id: 17,
    name: 'Nicholas',
    image:
      'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/395',
    description: null,
    acceptance: true,
  },
  {
    id: 18,
    name: 'Siraj',
    image:
      'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/396',
    description: null,
    acceptance: true,
  },
];

const Item = ({
  name,
  image,
  acceptance,
  id,
  selectedButton,
  acceptRequest,
  rejectRequest,
}) => {
  return selectedButton === 1 && acceptance ? (
    <View style={styles.item}>
      {/* List of Friends */}

      <View style={styles.othersLeaderboard}>
        <Image
          style={styles.othersProfileIcon}
          source={{
            uri: image,
          }}
          alt="aa1 Logo"
        />
        <View style={styles.nameScore}>
          <View style={{width: '70%'}}>
            <Text style={styles.othersLeaderboardName}> {name} </Text>
          </View>
          <View style={{width: '20%'}}>
            <TouchableOpacity
              onPress={() => {
                rejectRequest(acceptance, id);
              }}>
              <Icon name="close" size={26} color="#e7813b" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) : selectedButton === 2 && !acceptance ? (
    <View style={styles.item}>
      {/* List of Friends */}

      <View style={styles.othersLeaderboard}>
        <Image
          style={styles.othersProfileIcon}
          source={{
            uri: image,
          }}
          alt="aa1 Logo"
        />
        <View style={styles.nameScore}>
          <View>
            <Text style={styles.othersLeaderboardName}> {name} </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'flex-end',
              marginRight: 70,
            }}>
            <TouchableOpacity
              style={[styles.AcceptButton]}
              onPress={() => {
                acceptRequest(id);
              }}>
              <Text style={styles.acceptRejectText}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.AcceptButton, styles.notifyButton]}
              onPress={() => rejectRequest(acceptance, id)}>
              <Text style={styles.acceptRejectText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) : null;
};
function ManageFriends() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState({firstName: '', pin: ''});
  const [selectedButton, setSelectedButton] = useState(1);
  const [friendsData, setFriendsData] = useState(DATA);

  const onChangeName = (name, value) => {
    setUserName(previous => ({...previous, [name]: value}));
  };
  const submitHandler = () => {
    friendsData.push({
      id: Math.trunc(Math.random() * 100),
      name: userName.firstName,
      image:
        'https://tvapps-uat-global.studio.banijaymobile.com/api/2/cms/image/396',
      description: null,
      acceptance: false,
    });
    setUserName({firstName: '', pin: ''});
    setModalVisible(!modalVisible);
  };

  // Function to accept request and update state
  const acceptRequest = id => {
    const updatedData = friendsData.map(item => {
      if (item.id === id) {
        return {...item, acceptance: true};
      }
      return item;
    });
    setFriendsData(updatedData);
  };

  const rejectRequest = (acceptance, id) => {
    console.log(id, 'iddd');
    if (!acceptance) {
      const updatedData = friendsData.filter(item => item.id !== id);
      setFriendsData(updatedData);
      return updatedData;
    }
    const updatedData = friendsData.map(item => {
      if (item.id === id) {
        return {...item, acceptance: false};
      }
      return item;
    });
    setFriendsData(updatedData);
  };
  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#830E76', '#371D76', '#2F2075']}
        style={styles.gradientContainer}>
        <Header />

        {/*Friends Button Container */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 16,
            marginTop: 60,
            borderWidth: 2,
            borderColor: '#ff7c2b',
          }}>
          <View style={styles.groupInvitationsButton}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.friendsButton,
                selectedButton === 1 && styles.selected,
              ]}
              onPress={() => setSelectedButton(1)}>
              <Text style={styles.text}>Your Group</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.groupInvitationsButton}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.invitationButton,
                selectedButton === 2 && styles.selected,
              ]}
              onPress={() => setSelectedButton(2)}>
              <Text style={styles.text}>Invitations</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PinCode Button Container */}
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 16,
            marginTop: 18,
          }}>
          <View style={styles.addFriendContainer}>
            <TouchableOpacity
              style={[styles.inviteCodeButton]}
              onPress={() => {
                setModalVisible(!modalVisible);
                // navigation.navigate('friendRequest');
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntIcon name="pluscircleo" size={26} color="#FFF" />

                <Text style={styles.text}>Add Friend</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.addFriendContainer}>
            <TouchableOpacity
              style={[styles.inviteCodeButton]}
              onPress={() => {
                // setModalVisible(!modalVisible);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntIcon name="arrowright" size={26} color="#FFF" />
                <Text style={styles.text}>Pincode</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* <FlatList
          data={friendsData}
          renderItem={({item}) => (
            <Item
              name={item.name}
              image={item.image}
              acceptance={item.acceptance}
              id={item.id}
              selectedButton={selectedButton}
              acceptRequest={acceptRequest}
              rejectRequest={rejectRequest}
            />
          )}
          keyExtractor={item => item.id}
        /> */}

        <FlatList
          data={
            selectedButton === 1
              ? friendsData.filter(item => item.acceptance)
              : friendsData.filter(item => !item.acceptance)
          }
          renderItem={({item}) => (
            <Item
              name={item.name}
              image={item.image}
              acceptance={item.acceptance}
              id={item.id}
              selectedButton={selectedButton}
              acceptRequest={acceptRequest}
              rejectRequest={rejectRequest}
            />
          )}
          keyExtractor={item => item.id}
        />
      </LinearGradient>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.logoViewAlign}>
              <Image
                style={styles.logo}
                source={require('../assets/image/send_frnd_req.png')}
                alt="aa1 Logo"
              />

              <Text style={styles.modalTitle}> Send a friend request </Text>
              <Text style={styles.modalText}>
                Send a request to play with your friends and family. Just enter
                your friend's username and pin below
              </Text>
            </View>

            <View style={{marginTop: 15}}>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={text => onChangeName('firstName', text)}
                  value={userName.firstName}
                  placeholder="username"
                  placeholderTextColor="#d5d5d7"
                  textAlign="center"
                  keyboardType="numeric"
                  fontSize={18}
                />
              </View>
            </View>

            <View style={{marginTop: 15}}>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={text => onChangeName('pin', text)}
                  value={userName.pin}
                  placeholder="pin"
                  placeholderTextColor="#d5d5d7"
                  textAlign="center"
                  keyboardType="numeric"
                  fontSize={18}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <Text style={styles.textStyle}>
              Your friend only appears in your group when he or she has approved
              you
            </Text>
            <View style={{marginTop: 15}}>
              <TouchableOpacity
                onPress={() => {
                  submitHandler();
                }}
                style={styles.searchButton}
                underlayColor="#fff">
                <Text style={styles.searchText}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 15}}>
              <TouchableOpacity
                style={styles.editNumberButton}
                underlayColor="#fff"
                onPress={() => {
                  // navigation.navigate('Register');
                }}>
                <Text style={styles.editNumberText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

export function Header() {
  return (
    <View>
      <View style={styles.logoAlign}>
        <Image
          style={styles.navLogo}
          source={require('../assets/image/logo.png')}
          alt="dr Logo"
        />
      </View>
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
    height: 220,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    marginTop: 100,
  },
  shortVerticalLine: {
    width: 2,
    height: 10,
    backgroundColor: '#FFF',
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
    backgroundColor: '#b806f8',
    position: 'absolute',
    bottom: 0,
  },
  participantDot: {
    backgroundColor: '#ff7c2b',
    position: 'absolute',
    bottom: 0,
  },
  dotVerticalLine: {
    width: 3,
    height: 50,
    backgroundColor: '#FFF',
  },
  norwayDotVerticalLine: {
    width: 3,
    height: 100,
    backgroundColor: '#b806f8',
    marginTop: -104,
    position: 'absolute',
  },
  participantDotVerticalLine: {
    width: 3,
    height: 140,
    backgroundColor: '#ff7c2b',
    marginTop: -124,
    position: 'absolute',
    bottom: 0,
  },
  valueText: {
    position: 'absolute',
    color: '#FFF',
    bottom: 20,
    marginHorizontal: 16,
  },
  scorePoster: {
    bottom: 80,
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
  },
  participantPosterAlign: {
    backgroundColor: '#ff7c2b',
    bottom: 140,
    color: '#FFF',
  },
  maxValueText: {
    position: 'absolute',
    color: '#FFF',
    bottom: 20,
    right: -10,
  },
  groupInvitationsButton: {
    flex: 1,
    // margin: 5,
  },
  addFriendContainer: {
    flex: 1,
    marginHorizontal: 2,
  },
  button: {
    padding: 10,
    elevation: 2,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#8900f8',
    // marginHorizontal: 20,
  },
  AcceptButton: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#8900f8',
    marginHorizontal: 5,
  },
  inviteCodeButton: {
    padding: 10,
    elevation: 2,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8900f8',
  },
  friendsButton: {
    // backgroundColor: '#FE8E2A',
  },
  invitationButton: {
    marginLeft: 3,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 10,
  },
  othersLeaderboard: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'none',
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: '#1f1061',
    marginTop: 18,
  },
  positionNumber: {
    color: '#9684a2',
    fontSize: 20,
    fontWeight: 'bold',
  },
  positionImage: {
    // width: '20%',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  othersProfileIcon: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#ef8439',
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  nameScore: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  othersLeaderboardName: {
    color: '#ef8439',
    // fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },
  othersLeaderboardPercentage: {
    color: '#FEA501',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
  logoViewAlign: {
    alignItems: 'center',
    // marginTop: 50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  modalTitle: {
    textAlign: 'center',
    color: '#ff9038',
    fontSize: 24,
    marginTop: 20,
    fontFamily: 'Inter-ExtraBold',
  },
  modalText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
    // marginTop: 20,
    fontFamily: 'Inter-Bold',
    marginLeft: 28,
    marginRight: 30,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#FFF',
  },
  loginText: {
    color: '#d5d5d7',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    marginLeft: 28,
    marginRight: 30,
  },
  searchButton: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    backgroundColor: '#ff9038',
  },
  searchText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  editNumberButton: {
    marginRight: 40,
    marginLeft: 40,
    // marginTop: 28,
    paddingTop: 10,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    borderWidth: 1,
    borderColor: '#FE8E2A',
  },
  editNumberText: {
    color: '#FE8E2A',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 22,
  },
  input: {
    height: 50,
    // margin: 18,
    marginHorizontal: 38,
    borderWidth: 1,
    // padding: 12,
    backgroundColor: '#FFF',
  },
  acceptRejectText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selected: {
    backgroundColor: '#ff9038',
  },
});

export default ManageFriends;
