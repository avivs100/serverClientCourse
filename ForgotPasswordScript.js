//import "sendMailModule.js"

function emailValidation(e){
    var answerFromRecaptcha = recaptchaFunc();
    console.log(answerFromRecaptcha);
    if (answerFromRecaptcha == true)
    {
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
          $.post(  '/ForgotPassword', { Email: e } )
          .done(function (data) {
              if (data="EMET ani gever")
              {
                const newLocal = 'show';
                var mymodal = $('#ErrorModal03');
                mymodal.find('.modal-body').text('Email sent successfuly, please reset your password\n');
                mymodal.modal(newLocal);
              }
              // if (data == "Error") {
              //   //פה צריך לעשות דברים אם האימייל לא קיים בדאטה בייס
              // }
              // else {
              //   //פה זה אומר שהאימייל קיים בדאטה בייס
              // }
            });
      }

    }   
    else{
      const newLocal = 'show';
      var mymodal = $('#ErrorModal12');
      mymodal.find('.modal-body').text('recapcha empty\n');
      mymodal.modal(newLocal);
    }

}


