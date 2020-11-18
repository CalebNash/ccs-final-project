from django.urls import include, path
from . import views
urlpatterns = [
    path('password/reset/confirm/<uidb64>/<token>/', views.IndexView.as_view(), name='password_reset_confirm'),
    # path('password/reset/', views.IndexView.as_view(), name='reset_password_token'),
    path('<path:resource>', views.IndexView.as_view()),
    path('', views.IndexView.as_view()),
]
