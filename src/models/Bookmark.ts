import { Schema, model, Document } from "mongoose";
import { IUser } from "./User";

export interface IBookmark extends Document {
  title: string;
  url: string;
  description?: string;
  user: IUser["_id"];
}

const bookmarkSchema = new Schema<IBookmark>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Bookmark = model<IBookmark>("Bookmark", bookmarkSchema);
