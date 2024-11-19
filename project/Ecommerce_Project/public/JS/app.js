var projectData = {
        logoUrl : "images/A_logo-removebg-preview.png",
        about_info : "E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet.",
        contact_address: "Patil Niwas, Mulund-East, Mumbai-400081.",
        contact_mail: "asmitpatil2001@gmail.com",
        contact_phone: " +91 8454838345 / +91 9022028450",
        socialImgUrl: "images/social_media_icon.jpg"
};

var loadHeader = (data) => {
    var a5tag = $("<a/>").attr("href", "index.html");
    $(".header").append(a5tag);
    var imgTag1 = $("<img/>").attr("src", projectData.logoUrl).addClass("logo").attr("alt", "logo").attr("href", "login.html");
    a5tag.append(imgTag1);
    console.log(imgTag1);
    var ulTag = $("<ul/>").addClass("nav");
    $(".header").append(ulTag);
    var litag =$("<li/>");
    var li1tag =$("<li/>");
    var li2tag =$("<li/>");
    var li3tag =$("<li/>");
    var li4tag =$("<li/>");
    ulTag.append(litag);
    ulTag.append(li1tag);
    ulTag.append(li2tag);
    ulTag.append(li3tag);
    ulTag.append(li4tag);
    var atag = $("<a/>").text("Home").attr("href", "index.html");
    litag.append(atag);
    var a1tag = $("<a/>").text("Login").attr("href", "login.html");
    li1tag.append(a1tag);
    var a2tag = $("<a/>").text("Products").attr("href", "product.html").attr("target", "_blank");
    li2tag.append(a2tag);
    var a3tag = $("<a/>").text("About Us").attr("href", "about.html");
    li3tag.append(a3tag);
    var a4tag = $("<a/>").text("Contact us").attr("href", "contact.html");
    li4tag.append(a4tag);
    console.log(ulTag);
}

var loadFooter = (data) => {
    var div1tag = $("<div/>").addClass("ft_about");
    $(".footer").append(div1tag);
    var div2tag = $("<div/>").addClass("ft_prdt");
    $(".footer").append(div2tag);
    var div3tag = $("<div/>").addClass("ft_contact");
    $(".footer").append(div3tag);
    var div4tag = $("<div/>").addClass("ft_follow");
    $(".footer").append(div4tag);
    var br1tag = $("<br/>");
    $(".footer").append(br1tag);
    var div5tag = $("<div/>").addClass("ft_copyright").text("@ Copyright 2024 by Asmit Patil");
    $(".footer").append(div5tag);

    var imgTag1 = $("<img/>").attr("src", projectData.logoUrl).attr("alt", "logo").attr("href", "login.html");
    div1tag.append(imgTag1);
    var p1tag = $("<p/>").text("E-commerce (electronic commerce) is the activity of electronically buying or selling products on online services or over the Internet.");
    div1tag.append(p1tag);

    var ul1tag = $("<ul/>");
    div2tag.append(ul1tag);
    var li1tag = $("<li/>").addClass("ft_title").text("Products");
    ul1tag.append(li1tag);
    var li2tag = $("<li/>").text("Mobiles");
    ul1tag.append(li2tag);
    var li3tag = $("<li/>").text("Laptops");
    ul1tag.append(li3tag);
    var li4tag = $("<li/>").text("Cameras");
    ul1tag.append(li4tag);
    var li5tag = $("<li/>").text("Books");
    ul1tag.append(li5tag);

    var ul2tag = $("<ul/>");
    div3tag.append(ul2tag);
    var li6tag = $("<li/>").addClass("ft_title").text("Contact");
    ul2tag.append(li6tag);
    var li7tag = $("<li/>").text("Patil Niwas, Mulund-East, Mumbai-400081.");
    ul2tag.append(li7tag);
    var li8tag = $("<li/>").text("asmitpatil2001@gmail.com");
    ul2tag.append(li8tag);
    var li9tag = $("<li/>").text("+91 8454838345 / +91 9022028450");
    ul2tag.append(li9tag);

    var ul3tag = $("<ul/>");
    div4tag.append(ul3tag);
    var li10tag = $("<li/>").addClass("ft_title").text("Follow");
    ul3tag.append(li10tag);
    var li11tag = $("<li/>").addClass("socialContainer");
    ul3tag.append(li11tag);
    var span1tag = $("<span/>").addClass("socialImag1").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span1tag);
    var span2tag = $("<span/>").addClass("socialImag2").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span2tag);
    var span3tag = $("<span/>").addClass("socialImag3").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span3tag);
    var span4tag = $("<span/>").addClass("socialImag4").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span4tag);
    var span5tag = $("<span/>").addClass("socialImag5").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span5tag);
    var span6tag = $("<span/>").addClass("socialImag6").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span6tag);
    var span7tag = $("<span/>").addClass("socialImag7").attr("alt", "social_meadia").attr("href", "index.html");
    li11tag.append(span7tag);
    var span8tag = $("<span/>").addClass("socialImag8").attr("alt", "social_meadia").attr("href", "index.html");;
    li11tag.append(span8tag);
}


