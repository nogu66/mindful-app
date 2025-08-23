import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermissions() {
  const settings = await Notifications.getPermissionsAsync();
  if (!settings.granted) {
    await Notifications.requestPermissionsAsync();
  }
}

export async function scheduleMindfulnessReminder(minutesFromNow: number) {
  return Notifications.scheduleNotificationAsync({
    content: {
      title: 'Mindful break',
      body: 'Pause, breathe for one minute to reset your focus.',
    },
    trigger: { seconds: Math.max(60, minutesFromNow * 60) },
  });
}



