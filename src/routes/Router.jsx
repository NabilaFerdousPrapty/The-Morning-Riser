import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
       {
        path:'/',
        element:<Home/>
       },{
        path:'/about',
        element:<About/>
       },{
        path:'/career',
        element:<Career/>
       }
      ]
    },
  ]);