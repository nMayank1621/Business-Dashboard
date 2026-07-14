from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Avg, Sum, Count
from .models import PersonalDetails, EducationDetails, EmployeeDetails, SalaryDetails
from .serializers import PersonalDetailsSerializer, EducationDetailsSerializer, EmployeeDetailsSerializer, SalaryDetailsSerializer


class DashboardStatsView(APIView):
    def get(self, request):
        total_employees = PersonalDetails.objects.count()
        avg_salary = EmployeeDetails.objects.aggregate(avg=Avg('salary'))['avg'] or 0
        avg_experience = EmployeeDetails.objects.aggregate(avg=Avg('experience_years'))['avg'] or 0
        total_salary_expense = SalaryDetails.objects.aggregate(total=Sum('net_yearly_salary'))['total'] or 0

        stats = {
            'total_employees': total_employees,
            'avg_salary': float(avg_salary),
            'avg_experience': float(avg_experience),
            'total_salary_expense': float(total_salary_expense)
        }
        return Response(stats)


class EmployeesListView(APIView):
    def get(self, request):
        employees = EmployeeDetails.objects.select_related('person').all()
        serializer = EmployeeDetailsSerializer(employees, many=True)
        return Response(serializer.data)


class SalaryListView(APIView):
    def get(self, request):
        salaries = SalaryDetails.objects.select_related('person').all()
        serializer = SalaryDetailsSerializer(salaries, many=True)
        return Response(serializer.data)


class PersonalDetailsListView(APIView):
    def get(self, request):
        personal_details = PersonalDetails.objects.all()
        serializer = PersonalDetailsSerializer(personal_details, many=True)
        return Response(serializer.data)


class EducationListView(APIView):
    def get(self, request):
        education = EducationDetails.objects.select_related('person').all()
        serializer = EducationDetailsSerializer(education, many=True)
        return Response(serializer.data)


class EmployeeDetailView(APIView):
    def get(self, request, person_id):
        try:
            person = PersonalDetails.objects.get(id=person_id)
            employee = EmployeeDetails.objects.filter(person=person).first()
            salary = SalaryDetails.objects.filter(person=person).first()
            education = EducationDetails.objects.filter(person=person).all()

            data = {
                'personal': PersonalDetailsSerializer(person).data,
                'employee': EmployeeDetailsSerializer(employee).data if employee else None,
                'salary': SalaryDetailsSerializer(salary).data if salary else None,
                'education': EducationDetailsSerializer(education, many=True).data
            }
            return Response(data)
        except PersonalDetails.DoesNotExist:
            return Response({'error': 'Employee not found'}, status=404)
