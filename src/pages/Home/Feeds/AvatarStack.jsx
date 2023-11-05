import { Avatar } from '@material-tailwind/react';

const AvatarStack = ({ likes }) => {
  return (
    <div className="flex items-center -space-x-2">
      {likes?.map((like) => (
        <Avatar
          key={like.userId}
          variant="circular"
          alt={like.email}
          className="border-2 border-green-300 hover:z-10 focus:z-10 w-5 h-5 object-cover"
          src={like.profileImage}
        />
      ))}
    </div>
  );
};

export default AvatarStack;
