import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      casetmp: 9,
      case: []
    };
  }

  // componentDidMount() {
  //     Font.loadAsync({
  //       'KaushanScript-Regular': require('./assets/fonts/KaushanScript-Regular.ttf'),
  //       'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  //
  //     });
  //   }

  render() {

    var carre = [];

    for (var i = 0; i < this.state.casetmp; i++) {
      carre.push(
        <Text>tototot</Text>
      );

    }

    return (<View style={styles.container}>
      <Text h3="h3" style={styles.h3}>Règles du jeu</Text>
      <View>

        <Text h1="h1" style={styles.h1}>TAP'N'DRINK</Text>
        <Text text="text" style={styles.text}>AYEZ LA BONNE INTUITION</Text>

      </View>

      {carre}

      <Button title="BUTTON_1" loadingProps={{
          size: "large",
          color: "rgba(111, 202, 186, 1)"
        }} titleStyle={{
          fontWeight: "700"
        }} buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          width: 45,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0
        }} containerStyle={{
          marginTop: 20
        }}

      title="REJOUER" color="#475577" />

    </View>

    );
  }
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#475577',
        alignItems: 'center',
        justifyContent: 'center'
      },
      h1: {
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 25,
        color: '#efefef',
        // fontFamily: 'KaushanScript-Regular',
      },
      h2: {
        textAlign: 'center',
        fontSize: 30,
        margin: 80,
        color: '#efefef',
        // fontFamily: 'KaushanScript-Regular',
      },

      h3: {
        textAlign: 'right',
        fontSize: 25,
        marginBottom: 50,
        color: '#efefef',
        // fontFamily: 'KaushanScript-Regular',
      },

      h4: {
        textAlign: 'justify',
        fontSize: 25,
        marginTop: 200,
        color: '#efefef',
        // fontFamily: 'KaushanScript-Regular',
        lineHeight: 100
      },

      text: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 70,
        marginTop: 0,
        color: '#efefef',
        // fontFamily: 'OpenSans-Regular',

      }
    });
