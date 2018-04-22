from django.shortcuts import render
from django.http import HttpResponse
from index.models import User, Event

# Create your views here.
def index(request):
    #return HttpResponse("Hello, world.")
    argudict = {'users': User.objects.all(),
                'events': Event.objects.all()}
    return render(request, 'index/test.html', argudict)
