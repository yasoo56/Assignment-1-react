import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

export default function App() {
  let Routers = createBrowserRouter ([
    { path: '', element: <Layout/> , children: [
      { index: true, element: <Home></Home> },
      { path:'about', element: <About></About> },
      { path:'portfolio', element: <Portfolio></Portfolio> },
      { path:'contact', element: <Contact></Contact> },
      { path:'*', element: <NotFound></NotFound> },
    ] },
  ])
  return <>
    <RouterProvider router={Routers}></RouterProvider>
  </>
}
