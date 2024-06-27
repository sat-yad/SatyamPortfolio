const express = require("express");
const { SendEmailController } = require("../controllers/Controller.jsx");

// RouterObject

const router = express.Router();

// routes

router.post("/sendEmail", SendEmailController);

//
module.exports = router;
