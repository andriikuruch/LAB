from django.urls import path, include

from main import views

appname = "main"

urlpatterns = [
    path("", views.index),
]