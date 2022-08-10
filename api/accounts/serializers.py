from dataclasses import fields
from rest_framework import serializers
from .models import  UserAccount
from datetime import date
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['id', 'username', 'mobile_number', 'is_admin', 'is_superadmin', 'profile']


class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = UserAccount
        fields = ['id', 'username','mobile_number', 'token', 'is_admin', 'is_superadmin', 'profile']

    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
