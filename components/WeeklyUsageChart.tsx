import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, softShadows } from '../lib/theme';

type Props = { data: number[] };

export function WeeklyUsageChart({ data }: Props) {
  const maxValue = Math.max(...data);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
                    height: maxValue > 0 ? (value / maxValue) * 120 : 2, // Reduced max height, minimum visibility
                    backgroundColor: colors.chart.primary,
                    opacity: value === 0 ? 0.3 : 1, // Visual feedback for zero values
                  },
                ]}
              />
            </View>
            <Text style={styles.label}>{days[index]}</Text>
            {/* <Text style={styles.value}>{value}m</Text> */}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
    backgroundColor: colors.chart.background,
    borderRadius: borderRadius.md,
    marginHorizontal: 2,
    ...softShadows.whisper,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around', // Better distribution
    height: 240, // Reduced overall chart height
    paddingBottom: spacing['lg'], // Space for labels using design system
    paddingHorizontal: spacing.sm, // Side breathing room
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  barWrapper: {
    height: 120, // Reduced bar wrapper height
    justifyContent: 'flex-end',
    marginBottom: spacing.md, // More space before labels
  },
  bar: {
    width: 20,
    borderRadius: borderRadius.lg,
    minHeight: 3,
    ...softShadows.soft,
  },
  label: {
    fontSize: typography.sizes.sm, // Using typography scale
    color: colors.text,
    marginBottom: spacing.xs, // More space between label and value
    fontWeight: '600' as const,
  },
  value: {
    fontSize: typography.sizes.xs, // Using typography scale
    color: colors.textSecondary,
    fontWeight: '500' as const,
  },
});



