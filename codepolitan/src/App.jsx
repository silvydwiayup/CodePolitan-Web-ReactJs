import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import './App.css'
import Home from './pages/Home';
import Premium from './pages/Premium';
import DevSchool from './pages/DevSchool';

function App() {

  return (
    <Router>
      <div style={{ paddingTop: 60}}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
              <Link className="navbar-brand mx-5" to="/">Codepolitan</Link>
              <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/">Home</Link>
                  <Link className="nav-item nav-link" to="/premium">Premium</Link>
                  <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
              </div>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/premium' element={<Premium/>}/>
            <Route path='/devschool' element={<DevSchool/>}/>
          </Routes>
          
      </div>
    </Router>
  )
}

export default App
