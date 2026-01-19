const express = require("express");
const router = express.Router();
const multer = require("multer");
const Blog = require("../modals/blogModal");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })
router.get("/add-new", (req, res) => {
    res.render("blog")
})

router.post("/", (req, res) => {
   console.log(req.body);
   res.redirect("/")
   
})

module.exports = router;