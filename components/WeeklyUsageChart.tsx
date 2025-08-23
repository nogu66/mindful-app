import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../lib/theme';

type Props = { data: number[] };

export function WeeklyUsageChart({ data }: Props) {
  const maxValue = Math.max(...data);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        {data.map((value, index) => (
          <View key={index} style={styles.barContainer}>
            <View style={styles.barWrapper}>
              <View
                style={[
                  styles.bar,
                  {
                    height: maxValue > 0 ? (value / maxValue) * 140 : 0,
                    backgroundColor: colors.primary,
                  },
                ]}
              />
            </View>
            <Text style={styles.label}>{days[index]}</Text>
            <Text style={styles.value}>{value}m</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    padding: 16,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 180,
    paddingBottom: 40,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  barWrapper: {
    height: 140,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  bar: {
    width: 24,
    borderRadius: 4,
    minHeight: 2,
  },
  label: {
    fontSize: 12,
    color: colors.text,
    marginBottom: 2,
    fontWeight: '500',
  },
  value: {
    fontSize: 10,
    color: '#64748b',
  },
});



