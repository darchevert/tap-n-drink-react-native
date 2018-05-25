import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<Text>Règles du jeu</Text>
        <View>

          <Text>TAP'N'DRINK</Text>
          <Text>AYEZ LA BONNE INTUITION</Text>


          </View>
          <View id="resultat"></View>
          {/* <Button id="button" class="col-md-4 offset-md-4 btn btn-light btn-lg rounded-0" onclick="luxe()" style="display:none;">REJOUER</Button> */}

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
