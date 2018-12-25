from django.db import models

class UserInfo(models.Model):
    tel = models.CharField(max_length=16)
    pwd = models.CharField(max_length=32)