// Add your code here
function signInValidation(e,p)
          {
              var validationRules = "Minimum 6 Characters\nMust Include an Uppercase Character\nMust Include an Lowercase Character\n";
              validationRules += "Must Include a Number\nMust Include a Special Character (!, @, #, etc.).";
              validationRules += "\nSupported special characters are: ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > < " ;
              
              
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
              const newLocal = 'show';
              var mymodal = $('#ErrorModal');
              mymodal.find('.modal-body').text('Please enter a valid email\n');
              mymodal.modal(newLocal);            
              return;
            }
            else if (String(p).length<6)
            {
              const newLocal = 'show';
              var mymodal = $('#ErrorModal');
              mymodal.find('.modal-body').text(" Pass should contain at least 6 letters \n\n" +validationRules);
              mymodal.modal(newLocal);                
              return;
            }
            else if (!lowerCaseCheck.test(p))
            {
              const newLocal = 'show';
              var mymodal = $('#ErrorModal');
              mymodal.find('.modal-body').text("Pass not contain lowercase\n\n" +validationRules);
              mymodal.modal(newLocal);                
              return;
            }  
            else if (!UpperCaseCheck.test(p))
            {
              const newLocal = 'show';
              var mymodal = $('#ErrorModal');
              mymodal.find('.modal-body').text("Pass not contain uppercase\n\n" +validationRules);
              mymodal.modal(newLocal);                
              return;
            } 
            else if (!specialCaseCheck.test(p))
            {
                if(p.includes("["))
                    return;
                if(p.includes("]"))
                    return;
                const newLocal = 'show';
                var mymodal = $('#ErrorModal');
                mymodal.find('.modal-body').text("Pass not contain special char\n\n" +validationRules);  
                mymodal.modal(newLocal);                
                return;
            } 
            else if (!numberCaseCheck.test(p))
            {
              const newLocal = 'show';
              var mymodal = $('#ErrorModal');
              mymodal.find('.modal-body').text("Pass not contain number\n\n" +validationRules);
              mymodal.modal(newLocal);
              return;
            }          
                       
          console.log(""+e+"\n"+p);
          }