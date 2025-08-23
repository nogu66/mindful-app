import { View, Text, StyleSheet, Switch } from 'react-native';
import { colors } from '../lib/theme';
import { useMindfulStore } from '../store/useMindfulStore';

export default function SettingsScreen() {
  const { enableNotifications, setEnableNotifications } = useMindfulStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.label}>Mindfulness Reminders</Text>
          <Text style={styles.hint}>Prompt short breaks during long screen time</Text>
        </View>
        <Switch value={enableNotifications} onValueChange={setEnableNotifications} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 16 },
  rowBetween: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  label: { fontWeight: '600', color: colors.text },
  hint: { color: '#64748b' },
});



