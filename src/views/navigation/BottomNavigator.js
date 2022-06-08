import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Vector from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Feather';
import COLORS from '../../consts/colors';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CommunityScreen from '../screens/CommunityScreen';
import RecommenderScreen from '../screens/RecommenderScreen';
import MealScreen from '../screens/MealScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 60,
          borderTopWidth: 0,
          elevation: 15,
          backgroundColor: COLORS.primary,
        },
        showLabel: false,
        activeTintColor: COLORS.white,
        inactiveTintColor: COLORS.light,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Meal Plan"
        component={MealScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="calendar" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Recommender"
        component={RecommenderScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 100,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 15,
                borderRadius: 50,
                top: -25,
              }}>
              <Vector name="silverware-fork-knife" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="users" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="user" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
