const { verifyToken } = require("../services/auth");
function checkAuth(req, res, next) {
   const tokenCookie = req.cookies?.uid;
   if(!tokenCookie) return res.redirect("/user/login");
   const user = verifyToken(tokenCookie);
   if(!user) return res.redirect("/user/login");
   req.user = user;
   next();
}
function restrictUser(roles){
  return (req,res,next)=>{
    if(!roles.includes(req.user.role)) return res.end("You are not authorized to access this page");
    next();
  }
}
module.exports = {
  checkAuth,
  restrictUser
};