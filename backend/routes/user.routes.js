import { Router } from "express";
import {
  SignUp,
  Login,
  addOldHome,
  getAllHomes,
  addMember,
  getHome,
} from "../controllers/user.controller.js";

const router = Router();
router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/oldhome", addOldHome);
router.get("/homelist", getAllHomes);
router.post("/addmember", addMember);
router.get("/gethome/:id", getHome);

export default router;
