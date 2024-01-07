const express = require("express");
const router = express.Router();
const CommentsController = require('../controllers/commentController.js')

router.get("/", CommentsController.getAllComments);
router.get("/:id", CommentsController.getCommentById);
router.get("/users/:userId", CommentsController.getCommentsByUserId);
router.get("/images/:imageId", CommentsController.getCommentsByImageId);
router.post("/", CommentsController.addComment);
router.put("/:id", CommentsController.editComment);
router.delete("/:id", CommentsController.deleteComment);

module.exports = router;