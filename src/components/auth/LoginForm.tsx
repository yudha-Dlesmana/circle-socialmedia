import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

import logo from '../../assets/logo.svg'

const usernameSchema = z.string().min(6, "username at least 6 characters");
const emailSchema = z.string().email("Invalid email address");

const LoginSchema = z.object({
  emailOrUsernameSchema: z.union([usernameSchema, emailSchema]),
  passwordSchema: z.string().min(12, "Invalid password")
})

export function LoginForm(){
  // Define Form
  const login = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  })
  // Handle Submit
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {     
    console.log(values)
  }

  return (
    <div className="w-[412px] h-[336px]">
      <Form {...login}>
        <img src={logo} className="mb-2" />
        <h3 className="font-bold text-[28px] text-white mb-2">
          Login To Circel</h3>
        <form onSubmit={login.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control = {login.control}
            name = "emailOrUsernameSchema"
            render = {({field}) => (
              <FormItem>
                <FormControl>
                  <Input className="
                  h-10 
                  text-white 
                  border border-gray-500 
                  hover:border-[#04A51E] 
                  focus-visible:border-[#04A51E] 
                  focus-visible:ring-[#04a135]"
                  type="text" placeholder="Email/Username *" {...field} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control = {login.control}
            name = "passwordSchema"
            render = {({field}) => (
              <FormItem>
                <FormControl>
                  <Input className="
                  h-10 
                  text-white 
                  border border-gray-500 
                  hover:border-[#04A51E] 
                  focus-visible:border-[#04A51E] 
                  focus-visible:ring-[#04a135]"
                  type="password" placeholder="Password *" {...field} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <p className="text-white text-right"><NavLink to={"/forgot"}>Forgot password?</NavLink></p>
          <Button className="w-full h-10 rounded-full bg-[#04A51E] text-xl font-bold ">Login</Button>
          <p className="text-white">Don't have an account yet? <NavLink to={"/register"} className="text-[#04A51E] font-bold">Create account</NavLink></p>  {/* "Create account" navlink to register */}
        </form>
      </Form>
    </div>
  )
}