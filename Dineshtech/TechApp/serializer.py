from . models import ContactForm
from rest_framework import serializers
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'