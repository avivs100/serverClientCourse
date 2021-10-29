// Add your code here
function createAccountAndValidate(e,p,rp)
          {
              var validationRules = "Minimum 6 Characters\nMust Include an Uppercase Character\nMust Include an Lowercase Character\n";
              validationRules += "Must Include a Number\nMust Include a Special Character (!, @, #, etc.).";
              validationRules += "Supported special characters are: ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > < " ;
              
              
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var numberCaseCheck = new RegExp(
                "^(?=.*[0-9]).+$"
              );
            var lowerCaseCheck = new RegExp(
                "^(?=.*[a-z]).+$"
              );
              var UpperCaseCheck = new RegExp(
                "^(?=.*[A-Z]).+$"
              );
              var specialCaseCheck = new RegExp(
                "^(?=.*[!@#$%^&*()-_=+\|{};:/?.><]).+$"
              );
            if(! re.test(String(e).toLowerCase()))
            {
                window.alert("Please enter a valid email\n");
                return;
            }
            else if (String(p).length<6)
            {
                window.alert("Pass should contain at least 6 letters\n\n"+validationRules);
                return;
            }
            else if (!lowerCaseCheck.test(p))
            {
                window.alert("Pass not contain lowercase\n\n"+validationRules);
                return;
            }  
            else if (!UpperCaseCheck.test(p))
            {
                window.alert("Pass not contain uppercase\n\n"+validationRules);
                return;
            } 
            else if (!specialCaseCheck.test(p))
            {
                if(p.includes("["))
                    return;
                if(p.includes("]"))
                    return;
                window.alert("Pass not contain special char\n\n"+validationRules);
                return;
            } 
            else if (!numberCaseCheck.test(p))
            {
                window.alert("Pass not contain number\n\n"+validationRules);
                return;
            }   
            else if (!(p==rp))
            {
                window.alert("Confirmation faild, sorry try again !\n");
                return;
            }                 
          window.alert("Email: "+e+"\n"+"Password: "+p+"\n");             
          console.log(""+e+"\n"+p);
          }
