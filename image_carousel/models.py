from django.db import models



class Image(models.Model):
    image = models.ImageField(upload_to="banner_images/", blank=True, null=True)
