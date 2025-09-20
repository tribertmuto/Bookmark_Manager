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

export const updateBookmark = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, url, description } = req.body;

  // Find bookmark and ensure it belongs to the user
  const bookmark = await Bookmark.findOne({ _id: id, user: req.userId });
  if (!bookmark) {
    return res.status(404).json({ message: "Bookmark not found" });
  }

  // Update the bookmark
  const updatedBookmark = await Bookmark.findByIdAndUpdate(
    id,
    { title, url, description },
    { new: true } // Return the updated document
  );

  return res.json(updatedBookmark);
};

export const deleteBookmark = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  // Find bookmark and ensure it belongs to the user
  const bookmark = await Bookmark.findOne({ _id: id, user: req.userId });
  if (!bookmark) {
    return res.status(404).json({ message: "Bookmark not found" });
  }

  // Delete the bookmark
  await Bookmark.findByIdAndDelete(id);
  return res.status(204).send();
};