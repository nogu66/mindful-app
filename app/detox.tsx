import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../lib/theme';
import { useMindfulStore } from '../store/useMindfulStore';

export default function DetoxScreen() {
  const { dailyGoalMinutes, reduceGoal, increaseGoal } = useMindfulStore();

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e', '#2d4a5a', '#4a6b7a', '#7fb3d3', '#a8d0e6', '#c8e6c9', '#e8f5e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Digital Detox Challenge</Text>
      <Text style={styles.subtitle}>Gradually reduce your daily screen time goal.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Goal</Text>
        <Text style={styles.goal}>{dailyGoalMinutes} min</Text>
        <View style={styles.row}>
          <Pressable style={styles.smallBtn} onPress={() => reduceGoal(5)}>
            <Text style={styles.smallBtnText}>-5</Text>
          </Pressable>
          <Pressable style={styles.smallBtn} onPress={() => increaseGoal(5)}>
            <Text style={styles.smallBtnText}>+5</Text>
          </Pressable>
        </View>
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
  cardTitle: { fontSize: 16, fontWeight: '600', color: colors.text },
  goal: { fontSize: 28, fontWeight: '800', color: colors.accent, marginVertical: 8 },
  row: { flexDirection: 'row', gap: 12 },
  smallBtn: { flex: 1, backgroundColor: colors.primary, borderRadius: 12, alignItems: 'center', paddingVertical: 10 },
  smallBtnText: { color: '#fff', fontWeight: '700' },
});



