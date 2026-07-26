import React from 'react'
import './Pages.css'

const PersonalPage = ({ data, darkMode }) => {
  if (!data || data.length === 0) {
    return (
      <div className={`page-container ${darkMode ? 'dark' : ''}`}>
        <h2>Personal Details</h2>
        <p className="no-data">No personal details available</p>
      </div>
    )
  }

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <h2>Personal Details</h2>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Profession</th>
            </tr>
          </thead>
          <tbody>
            {data.map(person => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.age}</td>
                <td>{person.gender}</td>
                <td>{person.email}</td>
                <td>{person.phn_number}</td>
                <td>{person.city}</td>
                <td>{person.pofession}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PersonalPage
