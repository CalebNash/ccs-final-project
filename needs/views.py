from rest_framework import generics
from rest_framework import permissions

from .models import Need
from .serializers import NeedSerializer



class NeedListCreateView(generics.ListCreateAPIView):
    queryset = Need.objects.all()
    serializer_class = NeedSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)




class NeedDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Need.objects.all()
    serializer_class = NeedSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
