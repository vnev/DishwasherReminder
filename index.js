var config = require("./config.json");
var twilio = require("twilio");

var client = new twilio(config["account_id"], config["auth_token"]);

var person_one = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
var person_two = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];

// make sure the same person is not sent the same message twice
while (person_one === person_two) {
	person_one = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
}

// send message to person one
client.messages.create({
	body: "Its your turn for dishwasher duty boi",
	to: person_one,
	from: config["from_number"]
}).then((message) => console.log(message.sid));

// send message to person two
client.messages.create({
	body: "Its your turn for dishwasher duty boi",
	to: person_two,
	from: config["from_number"]
}).then((message) => console.log(message.sid));