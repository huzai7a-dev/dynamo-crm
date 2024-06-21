import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IUser } from "../types/entities/user";

interface ProfileState {
  profile: null | Partial<IUser>;
  setProfile: (profile: any) => void;
}

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile: Partial<IUser>) => set({ profile }),
    }),
    {
      name: "profile",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProfileStore;
