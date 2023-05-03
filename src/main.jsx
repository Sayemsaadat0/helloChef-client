import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Blogs from './Component/Blogs/Blogs.jsx';
import ErrorPage from './Component/Errorpage/ErrorPage.jsx';
import Login from './Component/LoginPage/Login/Login.jsx';
import Register from './Component/LoginPage/Register/Register.jsx';
import ChefRecipe from './Component/ChefRecipe/ChefRecipe.jsx';
/* import LoginPage from './Component/LoginPage/LoginPage.jsx';
import Login from './Component/LoginPage/Login/Login.jsx';
import Register from './Component/LoginPage/Register/Register.jsx'; */


const router = createBrowserRouter([
  
 
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element:<Blogs></Blogs>,
      },
      {
        path: "/chef/:id",
        element:<ChefRecipe></ChefRecipe>,
      },
      {
        path: "login",
        element:<Login></Login>,
      },
      {
        path: "register",
        element:<Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)




/* 
{
    path : '/loginpage',
    element : <LoginPage></LoginPage>,
    children : [
      {
        path : 'login',
        element : <Login></Login>
      },
      {
        path : 'register',
        element : <Register></Register>
      },
    ]

  }, 

*/