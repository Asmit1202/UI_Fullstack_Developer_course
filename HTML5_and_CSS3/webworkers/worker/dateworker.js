var getCustomdate = () => {
    var cdate = new Date();
    var customDate = `${cdate.getDate()} / ${cdate.getMonth()} / ${cdate.getFullYear()}  ${cdate.getHours()} : ${cdate.getMinutes()} : ${cdate.getSeconds()}`; 

    // console.log(customDate);
    postMessage(customDate);
}

setInterval(() => {
    getCustomdate();
}, 1000);