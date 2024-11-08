var count = 0;
var addBlockContainer = () => {
    count++;
    var divTag = document.createElement("div");
    divTag.innerText = `BLOCK ${count}`;
    document.querySelector(".container").append(divTag);

    if (count == 10){
        clearInterval(jobInterval);
    }

    // if (count == 10){
    //     myWorker.terminate();
    // }
}

document.addEventListener("DOMContentLoaded", () => {
    jobInterval = setInterval(() => {
        addBlockContainer();
    }, 1000);

    showDate();
});

var showDate = () => {
    var date = new Date();
    
}

var myWorker = new Worker("worker/dateworker.js");
myWorker.onmessage = (event) => {
    document.querySelector(".dateContainer").innerText = event.data;
}