import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreatePost = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({ context: "" });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:7070/posts", value);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Create a post</h2>
      <button onClick={handleClose} className="button">
        Close
      </button>
      <form onSubmit={handleSubmit} className="form_add">
        <textarea
          type="text"
          className="input_post"
          onChange={handleChange}
          name="context"
          value={value.context}
          placeholder="Write your post"
          required
        />
        <button type="submit" className="button btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
