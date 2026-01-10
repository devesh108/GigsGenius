from rest_framework import serializers
from .models import Project,FreelancerSignin,ClientSignin
from django.contrib.auth.hashers import make_password

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Project
        fields='__all__'   


class FreelancerSigninSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreelancerSignin
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}  # ensures password is not returned
        }
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)


class ClientSiginSerializer(serializers .ModelSerializer):
    class Meta:
        model=ClientSignin
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}  # ensures password is not returned
        }
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super().update(instance, validated_data)




