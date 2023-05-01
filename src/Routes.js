// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';
// import { Home } from './Screen/Home';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Profile } from './Screen/Profile';
// const Tab = createMaterialBottomTabNavigator();
// import 'react-native-gesture-handler';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();



// // .........................................................

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
// export const MainNavigationFile = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
// //         <Tab.Screen name="Home" component={Home}   options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }} />
//         <Tab.Screen name="profile" component={Profile}  />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }



import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationString from './Content/NavigationString';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from './Bottom/BottomNavigator';
import { Profile } from './Drawer/Profile';
import Search from './Drawer/Search';
import Product from './Drawer/Product';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()
const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator >

        <Drawer.Screen
          name={NavigationString.Home}
          component={BottomNavigator}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name={NavigationString.Profile}
          component={Profile}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name={NavigationString.Search}
          component={Search}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name={NavigationString.Product}
          component={Product}
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>

    </NavigationContainer>
  );
};

export default Routes;