// Add your code here



function ValidateEmail(userEmail)
{   
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(userEmail.match(mailformat))
        return true;
    return false;      
}
  
function validatePassword(password) {
    var numberCaseCheck = new RegExp(
        "^(?=.*[0-9]).+$"
      );
    var lowerCaseCheck = new RegExp(
        "^(?=.*[a-z]).+$"
      );
      var UpperCaseCheck = new RegExp(
        "^(?=.*[A-Z]).+$"
      );
      var specialCaseCheck = /^(?=.*[!@#\$%\^&\*()\-_\=\+\\\|\[\]\{\};:/\?\.\>\<\"])/;

    if (String(password).length<6)
        return false;
    if (!lowerCaseCheck.test(password))
        return false; 
    if (!UpperCaseCheck.test(password))
        return false;
    if (!specialCaseCheck.test(password))
        return false;
    if (!numberCaseCheck.test(password))
        return false;
    return true;  
}


function loginBtn(email,password) {
    var newLocal = 'show';
    var vEmail = ValidateEmail(email);
    var vPassword = validatePassword(password);
    if(!vEmail && !vPassword)
    {
        var mymodal = $('#ErrorModal2');
        mymodal.find('.modal-body').text('you have entered an invalid email address and invalid password!\n');
        mymodal.modal(newLocal);
        return false;
    }
    else if(!vEmail){
        var mymodal = $('#ErrorModal2');
        mymodal.find('.modal-body').text('You have entered an invalid email address!\n');
        mymodal.modal(newLocal);
        return false;
    }
    else if(!vPassword){
        var mymodal = $('#ErrorModal2');
        mymodal.find('.modal-body').text('You have entered an invalid password!\n');
        mymodal.modal(newLocal);
        return false;
    }
    /** Email and password are valid */
    return true;
}



function LogInValidation(e,p)
          {
            var myInput = document.getElementById("psw");
            var letter = document.getElementById("letter");
            var capital = document.getElementById("capital");
            var number = document.getElementById("number");
            var length = document.getElementById("length");
            var special = document.getElementById("special");

        // When the user clicks on the password field, show the message box
            myInput.onfocus = function() {
            document.getElementById("message").style.display = "block";
        }

        // When the user clicks outside of the password field, hide the message box
            myInput.onblur = function() {
            document.getElementById("message").style.display = "none";
        }
        // When the user starts to type something inside the password field
            myInput.onkeyup = function() {
        // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if(myInput.value.match(lowerCaseLetters)) {  
                 letter.classList.remove("invalid");
                 letter.classList.add("valid");
             } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }
  
        // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if(myInput.value.match(upperCaseLetters)) {  
                capital.classList.remove("invalid");
                capital.classList.add("valid");

            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

        // Validate numbers
            var numbers = /[0-9]/g;
            if(myInput.value.match(numbers)) {  
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }
  
        // Validate length
            if(myInput.value.length >= 6) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        

        // Validate special charecter
            var specialchar = /^(?=.*[!@#\$%\^&\*()\-_\=\+\\\|\[\]\{\};:/\?\.\>\<\"])/;
            console.log(myInput.value);
            if(myInput.value.match(specialchar)) {  
                console.log("1");
                special.classList.remove("invalid");
                special.classList.add("valid");
            } else {
                special.classList.remove("valid");
                special.classList.add("invalid");
            }
        }

}



  