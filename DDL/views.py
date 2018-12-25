from django.shortcuts import render, render_to_response
from django.views.decorators.csrf import csrf_exempt
from django.http import Http404, HttpResponse

from .models import *
from django.contrib import messages


def loadHomePage(request):
    return render(request, 'HomePage.html')

def OrderOnline(request):
    return render(request,'OrderOnline.html')

def FlashDeliverPrice(request):
    return render(request,'FlashDeliverPrice.html')

def CodeLoginPage(request):
    return render(request,'CodeLoginPage.html')

def ConfirmOrder(request):
    return render(request,'ConfirmOrder.html')

def MyFlashDeliver(request):
    return render(request,'MyFlashDeliver.html')

def SchoolFlashDriver(request):
    return render(request,'SchoolFlashDriver.html')

def SignupPage(request):
    return  render(request,'SignupPage.html')

def LoginPage(request):
    return  render(request,'LoginPage.html')

def Recharge(request):
    return  render(request,'recharge.html')

def Mybalance(request):
    return  render(request,'MyBalance.html')

@csrf_exempt
def regist(request):
    if request.method == 'POST':
        tel = request.POST.get('tel')
        pwd1 = request.POST.get('pwd1')
        pwd2 = request.POST.get('pwd2')
        if pwd1 == pwd2:
            user = UserInfo()
            user.tel = tel
            user.pwd = pwd1
            user.save()
            messages.success(request, '注册成功')
            return render(request, 'LoginPage.html')
        else:
            messages.success(request, '两次输入的密码不一致')
            return render(request, 'SignupPage.html')

@csrf_exempt
def login(request):
    if request.method == 'POST':
        tel = request.POST.get('tel')
        pwd = request.POST.get('pwd')
        try:
            user = UserInfo.objects.get(tel=tel, pwd=pwd)
        except:
            messages.success(request, '手机号或密码错误')
            return render(request, 'LoginPage.html')
        messages.success(request, '登录成功')
        return render(request, 'HomePage.html')