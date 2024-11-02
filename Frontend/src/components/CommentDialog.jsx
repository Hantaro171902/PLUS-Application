import React, { useState } from "react";
import { Diaglog, DialogContent } from "./ui/dialog";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { FaAviato } from "react-icons/fa";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { MoreHorizontal } from "lucide-react";

const CommentDialog = ({ open, setOpen }) => {
  const [text, setText] = useState("");

  const changeEventHandler = (e) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setText(inputText);
    } else {
      setText("");
    }
  };

  const sendMessageHandler = async => {
    alert(text);
  }


  return (
    <Diaglog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <div className="flex flex-1">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1730396841380-f2be1db7ee4d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="post_img"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
        </div>

        <div className="w-1/2 flex item-center justify-between">
          <div className="flex item-center justify-between">
            <div className="flex gap-3 items-center">
              <Link>
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Link>

              <div>
                <Link className="font-semibold text-xs">usename</Link>
                {/* <span className="text-gray-600 text-sm">Bio here...</span> */}
              </div>
            </div>

            <Diaglog>
              <DialogTrigger asChild>
                <MoreHorizontal className="cursor-pointer" />
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center text-sm text-center">
                <div className="cursor-pointer w-full text-[#ED4956] font-bold">
                  Unfollow
                </div>
                <div className="cursor-pointer w-full">Add to favorites</div>
              </DialogContent>
            </Diaglog>
          </div>
          <hr />
          <div className="flex-1 overflow-y-auto max-h-96 p-4">
            comment ayenge
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Add a comment..."
                value={text}
                onChange={changeEventHandler}
                className="w-full outline-none border border-gray-300 p-2 rounded"
              />
              <Button disabled={!text.trim} onClick={sendMessageHandler} variant="outline">Send</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Diaglog>
  );
};

export default CommentDialog;
