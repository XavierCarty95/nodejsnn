var http = require('http')

var server = http.createServer(function(res,req){
    res.write(200 , {'Content- Type' : 'text/plain'}); 
    res.end("whats up")
});

server.listen(process.env.PORT, process.env.IP, function(){
    console.log("listen on the port my guy")
})