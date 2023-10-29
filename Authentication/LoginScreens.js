import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';



const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');

      if (userData) {
        const parsedUserData = JSON.parse(userData);
        const { username: savedUsername, password: savedPassword } = parsedUserData;

        if (username === savedUsername && password === savedPassword) {
          navigation.navigate('Profile', { username: savedUsername });
        } else {
          Alert.alert('Login Error', 'Invalid username or password.');
        }
      } else {
        Alert.alert('Login Error', 'User not found. Please sign up.');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
      Alert.alert('Login Error', 'An error occurred during login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Degree Deals')}
      />
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('Forgot Password')}
      />
    </View>
  );
};

export default LoginScreen;
