import React, { Component } from "react";
import { Text, View, StyleSheet, Clipboard, WebView } from "react-native";
import { connect } from "react-redux";
import { setQuery, getArticles } from "../../Actions/gameDataAction";
import { SelectableText } from "@astrocoders/react-native-selectable-text";
import HTML from "react-native-render-html";

class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      title: "",
      currentClipBoard: "value",
      query: ""
    };
  }
  render() {
    return this.props.pro ? (
      <View style={styles.body}>
        <View style={styles.image} />

        <SelectableText
          menuItems={["Search Article"]}
          onSelection={({ content }) => {
            this.searchingConetent(content);
          }}
          value={this.props.pro.title}
          style={styles.title}
        />
        <SelectableText
          menuItems={["Search Article"]}
          onSelection={({ content }) => {
            this.searchingConetent(content);
          }}
          appendToChildren={""}
          value={this.props.pro.text}
        />
        {/*<HTML html={this.props.pro.text} textSelectable />*/}
      </View>
    ) : (
      <View>
        <Text> Something went wrong...</Text>
      </View>
    );
  }

  searchingConetent(query) {
    this.props.setQuery(query);
  }

  /*
  onClipBoardChange = async () => {
    var clipboardValue = await Clipboard.getString();
    await this.props.setQuery(clipboardValue);
    console.log(this.props.query);
  };
  */
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: "100%",

    backgroundColor: "black",
    position: "relative"
  },
  title: {
    fontSize: 30,

    right: 0,
    paddingRight: 5
  },
  text: {},

  body: {
    minHeight: 200,
    maxWidth: 500,
    backgroundColor: "grey",

    margin: 5,
    marginBottom: 0,
    padding: 5
  }
});

const mapStateToProps = state => ({
  query: state.gameData.query,
  loadingArticles: state.gameData.loadingArticles
});

export default connect(
  mapStateToProps,
  { setQuery, getArticles }
)(ArticleCard);

/*
Backup
state = {
    selection: [0, 0],
    text: "Super Aweomse Text",
    query: ""
  };

  render() {
    const {
      selection: [start, end],
      text
    } = this.state;
    const selected = text.substring(start, end);

    return (
      <View style={styles.body}>
        <View style={styles.image} />
        <Text style={styles.title}> This is the tile </Text>
        <Button title="hello" />

        <TextInput
          onSelectionChange={this.onSelectionChange}
          onChangeText={text => this.setState({ text })}
          value={text}
          keyboardType={null}
        />
        <Text>{` ${selected}`}</Text>
      </View>
    );
  }
onSelectionChange = event => {
    const selection = event.nativeEvent.selection;
    newQuery = this.state.text.substring(selection.start, selection.end);

    this.setState({ query: newQuery });
    this.setState({
      selection: [selection.start, selection.end]
    });
  };

*/
