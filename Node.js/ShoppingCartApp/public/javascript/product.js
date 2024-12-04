var singleProductTemplate;

axios.get("Templates/singleProductTemplate.htm").then((responceTemplate) => {
    singleProductTemplate = Handlebars.compile(responceTemplate.data);
}).catch((err) => {
        
});
var getProductDetails = (filterObj={}) => {
    $("#productDetailsBlock").html(""); // Clearing the container before appending new ones.
    var productDetails = [];
    
    axios.get('/load/productDetails', {params: filterObj}).then((response) => {
        productDetails = response.data.pdata;

        productDetails.forEach((product, index) =>{
            product.description = product.description.substr(0, 100) + "...";
            product.discountPrice = product.price - (product.price * product.discountPercent) / 100;
            $("#productDetailsBlock").append(singleProductTemplate(product));

            var id = `#product_${product.id}`;
            loadRatingStar(id, product.rating);
        });
    });  
}

var mensProductDetails = () => {
    var productDetails = [];
    
    axios.get('/load/mensProductDetails').then((response) => {
        productDetails = response.data.pdata;

        productDetails.forEach((product, index) =>{
            product.description = product.description.substr(0, 100) + "...";
            product.discountPrice = product.price - (product.price * product.discountPercent) / 100;
            $("#productDetailsBlock").append(singleProductTemplate(product));

            var id = `#product_${product.id}`;
            loadRatingStar(id, product.rating);
        });
    });
}

var womensProductDetails = () => {
    var productDetails = [];

    axios.get('/load/womensProductDetails').then((response) => {
        productDetails = response.data.pdata;

        productDetails.forEach((product, index) =>{
            product.description = product.description.substr(0, 100) + "...";
            product.discountPrice = product.price - (product.price * product.discountPercent) / 100;
            $("#productDetailsBlock").append(singleProductTemplate(product));

            var id = `#product_${product.id}`;
            loadRatingStar(id, product.rating);
        });
    });
}

var getPriceValue = () => {
    var priceValue = document.querySelector("#priceRange").value;
    document.querySelector(".priceRangeValue").innerText = priceValue;
}

var applyFilter = () => {
    var filterObj = {};
    filterObj.priceRange = parseInt($("#priceRange").val());
    filterObj.selectedCategory = [];

    var selectedCategorys = document.querySelectorAll("[id^=categories_]:checked")
    selectedCategorys.forEach((element) => {
        filterObj.selectedCategory.push(element.value)
    })
    getProductDetails(filterObj);
    console.log(filterObj);

}