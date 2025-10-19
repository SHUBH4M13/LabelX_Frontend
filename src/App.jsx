import { createBrowserRouter , RouterProvider  } from "react-router"

import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import OtpPage from "./pages/OtpPage"


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
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
