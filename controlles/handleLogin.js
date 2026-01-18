const user = require("../modals/userModal");
async function handleLogin(req,res){
const {password,email} = req.body; 
if(!email || !password){
  return res.status(400).json({error:"All fields are required"});
}
const existingUser = await user.findOne({email:email});
if(!existingUser){
  return res.redirect("/signup");
}
req.user = existingUser;
return res.render("home",{user:existingUser}); 
}

module.exports=handleLogin