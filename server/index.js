const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/public", express.static("public"));
app.use("/api/session", require("./routes/session"));
app.use("/api/option", require("./routes/option"));
app.use("/api/quote", require("./routes/quote"));
app.use("/api/quoteItem", require("./routes/quoteItem"));
app.use("/api/step", require("./routes/step"));
app.use("/api/stepSet", require("./routes/stepSet"));
app.use("/api/address", require("./routes/address"));

app.use((err, req, res, next) => {
  if (
    err.status === 401 &&
    err.message === "Email and password does not match"
  ) {
    res.status(401).send({ message: "Email and password does not match" });
  }
  console.log(err);
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const setUp = async () => {
  app.listen(port, () => console.log(`listening on port ${port}`));
};

setUp();
