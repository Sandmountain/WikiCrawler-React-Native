import React, { Component } from "react";
import { Text, View, ScrollView, Clipboard, StyleSheet } from "react-native";
export default class CenterComponent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Current Article: 'Trump'</Text>
        <Text style={styles.text}>Seraching for: 'Obama'</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center"
  }
});
