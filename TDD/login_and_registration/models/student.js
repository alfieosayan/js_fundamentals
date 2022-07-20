const db = require("./database");
const bcrypt = require("bcrypt");

class Student {
	async register(postData) {
		let result = false;
		try {
			const hashedPassword = await bcrypt.hash(postData.password, 10);

			const user = await this.checkUser(postData.email);
			if (user.length > 0) {
				result = false;
			} else {
				let query =
				"INSERT INTO students (first_name, last_name, email, password, created_at) VALUES (?,?,?,?, NOW())";
				let values = [
					postData.first_name,
					postData.last_name,
					postData.email,
					hashedPassword,
				];
				let registerUser = await db.executeQuery(query, values);
				if (registerUser) {
					result = true;
				}
			}
			
		} catch (error) {
			console.log(error);
		}
		return result;
	}

	async checkUser(email) {
		let query = "SELECT * FROM students WHERE email = ?";
		let value = email;

		const result = await db.executeQuery(query, value);
		return result;
	}

	async login(postData) {
		const { email, password } = postData;
		const user = await this.checkUser(email);
		const data = {
			user: {},
			isLogin: false
		};
		if (user.length > 0) {
			if (await bcrypt.compare(password, user[0].password)) {
				data.isLogin = true;
				data.user = user[0];
			} else {
				data.isLogin = false;
			}
		} else {
			data.isLogin = false;
		}
		return data;
	}
}

module.exports = new Student();
