import { User } from "@/types/AuthTypes";
import { set } from "react-hook-form";
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthStore{
  user: User
  setUser: (user: User) => void;
  logIn: () => void;
  logOut: () => void;
  accessResetPass: () => void;
  resetPass: (newPass : string) => void;
  clearUser: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {} as User,
      setUser: (user) => set(() => ({user})),
      logIn: () => set((state) => ({
        user: {...state.user, login:true }
      })),
      logOut: () => set((state) => ({
        user: {...state.user, login:false }
      })),

      accessResetPass: () => {
        set((state) => ({
          user: { ...state.user, accessResetPass: true},
        }));
        setTimeout(() => {
          set((state) => ({
            user: {...state.user, accessResetPass: false},
          }));
        }, 50000);
      },

      resetPass: (newPass) => set((state) => ({
        user: {...state.user, password: newPass }        
      })),
      clearUser: () => set(() => ({user: {} as User})),
    }),
    {name: "auth-store"}
  )
)
export default useAuthStore