import React, { useState } from "react";
import "./Banner.css";
import { Fade, Zoom } from "react-awesome-reveal";

const Banner = () => {
  const [nama, setNama] = useState("Inixindo Bandung");
  const handleClick = () => {
    setNama("Maybank");
  };

  return (
    <section className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center flex-column order-lg-1 order-2">
            <Zoom>
              <h1>
                Continous Learning Keep Up To Date with
                <strong className="text-primary">{nama}</strong>
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                dolorem quasi dolorum illum nisi optio tenetur, nesciunt
                repudiandae quis, ratione dolores, amet itaque! Omnis impedit
                delectus ducimus quas, numquam dolorum!
              </p>
              <div className="mt-4">
                <button
                  className="btn btn-outline-primary"
                  onClick={handleClick}
                >
                  Get Started
                </button>
              </div>
            </Zoom>
          </div>
          <div className="col-md-6 order-lg-2 order-1">
            <Fade>
              <img
                src="/images/banner.svg"
                className="img-fluid animation"
                alt="logo banner"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
