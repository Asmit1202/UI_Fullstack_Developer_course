var mobileData = [
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
    }
];

var loadmobileDetails = (data, index) => {
    var mainLiTag = $("<li/>");
    $(".mobileContainer").append(mainLiTag);
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

    var id2 = "ratingBlock6_" + index;
    var li5 = $("<li id='" + id2 + "' />").text("Rating: ");
    ulTag.append(li5);

    loadRatingStar("#" + id2, data.rating);

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0; i < mobileData.length; i++){
        loadmobileDetails(mobileData[i], i);
    } 
});

