from rest_framework import serializers
from .models import PersonalDetails, EducationDetails, EmployeeDetails, SalaryDetails


class PersonalDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalDetails
        fields = '__all__'


class EducationDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationDetails
        fields = '__all__'


class EmployeeDetailsSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='person.first_name', read_only=True)
    last_name = serializers.CharField(source='person.last_name', read_only=True)

    class Meta:
        model = EmployeeDetails
        fields = '__all__'


class SalaryDetailsSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(source='person.first_name', read_only=True)
    last_name = serializers.CharField(source='person.last_name', read_only=True)

    class Meta:
        model = SalaryDetails
        fields = '__all__'
