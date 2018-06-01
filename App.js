import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Font} from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      myArray: [
        {
          id: 1,
          value: true,
          clicked: false,
        }, {
          id: 2,
          value: false,
          clicked: false,

        }, {
          id: 3,
          value: false,
          clicked: false,

        }, {
          id: 4,
          value: false,
          clicked: false,

        }, {
          id: 5,
          value: false,
          clicked: false,

        }, {
          id: 6,
          value: false,
          clicked: false,

        }, {
          id: 7,
          value: false,
          clicked: false,

        }, {
          id: 8,
          value: false,
          clicked: false,

        }, {
          id: 9,
          value: false,
          clicked: false,

        }
      ],
      win: false,
      isSelected: false,

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



    jewelStyle = function(options) {
     return {
       borderRadius: 10,
       background: 'blue',
     }
   }


    function changeColor(val) {
      let color = null;
      if (val == "true") {
        color = 'green'
        console.log("green")
      } else {
        color = '#e14938'
        console.log("red")
      }

      return {
        backgroundColor: color,
        color : '#efefef'
      }

    }
  }



  render() {
    var carre = [];
    for (var i = 0; i < this.state.myArray.length; i++) {
      carre.push(<View

        style={{
          width: 100,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: '#475577',
          // backgroundColor: '#efefef'
        }}
        onPress={this.state.myArray[i].clicked ? changeColor(this.state.myArray[i].value) : {backgroundColor:'#efefef'}}
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
          flexWrap: 'wrap'
        }}>
        {carre}
      </View>
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
