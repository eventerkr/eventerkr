from django.shortcuts import render
from django.http import HttpResponse
from index.models import User, Event, Location

# Create your views here.
def index(request):
    #return HttpResponse("Hello, world.")
    argudict = {'users': User.objects.all(),
                'events': Event.objects.all().order_by('date').reverse().select_related(),
                'locations': Location.objects.all() }
    return render(request, 'index/test.html', argudict)
