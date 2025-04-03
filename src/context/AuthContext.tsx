import useAuthStore from "@/stores/AuthStore";
import { User } from "@/types/AuthTypes";
import { createContext } from "react";

interface AuthContextType {
  user: User
}

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
)

const AuthProvider = ({ children }: { children: React.ReactNode}) => {
  const user = useAuthStore((state) => state.user)
  
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}
