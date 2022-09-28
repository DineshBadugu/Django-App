/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/

//contact form validate
let contactform = document.querySelector('#contactform');
let submit_btn = document.querySelector('#submit');
contactform.addEventListener('submit', function(event){
            event.preventDefault();
            if(validateform()){
              alert("Data  submition Sucessfully!");
            }else{
              alert("Please fill the Form");
            }
}) 

//validate form all inputs check
let validateform = () =>{
  return true;
  //  return (checkname() && checkemail() && checksubject() && checkmessage());
}


//chech firstname
let checkname =()=>{
  let inputuser = document.querySelector('#name');
  // let feedback = document.querySelector('#first-feedback');
  let regExp = /^[a-zA-Z0-9]{4,20}$/;
  if(regExp.test(inputuser.value)){
    makevalidate(feedback);
    return true;
  }
  else {
    makeinvalidate(feedback);
    return false;
  }
}
//chech lastname
let checklastname =()=>{
  let inputuser = document.querySelector('#lastname');
  let feedback = document.querySelector('#last-feedback');
  let regExp = /^[a-zA-Z0-9]{4,20}$/;
  if(regExp.test(inputuser.value)){
    makevalidate(feedback);
    return true;
  }
  else {
    makeinvalidate(feedback);
    return false;
  }
}
//check email 
let checkemail =() =>{
  let inputuser = document.querySelector("#email");
  let feedback = document.querySelector('#email-feedback');
  let regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  if(regExp.test(inputuser.value)){
    makevalidate(feedback);
    return true;
  }else{
    makeinvalidate(feedback);
    return false;
  }
}

//chech subject
let checksubject =()=>{
  let inputuser = document.querySelector('#subject');
  let feedback = document.querySelector('#subject-feedback');
  let regExp = /^[a-zA-Z0-9]{4,20}$/;
  if(regExp.test(inputuser.value)){
    makevalidate(feedback);
    return true;
  }
  else {
    makeinvalidate(feedback);
    return false;
  }
}
//chech subject
let checkmessage =()=>{
  let inputuser = document.querySelector('#message');
  let feedback = document.querySelector('#message-feedback');
  let regExp = /^[a-zA-Z0-9]{50,200}$/;
  if(regExp.test(inputuser.value)){
    makevalidate(feedback);
    return true;
  }
  else {
    makeinvalidate(feedback);
    return false;
  }
}
//validate functions 
let makevalidate = (feedback) =>{
  feedback.classList.add('text-sucess');
  feedback.classList.remove('text-danger');
  feedback.innerText = "Looks Good";
}
let makeinvalidate = (feedback) =>{
  feedback.classList.remove('text-sucess')
  feedback.classList.add('text-danger')
  feedback.innerText = "Looks Bad"
}

let inputfirstname = document.querySelector('#firstname');
inputfirstname.addEventListener('keyup', function(){
  checkfirstname();
})
let inputlastname = document.querySelector('#lastname');
inputlastname.addEventListener('keyup', function(){
  checklastname();
})

let email = document.querySelector("#email");
email.addEventListener('keyup', function(){
  checkemail();
})

let subject = document.querySelector('#subject');
subject.addEventListener('keyup', function(){
  checksubject();
})

let message = document.querySelector('#message');
message.addEventListener('keyup',function(){
  checkmessage();
})

// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!')
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error)
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       return response.text();
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();
