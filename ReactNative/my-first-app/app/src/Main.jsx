import React from 'react';
import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';
import RepositoryList from './Components/RepositoryList.jsx';

const Main = () => {
  return (
    <View style={{ flexGrow: 1, paddingTop: Constants.statusBarHeight }}>
      <Text style={Styles.title} >Rate Repository Application</Text>
      <Text>_________________________________________________</Text>
      <RepositoryList />
    </View>
  );
};

const Styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1

  }
})

export default Main;
