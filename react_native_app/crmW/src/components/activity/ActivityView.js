import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class TabViewExample extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: '活動' },
      { key: '2', title: '公告' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index });
  };

  renderHeader = (props) => <TabBar {...props} />;

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={[styles.page, { backgroundColor: '#ff4081' }]} />;
    case '2':
      return <View style={[styles.page, { backgroundColor: '#673ab7' }]} />;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}
