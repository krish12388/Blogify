const {mongoose,Schema} = require("mongoose");

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:false
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})
const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog;