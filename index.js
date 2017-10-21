var config = require("./config.json");
var history = require("./history.json");
var twilio = require("twilio");
var fs = require("fs");

var client = new twilio(config["account_id"], config["auth_token"]);

var person_one = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
var person_two = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];

if (history["first"] === person_one.name || history["second"] === person_one.name) {
	person_one = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
	while (history["first"] === person_one.name || history["second"] === person_one.name) {
		person_one = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
	}
}

if (history["first"] === person_two.name || history["second"] === person_two.name) {
	person_two = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
	while (person_one === person_two && (history["first"] === person_two.name || history["second"] === person_two.name)) {
		person_two = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
	}
}

// make sure the same person is not sent the same message twice
while (person_one === person_two) {
	person_one = config["to_numbers"][Math.floor(Math.random() * config["to_numbers"].length)];
}

var hist = {
	first: person_one.name,
	second: person_two.name
};

fs.writeFileSync("history.json", JSON.stringify(hist));

// send message to person one
/*client.messages.create({
	body: "Its " + person_one.name + "'s turn for dishwasher duty. Whip 'em if they don't do it",
	to: person_one.number,
	from: config["from_number"]
}).then((message) => console.log(message.sid));

// send message to person two
client.messages.create({
	body: "Its " + person_two.name + "'s turn for dishwasher duty. Whip 'em if they don't do it",
	to: person_two.number,
	from: config["from_number"]
}).then((message) => console.log(message.sid));
*/

for (var i = 0; i < config["to_numbers"].length; i++) {
	var temp = config["to_numbers"][i].number;
	client.messages.create({
		body: "Its " + person_one.name + " and " + person_two.name + "'s turn for dishwasher duty. Whip them/yourself if they/you don't do it",
		to: temp,
		from: config["from_number"],
	}).then((message) => console.log(message.sid));
}
