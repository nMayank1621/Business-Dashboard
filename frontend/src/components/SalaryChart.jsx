import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import './SalaryChart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const SalaryChart = ({ salaries }) => {
  if (!salaries.length) {
    return (
      <div className="chart-container">
        <h2>Salary Distribution</h2>
        <p className="no-data">No salary data available</p>
      </div>
    )
  }

  const chartData = {
    labels: salaries.map(sal => `${sal.first_name} ${sal.last_name}`),
    datasets: [
      {
        label: 'Net Monthly Salary',
        data: salaries.map(sal => sal.net_monthly_salary),
        backgroundColor: 'rgba(102, 126, 234, 0.8)',
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Employee Salaries'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '₹' + value.toLocaleString('en-IN')
          }
        }
      }
    }
  }

  return (
    <div className="chart-container">
      <h2>Salary Distribution</h2>
      <div className="chart-wrapper">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default SalaryChart
