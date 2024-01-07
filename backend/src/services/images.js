const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ImageService {
  static getAllImages = async () => {
    const allImages = await prisma.image.findMany();
    return allImages;
  };

  static getImagesById = async (imageId) => {
    const image = await prisma.image.findFirst({
      where: {
        id: parseInt(imageId),
      },
    });
    return image;
  };

  static getImagesByCategory = async (category) => {
    const image = await prisma.image.findMany({
      where: {
        category: category,
      },
    });
    return image;
  };

  static getImagesByUser = async (userId) => {
    const image = await prisma.image.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
    if (!image) {
        throw {name: "NotFound"}
    }
    return image;
  };

  static getImageWithDetails = async (id) => {
    const image = await prisma.image.findFirst({
      where: {
        id: parseInt(id)
      },
      include: {
        Comment: {
          select: {
            id: true,
            userId: true,
            comment:true,
            user: {
              select: {
                username: true
              }
            }
          }
        },
        user: {
          select: {
            id: true,
            username: true
          }
        }
      }
    })
    return image
  }

  static addImage = async ({ userId, image, caption, category }) => {
    const imageData = await prisma.image.create({
      data: {
        userId: parseInt(userId),
        image: image,
        caption: caption,
        category: category
      },
    });
    return imageData;
  };

  static updateImage = async ({ id, userId, image, caption, category }) => {
    const imageData = await prisma.image.update({
      where: {
        id: parseInt(id),
      },
      data: {
        userId: parseInt(userId),
        image: image,
        caption: caption,
        category: category
      },
    });
    if (!image) {
        throw {name: "NotFound"}
    }
    return imageData;
  };

  static deleteImage = async (imageId) => {
    const image = await prisma.image.delete({
      where: {
        id: parseInt(imageId),
      },
    });
    if (!image) {
        throw {name: "NotFound"}
    }
    return image;
  };
}

module.exports = ImageService;
