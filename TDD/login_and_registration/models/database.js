const config = require("../config");
const mysql = require("mysql");

class Database {
	constructor() {
		this.mysql = mysql;
		this.connection = this.mysql.createConnection({
			host: config.db.host,
			user: config.db.user,
			password: config.db.password,
			database: config.db.database,
		});
	}

	connectDB() {
		this.connection.connect((err) => {
			if (err) throw err;
		});
	}

	executeQuery(query, values) {
		return new Promise((resolve) => {
			this.connection.query(query, values, (err, result) => {
				resolve(result);
			});
		});
	}
}

module.exports = new Database();
