import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, typography, shadows, borderRadius, gradients } from '../lib/theme';
import { WeeklyUsageChart } from '../components/WeeklyUsageChart';
import { useMindfulStore } from '../store/useMindfulStore';

export default function DashboardScreen() {
  const mindCoin = useMindfulStore((s) => s.mindCoin);
  const weeklyUsageMinutes = useMindfulStore((s) => s.weeklyUsageMinutes);

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e', '#2d4a5a', '#4a6b7a', '#7fb3d3', '#a8d0e6', '#c8e6c9', '#e8f5e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
      {/* Header Section with Generous Top Spacing */}
      {/* <View style={styles.headerSection}>
        <Text style={styles.title}>MindfulPay Dashboard</Text>
      </View> */}

      {/* Main Chart Card with Breathing Room */}
      <View style={styles.chartSection}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Screen Time</Text>
          <WeeklyUsageChart data={weeklyUsageMinutes} />
        </View>
      </View>

      {/* Metrics Section with Proper Spacing */}
      <View style={styles.metricsSection}>
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
      </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: { 
    paddingHorizontal: spacing.lg, // Using design system spacing
    paddingTop: spacing.xl, // Generous top padding
    paddingBottom: 120, // Safe area for tab bar + extra breathing room
  },
  
  // Header Section Spacing
  headerSection: {
  },
  title: { 
    fontSize: typography.sizes['3xl'], // Using typography scale
    fontWeight: '700' as const, 
    color: colors.text, 
    marginBottom: spacing.md, // Increased spacing
    letterSpacing: -0.5, // Tighter letter spacing for modern look
  },
  subtitle: { 
    fontSize: typography.sizes.lg, // Using typography scale
    color: colors.textSecondary, 
    fontWeight: '500' as const,
  },
  
  // Chart Section Spacing
  chartSection: {
    marginBottom: spacing.xl, // Large gap before metrics
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: borderRadius.lg, // Using design system border radius
    padding: spacing.lg, // Using design system spacing
    marginHorizontal: spacing.xs, // Subtle margin for shadow visibility
    ...shadows.md, // Using design system shadows
  },
  cardTitle: { 
    fontSize: typography.sizes.lg, // Using typography scale
    fontWeight: '600' as const, 
    color: colors.text, 
    marginBottom: spacing.md, // More space before chart
    letterSpacing: -0.3,
  },
  
  // Metrics Section Spacing
  metricsSection: {
    marginBottom: spacing.lg, // Bottom margin for scroll comfort
  },
  row: { 
    flexDirection: 'row', 
    gap: spacing.md, // Using design system spacing
  },
  smallCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: borderRadius.lg, // Consistent border radius
    padding: spacing.lg, // More generous padding
    marginHorizontal: 2, // Shadow visibility
    minHeight: 80, // Minimum height for consistent appearance
    justifyContent: 'center',
    ...shadows.sm, // Lighter shadow for smaller cards
  },
  metricLabel: { 
    color: colors.textSecondary,
    fontSize: typography.sizes.sm,
    fontWeight: '500' as const,
    marginBottom: spacing.sm, // Space between label and value
    letterSpacing: 0.2,
  },
  metricValue: { 
    color: '#6b7cf0', // Darker version of primary color
    fontWeight: '700' as const, 
    fontSize: typography.sizes.xl, // Using typography scale
    letterSpacing: -0.5,
  },
});



