import { Tabs, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { colors } from '../lib/theme';
import { useEffect } from 'react';
import { requestNotificationPermissions } from '../lib/notifications';

export default function RootLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  useEffect(() => {
    requestNotificationPermissions();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="mindfulness" options={{ title: 'Mindfulness' }} />
      <Tabs.Screen name="detox" options={{ title: 'Detox' }} />
      <Tabs.Screen name="rewards" options={{ title: 'Rewards' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}


