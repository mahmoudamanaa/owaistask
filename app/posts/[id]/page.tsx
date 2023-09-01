"use client";

import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import { BsFillPersonFill } from "react-icons/bs";
import { Skeleton } from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";

interface Props {
  params: {
    id: number;
  };
}

const PostPage = ({ params: { id } }: Props) => {
  const {
    isLoading: postIsLoading,
    error: postError,
    data: post,
  } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
  });

  const {
    isLoading: userIsLoading,
    error: userError,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`).then(
        (res) => res.json()
      ),
  });

  const {
    isLoading: albumsIsLoading,
    error: albumsError,
    data: albums,
  } = useQuery({
    queryKey: ["albums"],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${user?.id}`
      ).then((res) => res.json()),
  });

  let firstAlbum: any;
  if (albums) {
    firstAlbum = albums[0];
  }

  const {
    isLoading: photosIsLoading,
    error: photosError,
    data: photos,
  } = useQuery({
    queryKey: ["photos"],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${firstAlbum?.id}`
      ).then((res) => res.json()),
  });

  let firstPhoto: any;
  if (photos) {
    firstPhoto = photos[0];
  }

  const {
    isLoading: commentsIsLoading,
    error: commentsError,
    data: comments,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
        (res) => res.json()
      ),
  });

  const updatedPost = {
    title: post?.title,
    body: post?.body,
    author: user?.name,
  };

  return (
    <article className="pt-[110px] px-12">
      <Skeleton isLoaded={firstPhoto}>
        <Image
          src={
            firstPhoto?.url
              ? firstPhoto?.url
              : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          }
          alt="Cover"
          width={600}
          height={600}
          className="w-full md:h-[400px] md:object-cover"
          priority
        />
      </Skeleton>

      <Skeleton isLoaded={!postIsLoading}>
        <h2 className="text-3xl font-semibold my-2">{updatedPost?.title}</h2>
      </Skeleton>

      <Skeleton isLoaded={!userIsLoading}>
        <p className="text-gray-400 flex items-center gap-1">
          <BsFillPersonFill />
          {updatedPost?.author}
        </p>
      </Skeleton>

      <Skeleton isLoaded={!postIsLoading}>
        <p className="text-gray-600 text-md mt-4">{updatedPost?.body}</p>
      </Skeleton>

      <Skeleton isLoaded={!commentsIsLoading}>
        <section className="my-6">
          <h3 className="font-semibold">Comments</h3>
          {comments?.map(
            (comment: {
              postId: number;
              id: number;
              name: string;
              body: string;
              email: string;
            }) => (
              <CommentCard key={comment?.id} comment={comment} />
            )
          )}
        </section>
      </Skeleton>
    </article>
  );
};

export default PostPage;
