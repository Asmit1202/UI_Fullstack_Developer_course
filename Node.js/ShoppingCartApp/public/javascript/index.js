var loadselectedPage = (pagetype) => {
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
        case 'kids':
            templateUrl = 'Templates/kids.htm';
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
document.addEventListener('DOMContentLoaded', () => {
    loadselectedPage('homePage');

    loginModelInstance = new bootstrap.Modal('#exampleModal', {});
});

var MensPage = () => {
    loadselectedPage('mens');
}

var WomensPage = () => {
    loadselectedPage('womens');
}

var KidsPage = () => {
    loadselectedPage('kids');
}

