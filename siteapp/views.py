from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'siteapp/index.html')

def statii(request):
    return render(request, 'siteapp/statii.html')

def news(request):
    return render(request, "siteapp/news.html")

def gosts(request):
    return render(request, "siteapp/gosts.html")

def contacts(request):
    return render(request, "siteapp/contacts.html")

def catalog(request):
    return render(request, "siteapp/catalog.html")

def catalog_group(request):
    return render(request, "siteapp/catalog-group.html")

def prod_card(request):
    return render(request, "siteapp/prod-card.html")

def temp_mews_statii(request):
    return render(request, "siteapp/temp-mews-statii.html")