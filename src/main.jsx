import {  StrictMode } from 'react'
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
import UpdateCoffee from './Components/Pages/UpdateCoffee';
import SignIn from './Components/Pages/SignIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:5000/coffees'),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
