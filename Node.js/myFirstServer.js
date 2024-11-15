var http = require("http");

var myServer = http.createServer((request, response) => {
    var userData = {
        username : "Asmit",
        age : 23,
        gender : "Male",
        location : "Mumbai"
    }
    response.writeHead(200, {
        'Content-Type':
            'Text/json'
    });
    response.end(JSON.stringify(userData));
});

myServer.listen(3108 , () => {
    console.log("server started listing at 3108");
});