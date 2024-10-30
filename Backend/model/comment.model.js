import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {type: String, required:true},
    author:{type: mongoose.Schema.Types.ObjectId, ref: 'User', requied: true},
    post:{type: mongoose.Schema.Types.ObjectId, ref: 'Post', requied: true},
});

export default commentSchema = mongoose.model('Comment', commentSchema);