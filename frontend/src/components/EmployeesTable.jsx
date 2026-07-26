import React from 'react'
import './EmployeesTable.css'

const EmployeesTable = ({ employees, onSelectEmployee, darkMode }) => {
  if (!employees.length) {
    return (
      <div className={`table-container ${darkMode ? 'dark' : ''}`}>
        <h2>Employees</h2>
        <p className="no-data">No employees available</p>
      </div>
    )
  }

  return (
    <div className={`table-container ${darkMode ? 'dark' : ''}`}>
      <h2>Employees (Click to view details)</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>EMPLOYEE CODE</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>DEPARTMENT</th>
              <th>SALARY</th>
              <th>EXPERIENCE</th>
              <th>JOINING DATE</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr 
                key={emp.emp_id} 
                onClick={() => onSelectEmployee(emp.person)} 
                style={{ cursor: 'pointer' }}
              >
                <td>{emp.employee_code}</td>
                <td>{emp.first_name}</td>
                <td>{emp.last_name}</td>
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

export default EmployeesTable
