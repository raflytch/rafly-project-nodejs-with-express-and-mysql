const UsersModel = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.status(200).json({
      statusCode: 200,
      message: "Get all users successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      serverMessage: error.message,
    });
  }
};

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      statusCode: 201,
      message: "CREATE new users sucessfully",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      serverMessage: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, idUser);
    res.status(200).json({
      statusCode: 200,
      message: "UPDATE users sucessfully",
      data: {
        id: idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      serverMessage: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UsersModel.deleteUser(idUser);
    res.status(200).json({
      statusCode: 200,
      message: "DELETE users sucessfully",
      data: {
        id: idUser,
        data: null,
      },
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      serverMessage: error.message,
    });
  }
};

module.exports = { getAllUser, createNewUser, updateUser, deleteUser };
