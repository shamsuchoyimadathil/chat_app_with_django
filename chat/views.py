from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.

class Index(TemplateView):
    template_name = 'chat/index.html'

def room(request,room_name):
    return render(request,'chat/room.html',{
        "room_name":room_name
    })