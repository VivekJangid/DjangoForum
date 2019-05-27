from django.shortcuts import render
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from accounts.models import *
from .serializers import *


class UserView(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer


class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


class AnswerView(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer

    def get_queryset(self):
        queryset = Answer.objects.filter(poll_id=self.kwargs["question"])
        return queryset


class VoterView(viewsets.ModelViewSet):
    queryset = Voter.objects.all()
    serializer_class = VoterSerializer


class QVoterView(viewsets.ModelViewSet):
    queryset = QVoter.objects.all()
    serializer_class = QVoterSerializer


class CommentView(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommmentSerializer
