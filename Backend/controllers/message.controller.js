import {Conversation} from "../model/conversation.model.js";

// for chatting
export const sendMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const {message} = req.body;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId, receiverId]}
        });

        // establish the conversation if not stared yet
        if(!conversation) {
            conversation = await Conversation.create({
                participants:[senderId, receiverId]
            })
        };
        const newMessage = await Message
        
    } catch (error) {
        console.log(error);       
    }
}