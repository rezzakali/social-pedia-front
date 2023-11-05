import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { Logout } from '../features/auth/authSlice';

const ConfirmModal = ({ show, setShow }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(Logout());
    setShow(false);
  };
  return (
    <Dialog
      size="xs"
      open={show}
      handler={() => setShow(false)}
      className="dark:bg-darkGray"
    >
      <DialogHeader className="justify-between">
        <Typography variant="h5" className="dark:text-darkText">
          Confirmation
        </Typography>
        <IoMdClose
          onClick={() => setShow(false)}
          className="dark:text-darkText w-5 h-5 cursor-pointer"
        />
      </DialogHeader>
      <DialogBody className="!px-5">
        <Typography className="text-center text-lg dark:text-darkText">
          Are you sure you want to logout?
        </Typography>
      </DialogBody>
      <DialogFooter className="justify-center gap-2">
        <Button
          size="sm"
          onClick={() => setShow(false)}
          variant="outlined"
          className="shadow-none hover:shadow-none dark:text-darkText"
        >
          Cancel
        </Button>
        <Button
          size="sm"
          onClick={handleLogout}
          color="red"
          className="shadow-none hover:shadow-none"
        >
          Logout
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ConfirmModal;
