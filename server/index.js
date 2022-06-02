const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./calculator/build")));
app.use(express.static(path.join(__dirname, "./typescript-calculator/build")));

app.use("/react", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./calculator/build", "index.html"));
});

app.use("/typescript", (req, res, next) => {
  res.sendFile(
    path.join(__dirname, "./typescript-calculator/build", "index.html")
  );
});

app.listen(4000, () => {
  console.log("Started");
});
