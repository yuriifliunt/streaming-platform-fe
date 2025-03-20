import { create } from 'zustand';

type Store = {
  theme: 'light' | 'dark';
  changeTheme: (theme: 'light' | 'dark') => void;
}

export const useConfigStore = create<Store>((set) => ({
  theme: 'light',
  changeTheme: (value) => set(() => ({
    theme: value
  })),
}))
