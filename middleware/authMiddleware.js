const { verifyToken } = require("../services/auth");
function checkAuth(req, res, next) {
   const tokenCookie = req.cookies?.uid;
   if(!tokenCookie) return next();
   try {
    const payload = verifyToken(tokenCookie);
   req.user = payload;
   
   } catch (error) {}
   return next();
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