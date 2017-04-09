import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksScreen } from '../components/common/UwListView';

export default class ProfileScreen extends Component {
  render(){
    return (
      <ScrollView
        style={styles.container}>
        <ExpoLinksScreen/>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
