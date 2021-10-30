// Add your code here
function check(n,e,c,s)
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
