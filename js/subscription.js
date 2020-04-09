

function validateSubInfo(e){
    e.preventDefault();
    var subEmail = document.getElementById("sub_email").value;
    var subSelectedCountry = document.getElementById("sub_country_option").value;
    console.log(subEmail);
    console.log(subSelectedCountry);
    

    // for checking email address
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    console.log(regExp);
    var isValid = true;
    // Check email address
    if (subEmail == "") { // if email is null
        document.getElementById("sub_email_error").innerHTML = "Email address is required.";
        isValid = false;
    } else if(!regExp.test(subEmail) ){ // if the email expression is not valid
        document.getElementById("sub_email_error").innerHTML = "Email expression is not valid.";
        isValid = false;
    } else { 
        document.getElementById("sub_email_error").innerHTML = "";                           
    } 

    // Check country option
    if (subSelectedCountry == "none") { // if subSelectedCountry is none
        document.getElementById("sub_country_error").innerHTML = "Choose one country.";
        isValid = false;
    } else { 
        document.getElementById("sub_country_error").innerHTML = "";                           
    }  

    if(isValid){
        document.getElementById("sub_form").submit();
    }
}