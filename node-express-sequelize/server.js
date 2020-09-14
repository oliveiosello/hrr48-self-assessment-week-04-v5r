var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

app.get('/users', (req, res) => {
  // get users from db

})

module.exports = {
  app: app,
  User: User
};


/*  Create a '/users' route that responds to
    a GET request with all users in the database */