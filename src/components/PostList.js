import React from "react";
import PostListItem from "./PostListItem";
function PostList(props) {
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <PostListItem
            post={post}
            handleDelete={props.handleDelete}
            handleComment={props.handleComment}
          />
        );
      })}
    </div>
  );
}

export default PostList;
