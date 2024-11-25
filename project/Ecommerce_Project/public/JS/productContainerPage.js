var loadselectedPage = (pagetype) => {
    var templateUrl = '';
    switch (pagetype) {
        case 'product':
            templateUrl = 'Templates/product.htm';
            break;
        case 'login':
            templateUrl = 'Templates/login.htm';
            break;
        case 'about':
            templateUrl = 'Templates/about.htm';
            break;
        case 'contact':
            templateUrl = 'Templates/contact.htm';
            break;
    }

    axios.get(templateUrl).then((templtResponse) => {
        console.log(templtResponse);
        $(".mainProductContainer").html(templtResponse.data);
    });


}

var loginModelInstance;
document.addEventListener('DOMContentLoaded', () => {
    loadselectedPage('product');
});

var loginContainerPage = () => {
    loadselectedPage('login');
}

var aboutContainerPage = () => {
    loadselectedPage('about');
}

var contactContainerPage = () => {
    loadselectedPage('contact');
}