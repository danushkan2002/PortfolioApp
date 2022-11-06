from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.getMessages, name='getMessages'),
    path('today/', views.getTodayMessages, name='getTodayMessages'),
    path('yesterday/', views.getYesterdayMessages, name='getYesterdayMessages'),
    path('month/', views.getMonthMessages, name='getMonthMessages'), 
    path('create/', views.postMessage, name='postMessage'),  
    path('delete/<str:pk>/', views.deleteMessage, name='deleteMessage'),    
]
