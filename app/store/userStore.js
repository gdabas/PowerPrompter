import create from "zustand";

const useStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  resetStore: () => set({ user: null }),
}));

export default useStore;
