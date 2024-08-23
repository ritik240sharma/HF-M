import express from "express";
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("3");
});
app.get("/lu", (req, res) => {
  console.log("behncho");
});
app.listen(port, () => {
  console.log("server started on port 8000 changed asdjhsjdssjdfhasuj");
});
