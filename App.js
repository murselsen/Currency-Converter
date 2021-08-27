import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Header from './src/components/header'; /* Header styles */
import Converter from './src/components/converter'; /* Converter styles */

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {Container} = styles;
    return (
      <View style={Container}>
        <Header headerText="Currency Convertor" />
        <Converter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#D4C1C17C',
    padding: 0,
    margin: 0,
  },
});
