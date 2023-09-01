import { BsFillPersonFill } from "react-icons/bs";

interface Props {
  comment: {
    postId: number;
    id: number;
    name: string;
    body: string;
    email: string;
  };
}

const PostCard = ({ comment }: Props) => {
  return (
    <div className="mt-6  p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-2">
        {comment.name}
      </h3>
      <p className="text-gray-400 flex items-center gap-1 text-sm">
        <BsFillPersonFill />
        {comment.email}
      </p>
      <p className="text-gray-600 text-sm mt-4">{comment.body}</p>
    </div>
  );
};

export default PostCard;
