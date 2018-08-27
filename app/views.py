from django.shortcuts import render
from app.models import Birthday
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'app/index.html')

def birthday(request):
    return JsonResponse(list(Birthday.objects.all().values()), safe=False)