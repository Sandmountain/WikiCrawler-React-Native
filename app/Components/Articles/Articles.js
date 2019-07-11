import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { setQuery, getArticles } from "../../Actions/gameDataAction";
import ArticleCard from "../ArticleCard/ArticleCard";
import axios from "axios";

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          text: "this is testText1124, a very good one",
          title: "sampleTitle1"
        },
        {
          text:
            "this is testText2, maybe this is good. Here is a little more text to use",
          title: "sampleTitle123"
        },
        { text: "this is testText3", title: "sampleTitle35" },
        { text: "this is testText4", title: "sampleTitle44" }
      ],
      newArticle: [],
      print: false
    };
  }

  render() {
    if (this.props.loadingArticles) {
      console.log("spinner");
    }

    if (this.state.newArticle.length > 0) {
      return this.state.newArticle.map((article, index) => {
        return (
          <View key={index}>
            <ArticleCard pro={article} />
          </View>
        );
      });
    } else {
      return (
        <View>
          <Text>Spinner</Text>
        </View>
      );
    }
  }
  componentDidMount() {
    this.LoadArticles("trump");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.setState({
        newArticle: []
      });
      this.LoadArticles(this.props.query);
    }
  }
  async waitingForResponse() {
    if (this.props.loadingArticles === false) {
      const theList = this.props.articles;
      this.setState({
        newArticle: theList
      });
    }
  }

  LoadArticles(query) {
    try {
      let articleObject = [];
      if (query) {
        axios
          .get(
            `https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=${query}`
          )
          .then(res => {
            //if(res.data[1][0])
            //data[1][0] title == goal?

            //Short summary of articles (used for example prob?)
            let summary = res.data[2];

            //getting the full articles
            res.data[1].map((title, index) => {
              let tempArticle = {
                title: "",
                text: "",
                imageUrl: ""
              };
              axios
                .all([
                  //https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles= <--- PLAIN TEXT
                  //https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles= <--- WITH HTML
                  axios.get(
                    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=${title}`
                  ),
                  axios.get(
                    `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${title}`
                  )
                ])
                .then(
                  axios.spread((textRes, imageRes) => {
                    let artPage = textRes.data.query.pages;
                    let imgPage = imageRes.data.query.pages;

                    //The article/image contentent needs its id.
                    let pageId = Object.keys(artPage)[0]; //retrives the id from the first item in the set  (the wiki structure)
                    const linebreaks = /\n/g;
                    const paragraphs = /(<p>)/g;
                    const regex = /(<([^>]+)>)/gi;
                    let newtextArticle = artPage[pageId].extract
                      .replace(linebreaks, "")
                      .replace(paragraphs, "\n\n")
                      .replace(regex, "");

                    //Setting the article
                    if (artPage[pageId].extract !== "") {
                      tempArticle.text = newtextArticle + "\n";
                    } else {
                      tempArticle.text =
                        "\n\nThere were no extra information from this article\n";
                    }

                    //Setting the image url
                    if (imgPage[pageId].original) {
                      tempArticle.imageUrl = imgPage[pageId].original["source"];
                    }
                    //Setting the title
                    tempArticle.title = title;

                    this.setState({
                      newArticle: [...this.state.newArticle, tempArticle]
                    });
                  })
                );
            });
          });
      }
    } catch (error) {
      console.log("getArticles", error);
    }
  }
}

const mapStateToProps = state => ({
  query: state.gameData.query,
  articles: state.gameData.articles,
  loadingArticles: state.gameData.loadingArticles
});

export default connect(
  mapStateToProps,
  { setQuery, getArticles }
)(Articles);
