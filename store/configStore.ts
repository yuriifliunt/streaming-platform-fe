import { DARK_THEME, LIGHT_THEME } from '@/constants';
import { create } from 'zustand';

type Store = {
  theme: 'light' | 'dark';
  changeTheme: () => void;
}

export const useConfigStore = create<Store>((set) => ({
  theme: 'light',
  changeTheme: () => set((state) => ({
    theme: state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
  })),
}))
