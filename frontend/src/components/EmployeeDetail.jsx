import React from 'react'
import './EmployeeDetail.css'

const EmployeeDetail = ({ employeeData, onBack, darkMode }) => {
  if (!employeeData) return null

  const { personal, employee, salary, education } = employeeData

  return (
    <div className={`employee-detail-container ${darkMode ? 'dark' : ''}`}>
      <button className="back-button" onClick={onBack}>← Back to Dashboard</button>
      
      <div className="detail-header">
        <h1>{personal.first_name} {personal.last_name}</h1>
        <p className="profession">{personal.pofession}</p>
      </div>

      <div className="detail-sections">
        <div className="detail-card">
          <h3>Personal Information</h3>
          <div className="detail-grid">
            <div className="detail-item">
              <label>Age</label>
              <span>{personal.age}</span>
            </div>
            <div className="detail-item">
              <label>Gender</label>
              <span>{personal.gender}</span>
            </div>
            <div className="detail-item">
              <label>Email</label>
              <span>{personal.email}</span>
            </div>
            <div className="detail-item">
              <label>Phone</label>
              <span>{personal.phn_number}</span>
            </div>
            <div className="detail-item">
              <label>City</label>
              <span>{personal.city}</span>
            </div>
          </div>
        </div>

        {employee && (
          <div className="detail-card">
            <h3>Employment Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Employee Code</label>
                <span>{employee.employee_code}</span>
              </div>
              <div className="detail-item">
                <label>Department</label>
                <span>{employee.department}</span>
              </div>
              <div className="detail-item">
                <label>Salary</label>
                <span>₹{employee.salary?.toLocaleString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <label>Experience</label>
                <span>{employee.experience_years} years</span>
              </div>
              <div className="detail-item">
                <label>Joining Date</label>
                <span>{employee.joining_date}</span>
              </div>
            </div>
          </div>
        )}

        {salary && (
          <div className="detail-card">
            <h3>Salary Details</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <label>Monthly Salary</label>
                <span>₹{salary.monthly_salary?.toLocaleString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <label>Yearly Salary</label>
                <span>₹{salary.yearly_salary?.toLocaleString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <label>Monthly Tax</label>
                <span>₹{salary.monthly_tax?.toLocaleString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <label>Yearly Tax</label>
                <span>₹{salary.yearly_tax?.toLocaleString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <label>Net Monthly Salary</label>
                <span>₹{salary.net_monthly_salary?.toLocaleString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <label>Net Yearly Salary</label>
                <span>₹{salary.net_yearly_salary?.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        )}

        {education && education.length > 0 && (
          <div className="detail-card education-card">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree} {edu.specialization ? `- ${edu.specialization}` : ''}</h4>
                <p>{edu.college_name} - {edu.university}</p>
                <p>Passing Year: {edu.passing_year} | CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default EmployeeDetail
