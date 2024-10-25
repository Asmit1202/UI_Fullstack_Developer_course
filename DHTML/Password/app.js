var userAccountDetails = {
    
    registerUser() {
        this.username = document.querySelector("#userId").value;
        this.username = this.username.trim();
        this.password = document.querySelector("#userPassWord").value;
        var cpassword = document.querySelector("#confirmPassWord").value;
        this.mail = document.querySelector("#userMail").value;

        if (this.username == ""){ 
            document.querySelector(".idErr").style.display = "block";
        }else{      
            document.querySelector(".idErr").style.display = "none";
        }
        // document.querySelector(".idErr").style.display = (this.username == "") ? "block" : "none";

        document.querySelector(".msg").style.display = "block";
    } 
}