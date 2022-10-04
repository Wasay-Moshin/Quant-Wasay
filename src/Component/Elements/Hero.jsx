import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-start">
            <div data-aos="fade-up" data-aos-duration="1500">
              <span className="c1">
                The future <br /> of finance.
              </span>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000">
              <span className="c2">Today.</span>
            </div>
            <div data-aos="fade-up" data-aos-duration="2500">
            <button type="button" class="btn btn-outline-danger">Get Started</button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <video
            className="vid"
            src="Assests/video.mp4"
            autoPlay
            loop
            muted
            width={"100%"}
            height={"auto"}
          ></video>
        </div>
      </div>
    </div>
  );
}
export default Hero;
