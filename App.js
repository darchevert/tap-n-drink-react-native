import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  constructor() {
    super();
  }

  ReglesDuJeu() {
    Alert.alert("Trouves parmis les 9 cases celle qui te permettra de distribuer" +
    " des gorgées ou qui te fera boire des gorgées.\n \n Si tu trouves du premier coup," +
    " tu distribues 4 gorgées, sinon une de moins à chaque coup jusqu'à devoir toi même boire des gorgées!")
  }

  render() {

    let arr = new Array(9).fill("false");
    arr[Math.floor(Math.random() * 9)] = "true";

    var carre = [];
    for (var i = 1; i < 10; i++) {
      carre.push(<Case value={arr[i]} chiffre={i} title={i}/>)
    }

    return (<View style={styles.container}>
      <Text style={styles.h3} onPress={this.ReglesDuJeu}>Règles du jeu</Text>
      <View>

        <Text style={styles.h1}>TAP'N'DRINK</Text>
        <Text style={styles.text}>AYEZ LA BONNE INTUITION</Text>

      </View>
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>{carre}</View>

      <View>
        <Button title="REJOUER" buttonStyle={{
            backgroundColor: "rgb(15, 144, 207)",
            width: 45,
            height: 45,
            borderColor: "solid",
            borderWidth: 1
          }} color="#efefef"></Button>
      </View>
    </View>);
  }
}

export class Case extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }

  }

  render() {

    return (
      <View style={{
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#475577',
        backgroundColor: '#efefef'
      }}
      onPress={this.onPress}>
      <Text style={{
          color: '#475577',
          fontSize: 50}}>{this.props.chiffre}</Text>
      </View>)
  }
  onPress(){
      this.setState('clicked', true);
  }

  style(){
      return {
          backgroundColor: this.state.clicked ? (this.props.value === "true" ? 'green' : 'false') : 'red',
      }
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
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 25,
    color: '#efefef',
    // fontFamily: 'KaushanScript-Regular',
  },
  h2: {
    textAlign: 'center',
    fontSize: 30,
    margin: 25,
    // fontFamily: 'KaushanScript-Regular',
  },

  h3: {
    textAlign: 'right',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 25,
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
    marginBottom: 10,
    marginTop: 0,
    color: '#efefef',
    // fontFamily: 'OpenSans-Regular',
  }

});
