var generatedCaptchaText = '';
var readUserDetails = () => {
    var userDetails = {};
    userDetails.accountId = $("#accountId").val();
    userDetails.accountPassword = $("#accountPassword").val();
    rememberCredentials(userDetails); // calling the remember my credetial function

    //validating Password Length
    if(userDetails.accountPassword.length != 8) {
        document.querySelector("#signinpwdErr").style.display = 'block'
    }
    // validating CaptchaText
    var userEnteredCaptchaText = $("#userEntrndCaptchaText").val();
    if (userEnteredCaptchaText == generatedCaptchaText) {
        document.querySelector("#signincapErr").style.display = 'none';
        validateUserCredentials(userDetails);
    } else {
        document.querySelector("#signincapErr").style.display = 'block'
    }

    // validateUserCredentials(userDetails); // it has to be uncommented later
}

var validateUserCredentials = (userDetails) => {

    // // http://localhost:3000/validate/userCredentials
    // axios.get('/validate/userCredentials', {params: userDetails}).then((response) => {
    //     if (response.data.msg == 'Invalid') {
    //         $("#errMsgBlock").text("Invalid Credentials....");
    //     } else {
    //         loadselectedPage('product');
    //     }
    // }).catch((error) => {
    //     console.log("error");
    // }) 

    axios.post('/validate/userCredentials', userDetails).then((response) => {
        if (response.data.msg == 'Invalid') {
            $("#errMsgBlock").text("Invalid Credentials....");
        } else {
            loadselectedPage('product');
        }
    }).catch((err) => {
        console.log("error");
    });;
}

var updateCaptchaText = () => {
    generatedCaptchaText = captchaUtilObj.generateCaptcha('#captchaImage');
    document.querySelector("#userEntrndCaptchaText").value = "";
    document.querySelector("#signincapErr").style.display = 'none';
}


var rememberCredentials = (userDetails) => {
    var isCheckBoxChecked = document.querySelector("#check").checked;
    if (isCheckBoxChecked) {
        localStorage.setItem("userData",JSON.stringify(userDetails));
    } else {
        localStorage.removeItem("userData");
    }
}

var ChangeType = (event) => {
    if (event.target.checked) {
        document.querySelector("#accountPassword").setAttribute("type", "text");
    }
    else {
        document.querySelector("#accountPassword").setAttribute("type", "password");
    }
}

var priFillData = () =>  {
    document.querySelector("#check").checked = true;
    var credentials = localStorage.getItem("userData");
    
    credentials = JSON.parse(credentials);
    $("#accountId").val(credentials.accountId);
    $("#accountPassword").val(credentials.accountPassword);
}


var showPassLogin = (event) => {        
    const showPassword =document.querySelector("#passLogin");
    const passwordField =document.querySelector("#accountPassword");

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

var logoutUser = () => {
        
    loginOutModelInstance.hide();
    loadselectedPage('homePage');
    // axios.post('/logout').then(() => {});
}



document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("userData")!= null){
        priFillData();       
    }
    
});