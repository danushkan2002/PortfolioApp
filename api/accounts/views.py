from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from api.accounts.serializers import UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import UserAccount
from django.contrib.auth.hashers import make_password


# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    user = UserAccount.objects.create(
    username = data['username'],
    mobile_number = data['mobile_number'],
    password = make_password(data['password']),
    
    )
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)
