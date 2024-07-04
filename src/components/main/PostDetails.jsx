import React from "react";
import "./PostDetails.css";

const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <div className={`post-img ${post.id % 2 === 0 ? "even" : "odd"}`}>
        <div className="img"></div>
      </div>
      <h2 className="post-id">{post.id}</h2>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default PostDetails;