var SignInPage = () => {

    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".sign-in-page").style.display = "block";
    document.querySelector(".Fg_password").style.display = "none";
}
var ForgetPassword = () => {

    document.querySelector(".login-page").style.display = "none";
    document.querySelector(".sign-in-page").style.display = "none";
    document.querySelector(".Fg_password").style.display = "block";
}
var loginPage = () => {
    document.querySelector(".login-page").style.display = "block";
    document.querySelector(".sign-in-page").style.display = "none";
    document.querySelector(".Fg_password").style.display = "none";
}

var loginDetails = () => {
    var userData = {};
    userData.username = document.querySelector("#lg-usrname").value;
    userData.userPwd = document.querySelector("#lg-passWd").value;


    if (document.querySelector("#lg-userOpt").checked){
        localStorage.setItem("userPrefData", JSON.stringify(userData));
    } else {
        localStorage.setItem("userPrefData", null);
    }
}

var registerUser = () => {
    var userData = {};
    userData.username = document.querySelector("#sg-usrname").value;
    userData.username = userData.username.trim();
    userData.name = document.querySelector("#sg-name").value;
    userData.name = userData.name.trim();
    userData.userPwd = document.querySelector("#sg-passWd1").value;
    userData.cpassword = document.querySelector("#sg-passWd2").value;
    userData.mail = document.querySelector("#sg-mail").value;

    if (userData.username == ""){ 
        document.querySelector(".idErr").style.display = "block";
    }else{      
        document.querySelector(".idErr").style.display = "none";
    }
    if (userData.name == ""){ 
        document.querySelector(".nameErr").style.display = "block";
    }else{      
        document.querySelector(".nameErr").style.display = "none";
    }
    if (userData.cpassword != userData.userPwd){
        document.querySelecor(".cpasswordErr").style.display = "block";
    }
    else{
        document.querySelector(".cpasswordErr").style.display = "none";
    }
    
    if (document.querySelector("#sg-userOpt").checked){
        localStorage.setItem("userPrefData", JSON.stringify(userData));
    } else {
        localStorage.setItem("userPrefData", null);
    }

    loginPage();
} 

var showPassWord = (click) => {
    var userData = {};
    if(click){
        userData.userPwd1 = $("#lg-passWd").attr("type", "text");
    }
    else{
        userData.userPwd1 = $("#lg-passWd").attr("type", "password");
    }   
}
var showPassWord1 = (click) => {
    var userData = {};
    if(click){
        userData.userPwd2 = $("#sg-passWd1").attr("type", "text");
    }
    else{
        userData.userPwd2 = $("#sg-passWd1").attr("type", "password");
    }   
}
var showPassWord2 = (click) => {
    var userData = {};
    if(click){
        userData.userPwd3 = $("#sg-passWd2").attr("type", "text");
    }
    else{
        userData.userPwd3 = $("#sg-passWd2").attr("type", "password");
    }   
}

var switchMenuBar = () => {
    $(".nav").toggle();
}


var prefilAccountDetails = () => {
    var userData = localStorage.getItem("userPrefData");
    userData = JSON.parse(userData);
    document.querySelector("#lg-usrname").value = userData.username;
    document.querySelector("#lg-passWd").value = userData.userPwd;
    document.querySelector("#sg-usrname").value = userData.username;
    document.querySelector("#sg-passWd1").value = userData.userPwd;
    document.querySelector("#sg-name").value = userData.name;
    document.querySelector("#sg-passWd2").value = userData.cpassword;
    document.querySelector("#sg-mail").value = userData.mail;

    document.querySelector("#sg-userOpt").checked = true;
    document.querySelector("#lg-userOpt").checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    if (localStorage.getItem("userPrefData") != null){
        prefilAccountDetails();
    }
});

