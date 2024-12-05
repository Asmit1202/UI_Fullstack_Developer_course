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

var getPriceValue = () => {
    var priceValue = document.querySelector("#priceRange").value;
    document.querySelector(".priceRangeValue").innerText = priceValue;
}

var applyFilter = () => {
    var filterObj = {};
    filterObj.priceRange = parseInt($("#priceRange").val());
    filterObj.selectedCategory = [];
    filterObj.selectedTypes = [];
    filterObj.selectedBrand = [];
    filterObj.selectedDiscount = [];

    var selectedCategorys = document.querySelectorAll("[id^=categories_]:checked")
    selectedCategorys.forEach((element) => {
        filterObj.selectedCategory.push(element.value)
    })
    var selectedTypes = document.querySelectorAll("[id^=Type_]:checked")
    selectedTypes.forEach((element) => {
        filterObj.selectedTypes.push(element.value)
    })
    var selectedBrands = document.querySelectorAll("[id^=brand_]:checked")
    selectedBrands.forEach((element) => {
        filterObj.selectedBrand.push(element.value)
    })
    var selectedDiscounts = document.querySelectorAll("[id^=discount_]:checked")
    selectedDiscounts.forEach((element) => {
        parseInt(filterObj.selectedDiscount.push(element.value))
    })
    getProductDetails(filterObj);

}

var viewDeatiledPage = (productId) => {
    loadselectedPage('detailedPage', productId);
}