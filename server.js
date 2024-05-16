const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

var CookieDate = new Date();
CookieDate.setFullYear(CookieDate.getFullYear() + 10);

app.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  res.status(200).sendFile(path.join(__dirname, "/index.html"));
});


app.listen(3002);
