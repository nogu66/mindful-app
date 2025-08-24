import { View, Text, StyleSheet, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../lib/theme';
import { useMindfulStore } from '../store/useMindfulStore';

export default function SettingsScreen() {
  const { enableNotifications, setEnableNotifications } = useMindfulStore();

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e', '#2d4a5a', '#4a6b7a', '#7fb3d3', '#a8d0e6', '#c8e6c9', '#e8f5e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Settings</Text>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.label}>Mindfulness Reminders</Text>
          <Text style={styles.hint}>Prompt short breaks during long screen time</Text>
        </View>
        <Switch value={enableNotifications} onValueChange={setEnableNotifications} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 16 },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { fontWeight: '600', color: colors.text },
  hint: { color: '#64748b' },
});



