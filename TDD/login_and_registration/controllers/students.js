const studentModel = require("../models/student");

class Students {
	index(req, res) {
		if (req.session.user) {
			res.redirect("/student/profile");
		}
		let errors = req.session.errors;
		res.render("index", { errors: errors });
	}

	async register(req, res) {
		let errors = [];
		let messages = [];
		const { first_name, last_name, email, password, confirm_password } =
			req.body;
		const emailRegexp =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		let validationError = false;
		if (!emailRegexp.test(email)) {
			validationError = true;
			errors.push("Invalid Email");
		}
		if (!email) {
			validationError = true;
			errors.push("Email is Required.");
		}
		if (!password) {
			validationError = true;
			errors.push("Password is Required.");
		}
		if (password != confirm_password) {
			validationError = true;
			errors.push("Password and Confirm Password are not matched.");
		}
		if (!first_name) {
			validationError = true;
			errors.push("First Name is Required.");
		}
		if (!last_name) {
			validationError = true;
			errors.push("Last Name is Required.");
		}
		const checkUser = await studentModel.checkUser(email);
		if (checkUser.length > 0) {
			validationError = true;
			errors.push("Email already exists.");
		}
		if (!validationError) {
			const user = await studentModel.register(req.body);
			messages.push("Registration Successful!");
		}
		req.session.errors = errors;
		res.redirect("/");
		//res.render("index", { error: errors, msg: messages });
	}

	async login(req, res) {
		let errors = [];
		const user = await studentModel.login(req.body);
		if (user) {
			let data = {
				first_name: user.first_name,
				last_name: user.last_name,
				email: user.email,
			};
			req.session.user = data;
			res.redirect("/student/profile");
		} else {
			errors.push("Invalid Credentials.");
			req.session.errors = errors;
			res.redirect("/");
		}
	}

	profile(req, res) {
		const data = req.session.user;
		if (!data) {
			res.redirect("/");
		} else {
			res.render("student", { data });
		}
	}

	logoff(req, res) {
		req.session.destroy();
		res.redirect("/");
	}
}

module.exports = new Students();
