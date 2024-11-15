
var productData2 = [
    {
        imgUrl : "images/Mshoe1.jpg",
        name : "Bacca Bucci Men's Sport Fusion Fashion Sneaker",
        price : 30,
        discountPercent : 15,
        manufature : "Bacca Bucci",
        rating : 5,
    },
    {
        imgUrl : "images/Mshoe2.jpg",
        name : "Bacca Bucci Men's Energy Afterburn Disruptor",
        price : 30,
        discountPercent : 10,
        manufature : "Bacca Bucci",
        rating : 4,
    },
    {
        imgUrl : "images/Mshoe3.jpg",
        name : "Bata 8216 Boss-Grip Black Derby Shoes",
        price : 15,
        discountPercent : 8,
        manufature : "Bata",
        rating : 4,
    },
    {
        imgUrl : "images/Mshoe4.jpg",
        name : "CampusMens Oxyfit (N) Walking Shoes",
        price : 12,
        discountPercent : 10,
        manufature : "Campus",
        rating : 4,
    },
];
var loadProductDetails2 = (data, index) => {
    var mainLiTag = $("<li/>");
    $(".productDetailsContainer2").append(mainLiTag);
    var ulTag = $("<ul/>").addClass("singleProduct");
    mainLiTag.append(ulTag);

    var li1 = $("<li/>");
    ulTag.append(li1);

    var id1 = "prdImg_" + index;
    var imgtag = $("<img id='" + id1 + "' />").attr("src", data.imgUrl).addClass("prdImg1");
    
    li1.append(imgtag);

    var li2 = $("<li/>").text(data.name);
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

    var id2 = "ratingBlock2_" + index;
    var li5 = $("<li id='" + id2 + "' />").text("Rating: ");
    ulTag.append(li5);

    loadRatingStar("#" + id2, data.rating);

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0; i < productData2.length; i++){
        loadProductDetails2(productData2[i], i);
    } 
});