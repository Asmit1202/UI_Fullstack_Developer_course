var themeName;

var applyTheme = (themeName) => {
    document.querySelector("body").style.background = themeName;
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("userSelectedTheme") != null){
        applyTheme(localStorage.getItem("userSelectedTheme"));
    }
    
    if (localStorage.getItem("userPrefData") != null){
        prefilAccountDetails();
    }
});

var getTheme = () => {
    var themeName = document.querySelector("#themeName").value;
    localStorage.setItem("userSelectedTheme", themeName);
    applyTheme(themeName);

}

var loginDetails = () => {
    var userData = {};
    userData.accountId = document.querySelector("#userId").value;
    userData.accountPwd = document.querySelector("#userPwd").value;


    if (document.querySelector("#userOpt").checked){
        localStorage.setItem("userPrefData", JSON.stringify(userData));
    } else {
        localStorage.setItem("userPrefData", null);
    }
}

var prefilAccountDetails = () => {
    var userData = localStorage.getItem("userPrefData");
    userData = JSON.parse(userData);
    document.querySelector("#userId").value = userData.accountId;
    document.querySelector("#userPwd").value = userData.accountPwd;

    document.querySelector("#userOpt").checked = true;
}