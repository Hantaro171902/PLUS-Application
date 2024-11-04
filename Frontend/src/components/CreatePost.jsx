import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import React, { useRef, useState } from "react";
import { DialogHeader } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Textarea } from "./ui/textarea";
import { Input } from "postcss";
import { Button } from "./ui/button";

const CreatePost = (open, setOpen) => {
  const imageRef = useRef();
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const fileChangeHandler = async (e) => {
    const file = e.target.file?.[0];
    if(file) {
        setFile(file);
        const dataUrl = await readFileDataURL(file);
        setImagePreview(dataUrl);
    }
  };

  const createPostHandler = async (e) => {
    e.preventDafault();

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <DialogHeader className="text-center font-medium">
          Create New Post
        </DialogHeader>
        <div onSubmit={createPostHandler}>
          <Avatar>
            <AvatarImage src="" alt="img" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-xs">Username</h1>
            <span className="text-gray-600 text-xs">Bio here...</span>
          </div>
        </div>
        <Textarea
          className="focus-visible:ring-transparent border-none"
          placeholder="Write a caption..."
        />
        <Input
          ref={imageRef}
          type="file"
          className="hidden"
          onChange={fileChangeHandler}
        />
        <Button
          onClick={() => imageRef.current.click()}
          className="w-fit mx-auto hover:bg-[#0095f6]"
        ></Button>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePost;
