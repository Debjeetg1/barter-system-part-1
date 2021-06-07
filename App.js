import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screen/SignUpLoginScreen'
import MyHeader from './components/MyHeader'

export default function App() {
  return (
    <View style={styles.container}>
      <MyHeader title='Barter System'/>
      <SignUpLoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : '#FDDFB2'
  }
})


