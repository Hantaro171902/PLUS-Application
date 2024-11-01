import sharp from "sharp";
import cloudinary from "../utils/cloudinary";
import { populate } from "dotenv";

export const addNewPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const { image } = req.file;
    const authorId = req.id;

    if (!image) {
      return res.status(400).json({ message: "Image required" });

      //  Image upload
      const optimizedImageBuffer = await sharp(image.buffer)
        .resize({ width: 800, heigt: 800, fit: "inside" })
        .toFormat("jpeg", { quality: 80 })
        .toBuffer();

      // buffer to data uri
      const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString(
        "base64"
      )}`;
      const cloudResponse = await cloudinary.uploader.upload(fileUri);
      const post = await Post.create({
        caption,
        image: cloudResponse.secure_url,
        author: authorId,
      });
      const user = await User.findById(authorId);
      if (user) {
        user.posts.push(post._id);
        await user.save();
      }

      await post.populate({ path: "author", select: "-password" });

      return res.status(201).json({
        message: "New post added",
        post,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createAt: -1 })
      .populate({ path: "author", select: "username, profilePicture" })
      .populate({
        path: "comments",
        sort: { createAt: -1 },
        populate: {
          path: "author",
          select: "usename, profilePicture",
        },
      });
    return res.status(200).json({
      posts,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPost = async (req, res) => {
  try {
    const authorId = req.id;
    const posts = await Post.find({ author: authorId })
      .sort({ createAt: -1 })
      .populate({
        path: "author",
        select: "username, profilePicture",
      })
      .populate({
        path: "comments",
        sort: { createAt: -1 },
        populate: {
          path: "author",
          select: "username, profilePicture",
        },
      });
    return res.status(200).json({
      posts,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (req, res) => {
  try {
    const likeHanUserId = req.id;
    const PostId = req.params.id;
    const post = await Post.findById(PostId);
    if (!post)
      return res
        .status(404)
        .json({ message: "Post not found", success: false });

    // like logic started
    await post.updateOne({ $addToSet: { likes: likeHanUserId } });
    await post.save();

    // implement socket io for real time notification
    return res.status(200).json({ message: "Post liked", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const dislikePost = async (req, res) => {
  try {
    const likeHanUserId = req.id;
    const PostId = req.params.id;
    const post = await Post.findById(PostId);
    if (!post)
      return res
        .status(404)
        .json({ message: "Post not found", success: false });

    // like logic started
    await post.updateOne({ $pull: { likes: likeHanUserId } });
    await post.save();

    // implement socket io for real time notification
    return res.status(200).json({ message: "Post liked", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const commentHanId = req.id;

    const { text } = req.body;
    const post = await Post.findById(postId);
    if (!text)
      return res
        .status(400)
        .json({ message: "text is required", success: false });

    const comment = await Comment.create({
      text,
      author: commentHanId,
      post: postId,
    }).populate({
      path: "author",
      select: "username, profilePicture",
    });

    post.comments.push(comment._id);
    await post.save();

    return res
      .status(201)
      .json({ message: "Comment Added", comment, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const getCommentsOfPost = async (req,res) => {
  try {
    const postId = req.params.id;
    const comments = await
  }
}