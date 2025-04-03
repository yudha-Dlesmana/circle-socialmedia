import Forgot from "./auth/pages/Forgot"
import { Login } from "./auth/pages/Login"
import { createBrowserRouter } from "react-router"
import { Register } from "./auth/pages/Register"
import { ResetPassword } from "./auth/pages/ResetPassword"
import { Base } from "./protected/Base"
import { Home } from "./protected/pages/Home"
import Detail from "./protected/pages/Detail"
import Auth from "./auth/Auth"


const router = createBrowserRouter([
    {
      Component: Auth,
      children: [
        {
          path: "/login",
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

      ]
    },
    {
      Component: Base,
      children: [
        {
          path: "/home",
          Component: Home,
        },
        {
          path: "/detail/:id",
          Component: Detail,
        },
      ],
    },
])

export default router