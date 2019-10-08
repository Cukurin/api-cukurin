const express = require("express");
const router = express.Router();

const{ addUser, getAllUser, deleteUser, updateUser, uploadImage, login } = require("../controllers/user")
const upload=require('../config/multer')
const authentication = require("../helpers/auth")

// untuk token validation
// authentication. tokenValid,
// router.get("/", authentication. tokenValid, getUser)

router.get("/", getAllUser)
router.post("/", addUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)
router.post("/user-image", upload.any(), uploadImage);
router.post("/login", login)

module.exports = router;