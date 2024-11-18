
var upperCase =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 65);
    return randomChar;
}
var lowerCase =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 97);
    return randomChar;
}
var number =()=>{
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 9) + 48);
    return randomChar;
}

var captchaUtilObj = {
    generateCaptcha: (imageId) => {
        var captcha = "";
        var arr = ["L","N","U"];
        for(var i = 0; i < 5 ; i++){
            var seq = Math.floor(Math.random()*arr.length);
            if(arr[seq]=="L"){
                captcha+= lowerCase()
            }
            else if (arr[seq]=="N"){
                captcha+= number()
            }
            else if(arr[seq]=="U"){
                captcha+= upperCase()
            } 
        }
        var canvas = document.querySelector("#captchaCanvas");
        var ctx = canvas.getContext("2d");
        ctx.font = "98px  Arial";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(captcha[0], Math.floor(Math.random() +  0), Math.floor(Math.random() + 90));
        ctx.fillText(captcha[1], Math.floor(Math.random() + 50), Math.floor(Math.random() + 90));
        ctx.fillText(captcha[2], Math.floor(Math.random() + 100), Math.floor(Math.random() + 90));
        ctx.fillText(captcha[3], Math.floor(Math.random() + 150), Math.floor(Math.random() + 90));
        ctx.fillText(captcha[4], Math.floor(Math.random() + 200), Math.floor(Math.random() + 90));
        
        $(imageId).attr("src", canvas.toDataURL("image/png"));

        console.log(captcha);
        return captcha;
    }
}


    
