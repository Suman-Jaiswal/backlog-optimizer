from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from .models import Course
from rest_framework import status
from rest_framework.response import Response
from .serializers import courseSerializer

# Create your views here.
def test(request):
    courses = Course.objects.all()
    return render(request, 'test.html', {'courses': courses})

class courseList(APIView):
    def get(self, request):
        courses_set = Course.objects.all()
        serializer = courseSerializer(courses_set, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
