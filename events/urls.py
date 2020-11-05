from django.urls import path

from .views import EventListCreateView, EventDetailView


urlpatterns = [
    path('<int:pk>/', EventDetailView.as_view()),
    path('', EventListCreateView.as_view()),
]
