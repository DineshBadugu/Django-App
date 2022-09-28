from django.urls import path
from TechApp import views 
urlpatterns = [
    path('', views.Home,name='home'),
    path('contact/', views.ConctactData,name='contact'),
    # path('api/contactlist/',views.contact_list,name='contactlist'),
    # path('api/contact_post/',views.contact_post,name='contactpost'),
    # path('api/contact_update/<int:id>/',views.contact_update,name='contactupdate'),
    # path('api/contact_deleted/<int:id>/',views.contact_delete,name='contactdeleted')
]
