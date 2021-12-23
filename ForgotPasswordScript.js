//import "sendMailModule.js"

function emailValidation(e){


    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!(re.test(String(e).toLowerCase())))
    {
        const newLocal = 'show';
        var mymodal = $('#ErrorModal22');
        mymodal.find('.modal-body').text('Please enter a valid email\n');
        mymodal.modal(newLocal);
        console.log("8\n");     
        return;
    }
    else
    {
        
        console.log("valid email from forgot pass");
        $.post( url = '/ForgotPassword', data = { Email: e } )
        .done(function (data) {
            if (data == "Error") {
              //פה צריך לעשות דברים אם האימייל לא קיים בדאטה בייס
            }
            else {
              //פה זה אומר שהאימייל קיים בדאטה בייס
            }
          });

        // $.ajax({
        //   type: "POST",
        //   url: "/ForgotPassword",
        //   data: $('#email1').value
        // });
    }

}   




