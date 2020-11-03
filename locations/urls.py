from django.urls import path

from .views import LocationListCreateView, LocationDetailView


urlpatterns = [
    path('<int:pk>/', LocationDetailView.as_view()),
    path('', LocationListCreateView.as_view()),
]
