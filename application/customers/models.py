from django.db import models


class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    company_name = models.CharField(max_length=100)
    ident_type = models.CharField(max_length=10)
    ident_number = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    street = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    zip = models.CharField(max_length=50, blank=True)
    mobile = models.CharField(max_length=50, blank=True)
    alt_phone = models.CharField(max_length=50, blank=True)
    comments = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
