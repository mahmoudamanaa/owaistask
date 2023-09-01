"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().min(1).max(100).required(),
  author: yup.string().min(1).max(50).required(),
  body: yup.string().min(50).required(),
});

const postData = async (data: any) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );
  return response.data as any;
};

const usePostData = () => {
  return useMutation<any, unknown, any, unknown>(postData as any);
};

const CreatePostForm = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const { mutate } = usePostData();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      body: "",
    },
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      mutate(values);

      toast({
        title: "Post created.",
        description: "We've created your post for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col items-center justify-center md:w-1/2"
    >
      <h2 className="text-3xl font-semibold mb-4">Add New Post</h2>
      <input
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
        type="text"
        className="w-full border-2 p-3 mb-3"
        placeholder="Title"
      />
      {formik.errors.title ? (
        <span className="text-red-400 mb-3">{formik.errors.title}</span>
      ) : null}

      <input
        name="author"
        onChange={formik.handleChange}
        value={formik.values.author}
        type="text"
        className="w-full border-2 p-3 mb-3"
        placeholder="Author"
      />
      {formik.errors.author ? (
        <span className="text-red-400 mb-3">{formik.errors.author}</span>
      ) : null}

      <textarea
        name="body"
        onChange={formik.handleChange}
        value={formik.values.body}
        className="w-full border-2 p-3 mb-3"
        rows={5}
        placeholder="Content"
      ></textarea>
      {formik.errors.body ? (
        <span className="text-red-400 mb-3">{formik.errors.body}</span>
      ) : null}

      <button
        type="submit"
        className="bg-red-400 w-full p-3 text-white text-lg"
      >
        Post
      </button>
    </form>
  );
};

export default CreatePostForm;
