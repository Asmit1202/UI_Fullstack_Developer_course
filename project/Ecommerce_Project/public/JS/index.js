var loadselectedPage = (pagetype) => {
    var templateUrl = '';
    switch (pagetype) {
        case 'homePage':
            templateUrl = 'Templates/homepage.htm';
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
        $(".mainPageContainer").html(templtResponse.data);
    });


}

var loginModelInstance;
document.addEventListener('DOMContentLoaded', () => {
    loadselectedPage('homePage');
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