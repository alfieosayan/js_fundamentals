class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Prosecutor extends Person {
	constructor(name, age) {
		super(name, age);
	}

	prosecute(defendant, criminal_case) {
		defendant.setCase(criminal_case);
		if (
			defendant.age >= criminal_case.ageLimit.minAge &&
			defendant.age <= criminal_case.ageLimit.maxAge
		) {
			criminal_case.computeReleaseDate();
		}
	}
}

class Defendant extends Person {
	constructor(name, age) {
		super(name, age);
		this.case;
	}

	setCase(criminal_case) {
		this.case = criminal_case;
	}
}

class Case {
	constructor(title, years, months, days, minAge, maxAge) {
		this.title = title;
		this.imprisonmentTerm = {
			years: years,
			months: months,
			days: days,
		};
		this.ageLimit = {
			minAge: minAge,
			maxAge: maxAge,
		};
	}

	computeReleaseDate() {
		const date = new Date();
		date.setFullYear(date.getFullYear() + this.imprisonmentTerm.years);
		date.setMonth(date.getMonth() + this.imprisonmentTerm.months);
		date.setDate(date.getDate() + this.imprisonmentTerm.days);
		let options = { year: "numeric", month: "long", day: "numeric" };
		console.log(date.toLocaleDateString("en-US", options));
		return date.toLocaleDateString("en-US", options);
	}
}

class TrialCourt {
	constructor() {
		this.defendant_age;
		this.case;
	}

	initiateTrial(defendant, prosecutor) {
		this.defendant_age = defendant.age;
        this.case = defendant.case;
		console.log("Name: ", defendant.name);
		console.log("Age: ", defendant.age + " years old");
		console.log("Case Title: ", defendant.case.title);
		console.log("Filed By: ", prosecutor.name);
        console.log("Verdict: ", this.getVerdict());
		if (this.getVerdict() === "GUILTY") {
			console.log("Release Date: ", this.case.computeReleaseDate());
		}
	}

	getVerdict() {
		let verdict;
		if (
			this.defendant_age >= this.case.ageLimit.minAge &&
			this.defendant_age <= this.case.ageLimit.maxAge
		) {
			verdict = "GUILTY";
		} else {
			verdict = "NOT GUILTY";
		}
		return verdict;
	}
}

let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
let prosecutor = new Prosecutor ("John", 30);
let defendant1 = new Defendant ("Girlie", 5);
prosecutor.prosecute(defendant1, case1);
let trial_court = new TrialCourt();
trial_court.initiateTrial(defendant1, prosecutor);

// let case1 = new Case("Malicious Mischief", 3, 3, 3, 18, 75);
// let prosecutor = new Prosecutor("John", 30);
// let defendant1 = new Defendant("Girlie", 5);
// let defendant2 = new Defendant("Onel", 25);
// prosecutor.prosecute(defendant2, case1);
// let trial_court = new TrialCourt();
// trial_court.initiateTrial(defendant2, prosecutor);
