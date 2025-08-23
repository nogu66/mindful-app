import { create } from 'zustand';

type MindfulState = {
  mindCoin: number;
  dailyGoalMinutes: number;
  weeklyUsageMinutes: number[]; // length 7
  enableNotifications: boolean;
  nextRewardCost: number;
  addMindCoin: (amount: number) => void;
  increaseGoal: (min: number) => void;
  reduceGoal: (min: number) => void;
  setEnableNotifications: (enabled: boolean) => void;
};

export const useMindfulStore = create<MindfulState>((set) => ({
  mindCoin: 20,
  dailyGoalMinutes: 120,
  weeklyUsageMinutes: [150, 160, 140, 155, 170, 130, 120],
  enableNotifications: false,
  nextRewardCost: 50,
  addMindCoin: (amount) => set((s) => ({ mindCoin: s.mindCoin + amount })),
  increaseGoal: (min) => set((s) => ({ dailyGoalMinutes: s.dailyGoalMinutes + min })),
  reduceGoal: (min) => set((s) => ({ dailyGoalMinutes: Math.max(30, s.dailyGoalMinutes - min) })),
  setEnableNotifications: (enabled) => set(() => ({ enableNotifications: enabled })),
}));



