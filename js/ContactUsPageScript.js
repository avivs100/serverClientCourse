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
    alert("Email field must not be empty!");
    return;
  }
  if (!(CheckEmail())){
    alert("Not a valid email address!");
    return;
  }
  if (CheckMessageBox() == "Messasge_is_empty"){
  alert("Message field must not be empty!\nMessage field must contain more then 25 words!");
  return;}
  if (CheckMessageBox() == "Less_then_25"){
    alert("Message field must contain more then 25 words!");
    return;
  }

  /* If we got here it means that everything is ok and works correctly.
    Next step is to inform the site owners (us) that something is not working as expected. We will do it via node mailer --> Aviv S.
    Need to also verify that the mail exists in our mail lists on the DB (Will do it via Jquery).
    Love you guys :-* 
  */
}