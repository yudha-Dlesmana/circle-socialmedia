import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router";

export function ResetPassword(){
  const {user} = useContext(AuthContext)
  if(user.accessResetPass){
    return(
      <ResetPasswordForm />
    )
  } else {
    return(
      <Navigate to={"/forgot"} />
    )
  }
  
}