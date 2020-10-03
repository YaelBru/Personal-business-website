const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 8080;
app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});