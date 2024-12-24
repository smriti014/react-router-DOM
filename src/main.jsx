import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Team from './components/Team.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"",
        element:<Hero/>
      },
      {
        path:"feature",
        element:<Feature/>
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"team",
        element:<Team/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
