from django.urls import path
from . import views

urlpatterns = [
    path('predictions/', views.PredictionsListCreate.as_view(), name='predictions-list'),
    path('predictions/<int:pk>/', views.PredictionsDelete.as_view(), name='predictions-delete'),
    path('players/',views.PlayersView.as_view(), name='players-view'),
]

