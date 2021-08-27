import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Header extends Component {
  render() {
    const {header, headerText} = styles;

    return (
      <View style={header}>
        <Text style={headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 0,
    borderColor: 'white',
    backgroundColor: '#242121',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Cursive',
    color: 'white',
  },
});
