from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('statii.html/', views.statii, name='statii'),
    path('news.html/', views.news, name='news'),
    path('gosts.html/', views.gosts, name='gosts'),
    path('contacts.html/', views.contacts, name='contacts'),
]