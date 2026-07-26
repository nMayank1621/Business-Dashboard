import React from 'react'
import './Pages.css'

const EmployeePage = ({ data, darkMode }) => {
  if (!data || data.length === 0) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <h2>Employee Details</h2>
        <p className="no-data">No employee details available</p>
      </div>
    )
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <h2>Employee Details</h2>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Code</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Experience</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map(emp => (
              <tr key={emp.emp_id}>
                <td>{emp.emp_id}</td>
                <td>{emp.employee_code}</td>
                <td>{emp.first_name} {emp.last_name}</td>
                <td>{emp.department}</td>
                <td>₹{emp.salary?.toLocaleString('en-IN')}</td>
                <td>{emp.experience_years} years</td>
                <td>{emp.joining_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployeePage
