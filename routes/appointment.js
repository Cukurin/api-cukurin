const express = require("express");
const router = express.Router();

const { getAllAppointment, getOneAppointment,addAppointment, deleteAppointment, updateAppointment} = require('../controllers/appointment')
const upload=require('../config/multer')
const authentication = require("../helpers/auth")

// untuk token validation
// authentication. tokenValid,
// router.get("/", authentication. tokenValid, getUser)

router.get("/", getAllAppointment)
router.get("/:id", getOneAppointment)
router.post("/", addAppointment)
router.delete("/:id", deleteAppointment)
router.put("/:id", updateAppointment)

module.exports = router;