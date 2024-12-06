// var sendMsg = () => {
//     var msg = $("userMsg").val();
//     addMsg(msg, 'send')
//     $("#userMsg").val('');
// }

var addMsg = (msg, type) => {
    var divTag = $("<div/>").text(msg);
    if (type == 'send') {
        divTag.addClass("sendMsg");
    } else {
        divTag.addClass("receiveMsg");
    }
    $(".msgContainer").append(divTag);
}