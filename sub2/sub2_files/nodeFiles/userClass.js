// module.exports = function(_name,_password){
//     this.name = _name;
//     this.password = _password;
// }

class User{
    constructor(_name,_password){
        this.name = _name;
        this.password = _password;
    }

    changePass(_pass){
        if(password!=_pass)
            password = _pass;
        else 
            console.log("this is the same password ama shel fishman");
    }
    showDetails()
    {
        console.log('name = %s and password is %d',this.name,this.password);
    }
}


module.exports = User;