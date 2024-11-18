var productData4 = [
    {
        imgUrl : "images/Iphone16Pro.png",
        name : "Iphone 16 Pro",
        price : 999,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4.5,
    },
    {
        imgUrl : "images/Iphone16.png",
        name : "Iphone 16",
        price : 799,
        discountPercent : 10,
        manufature : "Apple",
        rating : 4,
    },
    {
        imgUrl : "images/Iphone15.png",
        name : "Iphone 15",
        price : 699,
        discountPercent : 20,
        manufature : "Apple",
        rating : 4,
    },
    {
        imgUrl : "images/Iphone14.png",
        name : "Iphone 14",
        price : 599,
        discountPercent : 30,
        manufature : "Apple",
        rating : 3,
    },
    {
        imgUrl : "images/Apple_2024_MacBook_Air13.jpg",
        name : "Apple 2024 Mac Book Air 13",
        price : 1840,
        discountPercent : 10,
        manufature : "Apple",
        rating : 4,
    },
    {
        imgUrl : "images/Apple_2023_MacBook_Pro.jpg",
        name : "Apple 2023 Mac Book Pro",
        price : 4740,
        discountPercent : 8,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_2024_MacBook_Air13.jpg",
        name : "Apple 2024 Mac Book Air 15",
        price : 2075,
        discountPercent : 12,
        manufature : "Apple",
        rating : 4.5,
    },
    {
        imgUrl : "images/Apple_MacBook_Air.jpg",
        name : "Apple Mac Book Air",
        price : 1105,
        discountPercent : 10,
        manufature : "Apple",
        rating : 4,
    },
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
    }
];

var loadProductDetails3 = (data, index) => {
    var mainLiTag = $("<li/>");
    $(".productDetailsContainer3").append(mainLiTag);
    var ulTag = $("<ul/>").addClass("singleProduct");
    mainLiTag.append(ulTag);

    var li1 = $("<li/>");
    ulTag.append(li1);

    var id1 = "prdImg_" + index;
    var class1 = "prdImg" + index;
    var imgtag = $("<img id='" + id1 + "' />").attr("src", data.imgUrl).addClass(class1);
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

    var id2 = "ratingBlock4_" + index;
    var li5 = $("<li id='" + id2 + "' />").text("Rating: ");
    ulTag.append(li5);

    loadRatingStar("#" + id2, data.rating);

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0; i < productData4.length; i++){
        loadProductDetails3(productData4[i], i);
    } 
});




