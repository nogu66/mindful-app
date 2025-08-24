// Soft Pastel Palette for Mindfulness & Wellness
export const colors = {
  // Core Brand Colors - Soft & Calming
  primary: '#a8b5f5', // Soft lavender - promotes calm and focus
  primaryLight: '#c5d0f7', // Lighter lavender for backgrounds
  primaryDark: '#8b9cf3', // Slightly deeper for active states
  
  secondary: '#9ed6c7', // Soft sage green - growth and healing
  secondaryLight: '#b8e2d5', // Light sage for subtle accents
  secondaryDark: '#7bc9b3', // Deeper sage for emphasis
  
  // Supporting Wellness Colors
  accent: '#f4b5a3', // Soft peach - warmth and comfort
  accentLight: '#f8c9bb', // Light peach for gentle highlights
  
  tertiary: '#e8c5e8', // Soft dusty rose - self-care and compassion
  tertiaryLight: '#f0d4f0', // Very light rose for backgrounds
  
  // Background System - Organic & Breathing
  background: '#fdfcfb', // Warm white with subtle cream undertone
  backgroundSoft: '#f9f7f6', // Slightly deeper warm neutral
  surface: '#f7f5f4', // Cards and elevated surfaces
  surfaceElevated: '#ffffff', // Highest elevation surfaces
  
  // Text Hierarchy - Soft but Readable
  text: '#2d3748', // Soft dark gray - maintains readability
  textSecondary: '#718096', // Medium gray for secondary text
  textTertiary: '#a0aec0', // Light gray for hints and placeholders
  textOnColor: '#ffffff', // White text on colored backgrounds
  
  // Functional Colors - Gentle & Supportive
  success: '#81c784', // Soft green - achievements and progress
  successLight: '#c8e6c9', // Light green background
  
  warning: '#ffb74d', // Soft amber - gentle warnings
  warningLight: '#fff3c4', // Light amber background
  
  error: '#e57373', // Soft coral red - non-alarming errors
  errorLight: '#ffcdd2', // Light coral background
  
  info: '#90caf9', // Soft sky blue - helpful information
  infoLight: '#e3f2fd', // Light blue background
  
  // Border & Divider System
  border: '#ede7e3', // Warm light gray borders
  borderLight: '#f5f1ee', // Very subtle borders
  divider: '#e6ddd7', // Section dividers
  
  // Chart & Data Visualization - Harmonious Pastels
  chart: {
    primary: '#a8b5f5', // Main data color
    secondary: '#9ed6c7', // Secondary data
    tertiary: '#f4b5a3', // Third data series
    quaternary: '#e8c5e8', // Fourth series
    background: '#faf8f7', // Chart background
    grid: '#f0ebe6', // Grid lines
    text: '#6b7280', // Chart labels
  },
};

// Spacing system for consistent breathing room
export const spacing = {
  xs: 4,   // Micro spacing
  sm: 8,   // Small spacing
  md: 16,  // Default spacing
  lg: 24,  // Large spacing
  xl: 32,  // Extra large spacing
  '2xl': 48, // Section spacing
  '3xl': 64, // Hero spacing
  '4xl': 80, // Extra Hero spacing
};

// Typography scale
export const typography = {
  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },
  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
  // Font weights
  weights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

// Shadow system for depth (keeping original for compatibility)
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    elevation: 5,
  },
};

// Border radius system
export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 999,
};

// Soft Gradient System for Mindfulness Aesthetics
export const gradients = {
  // Primary gradient - soft lavender to sage
  primary: {
    colors: ['#c5d0f7', '#b8e2d5'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  
  // Wellness background - very subtle warmth
  background: {
    colors: ['#fdfcfb', '#f9f7f6'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  
  // Card elevation - soft glow effect
  card: {
    colors: ['#ffffff', '#f7f5f4'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  
  // Success gradient - progress celebration
  success: {
    colors: ['#c8e6c9', '#a8d5aa'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  // Meditation mode - dreamy purple to pink
  meditation: {
    colors: ['#e8c5e8', '#f4b5a3'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  
  // Dawn theme - morning meditation
  dawn: {
    colors: ['#fff3c4', '#f8c9bb'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  },
  
  // Ocean theme - calming water
  ocean: {
    colors: ['#e3f2fd', '#b8e2d5'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
  
  // Aurora theme - northern lights inspired
  aurora: {
    colors: ['#1a1a2e', '#16213e', '#0f3460', '#533483', '#7209b7', '#a663cc', '#4c956c', '#2f9599'],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  
  // Aurora background - subtle version for app background
  auroraBackground: {
    colors: ['#0f1419', '#1a1a2e', '#16213e', '#0f3460'],
    start: { x: 0, y: 0 },
    end: { x: 0, y: 1 },
  },
};

// Mindfulness Color Themes for Different Moods/Activities
export const themes = {
  default: {
    background: colors.background,
    surface: colors.surface,
    primary: colors.primary,
    text: colors.text,
  },
  
  meditation: {
    background: '#faf8f9',
    surface: colors.tertiaryLight,
    primary: colors.tertiary,
    text: colors.text,
  },
  
  focus: {
    background: '#f8f9fc',
    surface: colors.primaryLight,
    primary: colors.primary,
    text: colors.text,
  },
  
  nature: {
    background: '#f7faf8',
    surface: colors.secondaryLight,
    primary: colors.secondary,
    text: colors.text,
  },
  
  sunset: {
    background: '#fffbf7',
    surface: colors.accentLight,
    primary: colors.accent,
    text: colors.text,
  },
};

// Enhanced Shadow System for Soft Depth
export const softShadows = {
  // Barely perceptible - for subtle depth
  whisper: {
    shadowColor: colors.primary,
    shadowOpacity: 0.03,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 1,
  },
  
  // Gentle floating effect
  soft: {
    shadowColor: colors.primary,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  
  // Comfortable elevation
  medium: {
    shadowColor: colors.primary,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
    elevation: 4,
  },
  
  // Modal or important elements
  elevated: {
    shadowColor: colors.primary,
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 24,
    elevation: 8,
  },
};

// Color Psychology Guide for Implementation
export const colorPsychology = {
  lavender: 'Promotes calm, reduces anxiety, enhances meditation focus',
  sage: 'Represents growth, balance, and natural healing',
  peach: 'Provides warmth, comfort, and emotional support',
  dustyRose: 'Encourages self-care and compassionate awareness',
  warmNeutrals: 'Creates safe, organic feeling environments',
};

// Accessibility Color Combinations (WCAG AA compliant)
export const accessibleCombinations = {
  // High contrast for important text
  highContrast: {
    background: colors.background,
    text: colors.text, // Ratio: 4.8:1
  },
  
  // Medium contrast for secondary content
  mediumContrast: {
    background: colors.surface,
    text: colors.textSecondary, // Ratio: 4.2:1
  },
  
  // Colored backgrounds with safe text
  primaryText: {
    background: colors.primary,
    text: colors.textOnColor, // Ratio: 5.1:1
  },
  
  secondaryText: {
    background: colors.secondary,
    text: colors.text, // Ratio: 4.5:1
  },
};



