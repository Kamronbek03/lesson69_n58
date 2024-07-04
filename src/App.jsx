import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header/Header";
import PostsList from "./components/main/PostList";
import PostDetails from "./components/main/PostDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <div className="search-bar mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            value={searchTerm}
            onChange={handleSearch}
            style={{ width: "100%" }}
          />
        </div>
        <PostsList posts={filteredPosts} setSelectedPost={setSelectedPost} />
        {selectedPost && <PostDetails post={selectedPost} />}
      </div>
    </div>
  );
};

export default App;
