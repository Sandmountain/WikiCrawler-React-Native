import React, { Component } from "react";
import { Text, View, StyleSheet, Clipboard } from "react-native";
import { connect } from "react-redux";
import { setQuery } from "../../Actions/gameDataAction";

class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: [0, 0],
      text: props.article.text,
      title: props.article.title,
      currentClipBoard: "value",
      query: ""
    };
  }
  render() {
    return (
      <View style={styles.body} selectable>
        <View style={styles.image} />
        <Text style={styles.title} selectable>
          {this.state.title}
        </Text>

        <Text selectable>{this.state.text}</Text>
      </View>
    );
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
    width: 80,

    backgroundColor: "black",
    position: "relative"
  },
  title: { fontSize: 30, position: "absolute", marginLeft: 80, marginTop: 10 },
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
  query: state.gameData.query
});

export default connect(
  mapStateToProps,
  { setQuery }
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
