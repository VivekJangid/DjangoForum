from django.contrib import admin
from .models import *

admin.site.register(UserProfile)
admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Voter)
admin.site.register(QVoter)
admin.site.register(Comment)
