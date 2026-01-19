const jwt = require("jsonwebtoken");
const {crypto,uuid}= require("crypto");
const dotenv = require("dotenv");
dotenv.config({ path: '../.env' });

function generateToken(user){
   const secret = process.env.JWT_SECRET;
const payload = {
    name:user.UserName, 
    _id:user._id,
    email:user.email,
    role:user.role
}
const token =jwt.sign(payload,secret,{expiresIn:"10d"})
return token;
 }
function verifyToken(token){
  if(!token) return null;
  try{
    const secret = process.env.JWT_SECRET;
    return jwt.verify(token,secret);
  }catch(error){
    return null;
  }
}
 module.exports = {
    generateToken,
    verifyToken
 }
