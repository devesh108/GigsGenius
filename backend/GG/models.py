from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    company_name = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    skills = models.CharField(max_length=255)
    timeline = models.CharField(max_length=100)
    date_posted = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class FreelancerSignin(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    gender = models.CharField(max_length=50)  # storing value from frontend
    skills = models.CharField(max_length=255)
    experience = models.FloatField()          # store experience in years
    location = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)  # store phone as string
    profile_description = models.TextField()
    password = models.CharField(max_length=255)     # use hashed password if possible

    def __str__(self):
        return self.name

class ClientSignin(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    company = models.TextField()
    location = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)  # store phone as string
    password = models.CharField(max_length=255)     # use hashed password if possible

    def __str__(self):
        return self.name

