import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer2 = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10); // В функцию можно прокидывать параметры как по мне это лучше
  const [updatePost] = postAPI.useUpdatePostMutation();
  const [removePost] = postAPI.useDeletePostMutation();

  const handleRemove = (post: IPost) => {
    removePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div>
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

export default PostContainer2;
