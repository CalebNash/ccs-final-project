from django.urls import path

from .views import ImageListCreateView, ImageDetailView


urlpatterns = [
    path('<int:pk>/', ImageDetailView.as_view()),
    path('', ImageListCreateView.as_view()),
]
