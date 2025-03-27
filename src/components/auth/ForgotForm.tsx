import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { NavLink } from "react-router";

import logo from '../../assets/logo.svg';


const ForgotSchema = z.object({
   emailSchema: z.string().email("Invalid email address")
})

export function ForgotForm(){
  // Define Form
  const login = useForm<z.infer<typeof ForgotSchema>>({
    resolver: zodResolver(ForgotSchema),
  })
  // Handle Submit
  const onSubmit = (values: z.infer<typeof ForgotSchema>) => {     
    console.log(values.emailSchema)
  }

  return (
    <div className="w-[412px] h-[336px]">
      <Form {...login}>
        <img src={logo} className="mb-2"/>
        <h3 className="font-bold text-[28px] text-white mb-2">Forgot Password</h3>
        <form onSubmit={login.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control = {login.control}
            name = "emailSchema"
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
                  type="email" placeholder="Email *" {...field} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full h-10 rounded-full bg-[#04A51E] text-xl font-bold">Send Instruction</Button>
          <p className="text-white">Already have account? <NavLink to={"/login"} className='text-[#04A51E] font-bold'>Login</NavLink></p> 
        </form>
      </Form>
    </div>
  )
}