import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";

function Auth(){
  const { user } = useContext(AuthContext)
  if (!user.login){
    return (
      <Outlet />
    )
  } else{
    return <Navigate to={'/home'} />
  }
}
export default Auth;