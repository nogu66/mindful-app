import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
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
              <View style={styles.countdownContainer}>
                <Text style={[styles.timerText, styles.countdownText]}>{countdown}</Text>
              </View>
            ) : (
              <View style={styles.circleContainer}>
                <Svg width={280} height={280} style={styles.progressCircle}>
                  <Circle
                    cx="140"
                    cy="140"
                    r="130"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <Circle
                    cx="140"
                    cy="140"
                    r="130"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 130}`}
                    strokeDashoffset={`${2 * Math.PI * 130 * (seconds / (initialMinutes * 60))}`}
                    strokeLinecap="round"
                    transform="rotate(-90 140 140)"
                  />
                </Svg>
                <View style={styles.timerTextContainer}>
                  <Text style={styles.timerText}>{formatTime(seconds)}</Text>
                </View>
              </View>
            )}
          </View>

          {!isCountingDown && (
            <View style={styles.controls}>
              <TouchableOpacity
                style={[styles.controlButton, styles.primaryButton]}
                onPress={handleStart}
              >
                <Text style={styles.primaryButtonText}>
                  {isActive ? '一時停止' : seconds === 0 ? 'タイマー終了' : '開始'}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.controlButton, styles.secondaryButton]}
                onPress={handleReset}
              >
                <Text style={styles.secondaryButtonText}>リセット</Text>
              </TouchableOpacity>
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
    marginBottom: 80,
    alignItems: 'center',
  },
  circleContainer: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressCircle: {
    position: 'absolute',
  },
  timerTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  timerText: {
    fontSize: 48,
    fontWeight: '300',
    color: colors.textOnColor,
    letterSpacing: 1,
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
    width: '80%',
  },
  controlButton: {
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textOnColor,
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
  countdownContainer: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdownText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 80,
    fontWeight: '200',
  },
});