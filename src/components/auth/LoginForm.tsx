import { NavLink, useNavigate } from "react-router";

import logo from '../../assets/logo.svg'
import useAuthStore from "@/stores/AuthStore";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

interface LoginFormProp {
  emailOrUsername: string
  password: string
}

function LoginForm(){
  const { user } = useContext(AuthContext);
  const { logIn } = useAuthStore()
  const navigate =  useNavigate();

  const [formState, setFormState] = useState<LoginFormProp>({
    emailOrUsername: "",
    password: ""
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(user.email == formState.emailOrUsername || 
      user.username == formState.emailOrUsername){
        if(user.password == formState.password){
          logIn()
          navigate("/home")
        }
        else{
          alert("wrong password")
          console.log(user.password, formState.password)
        }
      } else {
        alert("wrong email/username")
        console.log(user.email, formState.emailOrUsername)
        console.log(user.username, formState.emailOrUsername)
      }
    
  }

  return (
    <div id="login" className="w-[412px] pt-[128px]">
      <img src={logo} id="logo" className="mb-5 w-[108px]" />
      <h3 id="title" className="font-bold text-[28px] text-[#FFFFFF] mb-5">
        Login to Circel</h3>
      <form id="form" className="space-y-3"
      onSubmit={handleSubmit}>
        <input className="text-white 
        h-12 w-full p-2      
        border border-[#545454] rounded-md
      hover:border-[#04A51E] 
      focus-visible:border-[#04A51E] 
        focus:outline-none"
          type="text" 
          name="emailOrUsername"
          onChange={handleChange}
          placeholder="Email/Username *" required/>
        <input className=" text-white
          h-12 w-full p-2
          border border-[#545454] rounded-md
          hover:border-[#04A51E] 
          focus-visible:border-[#04A51E] 
          focus: outline-none"
            type="password" 
            name="password"
            onChange={handleChange}
            placeholder="Password *" required/>         
        <p className="text-white text-right">
          <NavLink to={"/forgot"}>Forgot password?</NavLink></p>
        <button className=" bg-[#04A51E]
        text-white
        w-full h-11 
        text-xl font-bold
        rounded-full">
          Login</button>
        <p className="text-white">
          Don't have an account yet? <NavLink to={"/register"} className="text-[#04A51E] font-bold"> 
          Create account</NavLink></p>  
        </form>
      </div>
  )
}

export default LoginForm;