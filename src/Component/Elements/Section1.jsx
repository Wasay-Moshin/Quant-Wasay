import React from "react";

function Section1() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 img1">
          <img className="img-fluid" src="Assests/download.svg" alt=""></img>
        </div>
        <div className="col-md-6 img1">
          <div className="text-start">
            <p className="unlocking">
              Unlocking the <br />
              power of blockchain for <br />
              everyone
            </p>
            <div data-aos="fade-up" data-aos-duration="5000">
              <p>
                We deliver interoperable ecosystems and real-world
                <br />
                solutions that lower costs, enable new business, and <br />
                mitigate risk.
              </p>
              <button type="button" class="btn btn-outline-danger">
                Lets Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
