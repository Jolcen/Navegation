import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './assets/components/Header.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './assets/components/Home.jsx'
import About from './assets/components/About.jsx'
import DashBoard from './assets/components/DashBoard.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
