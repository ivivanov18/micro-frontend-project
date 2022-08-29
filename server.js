const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/", express.static("public"));
app.use(
  "/mfe/welcome",
  express.static(path.join(__dirname, "welcome", "dist"))
);
app.use("mfe/music", express.static(path.join(__dirname, "music", "public")));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
