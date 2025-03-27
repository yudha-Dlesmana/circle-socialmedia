import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import logo from '../../assets/logo.svg';

const ResetPasswordSchema = z.object({
  passwordSchema: z.string().min(12, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, "Password must include a lowercase letter, an uppercase letter, a number, and a symbol."),
  confirmPasswordSchema: z.string().min(12, "Password must be at least 12 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, "Password must include a lowercase letter, an uppercase letter, a number, and a symbol."),
})

export function ResetPasswordForm(){
  // Define Form
  const resetPassword = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema)
  })

  // Handle Submit
  const onSubmit = (values: z.infer<typeof ResetPasswordSchema>) => {
    console.log(values)
  }

  return (
    <div className="w-[412px] h-[336px]">
      <Form {...resetPassword}>
        <img src={logo} className="mb-2"/>
        <h3 className="font-bold text-[28px] text-white mb-2">Reset Password</h3>
        <form onSubmit={resetPassword.handleSubmit(onSubmit)}className="space-y-3">
          <FormField 
            control={resetPassword.control} 
            name="passwordSchema"
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
                  type="password" placeholder="New Password" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control = {resetPassword.control}
            name = "confirmPasswordSchema"
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
                  type="password" placeholder="Confirm New Password" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full h-10 rounded-full bg-[#04A51E] text-xl font-bold">Create New Password</Button>
        </form>
      </Form>
    </div>
  )
}