$(document).ready(function(){
    //initialize form validation on the registration form
    //the form has the name attribute as "registration"
    $("form[name='registration']").validate({
      //specify the validation rules
      rules: {
        //the key name on the left side is the name of the attribute
        //validation rules are defined on the right side
        firstname:"required",
        lastname:"required",
        email:{
          required: true,
          email: true
        },
        password:{
          required: true,
          minlength: 5
        }
      },
      //specify validation messages
      messages:{
        firstname:"Please enter your first name.",
        lastname:"Please enter your last name.",
        password:{
          required:"Please enter a password",
          minlength:"Password must be at least 5 characters"
        },
        email:"Please enter a valid email address"
      },
      //submit the form
      submitHandler:function(form){
        form.submit();
      }
    });
  });
