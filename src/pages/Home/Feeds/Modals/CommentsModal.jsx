import {
  Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import AddComment from '../AddComment';

const CommentsModal = ({ show, setShow, comments }) => {
  return (
    <>
      <Dialog
        size="xs"
        open={show}
        handler={() => setShow(false)}
        className="dark:bg-darkGray"
      >
        <DialogHeader className="justify-between">
          <Typography variant="h5" className="dark:text-darkText">
            Comments
          </Typography>
          <IoMdClose
            onClick={() => setShow(false)}
            className="dark:text-darkText w-5 h-5 cursor-pointer"
          />
        </DialogHeader>
        <DialogBody className="max-h-[25rem] !px-5 overflow-y-auto">
          {comments?.length <= 0 && (
            <Typography className="dark:text-darkText">No comments</Typography>
          )}
          {comments?.map((comment, index) => {
            const { whoComment, comment: message, profileImage } = comment;
            return (
              <div
                key={index}
                className="flex items-center gap-3 space-y-3 p-1"
              >
                <Avatar
                  variant="circular"
                  alt="user 1"
                  className="border-2 border-green-500 hover:z-10 focus:z-10 w-10 h-10"
                  src={profileImage}
                />
                <div className="flex flex-1 items-start flex-col bg-lightGray p-2 rounded w-auto dark:bg-lightDark dark:text-darkText">
                  <Typography>{whoComment}</Typography>
                  <Typography>{message}</Typography>
                </div>
              </div>
            );
          })}
        </DialogBody>
        <DialogFooter>
          <AddComment />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default CommentsModal;
