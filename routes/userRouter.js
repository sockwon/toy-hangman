const express = require("express");
const userController = require("../controller/userController");

const isNew = require("../middleware/isNew");
const router = express.Router();

router.post("/signup",isNew.isNewUser, userController.signUp);
router.post("/login", isNew.isNewUser, userController.login);

module.exports ={
    router
}

