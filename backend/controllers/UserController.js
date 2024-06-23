import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    // findAll = fungsi dari sequelize
    const response = await User.findAll();
    // json(response) = perching
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    // findOne = fungsi dari sequelize
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    // json(response) = perching
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    // json(response) = perching
    res.status(201).json({ msg: "User Added Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // json(response) = perching
    res.status(200).json({ msg: "User Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    // json(response) = perching
    res.status(200).json({ msg: "User Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
