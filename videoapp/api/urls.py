from django.conf.urls import url

from .views import VideoListView,VideoDetailView

urlpatterns = [

	url(r'',VideoListView.as_view()),
	url(r'<pk>',VideoDetailView.as_view()),

]