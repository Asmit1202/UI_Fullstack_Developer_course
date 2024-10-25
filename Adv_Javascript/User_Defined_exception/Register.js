var userData = {};
// var registerUser = () => {
//     userData.name = $("#sname").val();
//     userData.name = userData.name.trim();
//     if (userData.name == ""){
//         $(".nameErr").show();
//         return;
//     }
//     else{
//         $(".nameErr").hide();
//     }
//     userData.age = $("#sage").val();
//     userData.age = parseInt(userData.age);
//     if(userData.age < 21){
//         $(".ageErr").show();
//         return;
//     }
//     else{
//         $(".ageErr").hide();
//     }
//     userData.gender = $("input[name=gender]:checked").val();
//     console.log(userData);

//     $("#msgBlock").text("User Registered Sucessfully!");

// }

var registerUser = () => {
    userData.name = $("#sname").val();
    userData.name = userData.name.trim();
    try{
        if (userData.name == ""){
            throw "nameErr";
        }
        else{
            $(".nameErr").hide();
        }  
        userData.age = $("#sage").val();
        userData.age = parseInt(userData.age);
        if(userData.age < 21){
            throw "ageErr";
        }
        else{
            $(".ageErr").hide();
        } 

        userData.gender = $("input[name=gender]:checked").val();
        console.log(userData);

        $("#msgBlock").text("User Registered Sucessfully!");

    }
    catch(error){
        console.log(error);
        if(error == "nameErr"){
            $(".nameErr").show();
        }
        else{
            $(".ageErr").show();
        }
    }

}