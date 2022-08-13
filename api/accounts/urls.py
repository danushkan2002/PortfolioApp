from django.urls import path, include
from . import views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('create/', views.registerUser, name='registerUser'),
    path('profile/', views.getProfile, name='getProfile'),
]
