from django.shortcuts import render
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from accounts.models import *
from .serializers import *


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = UserProfile.objects.all()


class QuestionView(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class AnswerView(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer


class VoterView(viewsets.ModelViewSet):
    queryset = Voter.objects.all()
    serializer_class = VoterSerializer


class QVoterView(viewsets.ModelViewSet):
    queryset = QVoter.objects.all()
    serializer_class = QVoterSerializer


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommmentSerializer
