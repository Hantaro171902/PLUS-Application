import React from "react";
import { Diaglog, DialogContent } from "./ui/dialog";

const CommentDialog = ({open, setOpen}) => {
  return (
    <Diaglog open={open}>
      <DialogContent onInteractOutside={() => setOpen(false)}>
        <img
          src="https://images.unsplash.com/photo-1730396841380-f2be1db7ee4d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="post_img"
        />
      </DialogContent>
    </Diaglog>
  );
};

export default CommentDialog;
