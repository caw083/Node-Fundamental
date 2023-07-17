const http = require('http');

const server = http.createServer((req, res) => {
    console.log("I hear you!");
    console.log(req.url, req.method, req.headers);
    const User = {
        name: "John",
        age: 30
    }

    // res.setHeader('Content-Type',"text/html");
    // res.write("<h1>Hello, World!</h1>");
    // res.end();
    
    res.setHeader('Content-Type',"application/json");
    res.end(JSON.stringify(User))
})
server.listen(3000);