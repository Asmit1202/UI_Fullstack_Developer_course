var frgtpswd = () => {
    var userEnteredCaptchaText = $("#userFrgtPwdCaptchaText").val();
    if (userEnteredCaptchaText == generatedCaptchaText) {
        document.querySelector("#frgtpwdmsg").style.display = 'block';
    } else {
        document.querySelector("#frgtpwdcapErr").style.display = 'block';
    }
}

var updateFrgtpwdCaptchaText = () => {
    generatedCaptchaText = captchaUtilObj.generateCaptcha('#frgPwdCaptchaImage');
    document.querySelector("#userFrgtPwdCaptchaText").value = "";
    document.querySelector("#frgtpwdcapErr").style.display = 'none';
}