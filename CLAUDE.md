# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MindfulPay is a React Native mindfulness app built with Expo, focusing on digital wellbeing and screen time management. The app uses a tab-based navigation with five main screens: Dashboard, Mindfulness, Detox, Rewards, and Settings.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Platform-specific development
npm run ios      # iOS simulator
npm run android  # Android simulator  
npm run web      # Web browser (limited library support)
```

Note: Use native simulators for full feature support, as some libraries like Reanimated have limited web support.

## Architecture

### Navigation Structure
- **File-based routing** with expo-router
- **Tab navigation** configured in `app/_layout.tsx`
- Each tab corresponds to a screen file in the `app/` directory

### State Management
- **Zustand store** in `store/useMindfulStore.ts` manages global app state
- Handles: MindCoin balance, daily goals, usage data, notification preferences

### Key Components
- `components/WeeklyUsageChart.tsx`: Victory Native chart for usage visualization
- Theme system in `lib/theme.ts` with comprehensive color palette and spacing
- Notification utilities in `lib/notifications.ts`

### Design System
The app uses a carefully crafted soft pastel palette optimized for mindfulness:
- **Primary**: Soft lavender (#a8b5f5) for calm and focus  
- **Secondary**: Sage green (#9ed6c7) for growth and healing
- **Background**: Gradient system from warm whites to aurora themes
- **Typography**: Consistent scale with mindful spacing (4xl spacing: 80px)

### Tech Stack
- **Expo** (React Native framework)
- **expo-router** for navigation
- **Zustand** for state management  
- **expo-notifications** for mindfulness reminders
- **victory-native + react-native-svg** for data visualization
- **TypeScript** for type safety

## App Features (Current MVP)
- Tab navigation with custom icons and styling
- Weekly usage chart with placeholder data
- Breathing timer for mindfulness sessions
- Detox goal adjustment system
- MindCoin reward system
- Notification permission handling on app start

## Next Development Priorities
- Integrate real screen time data sources per platform
- Implement MindCoin accrual logic and challenges  
- Add premium subscription flow and enterprise dashboard

## Important Files
- `app/_layout.tsx`: Main navigation and tab configuration
- `store/useMindfulStore.ts`: Central state management
- `lib/theme.ts`: Complete design system and color psychology
- `lib/notifications.ts`: Notification utilities