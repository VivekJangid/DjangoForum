from django.db import models
from django.contrib.auth.models import User


class UserProfile(User):
    # This line is required. Links UserProfile to a User model instance.
    user = models.ForeignKey(User, related_name="users",
                             on_delete=models.CASCADE, null=True)
    points = models.IntegerField(default=0)


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    reward = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    user_data = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    closed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    user_data = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)


class Voter(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)


class QVoter(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)


class Comment(models.Model):
    answer = models.ForeignKey(Answer, on_delete=models.CASCADE)
    comment_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
