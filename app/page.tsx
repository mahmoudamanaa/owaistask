import PostCard from "@/components/PostCard";

const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/?_limit=10"
  );

  return response.json();
};

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
};

export default async function Home() {
  const posts = await getPosts();
  const users = await getUsers();

  const updatedPosts = posts?.map(
    (post: { userId: number; id: number; title: string; body: string }) => {
      const user = users?.find((user: any) => user.id === post.userId);

      return {
        id: post.id,
        title: post.title,
        body: post.body,
        author: user.name,
      };
    }
  );

  return (
    <main className="px-12 pt-[110px]">
      <article>
        <h2 className="bg-slate-900 text-white p-3 font-semibold text-lg">
          Latest Posts
        </h2>
        <section className="py-6">
          {updatedPosts?.map(
            (post: {
              author: string;
              id: number;
              title: string;
              body: string;
            }) => (
              <PostCard key={post.id} post={post} />
            )
          )}
        </section>
      </article>
    </main>
  );
}
