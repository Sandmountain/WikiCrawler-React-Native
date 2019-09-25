import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button} from 'react-native-elements';
import {HeaderBackButton} from 'react-navigation';

const navigationOptions = ({navigation}) => ({
  headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
});

class ChosenArticle extends Component {
  render() {
    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        <View style={styles.cardBody}>
          <Text> Custom Article</Text>
        </View>
        <View style={{paddingTop: 5}}>
          <Button
            title="VALIDATE ARTICLE"
            type="clear"
            style={{margin: 2}}
            onPress={() => this.props.navigation.navigate('Main')}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardBody: {
    height: '80%',
    backgroundColor: 'white',
    margin: 5,
    marginBottom: 0,
    padding: 5,
    borderRadius: 4,
    width: '140%',
    elevation: 2,
  },
});

export default withNavigation(ChosenArticle);
