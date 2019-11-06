import React, {Component} from 'react';
import {Text, View, BackHandler, Alert} from 'react-native';
import Header from '../Header/HeaderStart';
import SetupBody from './SetupBody';

class Setup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{alignContent: 'center'}}>
        <Header style={{width: '100%'}} />
        <SetupBody />
      </View>
    );
  }
  /*
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    if (true) {
      Alert.alert('Confirm exit', 'Do you want to return to the main menu?', [
        {text: 'CANCEL', style: 'cancel'},
        {
          text: 'OK',
          onPress: () => {
            return true;
          },
        },
      ]);
    }

    return true;
  };
  */
}
export default Setup;
