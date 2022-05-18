function validate(){
    var mail= document.signInForm.txtEmail.value;
    var pswd= document.signInForm.txtPswd.value;
    atSymbol= mail.indexOf("@");
    var dot = mail.indexOf(".");
    
    

    if((mail=="" || mail==null)){
        swal("Oops!", "Please enter Email address!", "error" );
        document.signInForm.txtEmail.focus();
        return false;
    }
    else if(atSymbol<1){
        swal("Oops!", "@ is required!", "error" );
        document.signInForm.txtEmail.focus();
        return false;
    }
    else if(dot<=atSymbol + 2){
        swal("Oops!", "dot is required!", "error" );
        document.signInForm.txtEmail.focus();
        return false;
    }
    else if((pswd=="" || pswd==null)){
        swal("Oops!", "Please enter required Password!", "error" );
        document.signInForm.txtPswd.focus();
        return false;
    }
    else if(pswd.length<6){
        swal("Oops!", "Password contain atleast 6 charecters!", "error" );
        document.signInForm.txtPswd.focus();
        return false;
    }
    else{
        swal("Good job!", "All is well!", "success");
        // document.signInForm.txtEmail.focus();
        return false;
    }   
}
function validateReg(){
    var name= document.signUpForm.txtName.value;
    var email= document.signUpForm.txtEmail.value;
    var pwd= document.signUpForm.txtPswd.value; 
    atSymbol= email.indexOf("@");
    var dot = email.indexOf(".");

    if((name==null || name=="")){
        swal("Oops!", "Please enter user Name!", "error" );
        document.signUpForm.txtName.focus();
        return false;
    }
    if((email=="" || email==null)){
        swal("Oops!", "Please enter Email address!", "error" );
        document.signUpForm.txtEmail.focus();
        return false;
    }
    else if(atSymbol<1){
        swal("Oops!", "@ is required!", "error" );
        document.signUpForm.txtEmail.focus();
        return false;
    }
    else if(dot<=atSymbol + 2){
        swal("Oops!", "dot is required!", "error" );
        document.signInForm.txtEmail.focus();
        return false;
    }
    else if((pwd=="" || pwd==null)){
        swal("Oops!", "Please enter required Password!", "error" );
        document.signInForm.txtPswd.focus();
        return false;
    }
    else if(pwd.length<6){
        swal("Oops!", "Password contain atleast 6 charecters!", "error" );
        document.signInForm.txtPswd.focus();
        return false;
    }
    else{
        swal("Good job!", "All is well!", "success");
        // document.signInForm.txtEmail.focus();
        return false;
    }   
}
function resetForm(){
    document.getElementById("signInFormId").reset();
    document.getElementById("signUpFormId").reset();
}