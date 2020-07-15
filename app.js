var express = require('express');

/*
The first line declares a variable which will contain the module called express, grabbing it from the node_modules folder. The module is actually a function. 
*/

var app = express();

/*
Assigning the function call to another variable gives you access to a predefined set of tools which will in a great deal make your life much easier. You could view the variable app as an object, whose methods you are utilizing to build the actual program.
*/

app.get('/', 
function (req, res) 
{
  res.send('Hello World!');
}
);

app.listen(3000, 
function () 
{
  console.log('Example app listening on port 3000!');
}
);

/*
The listen method starts a server and listens on port 3000 for connections.
It responds with “Hello World!” for get requests to the root URL (/). For every other path, it will respond with a 404 Not Found.
*/
