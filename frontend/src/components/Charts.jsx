import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Pie, Line, Bar } from 'react-chartjs-2'
import './Charts.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const Charts = ({ salaries, employees, darkMode }) => {
  const departmentData = {
    labels: ['Engineering', 'Sales', 'HR', 'Marketing', 'Finance'],
    datasets: [
      {
        label: 'Employees',
        data: [25, 18, 12, 15, 10],
        backgroundColor: [
          '#667eea',
          '#764ba2',
          '#f093fb',
          '#4facfe',
          '#00f2fe'
        ],
        borderWidth: 0
      }
    ]
  }

  
  const salaryDistData = {
    labels: ['0-30k', '30-50k', '50-80k', '80-120k', '120k+'],
    datasets: [
      {
        label: 'Number of Employees',
        data: [15, 25, 30, 20, 10],
        backgroundColor: 'rgba(102, 126, 234, 0.8)',
        borderRadius: 8
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: darkMode ? '#2a2a44' : '#fff',
        titleColor: darkMode ? '#fff' : '#333',
        bodyColor: darkMode ? '#eee' : '#555',
        borderColor: darkMode ? '#444' : '#ddd',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8
      }
    }
  }

  const pieOptions = {
    ...chartOptions,
    plugins: {
      ...chartOptions.plugins,
      legend: {
        ...chartOptions.plugins.legend,
        position: 'right'
      }
    }
  }

  const lineOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: darkMode ? '#aaa' : '#666'
        },
        grid: {
          color: darkMode ? '#333' : '#eee'
        }
      },
      x: {
        ticks: {
          color: darkMode ? '#aaa' : '#666'
        },
        grid: {
          display: false
        }
      }
    }
  }

  const barOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: darkMode ? '#aaa' : '#666'
        },
        grid: {
          color: darkMode ? '#333' : '#eee'
        }
      },
      x: {
        ticks: {
          color: darkMode ? '#aaa' : '#666'
        },
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <div className="charts-grid">
      <div className={`chart-card ${darkMode ? 'dark' : ''}`}>
        <div className="chart-card-header">
          <h3>📊 Department-wise Employees</h3>
        </div>
        <div className="chart-wrapper">
          <Pie data={departmentData} options={pieOptions} />
        </div>
      </div>

      <div className={`chart-card ${darkMode ? 'dark' : ''}`}>
        <div className="chart-card-header">
          <h3> Salary Distribution</h3>
        </div>
        <div className="chart-wrapper">
          <Bar data={salaryDistData} options={barOptions} />
        </div>
      </div>
    </div>
  )
}

export default Charts