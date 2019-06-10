import React, { Component } from "react";
import { Text, View, ScrollView, Clipboard, StyleSheet } from "react-native";
import BackgroundTimer from "react-native-background-timer";
import { setQuery } from "../../Actions/gameDataAction";
import { connect } from "react-redux";
import { Button } from "react-native-elements";

import Articles from "../Articles/Articles";

// https://github.com/ocetnik/react-native-background-timer

/*
const intervalId = BackgroundTimer.setInterval((previousValue = ) => {
  // this will be executed every 200 ms
  // even when app is the the background
  //console.log("tic");
  const previousValue;
  if (previousValue !== state.props.query) {
    console.log("changed value");
    previousValue = state.props.query;
  }
  previousValue = state.prevProps.query;
}, 200);
*/
class MainBody extends Component {
  state = {
    query: "Copy a Word",
    confirmStyle: "",
    confirmed: false,
    confirmeValue: 0
  };
  render() {
    styles = StyleSheet.create({
      defaultButton: {
        backgroundColor: this.state.confirmStyle
          ? this.state.confirmStyle
          : "blue"
      }
    });
    return (
      <View>
        <ScrollView>
          <Articles />
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            alignSelf: "center"
          }}
        >
          <Button
            title={this.state.query}
            buttonStyle={styles.defaultButton}
            onPress={() => this.updateButton()}
            //buttonStyle={}
          />
        </View>
      </View>
    );
  }

  updateButton = async () => {
    //Getting the clibord value for updating directly
    var clipboardValue = await Clipboard.getString();
    await this.props.setQuery(clipboardValue);

    if (this.state.confirmed === false) {
      if (this.props.query) {
        this.setState({ query: `Serach for ${this.props.query}?` });
        this.setState({ confirmeValue: 1 });
      } else {
        this.setState({ query: `Nothing on Clipboard` });
        this.setState({ confirmeValue: 0 });
      }

      //Setting colors for the button
      this.props.query
        ? this.setState({ confirmStyle: "green" })
        : this.setState({ confirmStyle: "orange" });

      //Next time the button is called, the "confirmation" will be run
      this.setState({ confirmed: true });
    } else {
      //Call update cards here because the word has been confirmed in (this.props.query)
      if (this.state.confirmeValue == 1) {
        this.setState({ confirmeValue: 0 });
      }

      //Resetting both the clipboard and the props to have no value
      this.props.setQuery("");
      Clipboard.setString("");
      this.setState({ confirmStyle: "blue" });

      //Changing the state.
      this.setState({ query: `Copy a Word` });
      this.setState({ confirmed: false });
    }
  };

  // reset the values when entering app
  componentDidMount() {
    Clipboard.setString("");
  }
}

const mapStateToProps = state => ({
  query: state.gameData.query
});

export default connect(
  mapStateToProps,
  { setQuery }
)(MainBody);
