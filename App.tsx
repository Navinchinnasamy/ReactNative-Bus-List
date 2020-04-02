import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Button, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Home_StackNavigator, North_StackNavigator, South_StackNavigator } from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
   return (
	  <NavigationContainer>
		<Drawer.Navigator 
		  initialRouteName="Home" 
		  drawerContentOptions={{
			activeTintColor: '#e91e63',
			itemStyle: { marginVertical: 5 },
			labelStyle: { fontWeight: 'bold', fontSize: 18 }
		  }}
		  >
		  <Drawer.Screen 
			name="Home"
			component={Home_StackNavigator}
			options={{
			  title: 'Recent Bus',
			}}
		  />
		  <Drawer.Screen 
			name="North"
			component={North_StackNavigator}
			options={{
			  title: 'Bus Towards North',
			}}
		  />
		  <Drawer.Screen 
			name="South"
			component={South_StackNavigator}
			options={{
			  title: 'Bus Towards South',
			}}
		  />
		</Drawer.Navigator>
      </NavigationContainer>
   )
}
export default App