import React from 'react'
import './Pages.css'

const SalaryPage = ({ data, darkMode }) => {
  if (!data || data.length === 0) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <h2>Salary Details</h2>
        <p className="no-data">No salary details available</p>
      </div>
    )
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <h2>Salary Details</h2>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Salary ID</th>
              <th>Employee Name</th>
              <th>Monthly Salary</th>
              <th>Yearly Salary</th>
              <th>Monthly Tax</th>
              <th>Yearly Tax</th>
              <th>Net Monthly</th>
              <th>Net Yearly</th>
            </tr>
          </thead>
          <tbody>
            {data.map(sal => (
              <tr key={sal.salary_id}>
                <td>{sal.salary_id}</td>
                <td>{sal.first_name} {sal.last_name}</td>
                <td>₹{sal.monthly_salary?.toLocaleString('en-IN')}</td>
                <td>₹{sal.yearly_salary?.toLocaleString('en-IN')}</td>
                <td>₹{sal.monthly_tax?.toLocaleString('en-IN')}</td>
                <td>₹{sal.yearly_tax?.toLocaleString('en-IN')}</td>
                <td>₹{sal.net_monthly_salary?.toLocaleString('en-IN')}</td>
                <td>₹{sal.net_yearly_salary?.toLocaleString('en-IN')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SalaryPage
