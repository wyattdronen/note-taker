const express = require('express');
// html/api route
const htmlRoute = require("./routes/html.js")
const apiRoute = require("./routes/api.js")
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// link to path
app.use("/api", apiRoute);
app.use("/", htmlRoute);    

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);
