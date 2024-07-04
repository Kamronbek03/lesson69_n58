import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./PostDetails.css";

const PostsList = ({ posts, setSelectedPost }) => {
  const chunkSize = 8; // 4 cards per row, 2 rows per carousel item
  const postChunks = [];

  for (let i = 0; i < posts.length; i += chunkSize) {
    postChunks.push(posts.slice(i, i + chunkSize));
  }

  return (
    <Carousel indicators={true} controls={true}>
      {postChunks.map((chunk, idx) => (
        <Carousel.Item key={idx}>
          <div className="row">
            {chunk.map((post, index) => (
              <div
                key={post.id}
                className={`card ${
                  post.id % 2 === 0 ? "even" : "odd"
                } col-md-3`}
                onClick={() => setSelectedPost(post)}
              >
                <div className="img"></div>
                <div className="card-details">
                  <h4 className="card-id">{post.id}</h4>
                  <h4 className="card-title">{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PostsList;
