const Mysql                 = require('mysql');
const executeQuery  		= require('../config/database.js');

class UserModel {

	async getUsers() {

	}

	async createUser(params){
		let result = false;
		try{
			let create_user_query  = Mysql.format(`INSERT INTO users(name,email,password) VALUES(?,?,?);`, [params.name, params.email, params.password]);
			let create_user_result = await executeQuery(create_user_query);
			if(create_user_result){
				result = true;
			}
		}catch(err){
			console.log(err);
		};
		return result;
	}
}

module.exports = UserModel;