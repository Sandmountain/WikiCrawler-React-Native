/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Button,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Provider, connect} from 'react-redux';
import store from './app/store';
import {colors, ThemeProvider} from 'react-native-elements';

import {createSwitchNavigator} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {createAppContainer, navigationOptions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Transition} from 'react-native-reanimated';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import MainBody from './app/Components/MainBody/MainBody';
import Setup from './app/Components/SetupBody/Setup';
import HeaderStart from './app/Components/Header/HeaderStart';

import LargeIconButton from './app/Components/CustomComponents/LargeIconButton/LargeIconButton';

const backgroundImage = require('./app/Images/bg.jpg');

const theme = {
  colors: {
    primary: '#5bb5cd',
    secondary: '#ffae42',
  },
};

const RootStack = createStackNavigator(
  {
    Home: Setup,
    Main: MainBody,
  },
  {
    //misspelled "transparent" does the trick
    cardStyle: {backgroundColor: 'transperent'},
    tabBarOptions: {style: {backgroundColor: 'orange', marginTop: 24}},
    headerMode: 'none',
    navigationOptions: {
      headerVisible: 'none',
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0, // Set the animation duration time as 0 !!
      },
    }),
  },
);

let AppContainer = createAppContainer(RootStack);

//register to compomentDidApperaListener to keep track on which screen is currently open. The componentName and Id are stored in my redux store
/*Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  store.dispatch(updateCurrentScreen({'name': componentName, 'id': componentId}))
})*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'Custom',
    };
  }
  render() {
    return (
      <Provider store={store}>
        <ImageBackground source={backgroundImage} style={styles.background}>
          <AppContainer>
            <Setup />
          </AppContainer>
        </ImageBackground>
      </Provider>
    );
  }

  /* For white BottomNavBar
  componentWillMount() {
    changeNavigationBarColor('white', true);
  }
  */
}

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' /*space-between*/,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/*
const { height } = Dimensions.get("window");
<ScrollView onContentSizeChange={this.onContentSizeChange}></ScrollView>
state = {
  screenHeight: 0
};
onContentSizeChange = (contentWidth, contentHeight) => {
  this.setState({ screenHeight: contentHeight });
};
*/
