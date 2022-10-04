import React from "react";

function Build() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 img1">
          <img className="img-fluid" src="Assests/home.svg" alt=""></img>
        </div>
        <div className="col-md-6 img1">
          <div className="text-start">
            <p className="unlocking">
              Built for <br />
              enterprises
            </p>
            <div data-aos="fade-up" data-aos-duration="5000">
              <p>
              Led by an experienced team from large corporate, <br />
              financial and regulatory institutions, we enable <br />
              existing financial infrastructure to operate with new<br/>
              decentralised networks.
              </p>
              <button type="button" class="btn btn-outline-danger">
                Find Out More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Build;
