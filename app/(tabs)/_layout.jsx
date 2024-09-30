import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: '#5EB0DB'}}>
        <Tabs.Screen name='home' 
        options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>
        }} 
        />
        <Tabs.Screen name='pets' 
        options={{
            title: 'Pets',
            headerShown: false,
            tabBarIcon: ({color}) => <MaterialIcons name="pets" size={24} color={color} />
        }} 
        />
        <Tabs.Screen name='calendar' 
        options={{
            title: 'Calendar',
            headerShown: false,
            tabBarIcon: ({color}) => <FontAwesome name="calendar" size={24} color={color} />
        }} 
        />
        <Tabs.Screen name='chat'
        options={{
            title: 'Chat',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
        }} 
        />
        <Tabs.Screen name='user'
        options={{
            title: 'User',
            headerShown: false,
            tabBarIcon: ({color}) => <FontAwesome5 name="user" size={24} color={color} />
        }} 
        />
    </Tabs>
  )
}