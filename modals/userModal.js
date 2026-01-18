const {mongoose,Schema} = require("mongoose");
const {createHmac,randomBytes} = require("crypto");
const userSchema = new Schema({
    UserName:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    salt:{
      type:String,
      default:"abc"
    },
    password:{
      type:String,
      required:true
    },
    avatar:{
      type:String,
      default:"../public/cat-computer-beep.jpg"
    },
    role:{
      type:String,
      enum:["USER","ADMIN","user","admin"],
      default:"user"
    }
},{timestamps:true})

//hashing of password
userSchema.pre("save",function(next){
  const user = this;
  if(!user.isModified("password")){
    const salt = randomBytes(16).toString("hex");
    this.salt = salt;
    this.password = createHmac('sha256',salt).update(user.password).digest("hex");
  }
  
})


//model
const user = mongoose.model("User",userSchema);

module.exports = user;