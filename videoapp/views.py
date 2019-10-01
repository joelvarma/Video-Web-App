# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

@login_required
def videofeed(requests):

    resp = HttpResponse('Hello')
    return resp
