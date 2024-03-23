import { useNavigate, useParams } from "react-router-dom";
import { getPostData } from "../components/storage";
import axios from "axios";

const ViewPost = () => {
  const navigate = useNavigate();
  const postId = Number(useParams().id);
  const result = getPostData(postId);

  const handleSubmit = async () => {
    try {
      await axios.delete(`http://localhost:7070/posts/${result.id}`);
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  const handlePost = () => {
    navigate(`/edit/${result.id}`);
  };

  return (
    <div>
      <h2>Post</h2>
      <button className="button" onClick={handleSubmit}>
        Delete post
      </button>
      <div className="container_post">
        <p className="post_view">{result.context}</p>
        <button className="button btn" onClick={handlePost}>
          Edit post
        </button>
      </div>
    </div>
  );
};

export default ViewPost;
