/* eslint-disable no-empty-pattern */
import React, { useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit] = useState(100);
  const {
    data: posts,
    isLoading,
    error,
  } = postAPI.useFetchAllPostsQuery(limit);
  // .useFetchAllPostsQuery(limit, {
  //   pollingInterval: 1000,
  // }); // В функцию можно прокидывать параметры как по мне это лучше
  const [createPost] = postAPI.useCreatePostMutation();
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [removePost] = postAPI.useDeletePostMutation();

  const handleCreatePost = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    removePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div>
        <button onClick={handleCreatePost}>Add new post</button>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Ошибка</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem
              remove={handleRemove}
              update={handleUpdate}
              key={post.id}
              post={post}
            />
          ))}
      </div>
    </div>
  );
};

export default PostContainer;
