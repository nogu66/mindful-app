import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../lib/theme';
import { useMindfulStore } from '../store/useMindfulStore';

export default function RewardsScreen() {
  const { mindCoin, nextRewardCost } = useMindfulStore();

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e', '#2d4a5a', '#4a6b7a', '#7fb3d3', '#a8d0e6', '#c8e6c9', '#e8f5e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>MindCoin Rewards</Text>
      <Text style={styles.subtitle}>Earn MindCoin by meeting your detox goals.</Text>
      <View style={styles.card}>
        <Text style={styles.metric}>Balance</Text>
        <Text style={styles.balance}>{mindCoin} MC</Text>
        <Text style={styles.note}>Next reward unlock: {nextRewardCost} MC</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
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



