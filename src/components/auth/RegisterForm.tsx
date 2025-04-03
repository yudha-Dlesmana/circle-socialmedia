import { NavLink, useNavigate } from "react-router"
import logo from '../../assets/logo.svg';
import { useContext, useState } from "react"
import useAuthStore from "@/stores/AuthStore"
import { AuthContext } from "@/context/AuthContext";

interface RegisterFormProp {
  fullName: string;
  email: string;
  password: string;
}

function RegisterForm(){
  const {user} = useContext(AuthContext)
  const {setUser} = useAuthStore();
  const navigate = useNavigate()

  const [formState, setFormState] = useState<RegisterFormProp>({
    fullName: "",
    email: "",
    password: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const username = formState.email.split("@")[0]
    setUser({
      fullName:formState.fullName,
      username: username,
      email:formState.email,
      password: formState.password,
    })
    console.log(user)
    navigate('/login')
  }

  return (
    <div id="register" className="w-[412px] pt-[128px]">
      <img src={logo} id="logo" className="mb-5 w-[108px]"/>
      <h3 id="title" className="font-bold text-[28px] text-[#FFFFFF] mb-5">
        Create account Circel</h3>
      <form id="form" className="space-y-3"
      onSubmit={handleSubmit}>
        <input className="text-white 
        h-12 w-full p-2
        border border-[#545454] rounded-md
      hover:border-[#04A51E] 
      focus-visible:border-[#04A51E] 
        focus:outline-none" 
          type="text" 
          name="fullName"
          onChange={handleChange}
          placeholder="Full Name *" required/>

        <input className="text-white 
        h-12 w-full p-2
        border border-[#545454] rounded-md
      hover:border-[#04A51E] 
      focus-visible:border-[#04A51E] 
        focus:outline-none"  
          type="email"
          name="email"
          onChange={handleChange} 
          placeholder="Email *" required/>
        <input className="text-white 
        h-12 w-full p-2
        border border-[#545454] rounded-md
      hover:border-[#04A51E] 
      focus:border-[#04A51E] 
        focus:outline-none" 
          type="password"
          name="password" 
          onChange={handleChange}
          placeholder="Password *" required/>
          
        <button className="bg-[#04A51E] 
        text-white `
        w-full h-11 
        text-xl font-bold 
        rounded-full ">
          Create</button>
        <p className="text-white">
          Already have account? 
          <NavLink to={"/login"} className='text-[#04A51E] font-bold'> Login</NavLink></p> 
        </form>
      
    </div>
  )
}
export default RegisterForm