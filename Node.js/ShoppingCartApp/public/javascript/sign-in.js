var updateSignupCaptchaText = () => {
    generatedCaptchaText = captchaUtilObj.generateCaptcha('#signupCaptchaImage');
    document.querySelector("#userSignupcaptchaText").value = "";
    document.querySelector("#signupcapErr").style.display = 'none';
}

var passwordMatching = () => {
    var userEnteredCaptchaText = $("#userSignupcaptchaText").val();
    // console.log(userEnteredCaptchaText)
    if (userEnteredCaptchaText == generatedCaptchaText) {
        document.querySelector("#signupcapErr").style.display = 'none';
        document.querySelector("#signupmsg").style.display = 'block';
        signUpModelInstance.hide();
        // /new/user/signup
        axios.post("/new/user/signup", signupUserDetails ).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
    }
    else {
        document.querySelector("#signupcapErr").style.display = 'block'
    }
}


var showPswdSignUp = (event) => 
    {        
        const showPassword =document.querySelector("#pswdSignUp");
        const passwordField =document.querySelector("#signup_accountPassword");

        showPassword.addEventListener("click",function()
        {
            if(passwordField.type === "password")
                {
                    showPassword.className="bi bi-eye-fill";
                    const type=passwordField.getAttribute("type") ==="password" ? "text" : "password";
                    passwordField.setAttribute("type",type);
                }
                else{
                     showPassword.className="bi bi-eye-slash-fill";
                     const type=passwordField.getAttribute("type") ==="password" ? "text" : "password";
                     passwordField.setAttribute("type",type); 

                }
        })
    }

var showPassSignUp = (event) => 
    {        
        const showPassword =document.querySelector("#repassSignUp");
        const passwordField =document.querySelector("#signup_accountPassword_reenter");

        showPassword.addEventListener("click",function()
        {
            if(passwordField.type === "password")
                {
                    showPassword.className="bi bi-eye-fill";
                    const type=passwordField.getAttribute("type") ==="password" ? "text" : "password";
                    passwordField.setAttribute("type",type);
                }
                else{
                     showPassword.className="bi bi-eye-slash-fill";
                     const type=passwordField.getAttribute("type") ==="password" ? "text" : "password";
                     passwordField.setAttribute("type",type); 

                }
        })
    }

var signupUserDetails = {};
// Password validation Part :
var newUserSignup = () => {
    
    // UserId Mandate :
    signupUserDetails.accountId = document.querySelector("#signup_accountId").value;
    signupUserDetails.mailId = document.querySelector("#signup_mailid").value;

    // Accsessing the password and re-enter Password :
    signupUserDetails.accountPassword = document.querySelector("#signup_accountPassword").value;
    var rePassword = document.querySelector("#signup_accountPassword_reenter").value;

    //Error message if Password and repassword not matched :
    var displayMessage = document.querySelector("#pwdNotMatching");

    if (signupUserDetails.accountId == '') {
        document.querySelector("#userIdEmpty").style.display = 'block';
        return;
    }
    else {
        document.querySelector("#userIdEmpty").style.display = 'none';
    }

    if (signupUserDetails.accountPassword == '') {
        document.querySelector("#pwdError").style.display = 'block';
        return;
    }
    else {
        document.querySelector("#pwdError").style.display = 'none';
    }

    if (signupUserDetails.accountPassword != rePassword) {
        displayMessage.innerHTML = "Password is not matching";
    }
   
        passwordMatching()
        
    
}