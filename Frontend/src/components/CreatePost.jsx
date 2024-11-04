import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import React from "react";
import { DialogHeader } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const CreatePost = (open, setOpen) => {
  const createPostHandler = async (e) => {
    try {

    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <DialogHeader className='text-center font-medium'>Create New Post</DialogHeader>
        <div onSubmit={createPostHandler}>
            <Avatar>
                <AvatarImage src="" alt="img"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="font-semibold text-xs">Username</h1>
                
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
