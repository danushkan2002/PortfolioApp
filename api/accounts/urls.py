from django.urls import path, include
from . import views


urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('register/', views.registerUser, name='registerUser'),
]
