import React, { Component } from "react";
import { Text, View } from "react-native";

import ArticleCard from "../ArticleCard/ArticleCard";

export default class Articles extends Component {
  state = {
    articles: [
      { text: "this is testText1, a very good one", title: "sampleTitle1" },
      { text: "this is testText2, maybe this is good", title: "sampleTitle2" },
      { text: "this is testText3", title: "sampleTitle3" },
      { text: "this is testText4", title: "sampleTitle4" }
    ]
  };
  render() {
    return this.state.articles.map((article, index) => {
      return (
        <View key={index}>
          <ArticleCard article={article} />
        </View>
      );
    });
  }
}
