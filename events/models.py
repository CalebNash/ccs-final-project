from django.db import models



class Event(models.Model):
    image = models.ImageField(upload_to="events/", blank=True, null=True)
    title = models.CharField(max_length=255)
    body = models.TextField()
