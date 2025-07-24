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
import AuthProvider from './Components/Providers/AuthProvider';
import Users from './Components/Pages/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('https://espresso-emporium-server-side-beige.vercel.app/coffees'),
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
        loader: ({params})=>fetch(`https://espresso-emporium-server-side-beige.vercel.app/coffees/${params.id}`)
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=>fetch('https://espresso-emporium-server-side-beige.vercel.app/users')
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
