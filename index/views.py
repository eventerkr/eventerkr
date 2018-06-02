from django.shortcuts import render
from django.http import HttpResponse
from index.models import User, Event, Location, Eventartistrel
from django.forms.models import model_to_dict

# Create your views here.
def index(request):
    users = User.objects.all()
    events = Event.objects.all().order_by('date').reverse().select_related()
    artistsrel = Eventartistrel.objects.all().select_related()
    argudict = {'users': users,
                'events': events}
    return render(request, 'index/test.html', argudict)
