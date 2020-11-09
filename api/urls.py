from django.urls import path, include


urlpatterns = [
    path('needs/', include('needs.urls')),
    path('events/', include('events.urls')),
    path('locations/', include('locations.urls')),
    path('image_carousel/', include('image_carousel.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
]
