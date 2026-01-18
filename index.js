const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoute");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("./public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", userRoute);
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
