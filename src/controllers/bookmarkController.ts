import { Response } from "express";
import { Bookmark } from "../models/Bookmark";
import { AuthRequest } from "../middlewares/auth";

export const getBookmarks = async (req: AuthRequest, res: Response) => {
  const bookmarks = await Bookmark.find({ user: req.userId });
  return res.json(bookmarks);
};

export const createBookmark = async (req: AuthRequest, res: Response) => {
  const { title, url, description } = req.body;
  const bookmark = await Bookmark.create({
    title,
    url,
    description,
    user: req.userId,
  });
  return res.status(201).json(bookmark);
};