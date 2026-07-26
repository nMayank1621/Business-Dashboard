import React from 'react'
import './Navbar.css'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-icon">📊</span>
          <span className="logo-text">HR Dashboard</span>
        </div>
      </div>
      
      {/* <div className="navbar-center">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search employees, departments, salaries..."
            className="search-input"
          />
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar
