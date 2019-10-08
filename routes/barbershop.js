const express = require("express");
const router = express.Router();

const { getAllBarberShop, getBarberShop, addBarberShop, deleteBarberShop, updateBarberShop } = require("../controllers/barbershop")
const upload=require('../config/multer')
const authentication = require("../helpers/auth")

// untuk token validation
// authentication. tokenValid,
// router.get("/", authentication. tokenValid, getUser)

router.get("/", getAllBarberShop)
router.get("/:id", getBarberShop)
router.post("/", addBarberShop)
router.delete("/:id", deleteBarberShop)
router.put("/:id", updateBarberShop)

module.exports = router;