import { create } from "zustand";

export const useBurgerStore = create((set) => ({
  isOpen: false,
  isMobile: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsMobile: (isMobile) => set({ isMobile }),
}));
