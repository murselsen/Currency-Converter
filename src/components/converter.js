import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import axios from 'axios';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tl: null,
      usd: null,
      cad: null,
      jpy: null,
      eur: null,
      inputValue: null,
      Rates: [],
    };

    this.getRates = this.getRates.bind(this);
  }

  getRates() {
    axios
      .get(
        'http://data.fixer.io/api/latest?access_key=2fa5f80a1d667bcbc64803e6a2f5efe7&symbols=TRY,USD,CAD,JPY,EUR',
      )
      .then(response => {
        console.log(response);
        const Rates = response.data.rates;
        this.setState({
          Rates,
        });
      });
  }

  componentDidMount() {
    try {
      /* axios
        .get(
          'http://data.fixer.io/api/latest?access_key=2fa5f80a1d667bcbc64803e6a2f5efe7&symbols=TRY,USD,CAD,JPY,EUR',
        )
        .then(response => {
          console.log(response);
          const Rates = response.data.rates;
          this.setState({
            Rates,
          });
        }); */
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {Content, InputGroup, Input, StateWrapper, StateText} = Css;
    const {tl, usd, cad, jpy, eur, inputValue, Rates} = this.state;
    return (
      <View style={Content}>
        <View style={InputGroup}>
          <TextInput
            style={Input}
            placeholder="Enter Price Value"
            maxLength={5}
            keyboardType="numeric"
            onPressIn={this.getRates}
            onChangeText={text => {
              const V = parseFloat(text) || 0;
              this.setState({
                inputValue: text,
                tl: (V * Rates.TRY).toFixed(3),
                usd: (V * Rates.USD).toFixed(3),
                cad: (V * Rates.CAD).toFixed(3),
                jpy: (V * Rates.JPY).toFixed(3),
                eur: (V * Rates.EUR).toFixed(3),
              });
              console.log(this.state);
            }}
            value={inputValue}
          />
        </View>
        <View style={StateWrapper}>
          <Text style={StateText}> TRY : {tl} </Text>
          <Text style={StateText}> USD : {usd} </Text>
          <Text style={StateText}> CAD : {cad} </Text>
          <Text style={StateText}> JPY : {jpy} </Text>
          <Text style={StateText}> EUR : {eur} </Text>
        </View>
      </View>
    );
  }
}

const Css = StyleSheet.create({
  Content: {
    /* borderWidth: 0, */
    margin: 10,
    flex: 1,
    flexDirection: 'column',
  },
  InputGroup: {
    height: 80,
    padding: 10,
    flexDirection: 'column',
    paddingHorizontal: 30,
  },

  Input: {
    marginTop: 10,
    borderWidth: 0.39999,
    borderBottomWidth: 0.9,
    borderColor: '#00000083',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  StateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    /* justifyContent: 'center', */
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  StateText: {
    fontSize: 20,
    borderLeftWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10,
    width: '50%',
    height: 80,
    marginBottom: 1,
  },
});

export default Converter;
