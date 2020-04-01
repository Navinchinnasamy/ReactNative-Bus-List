import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'

const busses = require('../assets/busses.json');
const busList = busses.filter(x => x.direction === 'NORTH');

class SouthList extends Component {
   
   render() {
      return (
		
         <ScrollView>
			<SafeAreaView>
            {
                busList.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     >
					<Image source={require('../assets/logo.png')} style={styles.icon} />
                    <View style = {styles.busInfo}>
					  <Text style = {styles.busName}>{item.bus}</Text>
					  <Text style = {styles.busTime}>{item.timing}</Text>
					  <Text style = {styles.busTime}>{item.direction}</Text>
					</View>
                  </TouchableOpacity>
               ))
            }
			</SafeAreaView>
         </ScrollView>
      )
   }
}
export default SouthList

const styles = StyleSheet.create ({
   container: {
	  flexDirection: 'row',
      padding: 5,
      marginTop: 3,
      backgroundColor: '#E7ECEF',
   },
   busName: {
      color: '#4f603c',
	  fontWeight: 'bold',
	  fontSize: 20
   },
   busTime: {
	  color: '#5f502c',
	  fontWeight: 'bold',
	  fontSize: 15
   },
   icon: {
	   borderRadius: 10,
	   width: 100,
	   height: 100
   },
   busInfo: {
	   marginLeft: 15
   }
})