from django.shortcuts import render
<<<<<<< HEAD

# Create your views here.
=======
from rest_framework import status,viewsets,views,generics
from .models import Project,FreelancerSignin
from .serializers import ProjectSerializer,FreelancerSigninSerializer
from django.utils.dateparse import parse_date
from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response



# Create your views here.

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-date_posted')  # sort by latest
    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.all().order_by('-date_posted')

        # 🔹 Get query params from frontend
        date_posted = self.request.query_params.get('date_posted')
        skills = self.request.query_params.get('skills')
        company_name = self.request.query_params.get('company_name')

        # 🔹 Apply filters if provided
        if date_posted:
            parsed_date = parse_date(date_posted)
            if parsed_date:
                queryset = queryset.filter(date_posted__date=parsed_date)

        if skills:
            queryset = queryset.filter(skills__icontains=skills)

        if company_name:
            queryset = queryset.filter(company_name__icontains=company_name)

        return queryset
    
class FreelancerRegisterViewSet(APIView):
    def post(self, request):
        serializer = FreelancerSigninSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Freelancer registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


>>>>>>> 1a5d553bd6dbd547a21595948dd98dc8fd5a1192
