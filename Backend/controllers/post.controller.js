import sharp from "sharp";
import cloudinary from "../utils/cloudinary";

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
        const fileUri = `data:image/jpeg;base64,${optimizedImageBuffer.toString('base64')}`;
        const cloudResponse = await cloudinary.uploader.upload(fileUri);
        const post = await Post.create({
            caption,
            image:cloudResponse.secure_url,
            author:authorId
        });
        const user = await User.findById(authorId);
        if(user){
            user.posts.push(post._id);
            await user.save();
        }
    }
  } catch (error) {
    console.log(error);
  }
};
