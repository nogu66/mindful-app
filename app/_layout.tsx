import { Tabs, Stack } from 'expo-router';
import { colors } from '../lib/theme';
import { useEffect } from 'react';
import { requestNotificationPermissions } from '../lib/notifications';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function RootLayout() {
  useEffect(() => {
    requestNotificationPermissions();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { 
          backgroundColor: '#fff',
          borderTopWidth: 0,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '400',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginBottom: 2,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="home" 
              size={24} 
              color={color} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="mindfulness" 
        options={{ 
          title: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="explore" 
              size={24} 
              color={color} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="detox" 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="add" 
              size={28} 
              color={color} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="rewards" 
        options={{ 
          title: 'Journey',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="description" 
              size={24} 
              color={color} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: 'Trends',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons 
              name="bar-chart" 
              size={24} 
              color={color} 
            />
          ),
        }} 
      />
    </Tabs>
  );
}


