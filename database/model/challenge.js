/*

challenge.js
challenge model/schema

*/

// model for challenge table
module.exports = function (sequelize, Datatypes) {
  return sequelize.define('challenge', {
    challenge_response: Datatypes.STRING,
    challenge_completion: Datatypes.STRING,
    challenge_title: Datatypes.STRING,
    challenge_description: Datatypes.STRING,
    charity_name: Datatypes.STRING,
    donation_amount: Datatypes.INTEGER,
    time_frame: Datatypes.DATE
  }, {
    // allows for underscore convention for auto generated properties
    underscore: true
  });
};