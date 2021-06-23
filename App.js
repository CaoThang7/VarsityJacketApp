// import React from 'react';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import OnboardingScreen from './screens/OnboardingScreen';
// import LoginScreen from './screens/LoginScreen';

// const AppStack = createStackNavigator();

// const App = ({ navigation }) => {
//   return (
//     <NavigationContainer>
//       <AppStack.Navigator headerMode='none'>
//         <AppStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
//         <AppStack.Screen name="LoginScreen" component={LoginScreen} />
//       </AppStack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React from 'react';
import Providers from './navigation';

const App = () => {
  return <Providers/>;
}

export default App;