from django.urls import path

from .views import BannerImageListCreateView, BannerImageDetailView


urlpatterns = [
    path('<int:pk>/', BannerImageDetailView.as_view()),
    path('', BannerImageListCreateView.as_view()),
]
