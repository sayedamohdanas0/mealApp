import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
// import {CreateNativeStackNavigator} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Button} from 'react-native';
import CategoriesScreen from './Screenn/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from './Screenn/MealOverViewScreen'
import { createRef, useState } from 'react';
import MealDetailScreen from './Screenn/MealDetailScreen'

const Drawer=createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Bottom=createBottomTabNavigator()
export default function App() { 
  
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{ headerStyle:{backgroundColor:'#351401'},
    headerTintColor:'white',
    contentStyle:{backgroundColor:'#3f2f25'}}}>
      <Stack.Screen name="MealCategories" component={CategoriesScreen}  options={{
        title:"All Categories",
       
      }
      } />
        <Stack.Screen name="MealOverView" component={MealOverViewScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
