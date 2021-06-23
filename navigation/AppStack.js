import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProFileScreen from '../screens/ProFileScreen';
import MainTabNavigatorr from '../TabNavigator/MainTabNavigatorr';
// import EditProfileScreen from '../screens/EditProfileScreen';
import EditUser from '../screens/EditUser';
import ShopDetail from '../screens/ShopDetail';
// import Restaurant from '../screens/Restaurant';



const Stack = createStackNavigator();


const AppStack = () => {
    return (
<Stack.Navigator>
    <Stack.Screen name="Main" component={MainTabNavigatorr} options={{header: () => null}}/>
      <Stack.Screen
        name="EditUser"
        component={EditUser}
        options={{header: () => null}}
      />
            <Stack.Screen
        name="ShopDetail"
        component={ShopDetail}
        options={{header: () => null}}
      />
      {/* <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{header: () => null}}
      /> */}
</Stack.Navigator>
    );
};

export default AppStack;