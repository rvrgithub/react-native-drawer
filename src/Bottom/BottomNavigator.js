import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Bottom = createBottomTabNavigator();
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationString from '../Content/NavigationString';
import { Home } from '../Drawer/Home';

const BottomNavigator = () => {
  return (
    <Bottom.Navigator initialRouteName={NavigationString.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarStyle: {
          // position: 'absolute',
          backgroundColor: '#ADD8E6',
          borderRadius: 50,
          bottom: 10,
          marginHorizontal: 16,
          padding: 20,
          paddingBottom:20,
height:80,
labelStyle: {
  fontSize: 50,
  margin: 0,
  padding: 0,
  tintColor:"green"
},

        }
      }}>

      {/* <Bottom.Screen
        name={NavigationString.Home}
        component={Home}
        options={{
            tabBarLabel: 'Screen1',
            headerShown: false,
            // tabBarIcon: ({ color }) => (
            //   <MaterialCommunityIcons name="Scree1" color={color} size={26} />
            // ),
          }}
      /> */}

      <Bottom.Screen
        name="Screen1"
        component={Screen1}

        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'red' : 'blue'
                }}
                source={require("../assets/person.png")} />
            )
          }
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'red' : 'blue'
                }}
                source={require("../assets/person.png")} />
            )
          }
        }}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{
          labelStyle:{
            font:40,
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                style={{
                  tintColor: focused ? 'red' : 'blue'
                }}
                source={require("../assets/person.png")} />
            )
          }
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
