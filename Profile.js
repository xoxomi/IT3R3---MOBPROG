import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableHighlight, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';


const CustomButton = ({ title, onPress, buttonStyle }) => (
  <TouchableHighlight
    style={[styles.button, buttonStyle]} 
    underlayColor="black"
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>
);

const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const savedUserData = await AsyncStorage.getItem('userData');
        if (savedUserData) {
          const parsedUserData = JSON.parse(savedUserData);
          setUserData(parsedUserData);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout:', error);
      Alert.alert('Logout Error', 'An error occurred during logout.');
    }
  };

  return (
    <View style={styles.container} >
      <View style={styles.shapeContainer}>
        <View style={styles.circle}>
          <Text style={styles.headerText}>Degree Deals</Text>
        </View>
      </View>
        
      <View style={{ marginVertical: 7 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Text style={styles.profileText}>
            <Icon name="user" size={35} color="black" />
          </Text>
          <Text style={{...styles.profileValue, fontSize: 25}}> {userData.name}</Text>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: 'black',  marginVertical: 8}}></View>
      </View>

      <View style={styles.profileData}>
           <View style={{ marginVertical: 1 }}></View>
        <Text style={{ ...styles.accountSettings, fontSize: 40 }}>Account Settings</Text>
        <View style={{ borderBottomWidth: 1, borderColor: 'black', marginVertical: 8 }}></View>
      </View>

      <View>
      <Text style={{ marginVertical: 8 }}> 
          <Icon name="envelope" size={30} color="black" />
       <Text style={{...styles.profileValue, fontSize: 20}}> Email: {userData.email}</Text>
      </Text>
      </View>

      <View style={styles.profileData1}>
        <Text style={styles.profileText}>
          <Icon name="user" size={35} color="black" />
          <Text style={{...styles.profileValue, fontSize: 20}}>  Username: {userData.username}</Text>
        </Text>
        <View style={{ borderBottomWidth: 1, borderColor: 'black', marginVertical: 8 }}></View>
      </View>

      <CustomButton title="Logout" onPress={handleLogout} buttonStyle={{ height: 50, width: 350,  position: 'absolute', bottom: 10, }} />

    </View>
  );
};

export default ProfileScreen;
