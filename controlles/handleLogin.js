const user = require("../modals/userModal");
const { generateToken } = require("../services/auth");
async function handleLogin(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const existingUser = await user.matchPassword(email,password);
  if (!existingUser) {
    return res.redirect("/user/login");
  }
  req.user = existingUser;
  const token = generateToken(existingUser);

  res.cookie("uid", token);

  return res.status(200).redirect("/"); 
}

module.exports = handleLogin;
