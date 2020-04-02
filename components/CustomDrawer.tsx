import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button, View, TouchableOpacity, Image, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import List from './List';
import NorthList from './NorthList';
import SouthList from './SouthList';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator()

function Home_StackNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen 
		name="Home" 
		component={List}
		options={{
          title: 'Buses Now',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
		  headerLeft: () => (
			<View style={{ flexDirection: 'row' }}>
			  <TouchableOpacity onPress={()=>{navigation.toggleDrawer();}} >
			    <Image
				  source={require('../assets/drawer.png')}
				  style={{ width: 25, height: 25, marginLeft: 5, backgroundColor: 'white', borderRadius: 5 }}
			    />
			  </TouchableOpacity>
			  <Text>{JSON.stringify(navigation.toggleDrawer())}</Text>
		    </View>
          ),
        }}
		/>
    </Stack.Navigator>
  );
}

function North_StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
		name="North" 
		component={NorthList}
		options={{
          title: 'Buses Towards North',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
		/>
    </Stack.Navigator>
  );
}

function South_StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
		name="South" 
		component={SouthList}
		options={{
          title: 'Buses Towards South',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
		/>
    </Stack.Navigator>
  );
}

export {Home_StackNavigator, North_StackNavigator, South_StackNavigator}