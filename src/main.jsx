import "cal-sans";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route, 
  Link, 
  BrowserRouter,
} from "react-router-dom";

import Home from './home';
import Resume from './resume';
import Projects from './projects'
import Algorithms from './algorithms'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/algorithms",
          element: <Algorithms />,
        },
      ]
    }  
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>      
      <RouterProvider router={router} />
  </React.StrictMode>,
)
