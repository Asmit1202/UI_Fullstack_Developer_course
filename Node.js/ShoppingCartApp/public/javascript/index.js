var loadselectedPage = (pagetype) => {
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
        case 'mens':
            templateUrl = 'Templates/mens.htm';
            break;
        case 'womens':
            templateUrl = 'Templates/womens.htm';
            break;
    }

    axios.get(templateUrl).then((templtResponse) => {
        console.log(templtResponse);
        $("main").html(templtResponse.data);

        if (pagetype == 'product'){
            getProductDetails();
        }

        loginModelInstance.hide();
    });


}

var loginModelInstance;
var loginOutModelInstance;
document.addEventListener('DOMContentLoaded', () => {
    loadselectedPage('homePage');

    loginModelInstance = new bootstrap.Modal('#exampleModal', {});
    loginOutModelInstance = new bootstrap.Modal('#logOutPopup', {});

});

var MensPage = () => {
    loadselectedPage('mens');
}

var WomensPage = () => {
    loadselectedPage('womens');
}

