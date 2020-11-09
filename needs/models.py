from django.db import models



class Need(models.Model):
    item = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
