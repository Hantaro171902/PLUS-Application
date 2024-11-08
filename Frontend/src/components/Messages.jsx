import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import userGetAllMessage from "@/hooks/useGetAllMessage";

const Messages = ({ selectedUser }) => {
  userGetAllMessage();
  const { messages } = useSelector((store) => store.chat);

  return (
    <div className="overflow-y-auto flex-1 p-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={selectedUser?.profilePicture} alt="profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{selectedUser?.username}</span>
          <Link to={`/profile/${selectedUser?._id}`}>
            <Button className="h-8 my-2" variant="secondary">
              View profile
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {messages && messages.map((msg) => {
          return (
            <div className={`flex`}>
              <div>{msg}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
