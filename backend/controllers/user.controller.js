import { Member } from "../models/member.model.js";
import { oldHome } from "../models/oldHome/registration.model.js";
import { User } from "../models/user.model.js";

const SignUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const { fullName, username, age, email, password } = req.body.formValues;
    if (
      [username, email, password, age, fullName].some(
        (parameters) => parameters?.trim() === ""
      )
    ) {
      throw new Error("All fields are required");
    }
    const existedUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existedUser) {
      throw new Error("Email or username already exists");
    }
    const user = await User.create({
      age,
      email,
      password,
      username,
      fullName,
    });

    const createdUser = await User.findById(user._id).select("-password");
    if (!createdUser) {
      throw new Error("Some Error occured please try Again");
    }
    res.status(200).json({
      status: true,
      message: "user created succesfully",
    });
  } catch (err) {
    next(err);
  }
};

const Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    console.log(user);

    if (!user) {
      throw new Error(401, "Username or password is incorrect");
    }
    const token = await user.generateAccessToken();
    res.status(200).json({
      status: true,
      message: "Succesful login",
      token: token,
      user,
    });
  } catch (err) {
    next(err);
  }
};

const addOldHome = async (req, res, next) => {
  try {
    const {
      userId,
      name,
      address,
      city,
      state,
      email,
      phone,
      facilities,
      capacity,
      description,
    } = req.body.formData;
    if (
      [userId, name, address, city, state, email, phone, capacity].some(
        (parameters) => parameters?.trim() === ""
      )
    ) {
      throw new Error("All fields are required");
    }
    const oldhome = await oldHome.create({
      admin: userId,
      name,
      address,
      city,
      state,
      email,
      phone,
      facilities: facilities || [],
      capacity,
      desc: description || "",
    });

    const createdOldHome = await oldHome.findById(oldhome._id);
    res.status(201).json({
      status: true,
      data: createdOldHome,
      message: "Added Old Home Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getAllHomes = async (req, res, next) => {
  try {
    const homes = await oldHome.find();
    res.status(200).json({
      status: true,
      data: homes,
      message: "Fetched All OldHomes",
    });
  } catch (error) {
    next(error);
  }
};
const getHome = async (req, res, next) => {
  try {
    const homeId = req.params.id;
    const homes = await oldHome.findById(homeId);
    res.status(200).json({
      status: true,
      data: homes,
      message: "Fetched the OldHome",
    });
  } catch (error) {
    next(error);
  }
};

const addMember = async (req, res, next) => {
  try {
    const { userId, fullName, email, age, address, phone } = req.body.formData;
    if (
      [fullName, email, age, address, phone, userId].some(
        (parameters) => parameters?.trim() === ""
      )
    ) {
      throw new Error("All fields are required");
    }
    const member = await Member.create({
      fullName,
      email,
      age,
      address,
      phone,
      registeredBy: userId,
    });

    res.status(201).json({
      status: true,
      data: member,
      message: `Member ${fullName} added successfully`,
    });
  } catch (error) {
    next(error);
  }
};

export { SignUp, Login, addOldHome, getAllHomes, addMember, getHome };
