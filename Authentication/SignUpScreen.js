import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';




const SignUpScreen = ({ navigation }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSignUp = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Registration Error', 'Passwords do not match.');
      return;
    }

    const userData = {
      username: newUsername,
      name: newName,
      email: newEmail,
      password: newPassword,
    };

    saveUserLocally(userData); 

    Alert.alert('Registration Successful', 'You can now log in.');

    navigation.navigate('Login');
  };

  const saveUserLocally = async (userData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData)); 
    } catch (error) {
      console.error('Error saving user data:', error);
      Alert.alert('Registration Error', 'An error occurred during registration.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Full Name"
          onChangeText={text => setNewName(text)}
          value={newName}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          onChangeText={text => setNewEmail(text)}
          value={newEmail}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Username"
          onChangeText={text => setNewUsername(text)}
          value={newUsername}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          onChangeText={text => setNewPassword(text)}
          value={newPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={{}}>
        <Button
          title="Sign Up"
          color="lightblue"
          onPress={handleSignUp}/>
        <Button
          title="Cancel"
          color="lightslategrey"
          
          onPress={() => navigation.navigate('Login')}/>
      </View>
      <View style={styles.labelButtonContainer}>
        <View style={{  }}>
           <Text style={[styles.label]}>
           ALREADY HAVE AN ACCOUNT?
         </Text>
       </View>
  <View>
    <Button
      title="Log In"
      onPress={() => navigation.navigate('Login')}
      color="deepskyblue"
    />
  </View>
</View>

      

    </View>
  );
};

export default SignUpScreen;
