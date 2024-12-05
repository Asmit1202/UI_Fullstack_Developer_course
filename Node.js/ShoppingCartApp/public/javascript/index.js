var loadselectedPage = (pagetype, pid) => {
    if (pagetype == 'homePage'){
        $("#loginBtn").show();
        $("#sign-inBtn").show();
        $("#loginoutBtn").hide();
    }
    else{        
        $("#loginBtn").hide();
        $("#sign-inBtn").hide();
        $("#loginoutBtn").show();
    }

    var templateUrl = '';
    switch (pagetype) {
        case 'homePage':
            templateUrl = 'Templates/homepage.htm';
            break;
        case 'product':
            templateUrl = 'Templates/product.htm';
            break;
        case 'detailedPage':
            templateUrl = 'Templates/productDetailedPage.htm';
            break;
    }

    axios.get(templateUrl).then((templtResponse) => {
        // console.log(templtResponse);
        $("main").html(templtResponse.data);

        if (pagetype == 'product' || pagetype == 'detailedPage'){
            var data = {};
            if (pid){
                data.id = pid;
            }
            getProductDetails(data);
        }

        loginModelInstance.hide();
    });


}

var loginModelInstance;
var loginOutModelInstance;
var signUpModelInstance;
document.addEventListener('DOMContentLoaded', () => {
    loadselectedPage('homePage');

    loginModelInstance = new bootstrap.Modal('#exampleModal', {});
    loginOutModelInstance = new bootstrap.Modal('#logOutPopup', {});
    signUpModelInstance = new bootstrap.Modal('#newSignupModel', {});

});

var MensPage = () => {
    loadselectedPage('mens');
}

var WomensPage = () => {
    loadselectedPage('womens');
}

