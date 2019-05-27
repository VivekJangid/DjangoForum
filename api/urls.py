from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/users', views.UserView)
router.register('api/questions', views.QuestionView, base_name='QuestionView')
router.register('api/answers', views.AnswerView)
router.register('api/voters', views.VoterView)
router.register('api/qvoters', views.QVoterView)
router.register('api/comments', views.CommentView)

urlpatterns = router.urls
