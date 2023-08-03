const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
// html/api route
const html = require("./routes/html-route.js");
const api = require("./routes/api-route.js");
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// link routes to path
app.use(html);
app.use("/api", api);

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);
