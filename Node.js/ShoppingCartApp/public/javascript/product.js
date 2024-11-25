var singleProductTemplate;

axios.get("Templates/singleProductTemplate.htm").then((responceTemplate) => {
    singleProductTemplate = Handlebars.compile(responceTemplate.data);
}).catch((err) => {
        
});
var getProductDetails = () => {
    var productDetails = [];

    axios.get('/load/productDetails').then((response) => {
        productDetails = response.data.pdata;
        productDetails.forEach((product, index) =>{
            product.discountPrice = product.price - (product.price * product.discountPercent) / 100;
            $("#productDetailsBlock").append(singleProductTemplate(product));

            var id = `#product_${product.id}`;
            loadRatingStar(id, product.rating);
        })
    })
        
    
}