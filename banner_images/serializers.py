from rest_framework import serializers

from .models import BannerImage


class BannerImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = BannerImage
        fields = ('id', 'image',)
