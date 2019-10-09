const express = require("express");
const router = express.Router();

const { getAllBarberShop, getOneBarberShop, addBarberShop, deleteBarberShop, updateBarberShop } = require("../controllers/barbershop")
const upload=require('../config/multer')
const authentication = require("../helpers/auth")

// untuk token validation
// authentication. tokenValid,
// router.get("/", authentication. tokenValid, getUser)

router.get("/", getAllBarberShop)
router.get("/:id", getOneBarberShop)
router.post("/", addBarberShop)
router.delete("/:id", deleteBarberShop)
router.put("/:id", updateBarberShop)

module.exports = router;