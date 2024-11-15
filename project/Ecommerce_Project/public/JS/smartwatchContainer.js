var smartwatchData = [
    {
        imgUrl : "images/Apple_Watch_Hermes_Ultra_2.png",
        name : "Apple Watch Hermes Ultra 2",
        price : 1250,
        discountPercent : 5,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_Watch_Ultra_2.png",
        name : "Apple Watch Ultra 2",
        price : 799,
        discountPercent : 5,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_Watch_SE.png",
        name : "Apple Watch SE",
        price : 249,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4.5,
    },
    {
        imgUrl : "images/Apple_Watch_Series_10.png",
        name : "Apple Watch Series 10",
        price : 399,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4,
    },
    {
        imgUrl : "images/Apple_Watch_Hermes_Ultra_2.png",
        name : "Apple Watch Hermes Ultra 2",
        price : 1250,
        discountPercent : 5,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_Watch_Ultra_2.png",
        name : "Apple Watch Ultra 2",
        price : 799,
        discountPercent : 5,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_Watch_SE.png",
        name : "Apple Watch SE",
        price : 249,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4.5,
    },
    {
        imgUrl : "images/Apple_Watch_Series_10.png",
        name : "Apple Watch Series 10",
        price : 399,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4,
    },
    {
        imgUrl : "images/Apple_Watch_Hermes_Ultra_2.png",
        name : "Apple Watch Hermes Ultra 2",
        price : 1250,
        discountPercent : 5,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_Watch_Ultra_2.png",
        name : "Apple Watch Ultra 2",
        price : 799,
        discountPercent : 5,
        manufature : "Apple",
        rating : 5,
    },
    {
        imgUrl : "images/Apple_Watch_SE.png",
        name : "Apple Watch SE",
        price : 249,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4.5,
    },
    {
        imgUrl : "images/Apple_Watch_Series_10.png",
        name : "Apple Watch Series 10",
        price : 399,
        discountPercent : 5,
        manufature : "Apple",
        rating : 4,
    }
];

var loadsmartwatchDetails = (data, index) => {
    var mainLiTag = $("<li/>");
    $(".smartwatchContainer").append(mainLiTag);
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

    var id2 = "ratingBlock_" + index;
    var li5 = $("<li id='" + id2 + "' />").text("Rating: ");
    ulTag.append(li5);

    loadRatingStar("#" + id2, data.rating);

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0; i < smartwatchData.length; i++){
        loadsmartwatchDetails(smartwatchData[i], i);
    } 
});