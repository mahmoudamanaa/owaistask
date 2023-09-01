import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";

interface Props {
  post: {
    id: number;
    title: string;
    body: string;
    author: string;
  };
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="m-6 border-2 rounded-xl p-4 shadow-md">
      <h3 className="text-2xl font-semibold hover:text-red-500 mb-2">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="text-gray-400 flex items-center gap-1">
        <BsFillPersonFill />
        {post.author}
      </p>
      <p className="text-gray-600 text-md mt-4">{post.body}</p>
    </div>
  );
};

export default PostCard;
