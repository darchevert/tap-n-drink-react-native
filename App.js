import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      myArray: [
        {
          id: 1,
          value: true
        }, {
          id: 2,
          value: false
        }, {
          id: 3,
          value: false
        }, {
          id: 4,
          value: false
        }, {
          id: 5,
          value: false
        }, {
          id: 6,
          value: false
        }, {
          id: 7,
          value: false
        }, {
          id: 8,
          value: false
        }, {
          id: 9,
          value: false
        }
      ],
      win : false,
      isSelected: false
    };
  }

  ComponentDidMount() {

    function shuffle(arra1) {
      var ctr = arra1.length,
        temp,
        index;
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

    function changeColor(){
      if(this.state.value == "true") {
        this.style.backgroundColor = 'green'
        this.style.color = '#efefef'
      }
      else {
        this.style.backgroundColor = '#e14938'
        this.style.color = '#efefef'
      }
    }
  }

  render() {

    function _toto(){
      console.log("bonsoir");
    }

    var carre = [];

    for (var i = 0; i < this.state.myArray.length; i++) {
      carre.push(<View
        onPress={() => this.changeColor()}
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#e2e2e2',
          alignItems: 'center',
          justifyContent: 'center',
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: '#475577'
        }}
        key={i}
        >
        <Text style={{
          color: '#475577',
          fontSize: 50
        }}>{i + 1}</Text>
      </View>);
    }

    return (<View style={styles.container}>
      <Text style={styles.h3}>Règles du jeu</Text>
      <View>

          <Text style={styles.h1}>TAP'N'DRINK</Text>
          <Text style={styles.text}>AYEZ LA BONNE INTUITION</Text>

      </View>
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        {carre}
      </View>

      <Button title="REJOUER"
        buttonStyle={{
          backgroundColor: "rgb(15, 144, 207)",
          width: 45,
          height: 45,
          borderColor: "solid",
          borderWidth: 1
        }} color="rgb(215, 154, 16)"
        onPress={() => this._toto()}>
      </Button>

    </View>);
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
    marginBottom: 70,
    marginTop: 0,
    color: '#efefef',
    // fontFamily: 'OpenSans-Regular',
  }

});
