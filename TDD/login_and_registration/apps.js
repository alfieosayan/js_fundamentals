const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const bodyParser = require("body-parser");
const config = require("./config");
const db = require("./models/database");

db.connectDB;

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./assets")));
// setting up ejs and our views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route to render the index.ejs view
app.use(
	session({
		secret: "$tud3nt",
		resave: false,
		saveUninitialized: true,
		cookie: {
			maxAge: 60000,
		},
	})
);

const routes = require("./routes");
// routes
app.use("/", routes);

// tell the express app to listen on port 8000
app.listen(config.port, () => {
	console.log("listening on port 8000");
});
