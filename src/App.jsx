import { createBrowserRouter , RouterProvider  } from "react-router"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import OtpPage from "./pages/OtpPage"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import AuthSuccess from "./pages/AuthSuccess"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/otp",
    element: <OtpPage/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/profile",
    element: <UserProfile/>
  },
  {
    path:"/auth-success/",
    element: <AuthSuccess/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
