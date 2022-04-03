import React from "react";

function Post(post) {
  return (
    <div className="form">
      <div>
        <label>Creator</label>
        <input value={post.post.creator} readOnly></input>
      </div>
      <div>
        <label>Title</label>
        <input name="title" value={post.post.title} readOnly></input>
      </div>
      <div>
        <label>Message </label>{" "}
        <textarea name="message" value={post.post.message} readOnly></textarea>{" "}
      </div>
    </div>
  );
}

export default Post;
