from rest_framework import serializers
from accounts.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'name', 'email', 'points', 'bio')


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'


class VoterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Voter
        fields = '__all__'


class QVoterSerializer(serializers.ModelSerializer):
    class Meta:
        model = QVoter
        fields = '__all__'


class CommmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
