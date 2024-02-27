import * as ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import OtherPage from './pages/OtherPage'
import HomePage from './pages/HomePage'
import WelcomePage from './pages/Welcomepage'
import GreetingPage from './pages/GreetingPage'

export function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path='greeting' element={<GreetingPage />} />
        <Route path='welcome' element={<WelcomePage />} />
        <Route path='other' element={<OtherPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}