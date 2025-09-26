import { Router } from "express";
import { register, login } from "../controllers/authController";
import { getBookmarks, createBookmark, updateBookmark, deleteBookmark } from "../controllers/bookmarkController";
import { authenticate } from "../middlewares/auth";

const router = Router();

// Auth
router.post("/auth/register", register);
router.post("/auth/login", login);

// Bookmarks
router.get("/bookmarks", authenticate, getBookmarks);
router.post("/bookmarks", authenticate, createBookmark);
router.put("/bookmarks/:id", authenticate, updateBookmark);
router.delete("/bookmarks/:id", authenticate, deleteBookmark);

export default router;
