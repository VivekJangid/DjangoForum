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
    permission_class = [permissions.IsAuthenticated]

    def get_queryset(self, pk):
        return Question.objects.get(pk=pk)

    def put(self, request, pk):
        question = self.get_queryset(pk)

        if(request.user == question.user):
            serializer = QuestionSerializer(question, data=request.data)
            if serializer.is_valid():
                serializer.save(owner=self.request.user)
                return Response(serializer.data)


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
