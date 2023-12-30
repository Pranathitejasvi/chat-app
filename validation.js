function printError(elemId, hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}

function validateSignUpInputCredentials(){
    console.log('mmmm')
  
    username = document.getElementById("name").value;
    email = document.getElementById("email_address").value;
    password = document.getElementById("password").value;
    confirm_password = document.getElementById("confirm_password").value;
    var nameErr=emailErr=passwordErr=confirm_password= true;

    if(username==""){
        printError("nameErr", "Please enter your Name");
    }
    else{
        var regex=/^[A-Za-z]+$/;
        if(regex.test(username)===false){
            printError("nameErr","Please enter valid Name");
        }
        else{
            printError("nameErr","");
            nameErr=false;
        }
    }
    if(email==""){
        printError("emailErr","Please enter your email");
    }
    else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","Please enter valid email address");
        }
        else{
            printError("emailErr","");
            emailErr=false;
        }
    }
    if(password==""){
        printError("passwordErr","Please enter password");
    }
    else{
        printError("passwordErr","");
        passwordErr=false;
    }
    if(confirm_password==""){
        printError("confirm_password","Please enter your password");
    }
    else{
        printError("confirm_password","");
        confirm_password=false;
    }
    if((nameErr||emailErr||passwordErr||confirm_password)==true){
        return false;
    }
    else{
        return true;
    }
}
function validateLoginInputCredentials(){
    
    
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;
    
    passwordErr=confirm_password= true;
  
    if(email==""){
        printError("emailErr","Please enter your email");
    }
    else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr","Please enter valid email address");
        }
        else{
            printError("emailErr","");
            emailErr=false;
        }
    }
    if(password==""){
        printError("passwordErr","Please enter password");
    }
    else{
        printError("passwordErr","");
        passwordErr=false;
    }
    
    if((emailErr||passwordErr)==true){
        return false;
    }
    else{
        return true;
    }
}