import React, { Component } from "react";
import { Header } from "react-native-elements";
import { ToolbarAndroid, StatusBar, View, Text } from "react-native";
import CenterComponent from "./CenterComponent";

export default class HeaderBody extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden />
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={<CenterComponent />}
          rightComponent={{ icon: "home", color: "#fff" }}
          containerStyle={{
            justifyContent: "center"
          }}
        />
      </View>
    );
  }
}
