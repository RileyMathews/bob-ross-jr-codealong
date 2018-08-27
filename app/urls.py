from app import views
from django.conf.urls import url

urlpatterns = [
    url(r'^$', views.index, name='home'),
    url(r'^birthday$', views.birthday, name='birthday')
]