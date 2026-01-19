const user = require("../modals/userModal");

async function handleLogin(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const tokenValue = await user.matchPasswordandGenerateToken(email,password);
  if (!tokenValue) {
    return res.redirect("/user/login");
  }
  
  res.cookie("uid", tokenValue);

  return res.status(200).redirect("/"); 
  } catch (error) {
    return res.render("login",{error:"Invalid credentials"});
  }
}

module.exports = handleLogin;
