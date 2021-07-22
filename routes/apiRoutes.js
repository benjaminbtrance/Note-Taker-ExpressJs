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
	app.post('/api/notes', (req, res) => {
		fs.readFile('./db/db.json', 'utf8', (err, data) => {
			const notes = JSON.parse(data);
			notes.push(req.body);
			fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
				if (err) {
					console.log(err);
					res.json(false);
				} else {
					console.log('Thank you for your notes.');
					res.json(true);
				}
			});
		});
	});

	// API DELETE Requests
	app.delete('/api/notes/:id', (req, res) => {});
};
