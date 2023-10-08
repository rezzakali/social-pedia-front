import {
  Avatar,
  Button,
  Card,
  Input,
  Spinner,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillAudio } from 'react-icons/ai';
import { BsCardImage } from 'react-icons/bs';
import { IoMdAttach } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useCreatePostMutation } from '../../../features/post/postApi';

const AddPost = () => {
  const { user } = useSelector((state) => state.auth);
  const [value, setValue] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null);

  const [createPost, { data: response, isLoading, isSuccess, isError, error }] =
    useCreatePostMutation();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImageUrl(URL.createObjectURL(selectedFile));
  };

  const addPostHandler = () => {
    if (user && value && file) {
      const formData = new FormData();
      formData.append('userId', user?._id);
      formData.append('description', value);
      formData.append('image', file);
      createPost(formData);
    } else {
      toast.error('Something went wrong!');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setValue('');
      setImageUrl(null);
      setFile(null);
      toast.success('Posted');
    }
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [response, isLoading, isSuccess, isError, error]);

  return (
    <Card className="dark:bg-lightDark dark:text-darkText p-3 rounded-lg">
      <div className="flex items-center justify-between gap-3 mb-2">
        <Avatar src={user?.profileImage} alt="profile" className="w-9 h-9" />
        <div className="w-full">
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            labelProps={{ className: 'hidden' }}
            placeholder={`What's on your mind...`}
            className="dark:bg-darkGray dark:text-darkText rounded-full ring-0 border-none dark:ring-darkGray bg-lightGray pl-4"
          />
        </div>
      </div>
      {imageUrl && <img src={imageUrl} alt="image" className="object-cover" />}
      <hr />
      <div className="flex items-center gap-4 justify-between dark:text-white my-2">
        <div className="items-center justify-center gap-5 hidden lg:flex">
          <Tooltip
            content="Add image"
            className="bg-darkGray"
            placement="bottom"
          >
            <label
              htmlFor="fileInput"
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <BsCardImage className="cursor-pointer" />
              <Typography>Image</Typography>
            </label>
          </Tooltip>

          <Tooltip
            content="Attachment"
            className="bg-darkGray"
            placement="bottom"
          >
            <div className="flex items-center gap-1">
              <IoMdAttach className="cursor-pointer" />
              <Typography>Attachment</Typography>
            </div>
          </Tooltip>
          <Tooltip content="Audio" className="bg-darkGray" placement="bottom">
            <div className="flex items-center gap-1">
              <AiFillAudio className="cursor-pointer" />
              <Typography>Audio</Typography>
            </div>
          </Tooltip>
        </div>
        {imageUrl && (
          <Button
            size="sm"
            className="rounded-full capitalize shadow-none bg-[#faa0a0] text-black hover:shadow-none dark:text-red-800"
            onClick={() => {
              setValue('');
              setImageUrl(null);
            }}
          >
            Cancel
          </Button>
        )}
        <Button
          size="sm"
          className="bg-lightGray dark:bg-darkGray rounded-full capitalize shadow-none text-black hover:shadow-none dark:text-darkText"
          onClick={addPostHandler}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Post'}
        </Button>
      </div>
    </Card>
  );
};

export default AddPost;
