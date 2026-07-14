from django.urls import path
from .views import DashboardStatsView, EmployeesListView, SalaryListView, PersonalDetailsListView, EmployeeDetailView, EducationListView

urlpatterns = [
    path('stats/', DashboardStatsView.as_view(), name='dashboard-stats'),
    path('employees/', EmployeesListView.as_view(), name='employees-list'),
    path('salaries/', SalaryListView.as_view(), name='salaries-list'),
    path('personal/', PersonalDetailsListView.as_view(), name='personal-list'),
    path('education/', EducationListView.as_view(), name='education-list'),
    path('employee/<int:person_id>/', EmployeeDetailView.as_view(), name='employee-detail'),
]
