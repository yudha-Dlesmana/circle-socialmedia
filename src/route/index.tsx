import { Forgot } from "./auth/Forgot"
import { Login } from "./auth/Login"
import { createBrowserRouter } from "react-router"
import { Register } from "./auth/Register"
import { ResetPassword } from "./auth/ResetPassword"
import { Base } from "./protected/Base"
import { Home } from "./protected/pages/Home"
import { Profile } from "./protected/pages/Profile"


const router = createBrowserRouter([
    {
      path: '/login',
      Component: Login

    },
    {
      path: '/register',
      Component: Register
    },
    {
      path: '/forgot',
      Component: Forgot
    },
    {
      path: '/reset',
      Component: ResetPassword
    },
    
    {
      Component: Base,
      children: [
        {
          path: "/home",
          Component: Home,
        },
        {
          path: "/profile",
          Component: Profile,
        },
      ],
    },
])

export default router