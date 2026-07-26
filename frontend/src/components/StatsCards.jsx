import React from 'react'
import './StatsCards.css'

const StatsCards = ({ stats, darkMode }) => {
  if (!stats) return null

  const cards = [
    {
      label: 'Total Employees',
      value: stats.total_employees,
      color: '#667eea',
      trend: 'up',
      trendValue: '+12%',
      icon: '👥'
    },
    {
      label: 'Average Salary',
      value: `₹${stats.avg_salary.toLocaleString('en-IN')}`,
      color: '#764ba2',
      trend: 'up',
      trendValue: '+5.2%',
      icon: '💰'
    },
    {
      label: 'Avg Experience',
      value: `${stats.avg_experience.toFixed(1)} years`,
      color: '#f093fb',
      trend: 'stable',
      trendValue: '0.1%',
      icon: '📚'
    },
    {
      label: 'Total Salary Expense',
      value: `₹${(stats.total_salary_expense / 100000).toFixed(1)}L`,
      color: '#4facfe',
      trend: 'down',
      trendValue: '-2.3%',
      icon: '📈'
    }
  ]

  return (
    <div className="stats-container">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`stat-card ${darkMode ? 'dark' : ''}`} 
          style={{ borderLeft: `4px solid ${card.color}` }}
        >
          <div className="stat-header">
            <div className="stat-icon-wrapper" style={{ background: `${card.color}15` }}>
              <span className="stat-icon">{card.icon}</span>
            </div>
          </div>
          
          <h3>{card.label}</h3>
          <p className="stat-value">{card.value}</p>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
