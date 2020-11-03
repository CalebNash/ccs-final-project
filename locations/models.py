from django.db import models
from django.contrib.postgres.fields import ArrayField


class Location(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    lat = models.CharField(max_length=255)
    lng = models.CharField(max_length=255)
    categories = ArrayField(models.CharField(max_length=100, blank=True), blank = True, null = True,)
    hours = models.CharField(max_length=255, null=True)
