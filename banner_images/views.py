from rest_framework import generics
from rest_framework import permissions

from .models import BannerImage
from .serializers import BannerImageSerializer



class BannerImageListCreateView(generics.ListCreateAPIView):
    queryset = BannerImage.objects.all()
    serializer_class = BannerImageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)




class BannerImageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BannerImage.objects.all()
    serializer_class = BannerImageSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
