from django.shortcuts import render
from rest_framework.response import Response
from .models import Inbox
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .serializers import InboxSerializer
# Create your views here.
from datetime import date
from rest_framework.decorators import api_view, permission_classes

@api_view(['POST'])
def postMessage(request):
    data = request.data
    result = Inbox.objects.create(
        email = data['email'],
        message = data['message']
    )
    serializer = InboxSerializer(result, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getMessages(request):
    results = Inbox.objects.all()
    serializer = InboxSerializer(results, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTodayMessages(request):
    today = int(date.today().strftime('%d'))
    message = Inbox.objects.filter(created_at__day=today)
    serializer = InboxSerializer(message, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getYesterdayMessages(request):
    yesterday = int(date.today().strftime('%d')) - 1
    message = Inbox.objects.filter(created_at__day=yesterday)
    serializer = InboxSerializer(message, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMonthMessages(request):
    month = int(date.today().strftime('%m'))
    message = Inbox.objects.filter(created_at__month=month)
    serializer = InboxSerializer(message, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# def getMessage(request, pk):
#     result = Inbox.objects.get(today=pk)
#     serializer = InboxSerializer(result, many=True)
#     return Response(serializer.data)

@api_view(['DELETE'])
def deleteMessage(request, pk):
    message = Inbox.objects.get(id=pk)
    message.delete()
    return Response('Message Deleted')
