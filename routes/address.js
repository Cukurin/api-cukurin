const express = require("express");
const router = express.Router();

const { addAdress } = require("../controllers/address");

router.post("/", addAdress);

module.exports = router;
