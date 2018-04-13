import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
      super(props);

      this.getRandomNumber = this.getRandomNumber.bind(this);
      this.state = {
          'number': 0
      }
  }

  componentDidMount() {
      this.diceThrowTimer = setInterval(this.getRandomNumber, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.diceThrowTimer);
  }

  getRandomNumber() {
      this.setState({
          'number': Math.floor(Math.random() * Math.floor(6))+1
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
  },
});
