'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};