import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../lib/theme';
import { useMindfulStore } from '../store/useMindfulStore';

export default function RewardsScreen() {
  const { mindCoin, nextRewardCost } = useMindfulStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MindCoin Rewards</Text>
      <Text style={styles.subtitle}>Earn MindCoin by meeting your detox goals.</Text>
      <View style={styles.card}>
        <Text style={styles.metric}>Balance</Text>
        <Text style={styles.balance}>{mindCoin} MC</Text>
        <Text style={styles.note}>Next reward unlock: {nextRewardCost} MC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text },
  subtitle: { color: '#475569', marginBottom: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
  },
  metric: { color: '#475569' },
  balance: { fontSize: 32, color: colors.secondary, fontWeight: '800' },
  note: { color: colors.accent, marginTop: 8, fontWeight: '600' },
});



