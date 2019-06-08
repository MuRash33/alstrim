from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('statii.html/', views.statii, name='statii'),
    path('news.html/', views.news, name='news'),
    path('gosts.html/', views.gosts, name='gosts'),
    path('contacts.html/', views.contacts, name='contacts'),
    path('catalog.html/', views.catalog, name='catalog'),
    path('catalog-group.html/', views.catalog_group, name='catalog-group'),
    path('prod-card.html/', views.prod_card, name='prod-card'),
    path('temp-mews-statii.html/', views.temp_mews_statii, name='temp-mews-statii'),
]