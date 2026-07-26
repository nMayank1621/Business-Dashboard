import React from 'react'
import './Pages.css'

const EducationPage = ({ data, darkMode }) => {
  if (!data || data.length === 0) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <h2>Education Details</h2>
        <p className="no-data">No education details available</p>
      </div>
    )
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <h2>Education Details</h2>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Education ID</th>
              <th>Degree</th>
              <th>Specialization</th>
              <th>College</th>
              <th>University</th>
              <th>Passing Year</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {data.map(edu => (
              <tr key={edu.edu_id}>
                <td>{edu.edu_id}</td>
                <td>{edu.degree}</td>
                <td>{edu.specialization}</td>
                <td>{edu.college_name}</td>
                <td>{edu.university}</td>
                <td>{edu.passing_year}</td>
                <td>{edu.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EducationPage
