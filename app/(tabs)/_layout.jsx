import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


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
        <Tabs.Screen name='search'
        options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name="search" size={24} color={color} />
        }} 
        />
        <Tabs.Screen name='pets' 
        options={{
            title: 'Pets',
            headerShown: false,
            tabBarIcon: ({color}) => <MaterialIcons name="pets" size={24} color={color} />
        }} 
        />
        <Tabs.Screen name='details'
        options={{
            title: 'Details',
            headerShown: false,
            tabBarIcon: ({color}) => <MaterialIcons name="assignment" size={24} color={color} />
        }} 
        />
        <Tabs.Screen name='notifications'
        options={{
            title: 'Notifications',
            headerShown: false,
            tabBarIcon: ({color}) => <Ionicons name="notifications" size={24} color={color} />
        }} 
        />
    </Tabs>
  )
}