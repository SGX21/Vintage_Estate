import express from "express";
import jwtCheck from "../config/auth0config.js";

import {
  bookVisit,
  createUser,
  getAllBookings,
  getAllFavorites,
  toFav,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/toFav/:rid",jwtCheck, toFav);
router.post("/allFav/",jwtCheck, getAllFavorites);
export { router as userRoute };