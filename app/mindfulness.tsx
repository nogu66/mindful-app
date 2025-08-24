import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../lib/theme';
import { FullscreenTimer } from '../components/FullscreenTimer';

export default function MindfulnessScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (secondsLeft <= 0) {
      setIsRunning(false);
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [isRunning, secondsLeft]);

  const start = (durationSec: number) => {
    setSecondsLeft(durationSec);
    setIsRunning(true);
  };

  const [selectedMinutes, setSelectedMinutes] = useState(5);

  const openFullscreenTimer = (minutes: number) => {
    setSelectedMinutes(minutes);
    setShowTimer(true);
  };

  return (
    <LinearGradient
      colors={['#1a1a2e', '#16213e', '#2d4a5a', '#4a6b7a', '#7fb3d3', '#a8d0e6', '#c8e6c9', '#e8f5e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>1-minute Breathing</Text>
      <Text style={styles.subtitle}>Inhale 4s • Hold 4s • Exhale 4s</Text>
      <View style={styles.timer}>
        <Text style={styles.timerText}>{secondsLeft}s</Text>
      </View>
      <Pressable style={styles.button} onPress={() => start(60)} disabled={isRunning}>
        <Text style={styles.buttonText}>{isRunning ? 'Running…' : 'Start 1 minute'}</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.buttonSecondary]} onPress={() => setIsRunning(false)}>
        <Text style={[styles.buttonText, { color: colors.primary }]}>Stop</Text>
      </Pressable>

      <View style={styles.timerButtons}>
        <Text style={styles.sectionTitle}>フルスクリーンタイマー</Text>
        <View style={styles.buttonRow}>
         <Pressable style={styles.timerButton} onPress={() => openFullscreenTimer(1)}>
            <Text style={styles.timerButtonText}>1分</Text>
          </Pressable>
          <Pressable style={styles.timerButton} onPress={() => openFullscreenTimer(5)}>
            <Text style={styles.timerButtonText}>5分</Text>
          </Pressable>
          <Pressable style={styles.timerButton} onPress={() => openFullscreenTimer(10)}>
            <Text style={styles.timerButtonText}>10分</Text>
          </Pressable>
          <Pressable style={styles.timerButton} onPress={() => openFullscreenTimer(15)}>
            <Text style={styles.timerButtonText}>15分</Text>
          </Pressable>
        </View>
      </View>

      <FullscreenTimer
        visible={showTimer}
        onClose={() => setShowTimer(false)}
        initialMinutes={selectedMinutes}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 80 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 4 },
  subtitle: { color: '#475569', marginBottom: 16 },
  timer: {
    height: 180,
    borderRadius: 90,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 180,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
  },
  timerText: { fontSize: 32, fontWeight: '800', color: colors.secondary },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#e0f2fe',
  },
  buttonText: { color: '#fff', fontWeight: '700' },
  timerButtons: {
    marginTop: 32,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textOnColor,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  timerButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    minWidth: 60,
    alignItems: 'center',
  },
  timerButtonText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 14,
  },
});



