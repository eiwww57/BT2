const http = require("http");
var fs = require('fs');
const hostname = "localhost";
const port = process.env.PORT || 3000;
var solan_home = 0;
var solan_about = 0;
const server = http.createServer((req, res) => {
res.setHeader("Content-Type","text/html");
res.statusCode = 200;
switch (req.url){
    case "/home":
        res.writeHead(200);
    var data =fs.readFileSync('./home.html');
   
    res.end(data.toString());
 
    console.log("--- request home page !!!", solan_home++);
        break;

    case "/product":
        res.writeHead(200);
        var product =fs.readFileSync('./product.html');
   
    res.end(product.toString());
        break;

    case "/car":
        res.writeHead(200);
        var Car =fs.readFileSync('./car.html');
   
    res.end(Car.toString());
        break;
     case "/airplane":
            res.writeHead(200);
            var Airplane =fs.readFileSync('./airplane.html');
       
        res.end(Airplane.toString());
            break;

            case "/about":
                res.writeHead(200);
                var about =fs.readFileSync('./about.html');
           
            res.end(about.toString());
                break;


        default:
            res.writeHead(200);
         res.end("ERROR");
            console.log("--- ERROR !!!");
        break;
}
});
server.listen( port,() => {
console.log("Listen !!! " ,port);
});