import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
      renderRight: (route, props) => <SignOutButton  />
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
      >

        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */
        }
        <Text> link </Text>

      </ScrollView>
    );
  }
}


 class SignOutButton extends React.Component {
   render() {
      return (
        <TouchableOpacity onPress={ console.log('logout')}>
          <Text>Sign out </Text>
        </TouchableOpacity>
      );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
