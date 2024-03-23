import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostData } from "../components/storage";
import axios from "axios";

const Editpost = () => {
  const navigate = useNavigate();
  const postId = Number(useParams().id);
  const [post, setPost] = useState(getPostData(postId));

  const handleUpdatePost = (event) => {
    const { name, value } = event.currentTarget;
    setPost((post) => {
      return {
        ...post,
        [name]: value,
      };
    });
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:7070/posts/${post.id}`, post);
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  return (
    <div>
      <h2>Edit a post</h2>
      <button onClick={handleClose} className="button">
        Close
      </button>
      <form onSubmit={handleSubmit} className="form_add">
        <textarea
          type="text"
          className="input_post"
          name="context"
          value={post.context}
          onInput={handleUpdatePost}
          required
        />
        <button type="submit" className="button btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default Editpost;
