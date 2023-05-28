from django.urls import path, include
from django.contrib import admin
from cryptanalyst import views

urlpatterns = [
    path('ceaser_encrypt/', views.ceaser_encrypt),
    path('ceaser_decrypt/', views.ceaser_decrypt),
    path('rail_encrypt/', views.rail_encrypt),
    path('rail_decrypt/', views.rail_decrypt),
    path('vignere_encrypt/', views.vignereEncrypt),
    path('vignere_decrypt/', views.vignereDecrypt),
    path('vernam_encrypt/', views.vernamEncrypt),
    path('vernam_decrypt/', views.vernamDecrypt),



    path('positive_mod/', views.positive_mod),
    path('negative_mod/', views.negative_mod),


]
