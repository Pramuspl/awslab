var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
var ec2 = new AWS.EC2();


var zad1 = function(request, callback){
	
ec2.describeInstances(null, function(err, data) {
	if (err) callback(null, err, err.stack); // an error occurred
	else     callback(null, data); // successful response
	});
}

var params = {
  DryRun: false,
  //Filters: [],
  //InstanceIds: [],
  MaxResults: 50,
  NextToken: 'STRING_VALUE'
};



exports.lab = zad1;