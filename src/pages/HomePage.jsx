import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import moment from "moment";
import { localStorageSet } from "../components/storage";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function asyncFunctionCard() {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:7070/posts`);
      await delay(2000);
      setPosts(response.data);
      localStorageSet(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAdd = () => {
    navigate("/new");
  };

  useEffect(() => {
    asyncFunctionCard();
  }, []);

  return (
    <div>
      <h2>Our posts</h2>
      <button onClick={handleAdd} className="button">
        New post
      </button>
      <div className="container_posts">
        {isLoading && <Loader />}
        {!isLoading &&
          posts.map((post) => (
            <Link key={post.id} to={`posts/${post.id}`}>
              <li className="post_item">
                <div>{post.context}</div>
                <div className="data">
                  {moment(post.created).format("DD.MM.YYYY HH:mm:ss")}
                </div>
              </li>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
