var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var port = 8080;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



// Add your code here
function Validate(e,p,rp,firstName,lastName)
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
              var specialCaseCheck = /^(?=.*[!@#\$%\^&\*()\-_\=\+\\\|\[\]\{\};:/\?\.\>\<\"])/;
            if(! re.test(String(e).toLowerCase()))
            {
                
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text('Please enter a valid email\n');
                mymodal.modal(newLocal);
                console.log("8\n");             
                return false;
            }
            else if (String(p).length<6)
            {
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text("Pass should contain at least 6 letters\n\n"+validationRules);
                mymodal.modal(newLocal);
                console.log("7\n"); 
                return false;
            }
            else if (!lowerCaseCheck.test(p))
            {
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text("Pass not contain lowercase\n\n"+validationRules);
                mymodal.modal(newLocal);
                console.log("6\n"); 
                return false;
            }  
            else if (!UpperCaseCheck.test(p))
            {
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text("Pass not contain uppercase\n\n"+validationRules);
                mymodal.modal(newLocal);
                console.log("5\n"); 
                return false;
            } 
            else if (!specialCaseCheck.test(p))
            {
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text("Pass not contain special char\n\n"+validationRules);
                mymodal.modal(newLocal);
                console.log("4\n");                 
                return false;
            } 
            else if (!numberCaseCheck.test(p))
            {
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text("Pass not contain number\n\n"+validationRules);
                mymodal.modal(newLocal);
                console.log("3\n");             
                return false;
            }   
            else if (!(p==rp))
            {
                const newLocal = 'show';
                var mymodal = $('#Modal2');
                mymodal.find('.modal-body').text("Confirmation faild, sorry try again !\n");
                mymodal.modal(newLocal); 
                console.log("2\n");            
                return false;
            }
            else {
                return true;
            } 
          }
