const express = require("express");
const router = express.Router();

const {  } = require("../controllers/babershop")
const upload=require('../config/multer')
const authentication = require("../helpers/auth")

// untuk token validation
// authentication. tokenValid,
// router.get("/", authentication. tokenValid, getUser)

router.get("/", getAllBarberShop)
router.post("/", addBarberShop)
router.delete("/:id", deleteBarberShop)
router.put("/:id", updateBarberShop)

module.exports = router;