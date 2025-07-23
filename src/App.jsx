import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/layout'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import layout from './components/layout'
import Layout from './components/layout'
import Dashboard from './components/dashborad'
import Contact from './components/Contacts'
import Skill from './components/Skills'
import AdminPage from './components/admin'
import Education from './components/Eduction'
import Projects from './components/Projects'


const Routers = createBrowserRouter([

  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:"Home",
        element:<Dashboard/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"Skills",
        element:<Skill/>
      },
      {
        path:"Education",
        element:<Education/>
      },
      {
        path:"Projects",
        element:<Projects/>
      },
      {
        path:"/Admin",
        element:<AdminPage/>
      },
      {
        index: true,
        element: <Dashboard/>
      },
      
    ], 
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
      <RouterProvider router={Routers}></RouterProvider>
  )
}

export default App
