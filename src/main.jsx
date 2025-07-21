import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Components/MainLayout/MainLayout';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import AddCoffee from './Components/Pages/AddCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
