/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { Provider, connect } from "react-redux";

import store from "./app/store";

import MainBody from "./app/Components/MainBody/MainBody";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainBody />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default App;
/*
const { height } = Dimensions.get("window");
<ScrollView onContentSizeChange={this.onContentSizeChange}></ScrollView>
state = {
  screenHeight: 0
};
onContentSizeChange = (contentWidth, contentHeight) => {
  this.setState({ screenHeight: contentHeight });
};
*/
