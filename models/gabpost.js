'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gabpost = sequelize.define('Gabpost', {
    Post: DataTypes.STRING,
    User: DataTypes.STRING,
    Likes: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Gabpost;
};