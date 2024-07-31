from rest_framework import generics
from .models import React
from .serializer import ReactSerializer

class ReactView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer
