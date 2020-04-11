jQuery(document).ready(function(){
    document.getElementById("login_email_error").style.display = "none";
    document.getElementById("login_password_error").style.display = "none";
});

function loginValidation(e){
    e.preventDefault();
    var loginEmail = document.getElementById("loginemail").value;
    var loginPassword = document.getElementById("loginpassword").value;
    console.log(loginEmail);
    console.log(loginPassword);
    

    // for checking email address
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    console.log(regExp);
    var isValid = true;
    
    // Check email address
    if (loginEmail == "") { // if email is null
        document.getElementById("login_email_error").style.display = "inline-block";
        document.getElementById("login_email_error").innerHTML = " Email address is required.";
        isValid = false;
    } else if(!regExp.test(loginEmail)){ // if the email expression is not valid
        document.getElementById("login_email_error").style.display = "inline-block";
        document.getElementById("login_email_error").innerHTML = " Email expression is not valid.";
        isValid = false;
    } 
    else { 
        document.getElementById("login_email_error").innerHTML = "";
        document.getElementById("login_email_error").style.display = "none";                           
    } 

    // Check password
    if (loginPassword == "") { // if loginPassword is none
        document.getElementById("login_password_error").style.display = "inline-block";
        document.getElementById("login_password_error").innerHTML = " Password is required";
        isValid = false;
    } 
    else { 
        document.getElementById("login_password_error").style.display = "inline-block";
        document.getElementById("login_password_error").innerHTML = "";
        document.getElementById("login_password_error").style.display = "none";                           
    }  

    if(isValid){
        document.getElementById("loginaction").submit();
    }
}