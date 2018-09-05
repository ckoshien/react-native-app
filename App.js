import React from 'react';
import { StyleSheet, Text, WebView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export default class App extends React.Component {
  render() {
    return (
      <HTML html={htmlContent} imagesMaxWidth={Dimensions.get('window').width} />
      // <WebView style={styles.container}>
      //   <a href="">a</a>
      //   <b>Open up JCBL to start working on your app!</b>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </WebView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
