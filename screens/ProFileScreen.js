import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  Alert,

} from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileItem = ({ icon, name }) => (
  <View style={styles.itemContainer}>
    <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
    <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text>
    <FontAwesome name="angle-right" size={26} color="#1e1e1e" />
  </View>
);

const ProFileScreen = ({ navigation, route }) => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);



  const [post, setPost] = useState(null);

  const [fname, setfname] = useState(null);

  const handleUpdate = async () => {

    firestore()
      .collection('users')
      .doc(user.uid)
      .update({
        fname: userData.fname
      })
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
  }

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        } else {
          console.log('loi');
        }
      })
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.screenContainer}>
      {/* <StatusBar barStyle="light-content" /> */}
      {/*  */}
      {/*  */}
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.userContainer}>
            <ScrollView style={styles.container}
              contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
              showsVerticalScrollIndicator={false}>

              <Image
                // source={require('../images/logoapp2.png')}
                source={{ uri: userData ? userData.userImg || 'No details added.' : '' }}
                style={styles.userImg}
              />
              <Text style={styles.userName}>
                {user.email}
              </Text>

              {/* name google */}
              <Text>Welcome {user.displayName}</Text>

              <View style={styles.action}>
                <FontAwesome name="edit" color="#333333" size={20} onPress={() => navigation.navigate('EditUser')} />
                <Text
                  placeholder="Post"
                  placeholderTextColor="#666666"
                  value={post}
                  onChangeText={(content) => setPost(content)}
                  autoCorrect={false}
                  style={styles.textInput}
                > {userData ? userData.fname || 'No details added.' : ''}{' '}{userData ? userData.lname || 'User' : 'User'}</Text>
              </View>
              <View style={styles.userBtnWrapper}>
                <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                  <Text style={styles.userBtnTxt}>Logout</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/*  */}
          <View style={styles.divider} />
          <ProfileItem icon="format-list-bulleted" name="Quản lý đơn hàng" />
          <ProfileItem icon="cart-outline" name="Sản phẩm đã mua" />
          <ProfileItem icon="eye-outline" name="Sản phẩm đã xem" />
          <ProfileItem icon="heart-outline" name="Sản phẩm yêu thích" />
          <ProfileItem icon="bookmark-outline" name="Sản phẩm mua sau" />
          <ProfileItem icon="star-outline" name="Sản phẩm đánh giá" />
          {/*  */}
          <View style={styles.divider} />
          <ProfileItem name="Cài đặt" />
          <ProfileItem icon="headphones" name="Hỗ trợ" />
          {/*  */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  //
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e88e5',
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  welcomeText: {
    color: '#828282',
  },
  authText: {
    color: '#1e88e5',
    fontSize: 18,
    fontWeight: '500',
  },
  //
  itemContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemText: {
    flex: 1,
    color: '#1e1e1e',
  },
  //
  divider: {
    height: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 75,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: -10,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    margin: 10
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
    paddingLeft: 10,
    color: '#333333',
    textAlign: 'center'
  },
  action: {
    flexDirection: 'row',
    marginTop: 0,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingBottom: 5,
    marginRight: 40,
  },
});

export default ProFileScreen;