const { error } = require("console");
var http = require("http");
var fs = require("fs");

var myServer = http.createServer((request, response) =>{
    response.writeHead(200, {
        'Content-Type':
            'Text/plan'
    });
    
    fs.readFile("sample.txt", (error, fileData) => {
        if (error){
            response.end("File cannot be read and it error")
        }
        else{
            response.end(fileData);
        }
    });

    fs.writeFile("abc.txt","Good Morning, everyone...", (errror) =>{
        response.end("its been written");
    });

    fs.appendFile("abc.txt","Good Morning, everyone...", (errror) =>{
        response.end("its been written");
    });
});

myServer.listen(3108, () => {
    console.log("server is listening at 3108");
});