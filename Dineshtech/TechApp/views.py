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
        configuration = sib_api_v3_sdk.Configuration()
        configuration.api_key['api-key'] = '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'
        api_instance = sib_api_v3_sdk.TransactionalEmailsApi(sib_api_v3_sdk.ApiClient(configuration))
        subject = subject
        html_content = message
        sender = {"name": name, "email": email}
        to = [{"email": 'badugudinesh94@gmail.com', "name": 'DT7Solutions'}]
        headers = {"Some-Custom-Name": "unique-id-1234"}
        send_smtp_email = sib_api_v3_sdk.SendSmtpEmail(to=to, headers=headers,html_content=html_content, sender=sender, subject=subject)
        try:
            api_response = api_instance.send_transac_email(send_smtp_email)
            pprint(api_response)
            success = f'hi {name} sucessfully Sending email'
            return  HttpResponse(success)
            
            #messages.info(request,f'hi {name} sucessfully Sending email')
        except ApiException as e:
            #messages.info(request ,"Exception when calling SMTPApi->send_transac_email: %s\n" % e)
            error = f'hi {name} sucessfully Sending email'
            return  HttpResponse(error)

