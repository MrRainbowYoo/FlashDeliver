# -*- coding: utf-8 -*-

from . import views

from django.urls import path

app_name = 'DDL'
urlpatterns = [

    path('', views.loadHomePage, name='loadHomePage'),
    path('^OrderOnline/$',views.OrderOnline, name='OrderOnline'),
    path('^FlashDeliverPrice/$',views.FlashDeliverPrice, name='FlashDeliverPrice'),
    path('^CodeLoginPage/$',views.CodeLoginPage, name='CodeLoginPage'),
    path('^ConfirmOrder/$',views.ConfirmOrder, name='ConfirmOrder'),
    path('^MyFlashDeliver/$',views.MyFlashDeliver, name='MyFlashDeliver'),
    path('^SchoolFlashDriver/$',views.SchoolFlashDriver,name='SchoolFlashDriver'),
    path('^SignupPage/$',views.SignupPage,name='SignupPage'),
    path('^LoginPage/$',views.LoginPage,name='LoginPage'),
    path('^recharge/$',views.Recharge,name='Recharge'),
    path('^MyBalance/$',views.Mybalance,name='Mybalance'),
    path('^regist/$', views.regist, name='regist'),
    path('^login/$', views.login, name='login')
]

