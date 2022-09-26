
let contactform = document.querySelector('#contactform');
let submit_btn = document.querySelector('#submit');
let inputs = document.querySelectorAll('input')
let textariea = document.querySelector('textarea')
contactform.addEventListener('submit', function(event){
          event.preventDefault();
          $.ajax({
            type:'POST',
            url:'/contact/',
            data:{
              name:$("#name").val(),
              email:$("#email").val(),
              subject:$("#subject").val(),
              message:$("#message").val(),
              csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
            },
            success:function(data){
              alert(data)
            }
        })
        inputs.forEach(input => input.value = '');
        textariea.value =''
}) 

