# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Video(models.Model):

	video_title = models.CharField(max_length=120)
	description = models.CharField(max_length=1000)
	#author = models.ForeignKey(User)