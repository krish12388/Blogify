const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const Blog = require("../modals/blogModal");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../public/images"))
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

router.get("/add-new", (req, res) => {
    res.render("blog")
})

router.post("/", upload.single("imageURL"), async (req, res) => {
   const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    imageURL: req.file.filename,
    createdBy: req.user._id
   })
   res.redirect(`/blog/${blog._id}`)
})
 router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    res.render("blogPage", { blog })
 })
module.exports = router;