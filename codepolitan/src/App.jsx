import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import './App.css'

function App() {

  return (
    <Router>
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <Link className="navbar-brand mx-5" to="/">Codepolitan</Link>
              <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/">Home</Link>
                  <Link className="nav-item nav-link" to="/premium">Premium</Link>
                  <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
              </div>
          </nav>
          <Routes>
            <Route path='/' element={<h4>Home</h4>}/>
            <Route path='/premium' element={<h4>Premium</h4>}/>
            <Route path='/devschool' element={<h4>DevSchool</h4>}/>
          </Routes>
          
      </div>
    </Router>
  )
}

export default App
