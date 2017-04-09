import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
//import HomeScreen from './screens/LearningScreen';
//import HomeScreen from './screens/ProfileScreen';
//import HomeScreen from './screens/SettingsScreen';
//import HomeScreen from './screens/LinksScreen';
//import HomeScreen from './screens/HomeScreen';
import HomeScreen from './components/FBExp';

class App extends Component {
  render() {
      return (<HomeScreen />);

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});


export default App;
