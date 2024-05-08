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
          <View style={styles.nameContainer}>
            <Text style={styles.othersLeaderboardName}> {name} </Text>
          </View>
          <View style={styles.closeIconContainer}>
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
    <View>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.AcceptRejectButton]}
              onPress={() => {
                acceptRequest(id);
              }}>
              <Text style={styles.acceptRejectText}>Accept</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.AcceptRejectButton, styles.notifyButton]}
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
  const [friendsData, setFriendsData] = useState([]);

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

  // To accept request and update state
  const acceptRequest = id => {
    const updatedData = friendsData.map(item => {
      if (item.id === id) {
        return {...item, acceptance: true};
      }
      return item;
    });
    setFriendsData(updatedData);
  };

  // To reject request and update state
  const rejectRequest = (acceptance, id) => {
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
        <View style={styles.groupInvitationBtnContainer}>
          <View style={styles.groupInvitationsButton}>
            <TouchableOpacity
              style={[styles.button, selectedButton === 1 && styles.selected]}
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
        <View style={styles.addPinBtnsContainer}>
          <View style={styles.addFriendContainer}>
            <TouchableOpacity
              style={[styles.addFriendCodeButtons]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.iconText}>
                <AntIcon name="pluscircleo" size={26} color="#FFF" />

                <Text style={styles.text}>Add Friend</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.addFriendContainer}>
            <TouchableOpacity
              style={[styles.addFriendCodeButtons]}
              onPress={() => {
                // setModalVisible(!modalVisible);
              }}>
              <View style={styles.iconText}>
                <AntIcon name="arrowright" size={26} color="#FFF" />
                <Text style={styles.text}>Pincode</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

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
                style={styles.submitButton}
                underlayColor="#fff">
                <Text style={styles.searchText}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 15}}>
              <TouchableOpacity
                style={styles.backButton}
                underlayColor="#fff"
                onPress={() => {
                  // navigation.navigate('Register');
                }}>
                <Text style={styles.editNumberText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export function Header() {
  return (
    <View style={styles.logoAlign}>
      <Image
        style={styles.navLogo}
        source={require('../assets/image/logo.png')}
        alt="dr Logo"
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
  logoAlign: {
    alignItems: 'center',
    top: 40,
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
    alignItems: 'center',
  },
  AcceptRejectButton: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#8900f8',
    marginHorizontal: 5,
  },
  addFriendCodeButtons: {
    padding: 10,
    elevation: 2,
    alignItems: 'center',
    backgroundColor: '#8900f8',
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
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: '#1f1061',
    marginTop: 18,
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
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 12,
  },
  logoViewAlign: {
    alignItems: 'center',
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
    fontFamily: 'Inter-Bold',
    marginLeft: 28,
    marginRight: 30,
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
  submitButton: {
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
  backButton: {
    marginRight: 40,
    marginLeft: 40,
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
  },
  input: {
    height: 50,
    marginHorizontal: 38,
    borderWidth: 1,
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
  nameContainer: {
    width: '70%',
  },
  closeIconContainer: {
    width: '20%',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 70,
  },
  groupInvitationBtnContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 60,
    borderWidth: 2,
    borderColor: '#ff7c2b',
  },
  addPinBtnsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 18,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ManageFriends;
