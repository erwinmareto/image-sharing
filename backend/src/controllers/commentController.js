const CommentsService = require("../services/comments");

class CommentsController {
  static getAllComments = async (req, res, next) => {
    try {
      const allComments = await CommentsService.getAllComments();
      return res
        .status(200)
        .json({
          message: "Comments retrieved successfully",
          data: allComments,
        });
    } catch (error) {
      next(error);
    }
  };

  static getCommentById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const comment = await CommentsService.getCommentById(id);
      return res
        .status(200)
        .json({ message: "Comment retrieved successfully", data: comment });
    } catch (error) {
      next(error);
    }
  };

  static getCommentsByUserId = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const comment = await CommentsService.getCommentByUserId(userId);
      return res
        .status(200)
        .json({ message: "Comments retrieved successfully", data: comment });
    } catch (error) {
      next(error);
    }
  };

  static getCommentsByImageId = async (req, res, next) => {
    try {
      const { imageId } = req.params;
      const comment = await CommentsService.getCommentByImageId(imageId);
      return res
        .status(200)
        .json({ message: "Comments retrieved successfully", data: comment });
    } catch (error) {
      next(error);
    }
  };

  static addComment = async (req, res, next) => {
    try {
      const comment = await CommentsService.addComment(req.body);
      return res
        .status(201)
        .json({ message: "Comment created successfully", data: comment });
    } catch (error) {
      next(error);
    }
  };

  static editComment = async (req, res, next) => {
    try {
      const { id } = req.params;
      const comment = await CommentsService.editComment({ id, ...req.body });
      return res
        .status(200)
        .json({ message: "Comment updated successfully", data: comment });
    } catch (error) {
      next(error);
    }
  };

  static deleteComment = async (req, res, next) => {
    try {
      const { id } = req.params;
      const comment = await CommentsService.deleteComment(id);
      return res
        .status(200)
        .json({ message: "Comment deleted successfully", data: comment });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = CommentsController;
