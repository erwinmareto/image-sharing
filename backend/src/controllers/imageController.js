const cloudinary = require("cloudinary").v2;
const ImageService = require("../services/images.js");

class ImageController {
  static getAllImages = async (req, res, next) => {
    try {
      const allImages = await ImageService.getAllImages();
      return res
        .status(200)
        .json({ message: "Images retrieved successfully", data: allImages });
    } catch (error) {
      next(error);
    }
  };

  static getImageById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await ImageService.getImagesById(id);
      return res
        .status(200)
        .json({ message: "Images retrieved successfully", data: image });
    } catch (error) {
      next(error);
    }
  };

  static getImageByIdWithDetails = async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await ImageService.getImageWithDetails(id);
      return res
        .status(200)
        .json({ message: "Images retrieved successfully", data: image });
    } catch (error) {
      next(error);
    }
  };

  static getImageByCategory = async (req, res, next) => {
    try {
      const { category } = req.params;
      const image = await ImageService.getImagesByCategory(category);
      return res
        .status(200)
        .json({ message: "Images retrieved successfully", data: image });
    } catch (error) {
      next(error);
    }
  };

  static getImageByUser = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const image = await ImageService.getImagesByUser(userId);
      return res
        .status(200)
        .json({ message: "Images retrieved successfully", data: image });
    } catch (error) {
      next(error);
    }
  };

  static addImage = async (req, res, next) => {
    try {
      // console.log(req.file.path, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

      const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      // console.log(uploadedImg.url, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
      // console.log({image: uploadedImg.url, ...req.body});
      const image = await ImageService.addImage({
        image: secure_url,
        ...req.body,
      });
      return res
        .status(201)
        .json({ message: "Images added successfully", data: image });
    } catch (error) {
      next(error);
    }
  };

  static updateImage = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      const image = await ImageService.updateImage({
        id,
        image: secure_url,
        ...req.body,
      });
      return res
        .status(200)
        .json({ message: "Images updated successfully", data: image });
    } catch (error) {
      next(error);
    }
  };

  static deleteImage = async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = await ImageService.deleteImage(id);
      return res
        .status(200)
        .json({ message: "Images deleted successfully", data: image });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ImageController;
