import React from 'react'
import './Sidebar.css'

const Sidebar = ({ activePage, setActivePage, darkMode }) => {
  const pages = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'personal', name: 'Personal Details', icon: '👤' },
    { id: 'education', name: 'Education', icon: '🎓' },
    { id: 'employee', name: 'Employee Details', icon: '💼' },
    { id: 'salary', name: 'Salary Details', icon: '💰' }
  ]

  return (
    <div className={`sidebar ${darkMode ? 'dark' : ''}`}>
      <div className="sidebar-header">
        <h2>
          <span className="sidebar-logo-icon">📋</span>
          <span className="sidebar-logo-text">HR System</span>
        </h2>
      </div>
      <nav className="sidebar-nav">
        {pages.map(page => (
          <button
            key={page.id}
            className={`nav-item ${activePage === page.id ? 'active' : ''}`}
            onClick={() => setActivePage(page.id)}
          >
            <span className="nav-icon">{page.icon}</span>
            <span className="nav-text">{page.name}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
