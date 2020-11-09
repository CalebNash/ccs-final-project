from django.urls import path

from .views import NeedListCreateView, NeedDetailView


urlpatterns = [
    path('<int:pk>/', NeedDetailView.as_view()),
    path('', NeedListCreateView.as_view()),
]
