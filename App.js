import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'; // Correct import
import Entypo from '@expo/vector-icons/Entypo';
import { HomeScreen, MessagesScreen, ProfileScreen, SearchScreen } from './app/(tabs)'; // Ensure these are correctly exported

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute', // Corrected typo
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
    backgroundColor: '#fff', // Corrected property
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="home" size={24} color={focused ? '#16247d' : '#111'} /> {/* Fixed typo here */}
                <Text style={{ fontSize: 12, color: '#16247d' }}>HOME</Text>
              </View>
            ),
          }}
        />
        {/* Uncomment and correct the other screens as needed */}
        {/* <Tab.Screen
          name="SearchTab"
          component={SearchScreen}
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={{
            title: 'Messages',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'chatbubble' : 'chatbubble-outline'} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
