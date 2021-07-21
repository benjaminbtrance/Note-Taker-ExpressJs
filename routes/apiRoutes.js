const fs = require('fs');

// ROUTING
module.exports = (app) => {
	// API GET Requests
	app.get('/api/notes', (req, res) => {
		fs.readFile('./db/db.json', (err, data) => {
			if (err) throw err;
			dbData = JSON.parse(data);
			res.send(dbData);
		});
	});
};
