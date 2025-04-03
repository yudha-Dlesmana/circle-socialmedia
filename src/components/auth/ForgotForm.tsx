
import { NavLink, useNavigate } from "react-router";
import logo from '../../assets/logo.svg';
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

interface ForgotFormProp{
  email: string
}

function ForgotForm(){
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const [ formState, setFormState] = useState<ForgotFormProp>({
    email: ""
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(user.email == formState.email){
      navigate("/reset")
    } else {
      alert("register user")
      console.log(formState.email, user.email)
    }
  }
  

  return (
    <div id="forgot-password" className="w-[412px] pt-[128px]">
      <img src={logo} id="logo" className="mb-5"/>
      <h3 id="title" className="font-bold text-[28px] text-[#FFFFFF] mb-5">Forgot Password</h3>
      <form id="form" className="space-y-3" 
      onSubmit={handleSubmit}>
        <input className="text-white 
        h-12 w-full p-2
        border border-[#545454] rounded-md
        hover:border-[#04A51E] 
        focus-visible:border-[#04A51E] 
        focus:outline-none" 
          type = "email" 
          name = "email"
          onChange={handleChange}
          placeholder="Email *" required/>
                  
        <button className="bg-[#04A51E]
        text-white
        w-full h-11
        text-xl font-bold  
        rounded-full">
          Send Instruction</button>
        <p className="text-white">
            Already have account?
            <NavLink to={"/login"} className='text-[#04A51E] font-bold'> Login</NavLink></p> 
        </form>
      </div>
  )
}
export default ForgotForm