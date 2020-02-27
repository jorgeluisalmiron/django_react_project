from rest_framework import viewsets, permissions
from .serializers import CustomerSerializer
from .models import Customer


# Customer ViewSet
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = CustomerSerializer
