import { Avatar, Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineSend } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useAddCommentMutation } from '../../../features/post/postApi';

const AddComment = () => {
  const [value, setValue] = useState('');
  const { user } = useSelector((state) => state.auth);
  const { postId } = useSelector((state) => state.posts);

  const [addComment, { data: response, isSuccess, isLoading, isError, error }] =
    useAddCommentMutation();

  // add comment handler
  const handleAddComment = () => {
    addComment({ comment: value, userId: user._id, postId });
  };

  useEffect(() => {
    if (isSuccess) {
      setValue('');
    }
    if (isError) {
      toast.error(error?.message, {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    }
  }, [isSuccess, isError, error]);

  return (
    <div className="w-full gap-2 flex items-center">
      <Avatar
        src={user?.profileImage}
        className="w-10 h-10 border-2 border-green-500"
      />
      <Input
        size="md"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a comment..."
        className="dark:bg-darkGray dark:text-darkText rounded-full border-none ring-1 ring-lightGray dark:bg-lightDark  dark:ring-darkGray bg-gray-400/50 pl-4"
        labelProps={{
          className: 'hidden',
        }}
        icon={
          value === '' ? (
            <AiOutlineSend className="cursor-not-allowed" />
          ) : (
            <AiOutlineSend
              className="cursor-pointer hover:text-gray-300"
              onClick={handleAddComment}
            />
          )
        }
        disabled={isLoading}
      />
    </div>
  );
};

export default AddComment;
