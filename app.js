var lab1_1 = require("./lab/lab1_1").lab
var example_1 = require("./example_1").lab;
var zad1 = require("./lab/zad1").lab;

var PORT = 8081;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1},	
	{path: "/example_1", action: example_1}, 
	{path: "/zad1", action: zad1},
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

