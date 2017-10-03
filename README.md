# DishwasherReminder

this is a simple app that uses twilio to message two roommates and assign them dishwasher duty every day. to run it, you will need node.
just run:


```
	node index.js
```

you will need a `config.json` file in the same directory as `index.js`. the format is as follows:


```
	{
		"account_id": "TWILIO_ACCOUNT_ID",
		"auth_token": "TWILIO_AUTH_TOKEN",
		"to_numbers": [ "PHONE_NUMBER_1", "PHONE_NUMBER_2", ... ],
		"from_number": "TWILIO_PHONE_NUMBER"
	}
```

once you fill those in, run the `index.js` file and it should begin working. you can run this app as either a cron job or some other scheduling service or something. an example cron job is (run `crontab -e` to access cron jobs file):

```
	00 11 * * * /usr/bin/node PATH_TO_INDEX.JS
```

this will run `node index.js` every day at 11AM
