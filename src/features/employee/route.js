const express = require("express");
const employeeController = require("./controller");
const multer = require("../../multer.js");

const router = express.Router();

router.post("/create", multer.single("profilePhoto"), employeeController.create);
router.get("/generate/employeeNumber", employeeController.generateEmployeeNumber);

module.exports = router;