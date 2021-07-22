const fs = require('fs');

// ROUTING
module.exports = (app) => {
	// API GET Requests
	app.get('/api/notes', (req, res) => {
		fs.readFile('./db/db.json', 'utf8', (err, data) => {
			res.json(JSON.parse(data));
		});
	});

	// API POST Requests
	app.post('/api/notes', (req, res) => {});

	// API DELETE Requests
	app.delete('/api/notes/:id', (req, res) => {});
};
