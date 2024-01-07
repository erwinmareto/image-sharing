const express = require("express");
const router = express.Router();
const upload = require('../middlewares/multer.js')
const ImageController = require("../controllers/imageController.js");

router.get("/", ImageController.getAllImages);
router.get("/:id", ImageController.getImageById);
router.get("/details/:id", ImageController.getImageByIdWithDetails);
router.get("/category/:category", ImageController.getImageByCategory);
router.get("/users/:userId", ImageController.getImageByUser);
router.post("/",upload.single('image'), ImageController.addImage);
router.put("/:id",upload.single('image'), ImageController.updateImage);
router.delete("/:id", ImageController.deleteImage);

module.exports = router;
