

//http模块 用来创建web服务器
var http = require('http');

//creatServer来创建web服务器，listen 在1337端口监听请求， function是callback 函数
var server = http.createServer(function (req, res) {
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('Hello World\n');
})
server.listen(1337, '127.0.0.1');
//
console.log('Server running at http://127.0.0.1:1337/');