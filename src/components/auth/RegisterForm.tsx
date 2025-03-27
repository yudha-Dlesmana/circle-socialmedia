import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { NavLink } from "react-router"
import logo from '../../assets/logo.svg';

const registerSchema = z.object({
  usernameSchema: z.string().min(6, "username must be at least 6 characters"),
  emailSchema: z.string().email("Invalid email address"),
  passwordSchema: z.string().min(12, "Password must be at least 12 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, "Password must include a lowercase letter, an uppercase letter, a number, and a symbol.")
})

export function RegisterForm(){
  // Define Form
  const register  = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  })

  // Handle Submit
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values)
  }
  
  return (
    <div className="w-[412px] h-[336px]">
      <Form {...register}>
        <img src={logo} className="mb-2"/>
        <h3 className="font-bold text-[28px] text-white mb-2">
          Create account Circel</h3>
        <form onSubmit={register.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control = {register.control}
            name = "usernameSchema"
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
                  type="text" placeholder="Username *" {...field} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control = {register.control}
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
          <FormField
            control = {register.control}
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
                  type="password" placeholder="password *" {...field} required/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full h-10 rounded-full bg-[#04A51E] text-xl font-bold">Create</Button>
          <p className="text-white">Already have account? <NavLink to={"/login"} className='text-[#04A51E] font-bold' >Login</NavLink> </p> 
        </form>
      </Form>
    </div>
  )
}