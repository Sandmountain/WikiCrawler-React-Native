import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Card, Button, Divider, Input} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEdit, faRandom} from '@fortawesome/free-solid-svg-icons';

import {TextField} from 'react-native-material-textfield';
import RNPickerSelect from 'react-native-picker-select';

class RandomArticle extends Component {
  state = {
    RandomArticleValue: '',
    StartingArticle: 'Starting Article:',
    GoalArticle: 'Finishing Article',
  };

  render() {
    let data = [
      {
        label: 'Adjectives',
        value: 0,
      },
      {
        label: 'Nature',
        value: 1,
      },
      {
        label: 'Things',
        value: 2,
      },
      {
        label: 'Technology',
        value: 3,
      },
      {
        label: 'People',
        value: 4,
      },
    ];
    const placeholder = {
      label: 'Select a category',
      value: '',
      color: '#b3b3b3',
    };
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={styles.body}>
          <Text style={{fontWeight: 'bold', paddingBottom: 5}}>
            RANDOM ARTICLE
          </Text>
          <Text style={{paddingBottom: 5, fontSize: 12}}>
            Please choose from the dropdown menu a category your goal article
            should be from, the starting article will always be chosen from
            another category.
          </Text>
          <Divider />
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              paddingTop: 25,
            }}>
            {/* https://www.npmjs.com/package/react-native-picker-select */}

            <RNPickerSelect
              placeholder={placeholder}
              style={{
                width: 600,
                color: '#344953',
              }}
              onValueChange={value => this.getArticleSetup(value)}
              items={data}
            />
          </View>

          {/* https://github.com/n4kz/react-native-material-textfield*/}

          {this.state.RandomArticleValue !== '' ? (
            <View>
              <View style={{width: '90%', alignSelf: 'center'}}>
                <TextField
                  disabled={true}
                  labelTextStyle={{}}
                  labelFontSize={12}
                  fontSize={12}
                  baseColor="rgb(0, 145, 234)"
                  disabledLineType="solid"
                  label={this.state.StartingArticle}
                />
                <TextField
                  disabled={true}
                  affixTextStyle={{
                    alignSelf: 'center',
                    color: '#FF0000',
                  }}
                  labelFontSize={12}
                  fontSize={12}
                  baseColor="rgb(0, 145, 234)"
                  disabledLineType="solid"
                  label={this.state.GoalArticle}
                />
              </View>
              <View style={{alignSelf: 'center', paddingTop: 10}}>
                <Button
                  icon={<FontAwesomeIcon icon={faRandom} />}
                  type="clear"
                  buttonStyle={{
                    height: 30,
                    width: 60,
                    backgroundColor: 'white',
                    elevation: 1,
                  }}
                  onPress={() =>
                    this.getArticleSetup(this.state.RandomArticleValue)
                  }></Button>
              </View>
            </View>
          ) : (
            <View style={{width: '90%', alignSelf: 'center'}}>
              <TextField
                disabled={true}
                labelTextStyle={{fontStyle: 'italic'}}
                labelFontSize={10}
                fontSize={12}
                baseColor="rgba(0, 0, 0, .20)"
                label={this.state.StartingArticle}
              />
              <TextField
                disabled={true}
                labelTextStyle={{fontStyle: 'italic'}}
                labelFontSize={10}
                fontSize={12}
                baseColor="rgba(0, 0, 0, .20)"
                label={this.state.GoalArticle}
              />
            </View>
          )}
        </View>
        <View style={{paddingTop: 5}}>
          <Button
            title="VALIDATE ARTICLE"
            type="clear"
            style={{margin: 2}}
            onPress={() => this.getRandomArticle()}></Button>
          {/*this.props.navigation.navigate('Main') */}
        </View>
      </View>
    );
  }

  getArticleSetup = value => {
    if (value !== '') {
      this.setState({RandomArticleValue: value});
      const categories = require('./Categories.js');

      categoriesArray = Object.values(categories.default);

      let exceptIndex = value;
      let filteredItems = categoriesArray.filter(
        (value, index) => index !== exceptIndex,
      );

      let start = this.getRandomArticle(
        filteredItems[Math.floor(Math.random() * filteredItems.length)],
      );
      let goal = this.getRandomArticle(categoriesArray[value]);

      // Make redux:
      this.setState({StartingArticle: start});
      this.setState({GoalArticle: goal});
    } else {
      this.setState({RandomArticleValue: value});
    }
  };

  getRandomArticle = words => {
    return words[Math.floor(Math.random() * words.length)];
  };
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    marginBottom: 0,
    padding: 5,
    borderRadius: 4,
    width: '140%',
    elevation: 2,
  },
});

export default withNavigation(RandomArticle);
