from django.db import models



class BannerImage(models.Model):
    image = models.ImageField(upload_to="banner_images/", blank=True, null=True)
