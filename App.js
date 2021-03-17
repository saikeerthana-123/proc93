import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppScreen from './screens/OceanScreen';
import WelcomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
  return (
     <AppContainer/> );
    }  
  }
  var appNavigator = createSwitchNavigator({
      WelcomeScreen:WelcomeScreen,
      AppScreen:AppScreen
  })
  
  const AppContainer = createAppContainer(appNavigator)