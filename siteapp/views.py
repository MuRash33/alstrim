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