import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
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
       },{
        path:'/login',
        element:<Login/>
       },
       {
        path:'/signup',
        element:<SignUp/>
       },{
        path:'/news/:id',
        element:<PrivateRoute><NewsDetails/></PrivateRoute>,
        loader:(()=>(fetch('/news.json')))
      
       }
      ]
    },
  ]);