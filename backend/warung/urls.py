from django.urls import path
from . import views

urlpatterns = [
    path('menu/', views.MenuItemListView.as_view(), name='menu-list'),
    path('contact/', views.ContactCreateView.as_view(), name='contact-create'),
    path('info/', views.warung_info, name='warung-info'),

]