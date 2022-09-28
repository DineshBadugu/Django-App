from urllib import response
from django.shortcuts import render,redirect
from .models import ContactForm
from django.http import HttpResponse
from django.core.mail import send_mail

#contact form 
import sib_api_v3_sdk
from sib_api_v3_sdk.rest import ApiException
from pprint import pprint
from django.contrib import messages
#rest_framework 
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from .serializer import ContactSerializer
# from rest_framework import status
# Create your views here.
def Home(request):
    return render(request,"uifiles/index.html")

def ConctactData(request):
    if request.method == "POST":
        name = request.POST.get('name',"")
        email = request.POST.get('email',"")
        subject = request.POST.get('subject',"")
        message = request.POST.get('message',"")
        
        oContactinfo = ContactForm(Name=name,Email=email,Subject=subject,Message=message)
        oContactinfo.save()
        sucess =f'hi {name} sucessfully Sending email'
        message ='''
        Subject:{}
        Message:{}
        From:{}
        '''.format(subject,message,email)
        try:
            send_mail(subject, message,'noreplaybadugudinesh94@gmail.com',recipient_list=['badugudinesh94@gmail.com']) 
            messages.info(request,f'hi {name} sucessfully Sending email')
        except ApiException as e:
            print("Exception when calling SMTPApi->send_transac_email: %s\n" % e)
        return 'successfully'
       # return render(request, "uifiles/index.html")

        # configuration = sib_api_v3_sdk.Configuration()
        # configuration.api_key['api-key'] = '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'
        # api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))
        # subject = subject
        # html_content = message
        # sender = {"name": name, "email": email}
        # to = [{"email": 'badugudinesh94@gmail.com', "name": 'DT7Solutions'}]
        # headers = {"Some-Custom-Name": "unique-id-1234"}
        # send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(to=to, headers=headers,html_content=html_content, sender=sender, subject=subject)
        # try:
        #     api_response = api_instance.send_transac_email(send_smtp_email)
        #     pprint(api_response)
        #     messages.success(request, sucess)
        # except ApiException as e:
        #     print("Exception when calling SMTPApi->send_transac_email: %s\n" % e)
        # #return HttpResponse(sucess)
        #return render(request, "uifiles/index.html")


        # message ='''
        # Subject:{}
        # Message:{}
        # From:{}
        # '''.format(subject,message,email)
        # send_mail(subject, message,'noreplaybadugudinesh94@gmail.com',recipient_list=['badugudinesh94@gmail.com']) 
        # return HttpResponse(sucess)
    
# @api_view(['GET'])
# def contact_list(request):
#     contactinfo = ContactForm.objects.all()
#     serializer = ContactSerializer(contactinfo, many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def contact_post(request):
#     serializer = ContactSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def contact_update(request,id):
#     contactinfo = ContactForm.objects.get(id=id)
#     serializer = ContactSerializer(instance=contactinfo ,data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def contact_delete(request,id):
#     contactinfo = ContactForm.objects.get(id=id)
#     contactinfo.delete()
#     return Response('Sucessfully delted the record')