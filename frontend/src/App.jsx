import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import Charts from './components/Charts'
import EmployeesTable from './components/EmployeesTable'
import EmployeeDetail from './components/EmployeeDetail'
import PersonalPage from './pages/PersonalPage'
import EducationPage from './pages/EducationPage'
import EmployeePage from './pages/EmployeePage'
import SalaryPage from './pages/SalaryPage'

const API_BASE_URL = 'http://127.0.0.1:8000'

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)
  const [stats, setStats] = useState(null)
  const [employees, setEmployees] = useState([])
  const [salaries, setSalaries] = useState([])
  const [personalData, setPersonalData] = useState([])
  const [educationData, setEducationData] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    try {
      setLoading(true)

      const [
        statsRes,
        employeesRes,
        salariesRes,
        personalRes
      ] = await Promise.all([
        axios.get(`${API_BASE_URL}/api/stats/`),
        axios.get(`${API_BASE_URL}/api/employees/`),
        axios.get(`${API_BASE_URL}/api/salaries/`),
        axios.get(`${API_BASE_URL}/api/personal/`)
      ])

      setStats(statsRes.data)
      setEmployees(employeesRes.data)
      setSalaries(salariesRes.data)
      setPersonalData(personalRes.data)
    } catch (error) {
      console.error('Error fetching data:', error)

      setStats({
        total_employees: 85,
        avg_salary: 65000,
        avg_experience: 4.2,
        total_salary_expense: 5525000
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (activePage === 'education') {
      axios
        .get(`${API_BASE_URL}/api/education/`)
        .then(res => setEducationData(res.data))
        .catch(err =>
          console.error('Error fetching education:', err)
        )
    }
  }, [activePage])

  const handleSelectEmployee = async (personId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/employee/${personId}/`
      )

      setSelectedEmployee(response.data)
    } catch (error) {
      console.error(
        'Error fetching employee details:',
        error
      )
    }
  }

  const handleBackToDashboard = () => {
    setSelectedEmployee(null)
  }

  if (loading) {
    return (
      <div className={`app-loading ${darkMode ? 'dark' : ''}`}>
        <div className="loading-spinner"></div>
        <p>Loading Dashboard...</p>
      </div>
    )
  }

  if (selectedEmployee) {
    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          search={search}
          setSearch={setSearch}
        />

        <div className="app-body">
          <Sidebar
            activePage={activePage}
            setActivePage={setActivePage}
            darkMode={darkMode}
          />

          <div className="main-content">
            <EmployeeDetail
              employeeData={selectedEmployee}
              onBack={handleBackToDashboard}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    )
  }

  const renderPageContent = () => {
    switch (activePage) {
      case 'dashboard':
        return (
          <div className="dashboard-content">
            <StatsCards
              stats={stats}
              darkMode={darkMode}
            />

            <Charts
              salaries={salaries}
              employees={employees}
              darkMode={darkMode}
            />

            <EmployeesTable
              employees={employees}
              onSelectEmployee={handleSelectEmployee}
              darkMode={darkMode}
            />
          </div>
        )

      case 'personal':
        return (
          <PersonalPage
            data={personalData}
            darkMode={darkMode}
          />
        )

      case 'education':
        return (
          <EducationPage
            data={educationData}
            darkMode={darkMode}
          />
        )

      case 'employee':
        return (
          <EmployeePage
            data={employees}
            darkMode={darkMode}
          />
        )

      case 'salary':
        return (
          <SalaryPage
            data={salaries}
            darkMode={darkMode}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        search={search}
        setSearch={setSearch}
      />

      <div className="app-body">
        <Sidebar
          activePage={activePage}
          setActivePage={setActivePage}
          darkMode={darkMode}
        />

        <div className="main-content">
          {activePage === 'dashboard' ? (
            <div className="dashboard-page">
              <header className="page-header">
                <h1>Dashboard Overview</h1>

                <p className="page-subtitle">
                  Welcome back! Here's your dashboard.
                </p>
              </header>

              <main className="page-main">
                {renderPageContent()}
              </main>
            </div>
          ) : (
            <div className="page">
              {renderPageContent()}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App