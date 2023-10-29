import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

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
    <View style={styles.container}>
      
      
      <View style={styles.profileData}>
        <Text style={styles.profileText}>
          <Icon name="user" size={40} color="black" />
          Full Name:
          <Text style={styles.profileValue}> {userData.name}</Text>
        </Text>
      </View>
      <View style={styles.profileData}>
           <View style={styles.profileData}>
        <Text style={styles.accountSettings}>Account Settings</Text>
      </View>
        <Text style={styles.profileText}>
          <Icon name="envelope" size={40} color="black" />
       

          <Text style={styles.profileValue}> {userData.email}</Text>
        </Text>
      </View>
      <View style={styles.profileData1}>
        <Text style={styles.profileText}>
          <Icon name="user" size={40} color="black" />
          Username:
          <Text style={styles.profileValue1}> {userData.username}</Text>
        </Text>
      </View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
