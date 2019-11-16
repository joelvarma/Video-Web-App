from django.shortcuts import render
from videoapp.models import Video
from .serializers import VideoSerializer
from rest_framework.generics import ListAPIView,RetrieveAPIView

class VideoListView(ListAPIView):
	
	queryset = Video.objects.all()
	serializer_class = VideoSerializer


class VideoDetailView(RetrieveAPIView):
	
	queryset = Video.objects.all()
	serializer_class = VideoSerializer