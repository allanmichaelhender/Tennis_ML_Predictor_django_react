from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Predictions, Players
from .serializers import PredictionsSerializer, PlayersSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class PredictionsListCreate(generics.ListCreateAPIView):
    serializer_class = PredictionsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Predictions.objects.filter(author=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author=self.request.user)
        else: print(serializer.errors)

class PredictionsDelete(generics.DestroyAPIView):
    serializer_class = PredictionsSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Predictions.objects.filter(author=user)

class PlayersView(generics.ListAPIView):
    queryset = Players.objects.all().order_by('name')
    serializer_class = PlayersSerializer
    


