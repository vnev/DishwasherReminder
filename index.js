var config = require("./config.json");
var twilio = require("twilio");
var app = require("express")();


var client = new twilio(config["account_id"], config["auth_token"]);

client.messages.create({
	body: "Hello from node server",
	to: config["to_numbers"][0],
	from: config["from_number"]
}).then((message) => console.log(message.sid));
