import React from 'react';
import {StyleSheet, Text, View, Button, Alert, TouchableWithoutFeedback} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  constructor(){
    super();
  }

  // componentDidMount() {
  //   Font.loadAsync({
  //     'KaushanScript-Regular': require('./assets/fonts/KaushanScript-Regular.ttf'),
  //   });
  // }

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
        <Text style={styles.h1}>TAP'N'DRINK</Text>
        <Text style={styles.text}>AYEZ LA BONNE INTUITION</Text>
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 0
        }}>{carre}</View>
        <Button title="REJOUER" buttonStyle={{
            backgroundColor: "rgb(15, 144, 207)",
            width: 45,
            height: 45,
            borderColor: "solid",
            borderWidth: 1
          }}
          color="#efefef"
          onPress={() => this.isReplayed}
          ></Button>
    </View>);
  }
}

export class Case extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isDisabled: false,
    }
  }

  // isReplayed(){
  //   this.setState({
  //     clicked: false
  //   });
  // }

  onPress(){
      this.setState({
        clicked: true,
        });
        if(this.state.isDisabled){return;}
        this.setState({isDisabled: true})
      console.log('coucou')
  }


  style(){
      return {
          backgroundColor: this.state.clicked ? (this.props.value === "true" ? '#61bd6d' : '#e14938') : '#efefef',
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: '#475577',
      }
  }

  textStyle(){
    return {
      fontSize: 50,
      color: this.state.clicked ? '#efefef' : '#475577',
    }
  }

isDisabled(){
  this.setState({
    disabled: true
  });
}

  render() {
    const { isDisabled } = this.state
    return (
      <TouchableWithoutFeedback  onPress={() => this.onPress()}>
      <View style={this.style()}>
      <Text
          style={this.textStyle()}
          >{this.props.chiffre}</Text>
      </View>
    </TouchableWithoutFeedback>)
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
    fontWeight: 'normal'
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
    fontWeight: 'normal'
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
