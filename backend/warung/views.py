from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import MenuItem, Contact
from .serializers import MenuItemSerializer, ContactSerializer

class MenuItemListView(generics.ListAPIView):
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

@api_view(['GET'])
def warung_info(request):
    data = {
        'name': 'Warung Mak Ijah',
        'description': 'Warung tradisional dengan cita rasa autentik Indonesia yang telah melayani sejak 1995',
        'address': 'Jl. Merdeka No. 123, Jakarta Pusat',
        'phone': '021-12345678',
        'hours': 'Senin - Sabtu: 07:00 - 22:00, Minggu: 08:00 - 21:00',
        'specialties': ['Nasi Gudeg', 'Soto Ayam', 'Gado-gado', 'Es Cendol']
    }
    return Response(data)