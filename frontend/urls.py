from django.urls import include, path
from . import views


app_name = 'frontend'


urlpatterns = [
    path('password/reset/confirm/<uid64>/<token>/', views.IndexView.as_view(), name='password_reset_confirm'),
    path('<path:resource>', views.IndexView.as_view()),
    path('', views.IndexView.as_view(), name='index'),
]
