import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import EstateDetails from './Pages/EstateDetails/EstateDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('/estates.json')
      },
      {
        path: '/details/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/estates.json')
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
