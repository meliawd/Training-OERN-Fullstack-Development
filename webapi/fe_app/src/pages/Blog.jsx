import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Card } from "react-bootstrap";
// https://jsonplaceholder.typicode.com/posts

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data));
    //   .then((data) => {
    //     console.log(data);
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      //   console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    console.log(posts),
    (
      <div className="container mt-5 mb-5">
        <div className="row">
          {posts.map((item) => {
            return (
              <div key={item.id} className="col-md-4 mb-3">
                <Fade delay={item.id * 100}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://picsum.photos/200/300"
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.body}</Card.Text>
                    </Card.Body>
                  </Card>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Blog;
