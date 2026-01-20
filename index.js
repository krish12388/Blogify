const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const user = require("./modals/userModal");
const dotenv = require("dotenv");
const app = express();
const userRoute = require("./routes/userRoute");
const blogRoute = require("./routes/blogRoute");
const cookieParser = require("cookie-parser");
const { checkAuth } = require("./middleware/authMiddleware");
const Blog = require("./modals/blogModal");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("./public")));
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
dotenv.config({ path: "./.env" });

mongoose
  .connect("mongodb://localhost:27017/blogify")
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", userRoute);
app.get("/", checkAuth, async (req, res) => {
  const allBlogs = await Blog.find({});
  return res.render("home", { user: req.user, allBlogs });
});
app.use("/blog", checkAuth, blogRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
