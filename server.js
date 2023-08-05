const express = require("express");
const https = require("https");
const fs = require("fs");
const options = {};
const app = express();
app.use((req, res) =>
{
   res.end("Hello World");
});

https.createServer(options, app).listen(8000);
