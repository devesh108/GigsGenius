from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, FreelancerRegisterViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')

urlpatterns = [
    path('', include(router.urls)),
    path('freelancer/register/', FreelancerRegisterViewSet.as_view(), name='freelancer-register'),
]
