import React, {Component} from 'react';
import {Text, View, StyleSheet, BackHandler} from 'react-native';
import {Card, Button} from 'react-native-elements';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import RandomArticle from './RandomArticle/RandomArticle';
import ChosenArticle from './ChosenArticle/ChosenArticle';
import LargeIconButton from '../CustomComponents/LargeIconButton/LargeIconButton';

class SetupBody extends Component {
  state = {
    activeComponent: 'Random',
  };
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.child}>
          <View style={styles.navButtons}>
            {/* onPress={() => this.props.navigation.navigate('Main')}> */}
            <LargeIconButton
              style={{width: '50%'}}
              iconPosition={'left'}
              iconType={'Random'}
              buttonTitle={'RANDOM ARTICLE'}
              active={this.state.activeComponent === 'Random' ? true : false}
              parentCallback={this.callbackFunction}
            />
            <LargeIconButton
              style={{width: '50%'}}
              iconPosition={'right'}
              iconType={'Custom'}
              buttonTitle={'CUSTOM ARTICLE'}
              active={this.state.activeComponent === 'Custom' ? true : false}
              parentCallback={this.callbackFunction}
            />
          </View>
        </View>
        <View style={styles.child}>
          <View style={styles.cardBody}>
            {this.state.activeComponent === 'Random' ? (
              <RandomArticle />
            ) : (
              <ChosenArticle />
            )}
          </View>
        </View>
      </View>
    );
  }

  callbackFunction = childData => {
    this.setState({activeComponent: childData});
  };
}

const styles = StyleSheet.create({
  cardBody: {
    alignItems: 'center',
    height: 500,
    width: 202,
    top: 50,
  },
  child: {
    flex: 1,
  },
  navButtons: {
    flex: 1,

    flexDirection: 'row',
    padding: 5,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    top: 20,
  },
});
export default SetupBody;
