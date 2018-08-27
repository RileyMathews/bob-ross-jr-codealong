from django.db import models

# Create your models here.
class Birthday(models.Model):
    name = models.CharField(max_length=255)
    birthday = models.DateField()
    greeting = models.CharField(max_length=255)