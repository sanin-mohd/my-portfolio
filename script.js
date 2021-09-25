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
    $("#submit-form").submit((e)=>{
        e.preventDefault()
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbwBaoNTlUKswLJH4uIwptkGktEzLt_de9I3UCINuYBQ7dkzJ1IDiWbEsbXc9-9I_2vN/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    })
     //$('#gform')[0].checkValidity();
})