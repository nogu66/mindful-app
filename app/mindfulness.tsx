import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../lib/theme';

export default function MindfulnessScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60);

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

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 16 },
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
});



