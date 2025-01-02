import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; // Correct imports
import NavBar from './components/navBar.jsx';

import HomePage from './pages/homePage/homePage.jsx';
import AboutPage from './pages/aboutPage/aboutPage.jsx';

function App() {

  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      </BrowserRouter>

  )
}

export default App;