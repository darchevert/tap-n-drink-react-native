import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      myArray : [
      { id:1, value:true},
      { id:2, value:false},
      { id:3, value:false},
      { id:4, value:false},
      { id:5, value:false},
      { id:6, value:false},
      { id:7, value:false},
      { id:8, value:false},
      { id:9, value:false}
      ]
    };
  }

  ComponentDidMount(){

      function shuffle(arra1) {
          var ctr = arra1.length, temp, index;
      // While there are elements in the array
          while (ctr > 0) {
      // Pick a random index
              index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
              ctr--;
      // And swap the last element with it
              temp = arra1[ctr];
              arra1[ctr] = arra1[index];
              arra1[index] = temp;
          }
          return arra1;
      }
        shuffle(this.state.myArray);
  }

  render() {



    var carre = [];

    for (var i = 0; i < this.state.myArray.length; i++) {
      carre.push(
        <Text style={styles.h1}>{i+1}</Text>
      );
      var key = i

    }

    return (<View style={styles.container}>
      <Text style={styles.h3}>Règles du jeu</Text>
      <View>

        <Text style={styles.h1}>TAP'N'DRINK</Text>
        <Text style={styles.text}>AYEZ LA BONNE INTUITION</Text>

      </View>

      {carre}

      <Button
        title="BUTTON_1"
        loadingProps={{
          size: "large",
          color: "rgba(111, 202, 186, 1)"
        }}
        key={key}
        titleStyle={{
          fontWeight: "700"
        }}
        buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          width: 45,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0
        }}
        containerStyle={{
          marginTop: 20
        }}
      value="REJOUER" color="#475577" />

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

      },
      case: {
        borderColor: '#475577',
        color: '#475577',
      }
    });
