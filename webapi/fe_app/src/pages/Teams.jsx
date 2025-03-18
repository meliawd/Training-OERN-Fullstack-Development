import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Card } from "react-bootstrap";

const Teams = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setPosts(res.data.data);
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
                      src={item.avatar}
                      className="img-fluid"
                    />
                    <Card.Body>
                      <Card.Title>
                        {item.first_name} <span>{item.last_name}</span>
                      </Card.Title>
                      <Card.Text>{item.email}</Card.Text>
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

export default Teams;
