import  { Layout }  from "@/components/layout/Layout";
import { Outlet } from "react-router";


export function Base (){
  return (
    <Layout>
      <Outlet />
    </Layout>
    
  );
}