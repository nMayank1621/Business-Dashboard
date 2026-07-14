from django.db import models


class PersonalDetails(models.Model):
    id = models.AutoField(db_column='ID', primary_key=True)
    first_name = models.CharField(db_column='FIRST_NAME', max_length=100, unique=True)
    last_name = models.CharField(db_column='LAST_NAME', max_length=100, unique=True)
    age = models.IntegerField(db_column='AGE', blank=True, null=True)
    gender = models.CharField(db_column='GENDER', max_length=50, blank=True, null=True)
    email = models.CharField(db_column='EMAIL', max_length=100, unique=True, blank=True, null=True)
    phn_number = models.CharField(db_column='PHN_NUMBER', max_length=10, blank=True, null=True)
    city = models.CharField(db_column='CITY', max_length=50, blank=True, null=True)
    pofession = models.CharField(db_column='POFESSION', max_length=50, blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'personal_details'

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class EducationDetails(models.Model):
    edu_id = models.AutoField(db_column='EDU_ID', primary_key=True)
    person = models.ForeignKey(PersonalDetails, models.DO_NOTHING, db_column='PERSON_ID')
    degree = models.CharField(db_column='DEGREE', max_length=100)
    specialization = models.CharField(db_column='SPECIALIZATION', max_length=50, blank=True, null=True)
    college_name = models.CharField(db_column='COLLEGE_NAME', max_length=50, blank=True, null=True)
    university = models.CharField(db_column='UNIVERSITY', max_length=100, blank=True, null=True)
    passing_year = models.IntegerField(db_column='PASSING_YEAR', blank=True, null=True)
    cgpa = models.DecimalField(db_column='CGPA', max_digits=3, decimal_places=1, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'education_details'

    def __str__(self):
        return f"{self.degree} - {self.person.first_name}"


class EmployeeDetails(models.Model):
    emp_id = models.AutoField(db_column='EMP_ID', primary_key=True)
    person = models.ForeignKey(PersonalDetails, models.DO_NOTHING, db_column='PERSON_ID', blank=True, null=True)
    employee_code = models.CharField(db_column='EMPLOYEE_CODE', max_length=20, unique=True, blank=True, null=True)
    department = models.CharField(db_column='DEPARTMENT', max_length=50, blank=True, null=True)
    salary = models.IntegerField(db_column='SALARY', blank=True, null=True)
    experience_years = models.IntegerField(db_column='EXPERIENCE_YEARS', blank=True, null=True)
    joining_date = models.DateField(db_column='JOINING_DATE', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'employee_details'

    def __str__(self):
        return f"{self.employee_code} - {self.person.first_name}"


class SalaryDetails(models.Model):
    salary_id = models.AutoField(db_column='SALARY_ID', primary_key=True)
    person = models.ForeignKey(PersonalDetails, models.DO_NOTHING, db_column='PERSON_ID', blank=True, null=True)
    monthly_salary = models.IntegerField(db_column='MONTHLY_SALARY', blank=True, null=True)
    yearly_salary = models.IntegerField(db_column='YEARLY_SALARY', blank=True, null=True)
    monthly_tax = models.IntegerField(db_column='MONTHLY_TAX', blank=True, null=True)
    yearly_tax = models.IntegerField(db_column='YEARLY_TAX', blank=True, null=True)
    net_monthly_salary = models.IntegerField(db_column='NET_MONTHLY_SALARY', blank=True, null=True)
    net_yearly_salary = models.IntegerField(db_column='NET_YEARLY_SALARY', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'salary_details'

    def __str__(self):
        return f"{self.person.first_name} - Salary Details"
