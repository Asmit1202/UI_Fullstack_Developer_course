var loadRatingStar = (containerRef, rating) => {
    
    var fullStarCount = parseInt(rating);
    var halfStarCount = (rating % 1 == 0) ? 0 : 1;
    var emptyStarCount = 5 - (fullStarCount + halfStarCount);
    
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "ratingBlock");

    for (var i = 0; i< fullStarCount; i++) {
        var fullStarDiv = document.createElement("div");
        fullStarDiv.setAttribute("class", "fullStar");

        mainDiv.append(fullStarDiv);
    }

    if (halfStarCount) { 
        var halfStarDiv = document.createElement("div");
        halfStarDiv.setAttribute("class", "halfStar");

        mainDiv.append(halfStarDiv);
    }

    for (var i = 0; i< emptyStarCount; i++) {
        var emptyStarDiv = document.createElement("div");
        emptyStarDiv.setAttribute("class", "emptyStar");

        mainDiv.append(emptyStarDiv);
    }

    console.log(mainDiv);

    document.querySelector(containerRef).append(mainDiv);
}