from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from warung.models import MenuItem, Order, OrderItem

@api_view(['POST'])
def create_order(request):
    try:
        order_data = request.data
        items_data = order_data.pop('items')
        
        # Create order
        order = Order.objects.create(**order_data)
        
        # Create order items
        for item_data in items_data:
            menu_item = MenuItem.objects.get(id=item_data['menu_item_id'])
            OrderItem.objects.create(
                order=order,
                menu_item=menu_item,
                quantity=item_data['quantity'],
                price=item_data['price']
            )
        
        return Response({'id': order.id, 'status': 'success'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)