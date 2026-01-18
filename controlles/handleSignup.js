const user = require("../modals/userModal");
async function handleSignup(req,res){
   const {UserName,email,password} = req.body;
   console.log(Object.keys(req.body));

   
    if(!UserName || !email || !password ){
        return res.status(400).json({error:"All fields are required"});
    }
    const CreatedUser = await user.create({UserName:UserName,email:email,password:password})
    if(CreatedUser) {return res.status(201).render("login"); }
    else {return res.status(400).json({error:"User not created"});}
}

module.exports=handleSignup