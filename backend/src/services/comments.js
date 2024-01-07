const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class CommentsService {
  static getAllComments = async () => {
    const allComments = await prisma.comment.findMany();
    return allComments;
  };

  static getCommentById = async (id) => {
    const comment = await prisma.comment.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    if (!comment) {
      throw { name: "NotFound" };
    }
    return comment;
  };

  static getCommentByUserId = async (id) => {
    const comment = await prisma.comment.findMany({
      where: {
        userId: parseInt(id),
      },
    });
    if (!comment) {
      throw { name: "NotFound" };
    }
    return comment;
  };
  static getCommentByImageId = async (id) => {
    const comment = await prisma.comment.findMany({
      where: {
        imageId: parseInt(id),
      },
    });
    if (!comment) {
      throw { name: "NotFound" };
    }
    return comment;
  };

  static addComment = async ({ userId, imageId, comment }) => {
    const commentData = await prisma.comment.create({
      data: {
        userId: parseInt(userId),
        imageId: parseInt(imageId),
        comment: comment,
      },
    });
    return commentData;
  };

  static editComment = async ({ id, userId, imageId, comment }) => {
    const commentData = await prisma.comment.update({
      where: {
        id: parseInt(id),
      },
      data: {
        userId: parseInt(userId),
        imageId: parseInt(imageId),
        comment: comment,
      },
    });
    if (!commentData) {
        throw { name: "NotFound" };
      }
    return commentData;
  };

  static deleteComment = async (id) => {
    const comment = await prisma.comment.delete({
      where: {
        id: parseInt(id),
      },
    });
    if (!comment) {
      throw { name: "NotFound" };
    }
    return comment;
  };
}

module.exports = CommentsService;
