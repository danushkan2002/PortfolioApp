from .models import Inbox
from rest_framework import serializers
from datetime import date

class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = ['id', 'email', 'message', 'created_at', 'updated_at']
