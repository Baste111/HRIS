const express = require("express");
const personalDataSheetController = require("./controller");
const passport = require("passport");

const router = express.Router();

router.get("/getSingle",
    passport.authenticate("jwt", {session: false}),
    personalDataSheetController.getSingle);

router.put("/update",
    passport.authenticate("jwt", {session: false}),
    personalDataSheetController.update);

module.exports = router;