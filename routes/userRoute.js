const express = require("express");
const router = express.Router();
const handleSignup = require("../controlles/handleSignup");
const handleLogin = require("../controlles/handleLogin");

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/login", (req, res) => {
  return res.render("login");
});
router.get("/logout", (req, res) => {
  return res.render("login");
});
module.exports = router;
