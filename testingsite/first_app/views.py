from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# This load the index.html template

def index(request):
    '''
    This loads the main index html file
    '''
    return render(request, 'index.html')

