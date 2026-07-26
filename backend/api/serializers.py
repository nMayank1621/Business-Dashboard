from rest_framework import serializers
from .models import PersonalDetails, EducationDetails, EmployeeDetails, SalaryDetails


class PersonalDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalDetails
        fields = '__all__'


class EducationDetailsSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()

    class Meta:
        model = EducationDetails
        fields = '__all__'

    def get_first_name(self, obj):
        if obj.person:
            return obj.person.first_name
        return None

    def get_last_name(self, obj):
        if obj.person:
            return obj.person.last_name
        return None


class EmployeeDetailsSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()

    class Meta:
        model = EmployeeDetails
        fields = '__all__'

    def get_first_name(self, obj):
        if obj.person:
            return obj.person.first_name
        return None

    def get_last_name(self, obj):
        if obj.person:
            return obj.person.last_name
        return None


class SalaryDetailsSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()

    class Meta:
        model = SalaryDetails
        fields = '__all__'

    def get_first_name(self, obj):
        if obj.person:
            return obj.person.first_name
        return None

    def get_last_name(self, obj):
        if obj.person:
            return obj.person.last_name
        return None