import express from "express";

const app = express();

app.get("/", function (req, res) {
  return res.status(201).json([{ message: "Hello World" }]);
});

app.listen(3333, function () {
  console.log("Example app listening on port 3333!");
});
