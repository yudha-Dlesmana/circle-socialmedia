import  Center  from "@/components/layout/Center";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";


export function Base (){
  const {user} = useContext(AuthContext)

  if( user.login ){
    return (
      <Center>
        <Outlet />
      </Center>
    );
  } else {
    return <Navigate to={"/login"}/>
  }

  
}