from django.urls import path, include
from rest_auth.views import PasswordResetConfirmView


urlpatterns = [
    path('needs/', include('needs.urls')),
    path('events/', include('events.urls')),
    path('locations/', include('locations.urls')),
    path('image_carousel/', include('image_carousel.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/password/reset/confirm/<uidb64>/<token>', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('all-auth/', include('allauth.urls')),
]
