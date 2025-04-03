import { useState } from 'react';
import logo from '../../assets/logo.svg';
import useAuthStore from '@/stores/AuthStore';
import { useNavigate } from 'react-router';

interface ResetPasswordProp {
  password: string;
  confirmPassword: string;
}

function ResetPasswordForm(){
  const {resetPass} = useAuthStore();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<ResetPasswordProp>({
    password: "",
    confirmPassword: ""
  })
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
    console.log(event.target.name, event.target.value)
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(formState.password == formState.confirmPassword){
      resetPass(formState.password)
      navigate('/login')
      alert("password has changed")
    }else{
      console.log(formState.password, formState.confirmPassword)
      alert("Password and Confirm Password do not match!")
    }
  }

  return (
    <div id='reset-password' className="w-[412px] pt-[128px]">
      <img src={logo} id='logo' className="mb-5 w-[108px]"/>
      <h3 id='title' className="font-bold text-[28px] text-[#FFFFFF] mb-5">
        Reset Password</h3>
      <form id='form' className="space-y-3"
      onSubmit={handleSubmit}>
        <input className="text-white
          h-12 w-full p-2
          border border-[#545454] rounded-md
          hover:border-[#04A51E] 
          focus-visible:border-[#04A51E] 
          focus:outline-none" 
          type="password"
          name="password"
          onChange={handleChange} 
          placeholder="New Password *" required />
        <input className="text-white
          h-12 w-full p-2
          border border-[#545454] rounded-md
        hover:border-[#04A51E] 
        focus-visible:border-[#04A51E] 
          focus:outline-none" 
          type="password" 
          name='confirmPassword'
          onChange={handleChange}
          placeholder="Confirm New Password" required />

        <button className="bg-[#04A51E]
        text-white
        w-full h-11 
        text-xl font-bold
        rounded-full">
          Create New Password</button>
        </form>
      
    </div>
  )
}
export default ResetPasswordForm