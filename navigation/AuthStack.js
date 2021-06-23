import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';

import { GoogleSignin } from '@react-native-community/google-signin';
import Splasscreen from '../screens/Splasscreen';
import FoodList from '../screensAdmin/FoodList';
import FoodFormScreen from '../screensAdmin/FoodFormScreen';
import FoodDetailScreen from '../screensAdmin/FoodDetailScreen';
import ProductList from '../screensAdmin/ProductList';
import ProductDetail from '../screensAdmin/ProductDetail';


const Stack = createStackNavigator();

const AuthStack = () => {

  useEffect(() => {
    // AsyncStorage.getItem('alreadyLaunched').then((value) => {
    //   if (value == null) {
    //     AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
    //     setIsFirstLaunch(true);
    //   } else {
    //     setIsFirstLaunch(false);
    //   }
    // }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    GoogleSignin.configure({
      webClientId: '1066762547608-1k7p3kcml0scd9635vsnrboecc1ps64v.apps.googleusercontent.com',
    });
  
  }, []);



return(
<Stack.Navigator>
      <Stack.Screen
        name="Splasscreen"
        component={Splasscreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{header: () => null}}
      />
     <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />


       <Stack.Screen
        name="FoodList"
        component={FoodList}
        options={{header: () => null}}
      />      

     <Stack.Screen
        name="FoodFormScreen"
        component={FoodFormScreen}
        options={{header: () => null}}
      />  

       <Stack.Screen
        name="FoodDetailScreen"
        component={FoodDetailScreen}
        options={{header: () => null}}
      />  

       <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{header: () => null}}
      />  

    <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{header: () => null}}
      />        

     
    </Stack.Navigator>
);
};
export default AuthStack;





