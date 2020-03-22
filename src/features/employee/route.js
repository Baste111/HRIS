const express = require("express");
const employeeController = require("./controller");
const multer = require("../../multer.js");

const router = express.Router();

router.post("/create", multer.single("profilePhoto"), employeeController.create);
router.get("/generate/employeeNumber", employeeController.generateEmployeeNumber);
router.get("/getSingle/:employeeId", employeeController.getSingle);
router.get("/get/employeeNumber", employeeController.generateEmployeeNumber);
router.get("/getAll", employeeController.getAll);
router.get("/search/:searchOption/:searchValue", employeeController.search);
router.put("/update/:employeeId", employeeController.update);

module.exports = router;