import React, { Component } from 'react'
import { Text, ScrollView, View, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native'
import moment from 'moment'

let busses = require('../assets/busses.json');

class List extends Component {
  state = {
	busList: [],
  };
   
  componentDidMount() {
    let that = this;

    //Getting the current date-time with required formate and UTC   
	let date = moment()
	  .utcOffset('+05:30')
	  .format('hh:mm a');
	let t1 = date.split(' ');
	let t2 = t1[0].split(':');
	let hrs = parseInt(t2[0]);
	let mns = parseInt(t2[1]);
	
	const bl =busses.filter((b) => {
	  const tmp = b.timing.split(':');
	  const tmp1 = tmp[1].split(' ');
	  const hr = parseInt(tmp[0]);
	  const mn = parseInt(tmp1[0]);
	  let mr = tmp1[1];
	  if(hr == 11){
		mr = (mr=="AM") ? "PM" : "AM";
	  }
	  const nhr = ((hr+1) > 12) ? ((hr+1)-12) : (hr+1);
	  return (((hr == hrs && mn >= mns) || (nhr == hrs && mn == mns)) && mr == t1[1]);
	});
    that.setState({ busList: bl });
    //Settign up time to show
  }
   
  render() {
      return (
		
         <ScrollView>
			<SafeAreaView>
            {
                this.state.busList.map((item, index) => (
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
export default List

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