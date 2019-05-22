//packages
const fs = require('fs');
const http = require('http');
const url  = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopDate = JSON.parse(json);

// create server
const server = http.createServer((req, res) => {
	// create routes 
	const pathName = url.parse(req.url, true).pathname;
	const id = url.parse(req.url, true).query.id;

	if(pathName === '/products' || pathName === '/'){
		res.writeHead(200, { 'Content-type': 'text/html'});
		res.end('This is the products page');
	} 

	else if (pathName === '/laptop' && id < laptopDate.length){
		res.writeHead(200, { 'Content-type': 'text/html'});
		res.end(`This is the laptop page for laptop ${id}`);
	}

	else {
		res.writeHead(404, { 'Content-type': 'text/html'});
		res.end('URL was not found on the server!');
	}
})

//set up where to listen and port
server.listen(1337, '127.0.0.1', () => {
	console.log('server running on port 1337, so dope')
})

