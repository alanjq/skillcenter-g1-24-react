import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import OtherPage from './pages/OtherPage'
import HomePage from './pages/HomePage'
import WelcomePage from './pages/Welcomepage'
import GreetingPage from './pages/GreetingPage'

export function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/other',
      element: <OtherPage />
    },
    {
      path: '/welcome',
      element: <WelcomePage />
    },
    {
      path: '/greeting',
      element: <GreetingPage />
    },
  ])

  return <RouterProvider router={router} />
}