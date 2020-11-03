from django.urls import path, include


urlpatterns = [
    path('locations/', include('locations.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
