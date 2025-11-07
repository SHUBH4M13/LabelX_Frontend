import { create } from "zustand";

const useEmailStore = create((set) => ({
  email: null,

  updateEmail: (email) => set({ email }),

  resetEmail: () => set({ email: null }),
}));

export default useEmailStore;
