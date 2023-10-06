import { getAllUsers, getUserById } from "../services/UserService.js";

export const getAllHandler = async (req, res) => {
  const users = await getAllUsers();
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
};

export const getOneHandler = async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found, Provide a valid id",
      data: null,
    });
  }
  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
};
