import { Tabs, Stack } from 'expo-router';
import { colors } from '../lib/theme';
import { useEffect } from 'react';
import { requestNotificationPermissions } from '../lib/notifications';
import { Image } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    requestNotificationPermissions();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#999999',
        tabBarStyle: { 
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderTopWidth: 0,
          paddingBottom: 34,
          paddingTop: 8,
          height: 90,
          position: 'absolute',
          bottom: 0,
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
          title: 'home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/home.png')} 
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: focused ? '#000000' : '#999999' 
              }} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="mindfulness" 
        options={{ 
          title: 'meditation',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/mindfulness.png')} 
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: focused ? '#000000' : '#999999' 
              }} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="detox" 
        options={{ 
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/digital_wellbeing.png')} 
              style={{ 
                width: 28, 
                height: 28, 
                tintColor: focused ? '#000000' : '#999999' 
              }} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="rewards" 
        options={{ 
          title: 'rewards',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/reward.png')} 
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: focused ? '#000000' : '#999999' 
              }} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: 'settings',
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/setting.png')} 
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: focused ? '#000000' : '#999999' 
              }} 
            />
          ),
        }} 
      />
    </Tabs>
  );
}


