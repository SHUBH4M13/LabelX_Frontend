import { createBrowserRouter , RouterProvider  } from "react-router"

import Home from "./pages/Home"
import FormPage from "./pages/FormPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/signup",
    element: <FormPage/>
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
