/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import App from './src/App';

export default class crmWriting extends Component {
  alf() {
    return (<Icon name='cloud' size={30} color='pink' />);
  }
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('crmWriting', () => crmWriting);
