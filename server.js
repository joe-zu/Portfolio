// Requiring necessary npm packages
const express = require("express");
const exphbs = require("express-handlebars");


// Setting up env port or 3000
const PORT = process.env.PORT || 8080;

//pointing express to public folder for static files
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//pointing express to views for html
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);

//starting server
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

