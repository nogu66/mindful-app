import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../lib/theme';
import { WeeklyUsageChart } from '../components/WeeklyUsageChart';
import { useMindfulStore } from '../store/useMindfulStore';

export default function DashboardScreen() {
  const mindCoin = useMindfulStore((s) => s.mindCoin);
  const weeklyUsageMinutes = useMindfulStore((s) => s.weeklyUsageMinutes);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>MindfulPay Dashboard</Text>
      <Text style={styles.subtitle}>MindCoin: {mindCoin}</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Weekly Screen Time</Text>
        <WeeklyUsageChart data={weeklyUsageMinutes} />
      </View>
      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.metricLabel}>Today</Text>
          <Text style={styles.metricValue}>{weeklyUsageMinutes[6]} min</Text>
        </View>
        <View style={styles.smallCard}>
          <Text style={styles.metricLabel}>Avg (7d)</Text>
          <Text style={styles.metricValue}>
            {Math.round(weeklyUsageMinutes.reduce((a, b) => a + b, 0) / 7)} min
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: '700', color: colors.text, marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#334155', marginBottom: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 16,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', color: colors.text, marginBottom: 8 },
  row: { flexDirection: 'row', gap: 12 },
  smallCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    marginBottom: 16,
  },
  metricLabel: { color: '#475569' },
  metricValue: { color: colors.primary, fontWeight: '700', fontSize: 18 },
});



