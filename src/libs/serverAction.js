"use server";
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDB";
import { Post } from "./models";

export const addPost = async (formData) => {
  const { title, desc, userId, slug } = Object.fromEntries(formData);

  try {
    connectToDb();

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    console.log("svaed to db");
  } catch (err) {
    throw new Error("something went wrong");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("deleted from db");
  } catch (err) {
    throw new Error("something went wrong");
  }
};
