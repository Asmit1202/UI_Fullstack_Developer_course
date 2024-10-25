var productData = [];
var productTemplate ;
var loadProductDetails = (data, index) => {

    data.id = 'rating_block_' + index;
    data.discountPrice = data.price - (data.price * data.discountPercent) /100 ;
    $(".productDetailsContainer").append(productTemplate(data));
    loadRatingStar("#" + data.id + data.rating);
    
}
document.addEventListener("DOMContentLoaded", () => {

    productTemplate = handlerbars.compile($("#productTemplate").html());

    var dataUrl = "/get/productDeatils";
    axios.get(dataUrl)
        .then(function (response) {
            console.log(response);
            productData = response.data.pData;

            for (var i = 0; i < productData.length; i++){
                loadProductDetails(productData[i], i);
            }        

        }).catch(function (error) {
            console.log(error);
        });
})
