import Swal from 'sweetalert2'

// // CommonJS
 



$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4,
                maxlength:20
            },
            email:{ 
                required:true,
                email:true
            },
            message:{
                required:true
            },
            subject:{
                required:true,
                minlength:5
            }
        },
        
    }),
    $("#submit-form").submit((e) => {
        e.preventDefault();
        var isvalidate = $("#submit-form")[0].checkValidity();
       
        if (isvalidate) {
        
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyGDcHoxunKLZiTdWztb0R0jSi1dC9ajr7rRpaNXFYjA5G0XUzAb3toMEV5e6JOr4qi/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                const Swal = require('sweetalert2')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")
    
            }
        })
    }
    })
    // $('#submit-form')[0].checkValidity();
})