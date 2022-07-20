const Mysql                 = require('mysql');
const executeQuery  		= require('../config/database.js');

class UserModel {
    async checkEmail(email) {
		let result = false;
		let check_email_query = Mysql.format("SELECT * FROM users WHERE email = ?",[email]);

		const user = await executeQuery(check_email_query);
		if (user.length > 0) {
			result = user[0];
		}
		return result;
	}

	async loginUser(params) {
		const { email, password } = params; 

		const result = {
			isLogin: false,
			redirect_url: ''
		};
		try {
			let user = await this.checkEmail(email);
			if (user) {
				if (user.password === password) {
					result.isLogin = true;
					result.redirect_url = '/success';
				}
			}
		} catch (error) {
			console.log(error);
		}
		return result;
	}

	validateLogin(params) {
		let result = {
			error_message: '',
			validation: true
		}

		const { email, password } = params;

		if (!email) {
			result.validation = false;
			result.error_message = 'Email is required';
		}
		
		if (!password) {
			result.validation = false;
			result.error_message = 'Password is required';
		}
		
		if (!email && !password ) {
			result.validation = false;
			result.error_message = 'Email and password is required';
		}

		return result;
	}
}

module.exports = UserModel;