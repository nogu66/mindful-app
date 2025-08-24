import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, gradients } from '../lib/theme';

interface FullscreenTimerProps {
  visible: boolean;
  onClose: () => void;
  initialMinutes: number;
}

export const FullscreenTimer: React.FC<FullscreenTimerProps> = ({
  visible,
  onClose,
  initialMinutes,
}) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(false);

  useEffect(() => {
    if (visible) {
      setSeconds(initialMinutes * 60);
      setIsActive(false);
      setCountdown(3);
      setIsCountingDown(true);
    }
  }, [visible, initialMinutes]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isCountingDown && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(count => {
          if (count === 1) {
            setIsCountingDown(false);
            setIsActive(true);
          }
          return count - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isCountingDown, countdown]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsCountingDown(false);
    setSeconds(initialMinutes * 60);
    setCountdown(3);
  };

  return (
    <Modal visible={visible} animationType="fade" statusBarHidden>
      <LinearGradient
        colors={gradients.auroraBackground.colors}
        start={gradients.auroraBackground.start}
        end={gradients.auroraBackground.end}
        style={styles.container}
      >
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>

          <View style={styles.timerDisplay}>
            {isCountingDown ? (
              <Text style={[styles.timerText, styles.countdownText]}>{countdown}</Text>
            ) : (
              <Text style={styles.timerText}>{formatTime(seconds)}</Text>
            )}
          </View>

          {!isCountingDown && (
            <View style={styles.controls}>
              <TouchableOpacity
                style={[styles.controlButton, styles.startButton]}
                onPress={handleStart}
              >
                <Text style={styles.controlButtonText}>
                  {isActive ? '一時停止' : '開始'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.controlButton, styles.resetButton]}
                onPress={handleReset}
              >
                <Text style={styles.controlButtonText}>リセット</Text>
              </TouchableOpacity>
            </View>
          )}

          {seconds === 0 && (
            <View style={styles.completedMessage}>
              <Text style={styles.completedText}>タイマー終了！</Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </Modal>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    width: width * 0.9,
  },
  closeButton: {
    position: 'absolute',
    top: -height * 0.15,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 28,
    color: colors.textOnColor,
    fontWeight: '300',
  },
  timerDisplay: {
    marginBottom: 60,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 72,
    fontWeight: '200',
    color: colors.textOnColor,
    letterSpacing: 2,
  },
  controls: {
    flexDirection: 'row',
    gap: 24,
  },
  controlButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    minWidth: 120,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  resetButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  controlButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  completedMessage: {
    marginTop: 40,
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  completedText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },
  countdownText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 120,
    fontWeight: '300',
  },
});