const UserService = require("../services/users.js");

class UserController {
  static getAllUsers = async (req, res, next) => {
    try {
      const users = await UserService.getAllUsers();
      return res
        .status(200)
        .json({ message: "Successfully retrieved all user data", data: users });
    } catch (error) {
      next(error);
    }
  };

  static getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);
      return res
        .status(200)
        .json({ message: "Successfully retrieved user data", data: user });
    } catch (error) {
      next(error);
    }
  };

  static getUserWithImages = async (req, res, next) => {
    try {
      const { username } = req.params;
      const user = await UserService.getUserWithImages(username);
      return res
        .status(200)
        .json({ message: "Successfully retrieved user data", data: user });
    } catch (error) {
      next(error);
    }
  };
  
  static addUser = async (req, res, next) => {
    try {
      const user = await UserService.addUser(req.body);
      return res
        .status(201)
        .json({ message: "Successfully added user", data: user });
    } catch (error) {
      next(error);
    }
  };

  static editUser = async (req, res, next) => {
    try {
        const {id} = req.params
      const user = await UserService.updateUser(id, req.body);
      return res
        .status(200)
        .json({ message: "Successfully edited user data", data: user });
    } catch (error) {
      next(error);
    }
  };

  static deleteuser = async (req, res, next) => {
    try {
        const {id} = req.params
        const user = await UserService.deleteUser(id)
        return res.status(200).json({message: "Successfully deleted user", data: user})
    } catch (error) {
        next(error)
    }
  }
}

module.exports = UserController;