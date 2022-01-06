// Add your code here

var validpsw=false;

function ValidateEmail(inputText)
{   
    var answerFromRecaptcha = recaptchaFunc();

    if (answerFromRecaptcha == true){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat) && validpsw)
    {
        alert("Valid email address and password!");
        document.form1.text1.focus();
        return true;
    }
    else if(inputText.value.match(mailformat) && validpsw==false)
    {
        alert("You have entered an invalid password!");
        document.form1.text1.focus();
        return false;
    }
    else if(!inputText.value.match(mailformat) && validpsw)
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
    else 
    {
        alert("you have entered an invalid email address and invalid password!");
        document.form1.text1.focus();
        return false;
    }
}
    else{
        alert("recapcha empty!");
    }

}

function validPswCheck(){
    var val;
    val=validpsw;
    return val;
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
                 validpsw=true;
             } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
                validpsw=false;
            }
  
        // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if(myInput.value.match(upperCaseLetters)) {  
                capital.classList.remove("invalid");
                capital.classList.add("valid");
                validpsw=true;

            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
                validpsw=false;
            }

        // Validate numbers
            var numbers = /[0-9]/g;
            if(myInput.value.match(numbers)) {  
                number.classList.remove("invalid");
                number.classList.add("valid");
                console.log("1");
                validpsw=true;
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
                validpsw=false;
            }
  
        // Validate length
            if(myInput.value.length >= 6) {
                length.classList.remove("invalid");
                length.classList.add("valid");
                validpsw=true;
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
                validpsw=false;
            }
        

        // Validate special charecter
            var specialchar = /^(?=.*[!@#\$%\^&\*()\-_\=\+\\\|\[\]\{\};:/\?\.\>\<\"])/;
            console.log(myInput.value);
            if(myInput.value.match(specialchar)) {  
                console.log("1");
                special.classList.remove("invalid");
                special.classList.add("valid");
                validpsw=true;
            } else {
                special.classList.remove("valid");
                special.classList.add("invalid");
                validpsw=false;
            }
        }

  }

  document.addEventListener('DOMContentLoaded', (event) => {
    const recaptcha = document.querySelector('.g-recaptcha');
    recaptcha.setAttribute("data-theme", "dark");
  });

  