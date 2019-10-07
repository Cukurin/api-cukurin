const multer = require("multer")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./assets/images/users");
  },
  filename: function(req, file, cb){
    let filetype=""
    if(file.mimetype === "image/png"){
      filetype ="png"
    }
    if(file.mimetype === "image/jpeg"){
      filetype = "jpg"
    }
    cb(null, file.originalname.replace(/ /g, "_"))
  }
});

const upload = multer({storage: storage});

module.exports = upload
