import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text>HomeScreen! test</Text>
      </View>
    )
  }
}

export default HomeScreen;
