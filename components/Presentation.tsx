import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Presentation = (props) => {
	return (
		<View style={styles.container}>
		  <Text onPress={props.updateState}>{props.myState}</Text>
		  <View style = {styles.redbox} />
		  <View style = {styles.bluebox} />
          <View style = {styles.blackbox} />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black'
   },
});

export default Presentation;