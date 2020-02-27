import axios from "axios";

var querystring = require("querystring");

module.exports = async function(req, res, next) {
  if (req.method == "POST") {
    var body = "";
    req.on("data", function(data) {
      body += data;
    });

    req.on("end", function() {
      var bodyParams = querystring.parse(body) || {};
      console.log(body);
      console.log(JSON.parse(body));
      //ECHO POST params for example
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(bodyParams));
      return false;
    });
  } else {
    try {
      const response = await axios.get("https://agroxy.com/api/v2/article");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
    return false;
  }
};

function sendToSlack(url, data) {}
