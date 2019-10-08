const express = require("express");
const router = express.Router();

const {  } = require('../controllers/bookings')
const upload=require('../config/multer')
const authentication = require("../helpers/auth")

// untuk token validation
// authentication. tokenValid,
// router.get("/", authentication. tokenValid, getUser)

router.get("/", getAllBooking)
router.get("/:id", getBooking)
router.post("/", addBooking)
router.delete("/:id", deleteBooking)
router.put("/:id", updateBooking)

module.exports = router;