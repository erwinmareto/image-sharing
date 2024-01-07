const express = require('express')
const router = express.Router();
const UserController = require("../controllers/userController.js");
// const { authorize } = require("../middlewares/auth.js");

router.get("/", UserController.getAllUsers);
router.get("/:id" ,UserController.getUserById);
router.get("/images/:username" ,UserController.getUserWithImages);
router.post("/" ,UserController.addUser);
router.put("/:id", UserController.editUser);
router.delete("/:id", UserController.deleteuser);

module.exports = router;