const express = require('express')
const app = express()
var path = require('path');

//var users = require(path.resolve( __dirname, "./github_users.js" ));
var users = require("./github_users");
var usersFollowers = require("./users_followers");

app.get('/users', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
	
	setTimeout(function() {
			res.send(users)
	},2000);
})

app.get('/:user*/followers', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var userFollowers = [];
	usersFollowers.forEach( function(f) {
		if(f.forLogin===req.param('user')) {
			userFollowers.push(f);
		}
	})
	
	setTimeout(function() {
			res.send(userFollowers);
	},2000);

})

app.listen(3001, function () {
  console.log('Example app listening on port 3001 !')
})