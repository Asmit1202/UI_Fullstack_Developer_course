var productData = [];
var loadProductDetails = (data, index) => {
    var mainLiTag = $("<li/>");
    $(".productDetailsContainer").append(mainLiTag);
    var ulTag = $('<ul/>').addClass("singleProduct");
    mainLiTag.append(ulTag);
    var li1 = $("<li/>");
    var id1 = "prdImg_" + index;
    var imgtag = $("<img id='" + id1 + "' />").attr("src", data.imgUrl);
    li1.append(imgtag);
    ulTag.append(li1);
    var li2 = $("<li/>").text("Product name: " + data.name);
    ulTag.append(li2);
    var li3 = $("<li/>").text("Price: ");
    ulTag.append(li3);
    var discountPrice = data.price - (data.price * data.discountPercent) /100 ;
    var span1 = $("<span/>").addClass("discountPrice").text(discountPrice + "$");
    var span2 = $("<span/>").addClass("actualPrice").text(data.price + "$");
    li3.append(span1);
    li3.append(span2);
    var li4 = $("<li/>").text("Manufaturer: " + data.manufature);
    ulTag.append(li4);

    var id2 = "ratingBlock_" + index;
    var li5 = $("<li id='" + id2 + "' />").text("Rating: ");
    ulTag.append(li5);

    loadRatingStar("#" + id2, data.rating);

}
document.addEventListener("DOMContentLoaded", () => {

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
