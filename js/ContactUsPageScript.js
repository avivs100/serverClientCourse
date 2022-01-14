// Add your code here

function check(n,e,c,s){
          {
              var validationRules = "Name minimum 2 chars\nEmail must be valid\nMust choose from combo-box\nSubject must be written";                           
              
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var numberCaseCheck = new RegExp(
                "^(?=.*[0-9]).+$"
              );
            if(! re.test(String(e).toLowerCase()))
            {
                window.alert("Please enter a valid email\n\n"+validationRules);
                return;
            }
           if(n.length<2)
           {
            window.alert("Please enter a real name\n\n"+validationRules);
            return;
           }

           if(c=="")
           {
            window.alert("Please choose option in the combo\n\n"+validationRules);
            return;
           }


          window.alert("Name: "+n+"\n"+"Email: "+e+"\ncombo: "+c+"\nsubject: "+s);             
          console.log(""+e+"\n"+p);
          }
        }

function CheckEmail() {
          if (document.getElementById("email").value == ""){
            return "Email_is_empty";
        }
          return (document.getElementById("email").value.match("@"));
}
function CheckMessageBox() {
  if (document.getElementById("message").value == ""){
    return "Messasge_is_empty"
    
}
var message_length = document.getElementById("message").value;
if (message_length.length < 25){
  return "Less_then_25";  
}
  
}
function contact_us(){
  if (CheckEmail() == "Email_is_empty"){
    return  "Email_is_empty";
  }
  if (!(CheckEmail())){
    return "Not a valid email";
  }
  if (CheckMessageBox() == "Messasge_is_empty"){
  return "Messasge_is_empty";}
  if (CheckMessageBox() == "Less_then_25"){
    return "Less_then_25";
  }
  // validation stop and now send to server
 /*  var e = document.getElementById("email").value
  var select_input = document.getElementById("select_box");
  var message_text = document.getElementById("message").value;
   */
/*   $.post('/contactUsPage', { Email: e, Message: message_text,Select: select_input } )
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
 */
  // Post request is needed with the parameters from the user such as --> email, message and select option

  // --------------------------------------------------------------------------------------------------------------------------------
  /* If we got here it means that everything is ok and works correctly.
    Next step is to inform the site owners (us) that something is not working as expected. We will do it via node mailer --> Aviv S.
    Need to also verify that the mail exists in our mail lists on the DB (Will do it via Jquery).
    Love you guys :-*                                                                                                              */
 // --------------------------------------------------------------------------------------------------------------------------------
}