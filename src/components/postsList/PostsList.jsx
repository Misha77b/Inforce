import React from "react";
import PostCard from "../postCard/PostCard";

const PostsList = ({ postsdata }) => {
  return (
    <div>
      {postsdata.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
