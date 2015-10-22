var api_key = require('../../config.js').api_key;
var request = require('request');

module.exports = function () {
  // request url e.g http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bd82977b86bf27fb59a04b61b657fb6f
  console.log(api_key);

  request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage. 
    }
  })

};