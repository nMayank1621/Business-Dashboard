# Employee Dashboard

A full-stack dashboard application with React frontend and Django backend, connected to your existing MySQL database with employee, education, and salary data.

## Project Structure

```
MySql_Dashboard/
├── backend/          # Django backend
│   ├── dashboard/    # Django project
│   └── api/          # API app
└── frontend/         # React frontend
```

## Prerequisites

- Python 3.8+
- Node.js 16+
- MySQL server running locally (with your `mysql_tasks` database)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Update database settings (if needed) in `backend/dashboard/settings.py`:
   - Verify the database name is `mysql_tasks`
   - Update the MySQL password if needed (currently blank)

4. Run the Django server:
```bash
python manage.py runserver
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/stats/` - Dashboard statistics (total employees, avg salary, avg experience, total salary expense)
- `GET /api/employees/` - List of all employees with details
- `GET /api/salaries/` - Salary details for all employees
- `GET /api/personal/` - Personal details for all employees
- `GET /api/employee/<person_id>/` - Complete details for a single employee

## Features

- Statistics cards showing key HR metrics
- Salary distribution bar chart
- Employee table with complete details
- Responsive design
- Real-time data from your existing MySQL database
